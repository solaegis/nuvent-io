// Client component for interactivity (toggle)
"use client";

import { useState } from "react";
import styles from "./pricing.module.css";
import Link from "next/link";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState("monthly"); // 'monthly' | 'annual'

  return (
    <div className={styles.pricingPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>Pricing</h1>
        
        <div className={styles.toggleContainer}>
          <button 
            className={`${styles.toggleBtn} ${billingPeriod === "monthly" ? styles.active : ""}`}
            onClick={() => setBillingPeriod("monthly")}
          >
            Monthly
          </button>
          <button 
            className={`${styles.toggleBtn} ${billingPeriod === "annual" ? styles.active : ""}`}
            onClick={() => setBillingPeriod("annual")}
          >
            Annual (Save 20%)
          </button>
        </div>
      </header>

      <div className={styles.grid}>
        {/* Free Tier */}
        <div className={styles.card}>
          <div className={styles.icon}>🌱</div>
          <h2 className={styles.planName}>Free</h2>
          <p className={styles.planDesc}>For personal projects and exploration.</p>
          
          <div className={styles.price}>
            $0 <span className={styles.period}>/ month</span>
          </div>

          <Link href="/signup?plan=free">
            <button className={styles.ctaBtn}>Try Nuvent</button>
          </Link>

          <ul className={styles.features}>
            <Feature>1 User</Feature>
            <Feature>10,000 Events / month</Feature>
            <Feature>3 Scopes (Dev, Stage, Prod)</Feature>
            <Feature>Basic Drift Detection</Feature>
            <Feature>Community Support</Feature>
          </ul>
        </div>

        {/* Team Tier */}
        <div className={styles.card}>
          <div className={styles.icon}>🚀</div>
          <h2 className={styles.planName}>Team</h2>
          <p className={styles.planDesc}>For growing teams delivering production workloads.</p>
          
          <div className={styles.price}>
            ${billingPeriod === "monthly" ? "29" : "24"} <span className={styles.period}>/ user / month</span>
          </div>

          <Link href="/signup?plan=team">
            <button className={styles.ctaBtn} style={{ background: "var(--primary)", borderColor: "var(--primary)", color: "#fff" }}>
              Start Team Trial
            </button>
          </Link>

          <ul className={styles.features}>
            <Feature>Everything in Free, plus:</Feature>
            <Feature>10 Users included</Feature>
            <Feature>100,000 Events / month</Feature>
            <Feature>RBAC & Policy Engine</Feature>
            <Feature>Hourly Drift Remediation</Feature>
            <Feature>Email Support (48h SLA)</Feature>
          </ul>
        </div>

        {/* Enterprise Tier */}
        <div className={styles.card}>
            <div className={styles.icon}>🏢</div>
          <h2 className={styles.planName}>Enterprise</h2>
          <p className={styles.planDesc}>For global scale and compliance needs.</p>
          
          <div className={styles.price}>
            Custom
          </div>

          <Link href="/contact-sales">
             <button className={styles.ctaBtn} style={{ background: "transparent", color: "var(--foreground)" }}>
               Contact Sales
             </button>
          </Link>

          <ul className={styles.features}>
            <Feature>Everything in Team, plus:</Feature>
            <Feature>Unlimited Events & Users</Feature>
            <Feature>SSO (SAML/OIDC)</Feature>
            <Feature>Audit Log Export</Feature>
            <Feature>Dedicated Support Channel</Feature>
            <Feature>Self-Hosted Option</Feature>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Feature({ children }) {
  return (
    <li className={styles.featureItem}>
      <span className={styles.check}>✓</span>
      <span>{children}</span>
    </li>
  );
}
