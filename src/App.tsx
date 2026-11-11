import { FormEvent, useState } from 'react';
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Radio,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';

const resumePath = '/AnkitaSoni_23BAC10032_(1).pdf';

const skillGroups = [
  { label: 'Programming Languages', icon: Code2, skills: ['C++', 'Python', 'SQL', 'DSA in C++', 'OOPS'] },
  { label: 'Embedded Systems', icon: Cpu, skills: ['Embedded Systems', 'Hardware Testing', 'Debugging', 'Sensor Interfacing'] },
  { label: 'Tools & Platforms', icon: Terminal, skills: ['Arduino', 'GitHub', 'VS Code', 'LTspice'] },
  { label: 'Embedded & Electronics', icon: Cpu, skills: ['Embedded Systems', 'Hardware Testing', 'System Integration', 'Debugging', 'Sensor Interfacing'] },
  { label: 'IoT & Microcontrollers', icon: Radio, skills: ['Arduino', 'ESP32', 'GSM', 'GPS', 'UART'] },
  { label: 'AI & Machine Learning', icon: Bot, skills: ['Machine Learning', 'Computer Vision', 'Data Analysis'] },
  { label: 'Technical Practice', icon: CircuitBoard, skills: ['Technical Documentation', 'Problem Solving', 'Industrial Automation', 'Robotics'] },
];

const projects = [
  {
    number: '01',
    period: 'May 2025 — July 2025',
    title: "Women's Safety Device",
    category: 'Embedded systems · IoT',
    icon: ShieldCheck,
    accent: 'cyan',
    overview: 'A real-time safety system designed to support emergency communication and location tracking through connected hardware.',
    details: [
      'Developed an IoT-based women’s safety system using Arduino/ESP32, GSM, and GPS for emergency communication and location tracking.',
      'Integrated GSM-GPS modules through UART communication and embedded firmware for alert generation and wireless data transmission.',
      'Performed sensor interfacing, power management, hardware debugging, and system testing for communication reliability.',
    ],
    stack: ['Arduino / ESP32', 'GSM', 'GPS', 'UART'],
    link: 'https://l1nq.com/safetydevice',
  },
  {
    number: '02',
    period: 'Jan 2025 — Apr 2025',
    title: 'Smart Patrol Bot',
    category: 'Robotics · Computer vision',
    icon: Bot,
    accent: 'purple',
    overview: 'A mobile patrol platform combining sensing, wireless communication, remote control, and live video for remote monitoring.',
    details: [
      'Built an ESP32-CAM-based indoor security patrol robot integrating PIR sensing, wireless communication, and live video streaming.',
      'Implemented motion detection, image capture, and real-time video streaming with Bluetooth control and Telegram Bot API alerts.',
      'Handled embedded hardware integration, sensor interfacing, camera configuration, and system validation for reliable patrol operation.',
    ],
    stack: ['ESP32-CAM', 'PIR Sensor', 'Bluetooth', 'Telegram Bot API'],
    link: 'https://l1nq.com/smartpatrolbot',
  },
  {
    number: '03',
    period: 'Sep 2024 — Dec 2024',
    title: 'Automated Aerator (AquaDox)',
    category: 'Automation · Environmental technology',
    icon: Radio,
    accent: 'blue',
    overview: 'An IoT-enabled aquaculture monitoring system built to measure dissolved oxygen, pH, and water temperature and automate aeration decisions.',
    details: [
      'Engineered an IoT-enabled aquaculture monitoring system for real-time measurement and management of dissolved oxygen, pH, and water temperature.',
      'Integrated multiple sensors with a microcontroller for continuous data acquisition and developed automated aeration logic based on monitored water conditions.',
      'Conducted data collection, system testing, and performance analysis to evaluate sensor operation and improve aeration reliability.',
    ],
    stack: ['IoT', 'Microcontroller', 'Sensors', 'Data Acquisition'],
    link: 'https://sl1nk.com/aquadox',
  },
];

const education = [
  { date: 'Sep 2023 — Jun 2027', title: 'B.Tech in Electronics and Communication Engineering', place: 'Vellore Institute of Technology (VIT), Bhopal · Madhya Pradesh', detail: 'AI and Cybernetics specialization · CGPA 9.41', active: true },
  { date: 'May 2023', title: 'Senior Secondary School Certificate, Class XII', place: 'Govt. Excellence (CM Rise) Higher Secondary School · Hatta, Damoh, MP', detail: '94%', active: false },
  { date: 'July 2021', title: 'High School Certificate, Class X', place: 'Govt. Excellence (CM Rise) Higher Secondary School · Hatta, Damoh, MP', detail: '94.8%', active: false },
];

const achievements = [
  'Awarded Dream STARS Scholarship from VIT Bhopal University.',
  'Secured 1st position in district merit (Class XII); awarded State Merit Scholarship and Scooty.',
  'Recipient of the INSPIRE Scholarship from the Government of Madhya Pradesh.',
];

