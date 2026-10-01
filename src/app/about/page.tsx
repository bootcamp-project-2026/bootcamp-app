import styles from "./about.module.css";

export default function about() {
  return (
    <main>
      <section id="about-section" className={styles.about}>
        {/* Page title */}
        <h1 id="about-title" className={styles.aboutTitle}>
          About
        </h1>

        {/* Our story section */}
        <section id="our-story-subsection" className={styles.ourStory}>
          <div className={styles.ourStoryImage}>
            <img src="/aboutimage.jpeg" alt="Charlotte Meade with many dogs" />
          </div>
          <div className={styles.heroText}>
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

        {/* About the founder */}
        <section
          id="about-charlotte-subsection"
          className={styles.aboutCharlotte}
        >
          <h2 id="about-charlotte-title" className={styles.aboutCharlotteTitle}>
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
      </section>
    </main>
  );
}
