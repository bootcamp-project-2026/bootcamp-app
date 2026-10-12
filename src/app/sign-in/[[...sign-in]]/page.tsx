import { SignIn } from "@clerk/nextjs";
import styles from "./sign-in.module.css";

export default function SignInPage() {
  return (
    <main className={styles.page}>
      <SignIn />
    </main>
  );
}
