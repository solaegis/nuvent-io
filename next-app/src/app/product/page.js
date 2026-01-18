import Link from "next/link";
import styles from "../page.module.css"; // Reuse landing page styles for consistency

export const metadata = {
  title: "Product | Nuvent",
  description: "The immutable infrastructure engine.",
};

export default function ProductPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          The Engine of <br />
          <span>Reliability.</span>
        </h1>
        <p className={styles.heroSub}>
          Nuvent isn't just an IaC tool. It's a real-time event processing system for your cloud.
          See how the Immutable Ledger changes everything.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.featureCard}>
            <h3>1. The Event Ledger</h3>
            <p>
              Traditional tools overwrite state files. Nuvent appends to an immutable log. 
               Every action is cryptographically chained, giving you a perfect audit trail and instant rollback capabilities.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>2. The Graph Projector</h3>
            <p>
              We project the current state from the event log into an in-memory Directed Acyclic Graph. 
              This allows for sub-millisecond dependency resolution and circular dependency detection before you deploy.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>3. The Drift Agent</h3>
            <p>
              Stop waiting for CI pipelines. Nuvent's always-on agent watches your actual cloud resources 
              and alerts you the moment they drift from the graph.
            </p>
          </div>
        </div>
      </section>
      
       <section className={styles.section} style={{textAlign: 'center'}}>
        <h2 className={styles.sectionTitle}>Ready to switch?</h2>
        <Link href="/pricing" className={styles.primaryBtn}>Get Started</Link>
      </section>
    </main>
  );
}
