"use client";

import Link from "next/link";
import styles from "../page.module.css"; 

export default function LoginPage() {
  return (
    <main className={styles.main} style={{justifyContent: 'center', padding: '0'}}>
      <div style={{
          width: '100%', 
          maxWidth: '400px', 
          background: 'var(--surface)', 
          padding: '2.5rem', 
          borderRadius: 'var(--radius-lg)', 
          border: '1px solid var(--border)',
          marginTop: '6rem'
        }}>
        <h2 style={{fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontFamily: 'var(--font-serif)'}}>Welcome Back</h2>
        
        <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <div>
            <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>Email</label>
            <input type="email" style={{width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--foreground)'}} />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>Password</label>
            <input type="password" style={{width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--foreground)'}} />
          </div>
          
          <button className={styles.primaryBtn} type="button" style={{width: '100%'}}>Log In</button>
        </form>
        
        <p style={{marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)'}}>
          Don't have an account? <Link href="/signup" style={{color: 'var(--primary)'}}>Sign up</Link>
        </p>
      </div>
    </main>
  );
}
