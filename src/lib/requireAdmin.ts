import "server-only";
import { auth, currentUser } from "@clerk/nextjs/server";

type AdminAuthorization =
  | {
      authorized: true;
      userId: string;
    }
  | {
      authorized: false;
      status: 401 | 403;
      error: "Authentication required" | "Administrator access required";
    };

/** 
 *  Normalizes the email by trimming any whitespace and returning lowercase
 * @param email is the string containing the user inputted email
 * @returns a normalized email
*/
function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

/**
 * Checks if the user is an admin by checking the email
 * @returns a promise that returns userID and a boolean if a user is authorized
 */
export async function requireAdmin(): Promise<AdminAuthorization> {
  const adminEmail = process.env.ADMIN_EMAIL;

  // A missing allow-list configuration must never grant access.
  if (!adminEmail) {
    console.error("ADMIN_EMAIL is not configured");
    return {
      authorized: false,
      status: 403,
      error: "Administrator access required",
    };
  }

  const { userId } = await auth();

  if (!userId) {
    return {
      authorized: false,
      status: 401,
      error: "Authentication required",
    };
  }

  const user = await currentUser();

  if (!user) {
    return {
      authorized: false,
      status: 401,
      error: "Authentication required",
    };
  }

  const approvedEmail = normalizeEmail(adminEmail);

  const hasVerifiedApprovedEmail = user.emailAddresses.some(
    (emailAddress) =>
      emailAddress.verification?.status === "verified" &&
      normalizeEmail(emailAddress.emailAddress) === approvedEmail,
  );

  if (!hasVerifiedApprovedEmail) {
    return {
      authorized: false,
      status: 403,
      error: "Administrator access required",
    };
  }

  return {
    authorized: true,
    userId,
  };
}
