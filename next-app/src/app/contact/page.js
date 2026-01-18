import styles from "../page.module.css"; 

export const metadata = {
  title: "Contact | Nuvent",
  description: "Get in touch with our team.",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Contact Us
        </h1>
        <p className={styles.heroSub}>
          Sales inquiries, support, or just to say hello.
        </p>
      </section>

      <div style={{width: '100%', maxWidth: '500px', background: 'var(--surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)'}}>
        <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <div>
            <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)'}}>Name</label>
            <input type="text" style={{width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--foreground)'}} />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)'}}>Email</label>
            <input type="email" style={{width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--foreground)'}} />
          </div>
          <div>
            <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)'}}>Message</label>
            <textarea rows="4" style={{width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--foreground)'}}></textarea>
          </div>
          <button className={styles.primaryBtn} type="button">Send Message</button>
        </form>
      </div>
    </main>
  );
}
