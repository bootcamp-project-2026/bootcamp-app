import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <section id="home-section" className={styles.home}>
        <h1 className={styles.titleContainer}>
          <span className={styles.titleTopHalf}>MEADE CANINE</span>
          <span className={styles.titleBottomHalf}>Rescue & Sanctuary</span>
        </h1>

        {/* Hero section */}
        <section id="hero-subsection" className={styles.hero}>
          <div className={styles.heroImage}>
            <img
              src="/homeimage.jpeg"
              alt="A very cute and happy dog in an open grassy field."
            />
          </div>
          <div className={styles.heroText}>
            <h2 className={styles.heroTitle}>GIVING OLD DOGS NEW LIVES</h2>
            <p id="paragraph-1" className={styles.heroParagraph}>
              It’s been over a year since Meade Canine Rescue returned to its
              roots after 13 prolific and hard working years in the west. Many
              followers joined us on that harrowing journey across the country
              with eight mostly elderly volunteers, 33 mostly elderly dogs and
              one cat loaded into one definitely elderly truck and trailer, two
              elderly cars and a rundown elderly bus. We hope even more have
              continued to follow us during another hardworking 13 months of bi
              coastal dog rescue. Our beloved Meade Canine Rescue Resale shop
              has remained open in Atascadero thanks to efforts of amazing
              volunteers, helping fund vet care for local pets and extensive
              care for pets at the rescue.
            </p>
            <p id="paragraph-2" className={styles.heroParagraph}>
              Approximately 75 dogs have been rescued and cared for through
              intakes and diverts over these 13 months.
            </p>
          </div>
        </section>

        {/* Dogs section */}
        <section id="dog-subsection" className={styles.dogcontainer}>
          {/* For 2x2 grid of dogs */}
          <div className={styles.dogGrid}>
            {/* dog1 */}
            <div className={styles.dogCard}>
              <div className={styles.dogImage}>image placeholder</div>
              <p className={styles.dogName}>doggy</p>
            </div>

            {/* dog2 */}
            <div className={styles.dogCard}>
              <div className={styles.dogImage}>image placeholder</div>
              <p className={styles.dogName}>doggy</p>
            </div>

            {/* dog3 */}
            <div className={styles.dogCard}>
              <div className={styles.dogImage}>image placeholder</div>
              <p className={styles.dogName}>doggy</p>
            </div>

            {/* dog4 */}
            <div className={styles.dogCard}>
              <div className={styles.dogImage}>image placeholder</div>
              <p className={styles.dogName}>doggy</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
