import styles from "./home.module.css";
import shared from "../../styles/shared.module.css";

export default function Home() {
  return (
    <main className={`${styles.page} ${shared.hexBackground}`}>
      <section id="home-section" className={styles.home}>
        <h1 className={`${styles.titleContainer} ${shared.wobble}`}>
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
        <section id="dog-subsection" className={styles.dogContainer}>
          <h2 className={styles.dogTitle}> Meet Some Pups!</h2>

          {/* For 2x2 grid of dogs */}
          <div className={styles.dogGrid}>
            {/* dog1 */}
            <div className={styles.dogCard}>
              <p className={styles.dogName}>Ziggy</p>
              <div className={styles.dogImage}>
                <img src="/pets/ziggy.jpg" alt="A dog named Ziggy." />
              </div>
            </div>

            {/* dog2 */}
            <div className={styles.dogCard}>
              <p className={styles.dogName}>Griselda</p>
              <div id="griseldaimg" className={styles.dogImage}>
                <img src="/pets/griselda.jpg" alt="A dog named Griselda." />
              </div>
            </div>

            {/* dog3 */}
            <div className={styles.dogCard}>
              <p className={styles.dogName}>Sweetpea</p>
              <div className={styles.dogImage}>
                <img src="/pets/sweetpea.jpg" alt="A dog named Sweetpea." />
              </div>
            </div>

            {/* dog4 */}
            <div className={styles.dogCard}>
              <p className={styles.dogName}>Ace</p>
              <div className={styles.dogImage}>
                <img src="/pets/homeace.jpg" alt="A dog named Homeace." />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
