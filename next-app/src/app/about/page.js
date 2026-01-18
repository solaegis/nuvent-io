import styles from "../page.module.css"; 

export const metadata = {
  title: "About Us | Nuvent",
  description: "The team behind the immutable infrastructure engine.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          About Nuvent
        </h1>
        <p className={styles.heroSub}>
          We are building the memory layer for the cloud.
        </p>
      </section>

      <section className={styles.section} style={{maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)'}}>
        <p style={{marginBottom: '1.5rem'}}>
          Nuvent was founded on a simple premise: Infrastructure is too important to be forgotten. 
          Existing tools treat your cloud state as a disposable file. We treat it as a critical system of record.
        </p>
        <p>
          By applying <strong>Event Sourcing</strong> and <strong>Graph Theory</strong> to infrastructure, 
          we are eliminating an entire class of outages caused by configuration drift and state corruption.
        </p>
      </section>
    </main>
  );
}
