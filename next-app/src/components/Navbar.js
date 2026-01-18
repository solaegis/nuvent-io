"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="https://nuvent-io.web.app/favicon.png" alt="Nuvent Logo" className={styles.logoIcon} />
          Nuvent
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <NavLink href="/product" active={pathname === "/product"}>Product</NavLink>
          <NavLink href="/product/team" active={pathname === "/product/team"}>Team</NavLink>
          <NavLink href="/product/enterprise" active={pathname === "/product/enterprise"}>Enterprise</NavLink>
          <NavLink href="/methodology" active={pathname === "/methodology"}>Methodology</NavLink>
          <NavLink href="/pricing" active={pathname === "/pricing"}>Pricing</NavLink>
          <div className={styles.divider}></div>
          <NavLink href="/login">Log in</NavLink>
          <Link href="/pricing" className={styles.cta}>ENGAGE</Link>
        </div>

        {/* Mobile Hamburger (Same logic) */}
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span className={`${styles.bar} ${isOpen ? styles.open : ""}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.open : ""}`}></span>
          <span className={`${styles.bar} ${isOpen ? styles.open : ""}`}></span>
        </button>

         <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ""}`}>
          <div className={styles.mobileLinks}>
            <Link href="/product" onClick={() => setIsOpen(false)}>Product</Link>
            <Link href="/product/team" onClick={() => setIsOpen(false)}>Team</Link>
            <Link href="/product/enterprise" onClick={() => setIsOpen(false)}>Enterprise</Link>
            <Link href="/methodology" onClick={() => setIsOpen(false)}>Methodology</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/login" onClick={() => setIsOpen(false)}>Log in</Link>
            <Link href="/pricing" className={styles.mobileCta} onClick={() => setIsOpen(false)}>ENGAGE</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, active }) {
  return (
    <Link href={href} className={`${styles.link} ${active ? styles.active : ""}`}>
      {children}
    </Link>
  );
}
