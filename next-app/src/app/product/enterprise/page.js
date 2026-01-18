import Link from "next/link";
import styles from "../../page.module.css"; 

export const metadata = {
  title: "Enterprise | Nuvent",
  description: "Global scale infrastructure governance.",
};

export default function EnterprisePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Governance at <br />
          <span>global scale.</span>
        </h1>
        <p className={styles.heroSub}>
          Enforce compliance policies across thousands of resources. 
          Nuvent Enterprise provides the controls you need for regulated industries.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.featureCard}>
            <h3>SSO & SCIM</h3>
            <p>
              Connect your Identity Provider (Okta, Azure AD, Google) for centralized user management. 
              Automate onboarding and offboarding via SCIM.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Audit Logs</h3>
            <p>
              Every API call and infrastructure change is recorded in an immutable audit ledger. 
              Export logs to SIEM tools like Splunk or Datadog.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>99.99% SLA</h3>
            <p>
              Guaranteed uptime for the Nuvent control plane. Critical infrastructure support 
              with dedicated response channels.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{textAlign: 'center'}}>
        <Link href="/contact" className={styles.primaryBtn}>Contact Sales</Link>
      </section>
    </main>
  );
}
