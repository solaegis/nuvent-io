import Link from "next/link";
import styles from "../page.module.css"; 

export const metadata = {
  title: "Methodology | Nuvent",
  description: "Why we built Nuvent: The Graph and The Ledger.",
};

export default function MethodologyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Why Files <br />
          <span>Fail.</span>
        </h1>
        <p className={styles.heroSub}>
          Infrastructure is a graph, not a list of files. Traditional IaC tools try to map 
           dynamic cloud resources to static text files, leading to "state drift" and "lock hell".
        </p>
      </section>

      <section className={styles.section}>
        <div style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#d1d1d1'}}>
          <p style={{marginBottom: '2rem'}}>
            We built Nuvent on two new primitives: <strong>Event Sourcing</strong> and <strong>Graph Theory</strong>.
          </p>
          
          <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)'}}>1. Event Sourcing</h3>
          <p style={{marginBottom: '2rem'}}>
            Instead of storing the "current state" in a JSON file, Nuvent stores the <i>sequence of events</i> that led to that state. 
            This allows us to "replay" listing to any point in time, enabling instant rollbacks and auditability.
          </p>

          <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)'}}>2. The Graph</h3>
          <p style={{marginBottom: '2rem'}}>
            Nuvent parses your intent into a Directed Acyclic Graph (DAG) before touching the cloud. 
            We verify dependencies mathematically. If the graph is invalid, we don't deploy. No more "half-deployed" broken states.
          </p>
        </div>
      </section>
    </main>
  );
}
