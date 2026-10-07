import { useEffect, useRef, useState } from "react";

const projects = [
  { id: "msynth", title: "M-Synth Modular Synth", discipline: "Hardware Interaction · 2025", image: `${import.meta.env.BASE_URL}assets/m-synth.png` },
  { id: "nexus", title: "NEXUS Rehabilitation System", discipline: "Wearable System · 2026", image: `${import.meta.env.BASE_URL}assets/nexus.png` },
  { id: "rail", title: "Rail Hub Spatial Study", discipline: "Spatial Design · 2025", image: `${import.meta.env.BASE_URL}assets/rail-hub.png` },
];

const layout = [
  { project: 0, w: 370, h: 224, y: -10, overlap: 0, z: 4, crop: "center" },
  { project: 2, w: 126, h: 262, y: 21, overlap: -62, z: 7, crop: "center" },
  { project: 1, w: 282, h: 142, y: -9, overlap: -22, z: 2, crop: "70% center" },
  { project: 0, w: 154, h: 236, y: 27, overlap: -78, z: 8, crop: "20% center" },
  { project: 2, w: 342, h: 210, y: -7, overlap: -42, z: 3, crop: "center" },
  { project: 1, w: 112, h: 170, y: -21, overlap: -48, z: 6, crop: "82% center" },
  { project: 0, w: 232, h: 128, y: 23, overlap: -20, z: 1, crop: "center" },
];

