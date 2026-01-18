"use client";

import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import styles from "../page.module.css"; 

function SignupForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'free';

  return (
    <div style={{
        width: '100%', 
        maxWidth: '400px', 
        background: 'var(--surface)', 
        padding: '2.5rem', 
        borderRadius: 'var(--radius-lg)', 
        border: '1px solid var(--border)',
        marginTop: '6rem'
      }}>
      <h2 style={{fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center', fontFamily: 'var(--font-serif)'}}>Create Account</h2>
      <p style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)'}}>
        Selected Plan: <span style={{color: 'var(--primary)', textTransform: 'capitalize'}}>{plan}</span>
      </p>
      
      <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
        <div>
          <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>Full Name</label>
          <input type="text" style={{width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--foreground)'}} />
        </div>
        <div>
          <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>Email</label>
          <input type="email" style={{width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--foreground)'}} />
        </div>
        <div>
          <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem'}}>Password</label>
          <input type="password" style={{width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--foreground)'}} />
        </div>
        
        <button className={styles.primaryBtn} type="button" style={{width: '100%'}}>Create Account</button>
      </form>
      
      <p style={{marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)'}}>
        Already have an account? <Link href="/login" style={{color: 'var(--primary)'}}>Log in</Link>
      </p>
    </div>
  );
}

export default function SignupPage() {
  return (
    <main className={styles.main} style={{justifyContent: 'center', padding: '0'}}>
      <Suspense fallback={<div>Loading...</div>}>
        <SignupForm />
      </Suspense>
    </main>
  );
}
