import { useEffect, useState } from 'react';

const featuredProjects = [
  {
    number: '01',
    category: 'Information management',
    name: 'LIMS',
    fullName: 'Land Management Information System',
    description:
      'A land information management system designed to support the organization and handling of land-related records and processes.',
    status: 'Ongoing',
    image: 'https://res.cloudinary.com/do2t27qdc/image/upload/v1791899336/PORTFOLIO%20IMAGES/Screenshot_2026-10-13_102312_lvyw7v.png',
    imageAlt: 'Dashboard of the Land Management Information System',
    type: 'LAND',
  },
  {
    number: '02',
    category: 'Judicial case management',
    name: 'Lagos State Judiciary',
    fullName: 'Docket System',
    description:
      'A docket management system built for the Lagos State Judiciary to support the organization of court case information.',
    link: 'https://lagosjudiciarydocket.ng/login',
    image: 'https://res.cloudinary.com/do2t27qdc/image/upload/v1791899335/PORTFOLIO%20IMAGES/Screenshot_2026-10-13_102435_n5vchy.png',
    imageAlt: 'Dashboard of the Lagos State Judiciary Docket System',
  },
  {
    number: '03',
    category: 'Asset & warehouse operations',
    name: 'Sheriff Asset Forfeiture',
    fullName: 'Asset Forfeiture & Warehouse Management System',
    description:
      'A system supporting asset forfeiture workflows and the management of items held in warehouse inventory.',
    status: 'Ongoing',
    image: 'https://res.cloudinary.com/do2t27qdc/image/upload/v1791899336/PORTFOLIO%20IMAGES/Screenshot_2026-10-13_102519_wfbuux.png',
    imageAlt: 'Login screen for the Sheriff Asset Forfeiture system',
  },
  {
    number: '04',
    category: 'Online auctions',
    name: 'Lagos State Judiciary',
    fullName: 'Auction House Website',
    description:
      'An auction website for browsing and participating in Lagos State Judiciary auctions.',
    status: 'Ongoing',
    image: 'https://res.cloudinary.com/do2t27qdc/image/upload/v1791899340/PORTFOLIO%20IMAGES/Screenshot_2026-10-13_102610_lzkarj.png',
    imageAlt: 'Homepage of the Lagos State Judiciary Auction House website',
  },
  {
    number: '05',
    category: 'Transport asset management',
    name: 'LAMATA',
    fullName: 'Transport Asset Management (TAM) System',
    description:
      'A Transport Asset Management system for LAMATA, live and hosted on premises.',
    status: 'Live · On-premises',
    image: 'https://res.cloudinary.com/do2t27qdc/image/upload/v1791907061/PORTFOLIO%20IMAGES/Lamata_twgyyi.jpg',
    imageAlt: 'LAMATA Transport Asset Management system',
  },
];


const pastProjects = [
  {
    name: 'Exchange Rate Calculator',
    description: 'Compare currencies and calculate exchange values.',
    image: 'https://res.cloudinary.com/do2t27qdc/image/upload/v1667854350/PORTFOLIO%20IMAGES/EXCH-RATE_vrczys.png',
    live: 'https://exchratecalc.netlify.app/',
    source: 'https://github.com/Etinosa22/EXCHANGE-RATE-CALC',
  },
  {
    name: 'Expense Tracker',
    description: 'Track deposits, spending, balances, and transactions.',
    image:
      'https://res.cloudinary.com/do2t27qdc/image/upload/v1667854517/PORTFOLIO%20IMAGES/exp-track_bzyvpv.png',
    live: 'https://expensetrck.netlify.app/',
    source: 'https://github.com/Etinosa22/expense-tracker',
  },
  {
    name: 'Weather App',
    description: 'Check current and forecasted weather for cities around the world.',
    image:
      'https://res.cloudinary.com/do2t27qdc/image/upload/v1668029115/PORTFOLIO%20IMAGES/weather_app_zhysmg.png',
    live: 'https://weathersiteetin.netlify.app/',
    source: 'https://github.com/Etinosa22/Weather-App',
  },
];

