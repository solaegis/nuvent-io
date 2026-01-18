import Link from "next/link";
import styles from "../page.module.css"; 

export const metadata = {
  title: "Documentation | Nuvent",
  description: "Learn how to use Nuvent.",
};

export default function DocsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Documentation
        </h1>
        <p className={styles.heroSub}>
          Comprehensive guides and API references for the Nuvent platform.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <Link href="#" className={styles.featureCard}>
            <h3>Quick Start</h3>
            <p>Get up and running with the CLI in 5 minutes.</p>
          </Link>
          <Link href="#" className={styles.featureCard}>
            <h3>Core Concepts</h3>
            <p>Understand Events, Projections, and Scopes.</p>
          </Link>
          <Link href="#" className={styles.featureCard}>
            <h3>API Reference</h3>
            <p>Programmatic access to the Nuvent Engine.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