const certifications = [
  { title: 'Embedded System Design Internship', issuer: 'Maven Silicon', link: 'https://l1nk.dev/mavensilicon' },
  { title: 'Applied Machine Learning in Python', issuer: 'Coursera', link: 'https://acesse.one/machinelearning' },
  { title: 'Introduction to Internet of Things', issuer: 'NPTEL', link: 'https://acesse.one/internetofthings' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const subjectValue = String(formData.get('subject') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = encodeURIComponent(subjectValue || `Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:soniankita087@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  const socialLinks = [
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/ankita-soni-24a49b294/' },
    { label: 'GitHub', icon: Github, href: 'https://github.com/Ankitasoni34' },
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Ankita Soni home">
          <span className="brand-mark">AS</span>
          <span className="brand-name">Ankita Soni<span>.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href={resumePath} download>Resume <Download size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> Available for placements & internships</div>
            <p className="hero-identity">Electronics & Communication Engineering <span>/</span> AI & Cybernetics</p>
            <h1>Building intelligent systems at the intersection of <em>electronics, embedded technology & AI.</em></h1>
            <p className="hero-lede">I&apos;m Ankita Soni, an Electronics and Communication Engineering student specializing in AI and Cybernetics at VIT Bhopal University. I enjoy transforming engineering concepts into practical solutions through hardware-software integration, sensor interfacing, and problem-solving.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my projects <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href={resumePath} download>Download resume <Download size={16} /></a>
              <a className="button button-ghost" href="#contact">Let&apos;s connect <Mail size={16} /></a>
            </div>
            <div className="hero-socials">{socialLinks.map(({ label, icon: Icon, href }) => <a href={href} key={label} onClick={closeMenu} target="_blank" rel="noreferrer"><Icon size={15} /> {label}</a>)}</div>
            <div className="hero-meta">
              <span><strong>9.41</strong> CGPA</span><span className="meta-line" /><span>Class of 2027 · Madhya Pradesh, India</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract circuit board illustration">
            <div className="visual-grid" />
            <div className="orbit orbit-large"><span /><span /><span /></div>
            <div className="orbit orbit-small"><span /><span /></div>
            <div className="core-card">
              <div className="core-top"><CircuitBoard size={18} /><span>SYS / 01</span></div>
              <div className="core-chip"><Cpu size={58} strokeWidth={1.1} /></div>
              <div className="signal-line"><span>AI_CORE</span><i /><b>ACTIVE</b></div>
              <div className="signal-line"><span>IoT_LINK</span><i /><b>ONLINE</b></div>
              <div className="signal-line"><span>BUILD</span><i /><b>READY</b></div>
            </div>
            <div className="floating-tag tag-one"><Radio size={14} /> Connected systems</div>
            <div className="floating-tag tag-two"><Sparkles size={14} /> Human-centered tech</div>
          </div>
        </section>

        <section className="intro-strip"><div className="section-grid intro-inner"><span className="strip-label">01 / About me</span><p>Curious by nature. Rigorous by practice. I enjoy working where hardware meets software — designing, testing, and improving systems that solve real-world problems.</p><a href="#about" aria-label="Read about Ankita"><ChevronRight size={20} /></a></div></section>

        <section className="content-section about-section" id="about">
          <div className="section-heading"><span className="section-index">01</span><div><p className="kicker">The person behind the projects</p><h2>Engineering with <span>purpose.</span></h2></div></div>
          <div className="about-layout"><div className="about-statement"><p>My foundation is in <strong>Electronics and Communication Engineering</strong> with a specialization in AI and Cybernetics. I’m curious about the full journey from sensing and microcontrollers to data, automation, and intelligent software.</p><p>With a 9.41 CGPA and hands-on experience with Arduino and ESP32 systems, I enjoy turning engineering concepts into practical solutions through hardware testing, debugging, sensor interfacing, and thoughtful system integration.</p><div className="signature-line"><span>ANKITA SONI</span><small>AI & Cybernetics Engineer</small></div></div><div className="about-points"><div><span>01</span><h3>Electronics first</h3><p>Building a strong foundation in communication, embedded technology, hardware testing, and integration.</p></div><div><span>02</span><h3>Hands-on builder</h3><p>Drawn to Arduino and ESP32 projects, sensor interfacing, debugging, and reliable system testing.</p></div><div><span>03</span><h3>Intelligent applications</h3><p>Exploring Robotics, Industrial Automation, IoT, Computer Vision, and practical AI solutions.</p></div></div></div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-heading"><span className="section-index">02</span><div><p className="kicker">A toolkit for building</p><h2>Technical <span>capabilities.</span></h2></div></div>
          <div className="skills-grid">{skillGroups.map(({ label, icon: Icon, skills }) => <article className="skill-card" key={label}><div className="skill-icon"><Icon size={20} /></div><h3>{label}</h3><div className="tag-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-heading"><span className="section-index">03</span><div><p className="kicker">Selected work</p><h2>Ideas, made <span>real.</span></h2></div><p className="heading-note">Projects shaped by curiosity, practical constraints, and a love for systems that can make a difference.</p></div>
          <div className="project-list">{projects.map((project) => { const Icon = project.icon; return <article className={`project-card accent-${project.accent}`} key={project.title}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-heading"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} link`}><ExternalLink size={19} /></a></div><p className="project-overview">{project.overview}</p><div className="project-details">{project.details.map((detail) => <p key={detail}><CheckCircle2 size={15} />{detail}</p>)}</div><div className="project-footer"><div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><span className="project-period">{project.period}</span></div></div><div className="project-icon"><Icon size={54} strokeWidth={1.1} /></div></article>; })}</div>
        </section>

        <section className="content-section activities-section" id="activities">
          <div className="section-heading"><span className="section-index">04</span><div><p className="kicker">Beyond technical work</p><h2>Curiosity in <span>motion.</span></h2></div></div>
          <div className="activities-grid"><article><CircuitBoard size={21} /><span>01</span><h3>Electric Vehicle Club</h3><p>Member of VIT Bhopal&apos;s Electric Vehicle Club.</p></article><article><Sparkles size={21} /><span>02</span><h3>Music Club</h3><p>Member of the Music Club and an active participant in campus culture.</p></article><article><Radio size={21} /><span>03</span><h3>ADVITYA Fest</h3><p>Participated in cultural events during VIT Bhopal&apos;s ADVITYA Fest.</p></article></div>
        </section>

        <section className="content-section education-section" id="education">
          <div className="section-heading"><span className="section-index">05</span><div><p className="kicker">The foundation</p><h2>Education & <span>recognition.</span></h2></div></div>
          <div className="education-layout"><div className="timeline">{education.map((item) => <div className={`timeline-item ${item.active ? 'is-active' : ''}`} key={item.title}><div className="timeline-marker">{item.active ? <GraduationCap size={17} /> : <span />}</div><div><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><p>{item.place}</p><strong>{item.detail}</strong></div></div>)}</div><div className="recognition-card"><div className="recognition-top"><Sparkles size={20} /><span>Beyond the classroom</span></div><h3>Moments that <em>matter.</em></h3><div className="achievement-list">{achievements.map((achievement) => <p key={achievement}><span>↗</span>{achievement}</p>)}</div><div className="certification-list"><span className="mini-label">Certifications</span>{certifications.map((cert) => <a href={cert.link} target="_blank" rel="noreferrer" key={cert.title}><span>{cert.title}<small>{cert.issuer}</small></span><ArrowUpRight size={15} /></a>)}</div></div></div>
        </section>

        <section className="resume-banner"><div><span className="kicker">Want the full picture?</span><h2>Let&apos;s build what&apos;s <em>next.</em></h2><p>Take a closer look at my experience, education, and the work I&apos;m proud of.</p></div><div className="resume-actions"><a className="button button-primary" href={resumePath} target="_blank" rel="noreferrer">View resume <ExternalLink size={16} /></a><a className="text-link" href={resumePath} download>Download PDF <Download size={15} /></a></div></section>

        <section className="content-section contact-section" id="contact">
          <div className="section-heading"><span className="section-index">06</span><div><p className="kicker">Start a conversation</p><h2>Have a problem worth <span>solving?</span></h2></div></div>
          <div className="contact-layout"><div className="contact-copy"><p>I&apos;m open to conversations about internships, placements, and opportunities to contribute to thoughtful technical work across electronics, embedded systems, IoT, robotics, and AI.</p><div className="contact-links"><a href="mailto:soniankita087@gmail.com"><Mail size={18} /><span><small>Email me</small>soniankita087@gmail.com</span><ArrowUpRight size={16} /></a><a href="tel:+916264267426"><Phone size={18} /><span><small>Call me</small>+91-6264267426</span><ArrowUpRight size={16} /></a><a href="#contact"><MapPin size={18} /><span><small>Based in</small>Damoh, Madhya Pradesh, India</span><ArrowUpRight size={16} /></a>{socialLinks.map(({ label, icon: Icon, href }) => <a href={href} key={label} target="_blank" rel="noreferrer"><Icon size={18} /><span><small>{label}</small>{href.replace('https://', '').replace(/\/$/, '')}</span><ArrowUpRight size={16} /></a>)}</div></div><form className="contact-form" onSubmit={handleSubmit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Subject<input required name="subject" placeholder="Internship or placement enquiry" /></label><label>Message<textarea required name="message" placeholder="Tell me a little about what you're working on..." rows={4} /></label><button className="button button-primary" type="submit">{sent ? 'Message ready to send' : 'Send a message'} {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}</button>{sent && <p className="form-note"><MessageSquare size={14} /> Thanks — I&apos;ll get back to you soon.</p>}</form></div>
        </section>
      </main>
      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">AS</span><span className="brand-name">Ankita Soni<span>.</span></span></a><p>Designed and built by Ankita Soni</p><span>© 2026 Ankita Soni</span></footer>
    </div>
  );
}

export default App;
