import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Meet your infrastructure’s <br />
          <span>memory.</span>
        </h1>
        <p className={styles.heroSub}>
          The first immutable infrastructure engine. Stop managing fragile state files. 
          Start replaying history with confidence.
        </p>

        <div className={styles.ctaContainer}>
          <div className={styles.inputMock}>
            <span>nuvent --scope prod init<span className={styles.cursor}></span></span>
            <span style={{ fontSize: '0.8em', opacity: 0.5 }}>⏎</span>
          </div>
          <Link href="/pricing">
             <button className={styles.primaryBtn}>Start for Free</button>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Nuvent?</h2>
        <div className={styles.grid}>
          <FeatureCard 
            title="Immutable Ledger" 
            desc="Every change is an event. Audit everything. Replay anything. Time travel is built-in."
          />
          <FeatureCard 
            title="Graph-First" 
            desc="Dependencies are modeled as a Directed Acyclic Graph. We know what breaks before you deploy."
          />
          <FeatureCard 
            title="Drift Detection" 
            desc="An always-on agent watches your cloud. You get alerted the second reality diverges from intent."
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
