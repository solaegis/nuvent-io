import styles from "../page.module.css"; 

export const metadata = {
  title: "Changelog | Nuvent",
  description: "Latest updates and improvements.",
};

export default function ChangelogPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Changelog
        </h1>
        <p className={styles.heroSub}>
          New features, improvements, and fixes.
        </p>
      </section>

      <section className={styles.section} style={{maxWidth: '800px', margin: '0 auto'}}>
        <div style={{borderLeft: '2px solid var(--border)', paddingLeft: '2rem', marginBottom: '3rem'}}>
           <div style={{color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 'bold'}}>v1.2.0 &mdash; Today</div>
           <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)'}}>Drift Detection v2</h3>
           <p style={{color: 'var(--text-muted)'}}>
             We've rewritten the drift detection agent to be 10x faster and support custom remediation policies.
           </p>
        </div>

        <div style={{borderLeft: '2px solid var(--border)', paddingLeft: '2rem', marginBottom: '3rem'}}>
           <div style={{color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 'bold'}}>v1.1.0 &mdash; Last Week</div>
           <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)'}}>Team Scopes</h3>
           <p style={{color: 'var(--text-muted)'}}>
             Collaborate safely with isolated environments for every team member.
           </p>
        </div>
      </section>
    </main>
  );
}