const resumeUrl =
  'https://docs.google.com/document/d/1K1FlMYsA6VRVeMBk2JKYm0cAq5NOQwrQ/edit?usp=sharing&ouid=118320474910436467051&rtpof=true&sd=true';

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => (window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'),
  );
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#101313' : '#f7f8f4');
  }, [theme]);

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="#home" onClick={closeMenu}>
          EE<span>.</span>
        </a>
        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <div
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <Arrow />
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'light'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              {theme === 'dark' ? (
                <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42m0-12.72-1.42 1.42m-9.88 9.88-1.42 1.42M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
              ) : (
                <path d="M20.4 15.5A8.5 8.5 0 0 1 8.5 3.6 8.5 8.5 0 1 0 20.4 15.5Z" />
              )}
            </svg>
            <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
          </button>
        </div>
      </nav>

      <main>
        <header className="hero" id="home">
          <div className="hero-content page-width">
            <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
            <h1>
              Ekhator
              <br />
              <span>Etinosa.</span>
            </h1>
            <div className="hero-bottom">
              <p className="hero-role">Frontend developer crafting thoughtful digital experiences.</p>
              <a className="text-link" href="#work">Explore my work <Arrow /></a>
            </div>
            <span className="hero-index">PORTFOLIO / 2026</span>
          </div>
        </header>

        <section className="about section page-width" id="about">
          <div className="section-label"><span>01</span> / A little about me</div>
          <div className="about-layout">
            <div className="portrait-wrap">
              <img src="https://res.cloudinary.com/do2t27qdc/image/upload/v1791900423/PORTFOLIO%20IMAGES/WhatsApp_Image_2026-10-01_at_20.06.34_tg7kqv.jpg" alt="Etinosa Ekhator" />
              <span className="portrait-caption">Based in Nigeria</span>
            </div>
            <div className="about-copy">
              <p className="section-kicker">Hello, I&apos;m Etinosa</p>
              <h2>I build useful software with people in mind.</h2>
              <p>
                I&apos;m a frontend developer who enjoys turning complex needs into
                clear, intuitive interfaces. My work spans public-sector and
                operational systems, alongside independent web projects.
              </p>
              <p>
                I care about thoughtful details, responsive design, and making
                digital tools easier to use. I&apos;m always learning and looking
                for meaningful problems to solve.
              </p>
              <a className="button button-outline" href={resumeUrl} target="_blank" rel="noreferrer">
                View my resume <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <div className="section-label"><span>02</span> / Selected work</div>
                <h2>Systems that serve<br />real-world needs.</h2>
              </div>
              <p className="section-intro">
                Recent work across land management, transport asset management,
                judicial case management, asset operations, and online auctions.
              </p>
            </div>
            <div className="featured-grid">
              {featuredProjects.map((project) => (
                <article className="featured-card" key={project.number}>
                  <div className="project-preview">
                    <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  </div>
                  <div className="featured-meta">
                    <span>{project.category}</span>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        View system <Arrow />
                      </a>
                    ) : (
                      <span className="project-status">{project.status}</span>
                    )}
                  </div>
                  <h3>{project.name}</h3>
                  <h4>{project.fullName}</h4>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>

            <div className="past-work-heading">
              <p className="section-kicker">A few from earlier</p>
              <h3>Personal projects</h3>
            </div>
            <div className="past-projects">
              {pastProjects.map((project) => (
                <article className="past-card" key={project.name}>
                  <a className="past-image" href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}>
                    <img src={project.image} alt="" loading="lazy" />
                    <span className="image-arrow"><Arrow /></span>
                  </a>
                  <div className="past-card-copy">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <div className="past-links">
                      <a href={project.live} target="_blank" rel="noreferrer">Live site <Arrow /></a>
                      <a href={project.source} target="_blank" rel="noreferrer">Source code <Arrow /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section page-width" id="contact">
          <div className="section-label"><span>03</span> / Get in touch</div>
          <div className="contact-layout">
            <div>
              <p className="section-kicker">Have a project in mind?</p>
              <h2>Let&apos;s make<br />something useful.</h2>
            </div>
            <div className="contact-side">
              <p>I&apos;m open to new opportunities and collaborations. Tell me a little about what you&apos;re building.</p>
              <div className="contact-details">
                <a href="mailto:eekhator25@gmail.com">eekhator25@gmail.com <Arrow /></a>
                <a href="https://github.com/Etinosa22" target="_blank" rel="noreferrer">
                  GitHub: Etinosa22 <Arrow />
                </a>
              </div>
              <a
                className="button button-solid"
                href="https://www.linkedin.com/in/etinosa-ekhator-aa9667199/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner page-width">
          <a className="logo" href="#home">EE<span>.</span></a>
          <p>Designed &amp; built by Etinosa Ekhator</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/etinosa-ekhator-aa9667199/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/Etinosa22" target="_blank" rel="noreferrer">Etinosa22 <Arrow /></a>
            <a href="https://twitter.com/i_amnosa" target="_blank" rel="noreferrer">Twitter <Arrow /></a>
          </div>
          <span className="copyright">© {new Date().getFullYear()} Etinosa Ekhator</span>
        </div>
      </footer>
    </>
  );
}

export default App;
