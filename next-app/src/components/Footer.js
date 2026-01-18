import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>Nuvent</Link>
          <p className={styles.tagline}>
            Dynamic Infrastructure Orchestration. <br />
            Precision at Scale.
          </p>
          <p className={styles.copy}>&copy; 2026 Nuvent Inc.</p>
        </div>

        <div className={styles.linksCol}>
          <h4>Product</h4>
          <Link href="/product">Overview</Link>
          <Link href="/product/team">Team</Link>
          <Link href="/product/enterprise">Enterprise</Link>
          <Link href="/pricing">Pricing</Link>
        </div>

        <div className={styles.linksCol}>
          <h4>Resources</h4>
          <Link href="/methodology">Methodology</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/changelog">Changelog</Link>
        </div>

        <div className={styles.linksCol}>
          <h4>Company</h4>
          <Link href="/security">Security</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
