import Link from "next/link";
import styles from "../page.module.css"; 

export const metadata = {
  title: "Security | Nuvent",
  description: "Security is built into the ledger.",
};

export default function SecurityPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Trust the <br />
          <span>Ledger.</span>
        </h1>
        <p className={styles.heroSub}>
          Security isn't an addon; it's the fundamental property of our architecture. 
          Nuvent uses an append-only cryptographic ledger to ensure state integrity.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Security Architecture</h2>
        <div className={styles.grid}>
          <div className={styles.featureCard}>
            <h3>Immutability</h3>
            <p>
              Attackers cannot cover their tracks by modifying state files. In Nuvent, history cannot be rewritten, only appended to. 
              Every action leaves an indelible mark.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Encrypted Payloads</h3>
            <p>
              Sensitive values in events are encrypted at rest using per-tenant keys. 
              The ledger stores the encrypted payload, ensuring data sovereignty.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>SOC2 Ready</h3>
            <p>
              Our architecture maps directly to SOC2 Common Criteria for change management and security. 
              Generate compliance reports automatically from the ledger.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
