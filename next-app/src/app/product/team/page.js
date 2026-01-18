import Link from "next/link";
import styles from "../../page.module.css"; 

export const metadata = {
  title: "Team | Nuvent",
  description: "Collaborative infrastructure for growing teams.",
};

export default function TeamPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Build together, <br />
          <span>safely.</span>
        </h1>
        <p className={styles.heroSub}>
          Stop stepping on each other's state files. Nuvent Scopes provide logical isolation 
          within a shared project, enabling true concurrent infrastructure development.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Collaboration Features</h2>
        <div className={styles.grid}>
          <div className={styles.featureCard}>
            <h3>Scoped Environments</h3>
            <p>
              Give every developer their own ephemeral environment. Nuvent Scopes (`dev-alice`, `staging`) 
              are cheap, fast, and isolated by default.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>RBAC (Role-Based Access Control)</h3>
            <p>
              Define who can `plan` and who can `apply`. Restrict sensitive scopes like `prod` 
              to senior engineers or CI/CD pipelines.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Shared Modules</h3>
            <p>
              Publish private modules to your organization's registry. Standardize your stack 
              on vetted, compliant blueprints.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{textAlign: 'center', marginTop: '4rem'}}>
         <div style={{background: 'var(--surface)', padding: '3rem', borderRadius: 'var(--radius-lg)'}}>
            <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>Start your Team Trial</h2>
            <p style={{marginBottom: '2rem', color: 'var(--text-muted)'}}>14 days free. No credit card required.</p>
            <Link href="/signup?plan=team" className={styles.primaryBtn}>Create Team Account</Link>
         </div>
      </section>
    </main>
  );
}