function GallerySequence({ copy, onActivate, flashKey }) {
  return (
    <div className="gallery-sequence" aria-hidden={copy === "copy" ? "true" : undefined}>
      {layout.map((item, index) => {
        const project = projects[item.project];
        const key = `${copy}-${index}`;
        return (
          <div
            className="gallery-slot"
            key={key}
            style={{ "--w": item.w, "--h": item.h, "--y": `${item.y}px`, "--overlap": `${item.overlap}px`, "--layer": item.z }}
          >
            <button
              className={`gallery-card${flashKey === key ? " is-flashing" : ""}`}
              type="button"
              tabIndex={copy === "copy" ? -1 : 0}
              aria-label={`View ${project.title}`}
              onClick={() => onActivate(item.project, key)}
            >
              <img src={project.image} alt="" style={{ objectPosition: item.crop }} />
              <span className="card-caption">
                <strong>{project.title}</strong>
                <small>{project.discipline}</small>
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export function App() {
  const stageRef = useRef(null);
  const dialogRef = useRef(null);
  const flashTimer = useRef(null);
  const [selected, setSelected] = useState(0);
  const [flashKey, setFlashKey] = useState("");

  useEffect(() => () => clearTimeout(flashTimer.current), []);

  const moveLocator = (event) => {
    if (event.pointerType === "touch") return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
    stageRef.current.style.setProperty("--cursor-x", `${x}px`);
    stageRef.current.style.setProperty("--cursor-y", `${y}px`);
    stageRef.current.dataset.pointer = "active";
  };

  const resetLocator = () => {
    stageRef.current.dataset.pointer = "idle";
    stageRef.current.style.setProperty("--cursor-x", "50%");
    stageRef.current.style.setProperty("--cursor-y", "50%");
  };

  const activateProject = (projectIndex, key) => {
    setSelected(projectIndex);
    setFlashKey(key);
    clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlashKey(""), 420);
  };

  return (
    <main className="portfolio-shell">
      <header className="masthead">
        <button className="identity" type="button" aria-label="Open Tianyang Feng profile" onClick={() => dialogRef.current.showModal()}>
          <span>Tianyang Feng</span>
          <small>Product · Interaction</small>
        </button>
        <p className="edition">Selected practice / Beijing</p>
        <button className="profile-trigger" type="button" onClick={() => dialogRef.current.showModal()}>Profile</button>
      </header>

      <section
        className="gallery-stage"
        id="gallery"
        ref={stageRef}
        data-pointer="idle"
        aria-label="Selected design work moving gallery"
        onPointerMove={moveLocator}
        onPointerLeave={resetLocator}
      >
        <span className="axis-label axis-label-top">Product / Interaction</span>
        <span className="axis-label axis-label-bottom">CMF / Material</span>
        <span className="locator-axis locator-axis-vertical" aria-hidden="true" />
        <span className="locator-axis locator-axis-horizontal" aria-hidden="true" />
        <div className="gallery-run">
          <GallerySequence copy="main" onActivate={activateProject} flashKey={flashKey} />
          <GallerySequence copy="copy" onActivate={activateProject} flashKey={flashKey} />
        </div>
      </section>

      <section className="statement" aria-labelledby="statement-title">
        <p className="selected-work" aria-live="polite">{projects[selected].title} — {projects[selected].discipline}</p>
        <h1 id="statement-title">Designing the space <em>between</em> people,<br /> matter and technology.</h1>
        <p className="location">Beijing · Available for collaboration</p>
        <div className="pagination" aria-hidden="true">
          {projects.map((project, index) => <span className={selected === index ? "current" : ""} key={project.id} />)}
        </div>
      </section>

      <footer className="footer-line">
        <span>© 2026 Tianyang Feng</span>
        <a href="mailto:fengtim@aliyun.com" aria-label="Email Tianyang Feng">fengtim@aliyun.com</a>
      </footer>

      <dialog
        className="profile-dialog"
        ref={dialogRef}
        aria-labelledby="profile-title"
        onClick={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          const clickedOutside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
          if (clickedOutside) dialogRef.current.close();
        }}
      >
        <div className="dialog-topline">
          <span>Profile</span>
          <button type="button" onClick={() => dialogRef.current.close()}>Close</button>
        </div>
        <h2 id="profile-title">Tianyang Feng</h2>
        <p className="profile-lead">A product designer working across physical interaction, spatial experience and CMF—turning technical systems into tangible, considered objects.</p>

        <section className="profile-intro" aria-labelledby="about-heading">
          <span className="profile-kicker">About / Cross-disciplinary Designer</span>
          <div>
            <h3 id="about-heading">Working across product, interaction and CMF.</h3>
            <p>I study Product Design at Tsinghua University. My practice begins with user research and prototyping, then extends into hardware interaction, spatial experience and consumer-electronics CMF. I’m interested in making technical systems clearer, more tangible and more humane.</p>
          </div>
        </section>

        <section className="profile-section" aria-labelledby="experience-heading">
          <h3 className="profile-section-title" id="experience-heading">Experience / Axis</h3>
          <div className="profile-timeline" aria-label="Experience timeline">
            <article className="timeline-event">
              <time>2026.07 — Now</time>
              <span className="timeline-node" aria-hidden="true" />
              <div><strong>Lenovo</strong><small>CMF Design Intern — Legion, YOGA &amp; Idea</small><p>Contributing to color, material and finish research, product-line differentiation and concept communication across Lenovo consumer electronics.</p></div>
            </article>
            <article className="timeline-event">
              <time>2026.04 — 2026.07</time>
              <span className="timeline-node" aria-hidden="true" />
              <div><strong>Meituan</strong><small>Product Design Intern</small><p>Improved core workflows for an internal AI platform and contributed to design-to-code tooling, a generative-design knowledge base and AI product-design workflows.</p></div>
            </article>
            <article className="timeline-event">
              <time>2023.08 — 2027.07</time>
              <span className="timeline-node" aria-hidden="true" />
              <div><strong>Tsinghua University</strong><small>Academy of Arts &amp; Design · Product Design</small><p>Studying user research, intelligent products, service design and social innovation through physical, digital and spatial design projects.</p></div>
            </article>
          </div>
        </section>

        <section className="profile-projects" aria-labelledby="projects-heading">
          <h3 className="profile-section-title" id="projects-heading">Selected Projects / Research</h3>
          <div className="project-list">
            <div className="project-row"><time>2026</time><strong>Refrigerator &amp; Freshness Technology Display</strong><span>CMF / AIGC</span></div>
            <div className="project-row"><time>2025</time><strong>BuyMate — CHI 2026 Extended Abstracts</strong><span>HCI / Research</span></div>
            <div className="project-row"><time>2025</time><strong>Beijing–Tianjin–Hebei Rail Hub Study</strong><span>Space / Service</span></div>
            <div className="project-row"><time>2025</time><strong>Four Design &amp; Creative Competition Honors</strong><span>Awards</span></div>
          </div>
        </section>

        <section className="profile-skills" aria-labelledby="skills-heading">
          <h3 className="profile-section-title" id="skills-heading">Skills / Toolkit</h3>
          <div className="skill-grid">
            <div><h4>Design</h4><p>Figma / Photoshop<br />Rhino / KeyShot<br />Blender / CMF</p></div>
            <div><h4>Prototype</h4><p>Arduino / Python<br />3D Printing<br />AI-assisted Workflow</p></div>
            <div><h4>Research</h4><p>User Research<br />Service Design<br />Experiment Design</p></div>
          </div>
        </section>

        <footer className="profile-footer">
          <strong>Let’s<br />talk.</strong>
          <a className="profile-email" href="mailto:fengtim@aliyun.com">Write an email — fengtim@aliyun.com ↗</a>
        </footer>
      </dialog>
    </main>
  );
}
