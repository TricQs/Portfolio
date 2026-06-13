import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Portofolio.</div>
        <div className={styles.navLinks}>
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#proyek">Proyek</a>
          <a href="#kontak">Kontak</a>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Hero Section */}
          <section id="beranda" className={styles.hero}>
            <div className={styles.heroContent}>
              <span className={styles.greeting}>Halo, saya</span>
              <h1 className={styles.title}>
                Creative <span>Developer</span>.
              </h1>
              <p className={styles.subtitle}>
                Saya membangun antarmuka web modern yang estetis, cepat, dan responsif. 
                Berfokus pada pengalaman pengguna yang luar biasa dengan desain yang memukau.
              </p>
              <div className={styles.actions}>
                <a href="#proyek" className="btn btn-primary">Lihat Proyek</a>
                <a href="#kontak" className="btn btn-secondary">Hubungi Saya</a>
              </div>
            </div>
          </section>

          {/* Proyek Section */}
          <section id="proyek" className={styles.section}>
            <h2 className={styles.sectionTitle}>Proyek Unggulan</h2>
            <div className={styles.grid}>
              {[
                {
                  title: "E-Commerce Premium",
                  desc: "Platform toko online dengan fitur lengkap, performa tinggi, dan desain minimalis elegan.",
                  icon: "🛍️"
                },
                {
                  title: "Dashboard Analitik",
                  desc: "Sistem monitoring data real-time dengan grafik interaktif dan mode gelap yang nyaman.",
                  icon: "📊"
                },
                {
                  title: "Sistem Manajemen AI",
                  desc: "Aplikasi cerdas untuk manajemen tugas otomatis yang terintegrasi dengan berbagai API AI.",
                  icon: "🤖"
                }
              ].map((project, i) => (
                <div key={i} className={`glass ${styles.card}`}>
                  <div className={styles.cardIcon}>{project.icon}</div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.desc}</p>
                  <a href="#" className={styles.cardLink}>Detail Proyek →</a>
                </div>
              ))}
            </div>
          </section>

          {/* Kontak Section */}
          <section id="kontak" className={styles.section} style={{ textAlign: 'center' }}>
            <h2 className={styles.sectionTitle}>Mari Bekerja Sama</h2>
            <p className={styles.subtitle} style={{ margin: '0 auto 2rem' }}>
              Saya selalu terbuka untuk mendiskusikan pekerjaan desain produk atau peluang kemitraan.
            </p>
            <a href="mailto:halo@emailanda.com" className="btn btn-primary">Mulai Percakapan</a>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Portofolio. Dibuat dengan Next.js & Vercel.</p>
      </footer>
    </>
  );
}
