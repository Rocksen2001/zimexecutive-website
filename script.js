/* Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f8fafc;
  color: #0f172a;
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
}

button, input, select, textarea {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.section {
  padding: 5rem 0;
}

.btn {
  display: inline-block;
  padding: 0.9rem 1.4rem;
  border-radius: 10px;
  font-weight: 600;
  transition: 0.2s ease;
}

.btn-primary {
  background: #059669;
  color: white;
}

.btn-primary:hover {
  background: #10b981;
}

.btn-dark {
  background: #0f172a;
  color: white;
}

.btn-dark:hover {
  background: #1e293b;
}

.btn-outline {
  border: 1px solid rgba(148, 163, 184, 0.5);
  color: white;
  background: transparent;
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.05);
}

.site-header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-name {
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  color: #0f172a;
}

.brand-tag {
  background: #059669;
  color: white;
  font-size: 0.55rem;
  font-weight: 700;
  padding: 0.3rem 0.45rem;
  border-radius: 6px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: #475569;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: #059669;
}

.hero {
  background: #0f172a;
  color: white;
  padding-top: 10rem;
  padding-bottom: 6rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px);
  background-size: 16px 16px;
  opacity: 0.1;
}

.hero-inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-badge {
  display: inline-block;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #a7f3d0;
  border-radius: 999px;
  padding: 0.5rem 0.9rem;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.hero h1 {
  margin: 1.5rem auto 1.25rem;
  max-width: 1100px;
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.hero p {
  max-width: 760px;
  margin: 0 auto;
  color: #cbd5e1;
  font-size: 1.1rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 900px;
  margin: 3rem auto 0;
}

.stat-box {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px;
  padding: 1.5rem 1rem;
}

.stat-box strong {
  display: block;
  font-size: 2rem;
  color: white;
}

.stat-box span {
  color: #cbd5e1;
  font-size: 0.85rem;
}

.section-heading {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.section-heading h2 {
  font-size: clamp(2.2rem, 3vw, 3rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #0f172a;
}

.section-heading p {
  color: #475569;
  font-size: 1.08rem;
}

.about-grid,
.service-grid,
.process-grid,
.stats-grid,
.intake-grid,
.faq-list {
  display: grid;
  gap: 1.5rem;
}

.about-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
  padding: 2rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.03);
}

.icon-box {
  width: 3rem;
  height: 3rem;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d1fae5;
  color: #059669;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.card h3 {
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
  color: #0f172a;
}

.card p {
  color: #475569;
}

.service-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.service-card {
  background: white;
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 24px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  position: relative;
}

.service-card.featured {
  border-color: #10b981;
  box-shadow: 0 26px 50px rgba(16, 185, 129, 0.12);
}

.feature-pill {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #059669;
  color: white;
  padding: 0.4rem 0.7rem;
  font-size: 0.64rem;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.service-card ul {
  list-style: none;
  margin-top: 1.5rem;
  display: grid;
  gap: 0.9rem;
}

.service-card li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #475569;
}

.service-card li i {
  color: #10b981;
  margin-top: 0.2rem;
}

.service-card a {
  margin-top: 1.5rem;
}

.process-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.step-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 1.7rem;
}

.step-number {
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d1fae5;
  color: #059669;
  font-weight: 800;
}

.step-box h3 {
  margin: 1.3rem 0 0.75rem;
  font-size: 1.35rem;
}

.step-box p {
  color: #475569;
}

.mission {
  background: #0f172a;
  color: white;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.mission h2 {
  font-size: clamp(2.2rem, 3vw, 3rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.mission p {
  color: #cbd5e1;
  font-size: 1.05rem;
}

.feature-list {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-row {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature-icon {
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.15);
  color: #34d399;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-row h3 {
  margin-bottom: 0.4rem;
  font-size: 1.08rem;
}

.feature-row p {
  color: #cbd5e1;
  font-size: 0.92rem;
}

.mission-panel {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 2rem;
}

.stats-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.stat-item {
  padding: 1.4rem 1rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
}

.stat-item strong {
  display: block;
  font-size: 2rem;
  color: #34d399;
}

.stat-item span {
  color: #cbd5e1;
}

.intake-grid {
  grid-template-columns: 1fr 1.1fr;
  align-items: start;
}

.contact-list {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-icon {
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 999px;
  background: #d1fae5;
  color: #059669;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-item strong {
  display: block;
  margin-bottom: 0.2rem;
}

.contact-item span {
  color: #475569;
}

.form-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 30px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.04);
}

.form-grid {
  display: grid;
  gap: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #334155;
  font-weight: 600;
  font-size: 0.92rem;
}

input, select, textarea {
  width: 100%;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  border-radius: 14px;
  padding: 0.85rem 1rem;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus, select:focus, textarea:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12);
}

textarea {
  min-height: 140px;
  resize: vertical;
}

.faq-list {
  grid-template-columns: 1fr;
}

.faq-item {
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 1.5rem;
}

.faq-item h3 {
  font-size: 1.08rem;
  margin-bottom: 0.55rem;
  color: #0f172a;
}

.faq-item p {
  color: #475569;
  font-size: 0.96rem;
}

.footer {
  background: #0f172a;
  color: #cbd5e1;
  padding: 4rem 0 1.8rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.footer-links a {
  color: #cbd5e1;
}

.footer-links a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid rgba(148, 163, 184, 0.25);
  margin-top: 2rem;
  padding-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .about-grid,
  .service-grid,
  .process-grid,
  .intake-grid,
  .mission-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 9rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .form-row,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 4rem 0;
  }
}
