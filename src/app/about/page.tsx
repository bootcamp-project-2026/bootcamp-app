import Link from "next/link";
import styles from "./about.module.css";
import shared from "../../styles/shared.module.css";

export default function About() {
  return (
    <main className={`${styles.page} ${shared.hexBackground}`}>
      <section id="about-section" className={styles.about}>
        <h1
          id="about-title"
          className={`${styles.aboutTitle} ${shared.wobble}`}
        >
          About
        </h1>

        <section id="our-story-subsection" className={styles.ourStory}>
          <div className={styles.ourStoryImage}>
            <img src="/aboutimage.jpeg" alt="Charlotte Meade with many dogs" />
          </div>
          <div className={styles.ourStoryText}>
            <h2 id="our-story-title" className={styles.ourStoryTitle}>
              Our Story
            </h2>
            <p id="our-story-paragraph-1" className={styles.ourStoryParagraph}>
              Established by a woman who never had a dog until she was 40,
              Charlotte Meade walked into a high kill pound one spring afternoon
              in Waterbury Connecticut and was told that the dogs she was
              interested in adopting would not be there after the 3 day holiday.
              The dogs would be euthanized to make room for incoming dogs dumped
              by owners and strays picked up daily on the streets. With that
              news weighing on her, she went home and built fences, determined
              to do what she could for as many as she could. And she quickly
              learned that there was truth in that line so well known in the
              world of rescue, “Saving one dog will not change the world, but
              surely for that one dog, the world will change forever”.
            </p>
          </div>
        </section>

        <section id="journey-subsection" className={styles.journey}>
          <h2
            id="journey-title"
            className={`${styles.journeyTitle} ${shared.wobble}`}
          >
            From the East Coast to California
          </h2>
          <p id="journey-paragraph" className={styles.journeyParagraph}>
            That fateful weekend changed her world too. The next few years were
            spent scouring dog pounds in eastern NewYork and CT for dogs in
            danger. Adopters were easy to find! Great news! Matches made in
            heaven. The rescue became too big for a setting just outside NYC and
            Charlotte moved herself and a big part of Meade Canine Rescue to
            California, a state she was stunned to learn had a staggering
            euthanasia rate. In fact there were so many dogs being killed in
            enormous city and county shelters the likes of which she had never
            seen in the East, she decided to narrow her scope to seniors and
            special needs dogs and began working tirelessly to make an impact by
            helping as many as she could get to safety. A drop in the bucket but
            that bucket filled fast and Charlotte kept emptying it successfully
            with heartwarming stories of lives saved. She kept refilling it,
            saving hundreds of dogs a year. Many were in conditions hard to
            believe but all thrived in the fresh air and free ranging environs
            and the ranch just got better and better.
          </p>
        </section>

        <section
          id="about-charlotte-subsection"
          className={styles.aboutCharlotte}
        >
          <h2
            id="about-charlotte-title"
            className={`${styles.aboutCharlotteTitle} ${shared.wobble}`}
          >
            About the founder, Charlotte Meade
          </h2>
          <p
            id="about-charlotte-paragraph"
            className={styles.aboutCharlotteParagraph}
          >
            Charlotte earned a Bachelor’s in English and a Master’s in Economics
            from Ohio University and a Master’s in Archeology from University of
            London. She has lived in many cities and traveled the world, worked
            in many capacities from art dealer to shop owner, none animal
            related. Just after 9/11 she left NYC to open a bed and breakfast in
            upstate NY. When her cat decided to sip the cream at the breakfast
            table the day her new unsocialized rescue Beagle decided to relieve
            himself under another table she decided she preferred those antics
            to people’s love of bacon, sold the inn and Meade Canine Rescue was
            born.
          </p>
        </section>

        <section id="support-subsection" className={styles.support}>
          <h2
            id="support-title"
            className={`${styles.supportTitle} ${shared.wobble}`}
          >
            Help Us Keep Saving Lives
          </h2>
          <p id="support-paragraph" className={styles.supportParagraph}>
            Every dog here is given a second chance because of people like you.
            Your support helps us care for senior and special needs dogs until
            they find their forever homes.
          </p>
          <Link href="/donate" className={styles.supportButton}>
            SUPPORT OUR DOGS
          </Link>
        </section>
      </section>
    </main>
  );
}
