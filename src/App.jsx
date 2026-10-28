import { useEffect, useRef, useState } from "react";
import { OpeningIntro } from "./OpeningIntro.jsx";
import { TeamProject } from "./TeamProject.jsx";
import { DataUnion } from "./DataUnion.jsx";

const projects = [
  { id: "msynth", title: "M-Synth Modular Synth", discipline: "Hardware Interaction · 2025", image: `${import.meta.env.BASE_URL}assets/m-synth.png` },
  { id: "nexus", title: "NEXUS Rehabilitation System", discipline: "Wearable System · 2026", image: `${import.meta.env.BASE_URL}assets/nexus.png` },
  { id: "eco-data-center", title: "Eco-Friendly Data Center", discipline: "System Design", image: `${import.meta.env.BASE_URL}assets/rail-hub.png` },
  { id: "data-union", title: "Installation of Data Union", discipline: "Interactive Installation", image: `${import.meta.env.BASE_URL}assets/data-union-cover.png` },
  { id: "team-project", title: "Team Project", discipline: "Deimos Celestial Palace · Sci-fi Installation", image: `${import.meta.env.BASE_URL}assets/team-project/prototype.png` },
];

const cardProjects = [
  { ...projects[3] },
  { ...projects[2], image: `${import.meta.env.BASE_URL}assets/eco-data-center-cover.png` },
  { ...projects[1], image: `${import.meta.env.BASE_URL}assets/nexus-cover.png` },
  { ...projects[0], image: `${import.meta.env.BASE_URL}assets/m-synth-cover.png` },
  { ...projects[4] },
];

const translations = {
  "Team Project": "团队作品",
  "Deimos Celestial Palace · Sci-fi Installation": "荧惑天宫 · 科幻装置",
  "Installation of Data Union": "数据联盟装置",
  "Interactive Installation": "交互装置",
  "Eco-Friendly Data Center": "环保数据中心",
  "System Design": "系统设计",
  "Product · Interaction": "产品 · 交互",
  "Selected practice / Beijing": "设计作品 / 北京",
  "Profile": "个人简介",
  "Product / Interaction": "产品 / 交互",
  "Beijing · Available for collaboration": "北京 · 欢迎合作",
  "Explore selected work": "浏览精选作品",
  "Selected work": "精选作品",
  "Objects, interactions & spaces.": "产品、交互与空间。",
  "Close ×": "关闭 ×",
  "Close": "关闭",
  "A product designer working across physical interaction, spatial experience and CMF—turning technical systems into tangible, considered objects.": "专注于实体交互、空间体验与 CMF 的产品设计师，将技术系统转化为可感知、有温度的产品。",
  "About / Cross-disciplinary Designer": "关于 / 跨学科设计师",
  "Working across product, interaction and CMF.": "探索产品、交互与 CMF 的交汇。",
  "I study Product Design at Tsinghua University. My practice begins with user research and prototyping, then extends into hardware interaction, spatial experience and consumer-electronics CMF. I’m interested in making technical systems clearer, more tangible and more humane.": "我在清华大学学习产品设计。从用户研究与原型制作出发，我的实践延伸至硬件交互、空间体验和消费电子 CMF。我希望让技术系统更清晰、更可感知，也更具人情味。",
  "Experience / Axis": "经历 / 时间轴",
  "2026.07 — Now": "2026.07 — 至今",
  "Lenovo": "联想",
  "CMF Design Intern — Legion, YOGA & Idea": "CMF 设计实习生 — 拯救者、YOGA 与 Idea",
  "Contributing to color, material and finish research, product-line differentiation and concept communication across Lenovo consumer electronics.": "参与联想消费电子产品的色彩、材料与表面工艺研究，以及产品线差异化和设计概念表达。",
  "Meituan": "美团",
  "Product Design Intern": "产品设计实习生",
  "Improved core workflows for an internal AI platform and contributed to design-to-code tooling, a generative-design knowledge base and AI product-design workflows.": "优化内部 AI 平台的核心工作流程，参与设计转代码工具、生成式设计知识库及 AI 产品设计流程建设。",
  "Tsinghua University": "清华大学",
  "Academy of Arts & Design · Product Design": "美术学院 · 产品设计",
  "Studying user research, intelligent products, service design and social innovation through physical, digital and spatial design projects.": "通过实体、数字与空间设计项目，学习用户研究、智能产品、服务设计和社会创新。",
  "Selected Projects / Research": "精选项目 / 研究",
  "Refrigerator & Freshness Technology Display": "冰箱与保鲜技术展示",
  "HCI / Research": "人机交互 / 研究",
  "Beijing–Tianjin–Hebei Rail Hub Study": "京津冀轨道交通枢纽研究",
  "Space / Service": "空间 / 服务",
  "Four Design & Creative Competition Honors": "四项设计与创意竞赛荣誉",
  "Awards": "奖项",
  "Skills / Toolkit": "技能 / 工具",
  "Design": "设计",
  "Prototype": "原型",
  "Research": "研究",
  "3D Printing": "3D 打印",
  "AI-assisted Workflow": "AI 辅助工作流",
  "User Research": "用户研究",
  "Service Design": "服务设计",
  "Experiment Design": "实验设计",
  "Write an email — fengtim@aliyun.com ↗": "发送邮件 — fengtim@aliyun.com ↗",
  "M-Synth Modular Synth": "M-Synth 模块化合成器",
  "NEXUS Rehabilitation System": "NEXUS 康复系统",
  "Rail Hub Spatial Study": "轨道枢纽空间研究",
  "Hardware Interaction · 2025": "硬件交互 · 2025",
  "Wearable System · 2026": "可穿戴系统 · 2026",
  "Spatial Design · 2025": "空间设计 · 2025"
};

const layout = [
  { project: 3, w: 520, h: 174, y: -52, overlap: 0, z: 4, crop: "left center", trimRight: .05 },
  { project: 2, w: 130, h: 295, y: 12, overlap: -76, z: 7, crop: "center" },
  { project: 1, w: 350, h: 138, y: -72, overlap: 28, z: 2, crop: "70% center" },
  { project: 4, image: `${import.meta.env.BASE_URL}assets/team-project/exhibition.png`, w: 210, h: 210, y: 58, overlap: -68, z: 6, crop: "center" },
  { project: 3, image: `${import.meta.env.BASE_URL}assets/data-union/installation-front.jpg`, w: 155, h: 260, y: -26, overlap: -38, z: 7, crop: "23% center" },
  { project: 0, w: 172, h: 282, y: 24, overlap: -38, z: 5, crop: "20% center" },
  { project: 3, w: 245, h: 84, y: -86, overlap: -18, z: 3, crop: "left center", trimRight: .05 },
  { project: 2, w: 450, h: 250, y: 26, overlap: 24, z: 4, crop: "center" },
  { project: 4, image: `${import.meta.env.BASE_URL}assets/team-project/process-shell.png`, w: 140, h: 225, y: -44, overlap: -82, z: 8, crop: "center" },
  { project: 3, image: `${import.meta.env.BASE_URL}assets/data-union/interaction-closeup.png`, w: 335, h: 154, y: 66, overlap: 18, z: 3, crop: "45% center" },
  { project: 1, w: 104, h: 122, y: 76, overlap: 30, z: 6, crop: "82% center" },
  { project: 0, w: 320, h: 180, y: -48, overlap: -46, z: 1, crop: "center" },
  { project: 4, w: 260, h: 260, y: 10, overlap: -32, z: 5, crop: "center" },
].map((item, index) => {
  // Sample once per load so both loop copies match and interactions never shift cards.
  const scale = (.84 + Math.random() * .3) * .9;
  const height = Math.min(274, Math.round(item.h * scale));
  const maxOffset = (340 - height) / 2 - 10;
  return {
    ...item,
    w: Math.round(item.w * scale),
    h: height,
    y: Math.max(-maxOffset, Math.min(maxOffset, item.y + Math.round(Math.random() * 44 - 22))),
    overlap: index === 0 ? 0 : Math.round(item.overlap * .55) + 12 + Math.round(Math.random() * 18 - 9),
  };
});

function GallerySequence({ copy, onActivate, onHoverProject, onFocusProject, flashKey, projects, isZh }) {
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
              data-project-index={item.project}
              aria-label={`${isZh ? "查看" : "View"} ${project.title}`}
              onPointerEnter={() => onHoverProject(item.project)}
              onFocus={() => onFocusProject(item.project)}
              onClick={() => onActivate(item.project, key, item.image ?? project.image)}
            >
              <img src={item.image ?? project.image} alt="" style={{ objectPosition: item.crop, width: item.trimRight ? `${100 / (1 - item.trimRight)}%` : undefined, maxWidth: item.trimRight ? "none" : undefined }} />
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
  const [route, setRoute] = useState(() => window.location.hash);
  const isSynthPage = route.startsWith("#/projects/msynth");
  const isNexusPage = route.startsWith("#/projects/nexus");
  const isDataCenterPage = route.startsWith("#/projects/eco-data-center");
  const isTeamPage = route.startsWith("#/projects/team-project");
  const isDataUnionPage = route.startsWith("#/projects/data-union");
  useEffect(() => {
    const syncRoute = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);
  useEffect(() => {
    document.title = isDataUnionPage ? "Data Union — Tianyang Feng" : isTeamPage ? "Team Project · Deimos Celestial Palace — Tianyang Feng" : isSynthPage ? "M-Synth — Tianyang Feng" : isNexusPage ? "NEXUS — Tianyang Feng" : isDataCenterPage ? "Eco-Friendly Data Center — Tianyang Feng" : "Tianyang Feng — Selected Practice";
    if (isSynthPage || isNexusPage || isDataCenterPage || isTeamPage || isDataUnionPage) window.scrollTo({ top: 0, behavior: "instant" });
    else if (window.location.hash === "#works") document.getElementById("works")?.scrollIntoView({ behavior: "instant" });
  }, [isSynthPage, isNexusPage, isDataCenterPage, isTeamPage, isDataUnionPage]);
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem("portfolio-language") === "zh" ? "zh" : "en"; } catch { return "en"; }
  });
  const isZh = language === "zh";
  const t = (text) => isZh ? (translations[text] ?? text) : text;
  const localizedCards = cardProjects.map(project => ({ ...project, title: t(project.title), discipline: t(project.discipline) }));
  const localizedProjects = projects.map(project => ({ ...project, title: t(project.title), discipline: t(project.discipline) }));
  useEffect(() => {
    document.documentElement.lang = isZh ? "zh-CN" : "en";
    try { localStorage.setItem("portfolio-language", language); } catch { /* Storage may be unavailable for local files. */ }
  }, [language, isZh]);
  const stageRef = useRef(null);
  const locatorRef = useRef({ x: .5, y: .5 });
  const selectionModeRef = useRef("pointer");
  const dialogRef = useRef(null);
  const artworkRef = useRef(null);
  const [artwork, setArtwork] = useState(projects[0]);
  const flashTimer = useRef(null);
  const [selected, setSelected] = useState(layout[0].project);
  const [flashKey, setFlashKey] = useState("");

  useEffect(() => () => clearTimeout(flashTimer.current), []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const cards = [...stage.querySelectorAll(".gallery-card")];
    const trackProject = () => {
      if (document.hidden || document.querySelector("dialog[open]")) return;
      const bounds = stage.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;

      // Keyboard focus takes precedence; repeated loop cards share the same id.
      const focused = document.activeElement?.closest(".gallery-card");
      if (selectionModeRef.current === "keyboard" && focused && stage.contains(focused)) {
        setSelected(Number(focused.dataset.projectIndex));
        return;
      }
      const x = bounds.left + bounds.width * locatorRef.current.x;
      const y = bounds.top + bounds.height * locatorRef.current.y;
      const pointed = document.elementFromPoint(x, y)?.closest(".gallery-card");
      if (pointed && stage.contains(pointed)) {
        setSelected(Number(pointed.dataset.projectIndex));
        return;
      }

      // In the gaps, follow the photograph closest to the crosshair. Recheck
      // while drifting so the caption also follows a stationary center axis.
      let closest = null;
      let distance = Infinity;
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        if (rect.right < bounds.left || rect.left > bounds.right) continue;
        const dx = Math.max(rect.left - x, 0, x - rect.right);
        const dy = Math.max(rect.top - y, 0, y - rect.bottom);
        const nextDistance = dx * dx + dy * dy;
        if (nextDistance < distance) { closest = card; distance = nextDistance; }
      }
      if (closest) setSelected(Number(closest.dataset.projectIndex));
    };
    trackProject();
    const timer = window.setInterval(trackProject, 100);
    return () => window.clearInterval(timer);
  }, [isSynthPage, isNexusPage, isDataCenterPage, isTeamPage]);

  const moveLocator = (event) => {
    if (event.pointerType === "touch") return;
    selectionModeRef.current = "pointer";
    const rect = stageRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top));
    locatorRef.current = { x: x / rect.width, y: y / rect.height };
    const pointed = event.target.closest(".gallery-card");
    if (pointed) setSelected(Number(pointed.dataset.projectIndex));
    stageRef.current.style.setProperty("--cursor-x", `${x}px`);
    stageRef.current.style.setProperty("--cursor-y", `${y}px`);
    stageRef.current.dataset.pointer = "active";
  };

  const resetLocator = () => {
    locatorRef.current = { x: .5, y: .5 };
    stageRef.current.dataset.pointer = "idle";
    stageRef.current.style.setProperty("--cursor-x", "50%");
    stageRef.current.style.setProperty("--cursor-y", "50%");
  };

  const hoverProject = (projectIndex) => {
    selectionModeRef.current = "pointer";
    setSelected(projectIndex);
  };

  const focusProject = (projectIndex) => {
    selectionModeRef.current = "keyboard";
    setSelected(projectIndex);
  };

  const activateProject = (projectIndex, key, image) => {
    const project = projects[projectIndex];
    if (!project) return;
    setSelected(projectIndex);
    setFlashKey(key);
    clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlashKey(""), 420);
    if (project.previewOnly) {
      setArtwork({ ...localizedProjects[projectIndex], image: image ?? project.image });
      artworkRef.current.showModal();
    } else {
      window.location.hash = `/projects/${project.id}`;
    }
  };

  if (isDataUnionPage) return <DataUnion isZh={isZh} setLanguage={setLanguage} />;
  if (isTeamPage) return <TeamProject isZh={isZh} setLanguage={setLanguage} />;

  if (isDataCenterPage) return (
    <main className="project-detail data-center-detail">
      <img className="project-background" src={`${import.meta.env.BASE_URL}assets/eco-data-center-background.png`} width="3694" height="1902" fetchPriority="high" alt="" />
      <header className="detail-header">
        <a href="#works" className="detail-back">← {isZh ? "返回作品" : "Back to work"}</a>
        <div className="language-switch" role="group" aria-label={isZh ? "切换语言" : "Language"}>
          <button type="button" lang="en" aria-pressed={!isZh} onClick={() => setLanguage("en")}>EN</button>
          <button type="button" lang="zh-CN" aria-pressed={isZh} onClick={() => setLanguage("zh")}>中文</button>
        </div>
      </header>
      <section className="detail-intro" aria-label={isZh ? "OASIS 环保数据中心封面：全球夜景地图与 OASIS 标志" : "OASIS data center cover: a world map at night and the OASIS logo"}>
        <img className="data-center-intro-logo" src={`${import.meta.env.BASE_URL}assets/oasis-logo.png`} width="674" height="156" alt="OASIS" fetchPriority="high" />
        <div className="data-center-intro-copy">
          <p>{isZh ? "AI 数据中心的大规模扩张，正给全球水资源带来压力。" : "The expansion of AI data centers is putting pressure on global water resources."}</p>
          <p>{isZh ? "OASIS 采用全新的冷却技术与数据中心设计，助力可持续的水资源分配。" : "OASIS uses new cooling technology and data center design to support sustainable water allocation."}</p>
        </div>
        <a href="#/projects/eco-data-center/content" className="detail-scroll" onClick={(event) => {
          event.preventDefault();
          document.getElementById("data-center-content")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }}>{isZh ? "向下浏览" : "Scroll to explore"} <span aria-hidden="true">↓</span></a>
      </section>
      <article className="project-paper" id="data-center-content" aria-labelledby="data-center-title">
        <div className="project-paper-heading">
          <p>{t("System Design")}</p>
          <h1 id="data-center-title">{t("Eco-Friendly Data Center")}</h1>
        </div>
        <section className="data-center-background-section" aria-labelledby="data-center-background-title">
          <div className="data-center-background-grid">
            <div className="data-center-water-research">
              <h2 id="data-center-background-title">{isZh ? "背景" : "Background"}</h2>
              <h3>{isZh ? "AI 基础设施带来的用水危机" : "Water consumption crisis brought by AI infrastructure"}</h3>
              <div className="data-center-water-intro">
                <img src={`${import.meta.env.BASE_URL}assets/data-center-construction.png`} width="570" height="320" alt={isZh ? "干旱地区正在建设的数据中心" : "A data center under construction in an arid landscape"} loading="lazy" />
                <p>{isZh ? "全球 AI 数据中心的用水量正快速增长，每年消耗超过 5600 亿升水。" : "Global AI data center water use is surging, consuming more than 560 billion liters of water each year."}</p>
              </div>
              <p className="data-center-water-equivalent">{isZh ? "一座 100 兆瓦数据中心的耗水量，可能相当于约 80,000 人的用水量。" : "A 100-megawatt data center may consume approximately as much water as 80,000 people."}</p>
              <figure className="data-center-capacity-chart" tabIndex="0" aria-label={isZh ? "全球数据中心容量图表" : "Global data center capacity chart"}>
                <img src={`${import.meta.env.BASE_URL}assets/data-center-capacity.png`} width="1688" height="814" alt={isZh ? "全球数据中心容量估算（吉瓦）：2023 至 2030 年的容量增长，区分生成式 AI 工作负载和其他工作负载。原图保留 +22 GAGR、+39 GAGR、+16 GAGR 标注。" : "Estimated global data center capacity in gigawatts, 2023–2030, showing generative AI and other workloads. Original chart labels: +22 GAGR, +39 GAGR and +16 GAGR."} loading="lazy" />
              </figure>
            </div>
            <div className="data-center-conflicts">
              <h3 className="data-center-conflicts-title">{isZh ? "数据中心带来的冲突" : "Conflicts brought by data centers"}</h3>
              <div className="data-center-case-panel">
                <p>{isZh ? "约 43% 的数据中心位于缺水地区。干旱促使当地政府限制 AI 企业的用水许可，以下为三个案例。" : "~43% of data centers are in water-scarce regions. Droughts have led local governments to restrict AI companies’ water permits (3 cases below)."}</p>
                <div className="data-center-case-grid">
                  <img src={`${import.meta.env.BASE_URL}assets/data-center-case-google.png`} width="370" height="580" alt={isZh ? "Google，智利 Cerrillos，48 兆瓦：卫星图与用地范围" : "Google, Cerrillos, Chile, 48 MW: satellite image and site boundary"} loading="lazy" />
                  <img src={`${import.meta.env.BASE_URL}assets/data-center-case-meta.png`} width="386" height="585" alt={isZh ? "Meta，美国亚利桑那州，500 兆瓦：卫星图与用地范围" : "Meta, Arizona, US, 500 MW: satellite image and site boundary"} loading="lazy" />
                  <img src={`${import.meta.env.BASE_URL}assets/data-center-case-amazon.png`} width="366" height="580" alt={isZh ? "Amazon，西班牙阿拉贡，300 兆瓦：卫星图与用地范围" : "Amazon, Aragon, Spain, 300 MW: satellite image and site boundary"} loading="lazy" />
                </div>
              </div>
              <div className="data-center-community">
                <div className="data-center-community-copy">
                  <h4>{isZh ? "社区抗议" : "Community protests"}</h4>
                  <p>{isZh ? "在欧洲、拉丁美洲和美国等易受干旱影响的地区，当地居民对数据中心的反对已见诸新闻。" : "Local opposition to data centers in drought-prone regions (e.g., Europe, Latin America, US) has made headlines."}</p>
                  <h4>{isZh ? "1. 潜在的水资源短缺" : "1. Potential water shortage"}</h4>
                  <p>{isZh ? "数据中心需要数十亿加仑的清洁水用于冷却；到 2028 年，这些水足以满足超过 1800 万户家庭的需求。" : "Data centers need billions of gallons of clean water for cooling—enough to serve over 18 million households by 2028."}</p>
                  <h4>{isZh ? "2. 不透明的水资源分配" : "2. Opaque water resource allocation"}</h4>
                  <p>{isZh ? "官员、公用事业机构与科技企业通过保密协议，在闭门谈判中商定项目。" : "Projects are negotiated behind closed doors via NDAs among officials, utilities, and tech firms."}</p>
                </div>
                <img src={`${import.meta.env.BASE_URL}assets/data-center-community-protest.png`} width="610" height="456" alt={isZh ? "社区居民举牌抗议数据中心用水，标语包括保护沙漠与人民优先于利润。" : "Residents protesting data center water use, holding signs calling to protect the desert and put people over profit."} loading="lazy" />
              </div>
            </div>
          </div>
          <p className="data-center-research-summary">{isZh ? "在研究中，我更关注 AI 技术普及带来的水资源问题，尤其是缺水地区面临的挑战。" : "During the research, I paid more attention to the water resource issues brought about by the popularization of AI technology, especially in water-scarce areas."}</p>
        </section>
        <section className="data-center-stakeholder-section" aria-labelledby="data-center-stakeholder-title">
          <h2 id="data-center-stakeholder-title">{isZh ? "利益相关者分析" : "Stakeholder Analysis"}</h2>
          <figure>
            <img src={`${import.meta.env.BASE_URL}assets/data-center-stakeholder-map.png`} width="1859" height="1702" alt={isZh ? "以 AI 数据中心为核心的利益相关者关系图：AI 科技企业、地方政府、农业生产、居民社区及外部机构，以及产业发展、资源竞争和权力获取等关系。" : "Stakeholder map centered on the AI data center, connecting AI tech companies, local government, agricultural production, resident communities and external institutions through industrial development, resource competition and unequal access to power."} loading="lazy" />
          </figure>
        </section>
        <section className="data-center-ideation-section" aria-labelledby="data-center-ideation-title">
          <h2 id="data-center-ideation-title">{isZh ? "构思" : "Ideation"}</h2>
          <p className="data-center-ideation-lead">{isZh ? "让 AI 企业参与水循环，保护当地环境，并优化水资源利用。" : "Involve AI companies in the water cycle to protect the local environment and optimize water resource utilization."}</p>
          <div className="data-center-water-flow" tabIndex="0" role="group" aria-label={isZh ? "水资源分配关系：原始水资源通过政府协调，联系工农业生产、AI 数据中心和居民社区。" : "Water allocation map: original water resources connect through government to industrial and agricultural production, AI data centers and resident communities."}>
            <div className="data-center-water-flow-map">
              <svg viewBox="0 0 740 260" preserveAspectRatio="none" aria-hidden="true"><path d="M370 52 V146 M130 210 V116 Q130 106 140 106 H600 Q610 106 610 116 V210" /></svg>
              <span className="water-flow-node water-flow-source">{isZh ? "原始水资源" : "Original Water Resources"}</span>
              <span className="water-flow-node water-flow-government">{isZh ? "政府" : "Government"}</span>
              <span className="water-flow-node water-flow-production">{isZh ? "工农业生产" : "Industrial And Agricultural Production"}</span>
              <span className="water-flow-node water-flow-data-center">{isZh ? "AI 数据中心" : "AI Data Center"}</span>
              <span className="water-flow-node water-flow-community">{isZh ? "居民社区" : "Resident Community"}</span>
            </div>
          </div>
        </section>
        <div className="data-center-benefits-process-grid">
        <section className="data-center-benefits-section" aria-labelledby="data-center-benefits-title">
          <h2 className="data-center-benefits-title" id="data-center-benefits-title">{isZh ? "核心利益相关者的收益" : "Benefit To Core Stakeholders"}</h2>
          <div className="data-center-benefits">
            <div className="data-center-benefit-row">
              <img src={`${import.meta.env.BASE_URL}assets/data-center-benefit-company.png`} width="1528" height="235" alt={isZh ? "AI 企业的数据中心建筑" : "An AI company’s data center building"} loading="lazy" />
              <div className="data-center-benefit-card">
                <h4>{isZh ? "AI 企业" : "AI Company"}</h4>
                <ol><li>{isZh ? "保障长期用水许可的稳定性。" : "Achieve stability in long-running water permission."}</li><li>{isZh ? "减轻公众压力。" : "Reduce public pressure."}</li></ol>
              </div>
            </div>
            <div className="data-center-benefit-row">
              <img src={`${import.meta.env.BASE_URL}assets/data-center-benefit-government.png`} width="1528" height="241" alt={isZh ? "地方政府的市政建筑" : "A local government civic building"} loading="lazy" />
              <div className="data-center-benefit-card">
                <h4>{isZh ? "地方政府" : "Local Government"}</h4>
                <ol><li>{isZh ? "维护城市水资源，避免干旱。" : "Maintain urban water resources and avoid drought."}</li><li>{isZh ? "增加科技企业带来的税收。" : "Increase tax revenue from technology enterprises."}</li></ol>
              </div>
            </div>
            <div className="data-center-benefit-row">
              <img src={`${import.meta.env.BASE_URL}assets/data-center-benefit-community.png`} width="1528" height="241" alt={isZh ? "居民社区的住宅街区" : "A residential neighborhood"} loading="lazy" />
              <div className="data-center-benefit-card">
                <h4>{isZh ? "居民社区" : "Resident Community"}</h4>
                <ol><li>{isZh ? "应对水资源枯竭和水费上涨。" : "Address water depletion and higher water bills."}</li><li>{isZh ? "寻求透明的水资源分配。" : "Look for transparent water distribution."}</li></ol>
              </div>
            </div>
          </div>
        </section>
        <section className="data-center-process-section" aria-labelledby="data-center-process-title">
          <h2 id="data-center-process-title">{isZh ? "AI 数据生成流程" : "Process of generating data"}</h2>
          <div className="data-center-process-timeline">
            <svg className="data-center-process-path" viewBox="0 0 100 800" preserveAspectRatio="none" aria-hidden="true">
              <path className="process-dashed-route" d="M75 12 C35 75,-5 145,25 235 S85 345,60 455 S44 650,30 760" />
              <g className="process-route-lights"><circle cx="75" cy="12" r="8" /><circle cx="25" cy="235" r="8" /><circle cx="60" cy="455" r="8" /><path d="M20 750 L40 770 M40 750 L20 770" /></g>
            </svg>
            <ol className="data-center-process-steps">
              <li>
                <img src={`${import.meta.env.BASE_URL}assets/data-center-process-input.png`} width="360" height="242" alt={isZh ? "用户在笔记本电脑上输入数字指令" : "A user entering digital instructions on a laptop"} loading="lazy" />
                <div><h3>{isZh ? "用户输入" : "User Input"}</h3><p>{isZh ? "用户的数字指令被转换为数据包。" : "The user’s digital instructions are converted into data packets."}</p></div>
              </li>
              <li>
                <img src={`${import.meta.env.BASE_URL}assets/data-center-process-gpu.png`} width="360" height="242" alt={isZh ? "数据中心计算设施与能源供应示意图" : "A diagram of data center computing facilities and energy supply"} loading="lazy" />
                <div><h3>{isZh ? "GPU 计算" : "GPU Computing"}</h3><p>{isZh ? "GPU 同时执行浮点运算，并产生大量热量。" : "GPUs perform floating-point operations simultaneously, generating significant heat."}</p></div>
              </li>
              <li>
                <img src={`${import.meta.env.BASE_URL}assets/data-center-process-distribution.png`} width="360" height="242" alt={isZh ? "UPS、配电单元与服务器机架之间的电力分配图" : "Power distribution from a UPS through a PDU to a server rack"} loading="lazy" />
                <div><h3>{isZh ? "算力分配" : "Computing Power Distribution"}</h3><p>{isZh ? "调度器根据资源使用情况，分配最优节点来运行推理任务。" : "The scheduler assigns optimal nodes by resource usage to run inference tasks."}</p></div>
              </li>
              <li>
                <img src={`${import.meta.env.BASE_URL}assets/data-center-process-cooling.png`} width="360" height="242" alt={isZh ? "数据中心冷却设备与蒸发的水汽" : "Data center cooling equipment and evaporating water"} loading="lazy" />
                <div><h3>{isZh ? "散热冷却" : "Thermal Cooling"}</h3><p>{isZh ? "冷却系统每天都会造成大量水资源损耗。" : "The cooling system causes a significant loss of water resources every day."}</p></div>
              </li>
              <li>
                <img src={`${import.meta.env.BASE_URL}assets/data-center-process-model.png`} width="362" height="244" alt={isZh ? "AI 模型生成文本、图像及语音内容的示意画面" : "AI generation of text, images and speech"} loading="lazy" />
                <div><h3>{isZh ? "模型自回归" : "Model Autoregression"}</h3><p>{isZh ? "模型以自回归方式预测下一个词块，从而生成文本与图像。" : "The model autoregressively predicts the next word block to generate text and images."}</p></div>
              </li>
            </ol>
          </div>
        </section>
        </div>
        <section className="data-center-cooling-section" aria-labelledby="data-center-cooling-title">
          <h2 id="data-center-cooling-title">{isZh ? "冷却技术分析" : "Cooling Technique Analysis"}</h2>
          <h3>{isZh ? "现状 — 冷板式冷却系统是最常见的方式" : "Current - The cold plate type cooling system is the most common method"}</h3>
          <p className="cooling-current-copy">{isZh ? "冷却水流入芯片的冷板，在不接触电极的情况下带走芯片产生的热量。更多的水资源损耗发生在与外界接触的一次侧循环中。" : "The condensate water flows into the cooling plate of the chip and removes the heat from the chip without coming into contact with the electrodes. More water waste occurs in the primary side circulation that comes into contact with the outside world."}</p>
          <p className="cooling-water-impact">{isZh ? "在传统冷却塔中，超过 80% 的水会蒸发。每消耗 1 kWh 电力需要 1.2 至 2.0 升水，使数据中心每年的耗水量超过 10 亿升。" : "In traditional cooling towers, over 80% of the water is evaporated. The amount of water required to consume 1 kWh of electricity is 1.2 to 2.0 liters, which results in the data center consuming over 1 billion liters of water annually."}</p>
          <div className="cooling-current-scroll" tabIndex="0" role="group" aria-label={isZh ? "现有冷板冷却系统及芯片细节" : "Current cold plate cooling system and chip detail"}>
            <figure className="cooling-current-figure">
              <div className="cooling-current-stage">
                <img src={`${import.meta.env.BASE_URL}assets/data-center-cooling-system.png`} width="2614" height="972" alt={isZh ? "冷却塔、冷分配单元与服务器冷板之间的一次侧和二次侧循环。橙色表示热水，蓝色表示冷水。" : "Primary and secondary cooling loops linking the cooling tower, cold distribution units and server cold plates. Orange indicates hot water and blue indicates cold water."} loading="lazy" />
                <span className="cooling-leader cooling-tower-leader" aria-hidden="true" />
                <span className="cooling-leader cooling-server-leader" aria-hidden="true" />
                <span className="cooling-leader cooling-chip-leader" aria-hidden="true" />
              </div>
              <div className="cooling-transition">
                <span className="cooling-evaporation-label">{isZh ? "冷却塔中的水蒸发流失" : "Water from the water tower evaporates"}</span>
                <span className="cooling-server-label">{isZh ? "服务器" : "Server"}</span>
                <svg className="cooling-future-arrow" viewBox="0 0 400 300" aria-hidden="true">
                  <defs><linearGradient id="cooling-arrow-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7378a8" stopOpacity="0" /><stop offset="100%" stopColor="#7378a8" stopOpacity=".6" /></linearGradient></defs>
                  <path d="M0 0 C90 50 125 110 150 210 H110 L200 300 L290 210 H250 C275 110 310 50 400 0 Z" fill="url(#cooling-arrow-gradient)" />
                </svg>
                <div className="cooling-chip-detail">
                  <img src={`${import.meta.env.BASE_URL}assets/data-center-cold-plate.png`} width="355" height="374" alt={isZh ? "冷板与芯片的分层细节，显示进液口、出液口和冷却通道。" : "Exploded cold plate and chip detail, showing the inlet, outlet and cooling channels."} loading="lazy" />
                  <span className="cooling-chip-label cooling-plate-label">{isZh ? "冷板" : "Cold Plate"}</span>
                  <span className="cooling-chip-label cooling-inlet-label">{isZh ? "进液口" : "Inlet"}</span>
                  <span className="cooling-chip-label cooling-outlet-label">{isZh ? "出液口" : "Outlet"}</span>
                  <span className="cooling-chip-label cooling-silicon-label">{isZh ? "芯片" : "Chip"}</span>
                </div>
              </div>
            </figure>
          </div>
          <p className="cooling-scroll-hint">{isZh ? "左右滑动查看完整原理图与标注" : "Swipe horizontally to explore the full diagram and labels"}</p>
          <div className="cooling-future-copy">
            <h3>{isZh ? "未来展望 — 零水蒸发技术" : "Future expectations - Zero-Water Evaporation Technology"}</h3>
            <p>{isZh ? <>通过<em>虹吸效应</em>，汽化的制冷剂上升至冷凝器，再在重力与压差的驱动下以冷液形式回流，无需水泵。</> : <>Through <em>siphon effect</em>, the vaporized refrigerant rises up to the condenser and flows down as cool liquid, driven by gravity and pressure difference, without a pump.</>}</p>
          </div>
          <figure className="cooling-refrigerant-figure" tabIndex="0" aria-label={isZh ? "未来制冷剂闭环原理图" : "Future refrigerant closed-loop diagram"}>
            <img src={`${import.meta.env.BASE_URL}assets/data-center-refrigerant-loop.png`} width="1845" height="834" alt={isZh ? "服务器通过蒸发器将热量传递给制冷剂。汽化制冷剂进入冷凝器，通过冷冻水回水和供水进行换热，液化制冷剂返回蒸发器。" : "Server heat passes through an evaporator to vaporized refrigerant, which travels to a condenser connected to chilled water return and supply. Liquefied refrigerant returns to the evaporator."} loading="lazy" />
          </figure>
          <div className="cooling-case-study">
            <img className="cooling-footer-decoration" src={`${import.meta.env.BASE_URL}assets/data-center-cooling-footer.png`} width="2816" height="716" alt="" loading="lazy" />
            <div className="cooling-case-row">
              <div className="cooling-case-copy">
                <h3>{isZh ? "案例研究 — 微软零耗水冷却" : "Case Study - Microsoft zero-water"}</h3>
                <p>{isZh ? "微软正使用液冷技术，让水在闭环系统中循环利用。" : "Microsoft is using liquid cooling technology to utilize water in a closed-loop cycle."}</p>
              </div>
              <img className="cooling-case-image" src={`${import.meta.env.BASE_URL}assets/data-center-microsoft-cooling.png`} width="2032" height="554" alt={isZh ? "微软闭环液冷数据中心的建筑剖面示意图" : "A cutaway rendering of Microsoft’s closed-loop liquid-cooled data center"} loading="lazy" />
            </div>
          </div>
        </section>
        <section className="data-center-concept-section" aria-labelledby="data-center-concept-title">
          <h2 id="data-center-concept-title">{isZh ? "概念" : "Concept"}</h2>
          <p className="data-center-concept-lead">{isZh ? "将 AI 数据中心重新构想为闭环资源系统：生产能源、减少水资源损失，并将价值重新回馈社会。" : "Reframing AI data centers as a closed-loop resource system that generates energy, minimizes water loss, and redistributes value back to society."}</p>
          <div className="data-center-principles-scroll" tabIndex="0" role="group" aria-label={isZh ? "设计原则：建筑方向包含模块化布局、高度和散热；能源方向包含零水蒸发与太阳能发电。" : "Design principles: construction includes modular layout, height and heat dissipation; energy includes zero-water evaporation and solar power generation."}>
            <div className="data-center-principles-map">
              <svg viewBox="0 0 900 460" preserveAspectRatio="none" aria-hidden="true">
                <path d="M200 245 H300 M300 120 V363 M300 120 H340 M300 363 H340 M500 120 H550 M550 25 V215 M550 25 H575 M550 120 H575 M550 215 H575 M460 363 H545 M545 335 V430 M545 335 H575 M545 430 H575" />
              </svg>
              <span className="principle-node principle-root">{isZh ? "设计原则" : "Design Principles"}</span>
              <img className="principle-building" src={`${import.meta.env.BASE_URL}assets/data-center-concept-model.png`} width="370" height="326" alt={isZh ? "带有外部管道的模块化数据中心建筑概念模型" : "A modular data center building concept with external pipework"} loading="lazy" />
              <span className="principle-node principle-construction">{isZh ? "建筑" : "Construction"}</span>
              <span className="principle-node principle-modular">{isZh ? "模块化布局" : "Modular layout"}</span>
              <span className="principle-node principle-height">{isZh ? "高度" : "Height"}</span>
              <span className="principle-node principle-heat">{isZh ? "散热" : "Heat Dissipation"}</span>
              <span className="principle-node principle-energy">{isZh ? "能源" : "Energy"}</span>
              <span className="principle-node principle-water">{isZh ? "零水蒸发" : "Zero-water Evaporation"}</span>
              <span className="principle-node principle-solar">{isZh ? "太阳能发电" : "Solar Power Generation"}</span>
            </div>
          </div>
          <div className="data-center-resource-scroll" tabIndex="0" role="group" aria-label={isZh ? "闭环资源关系图，连接未来节能工厂、多余发电、社区与本地生产回馈，以及土地和初始水资源。" : "Closed-loop resource relationships connecting a future energy-saving factory, excess electricity, community and local-production benefits, and land and initial water resources."}>
            <div className="data-center-resource-map">
              <svg viewBox="0 0 900 300" preserveAspectRatio="none" aria-hidden="true">
                <defs><marker id="concept-resource-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 Z" /></marker></defs>
                <path className="resource-link" d="M170 110 L210 81 L250 52" /><path className="resource-link" d="M660 100 L610 76 L560 52" />
                <path className="resource-link" d="M170 180 L200 215 L230 250" /><path className="resource-link" d="M660 190 L620 220 L580 250" />
              </svg>
              <span className="resource-node resource-factory">{isZh ? "未来节能工厂" : "Future energy-saving factory"}</span>
              <span className="resource-node resource-electricity">{isZh ? "产生的多余电力" : "Excess electricity generated"}</span>
              <span className="resource-node resource-community">{isZh ? "回馈社区与本地生产" : "Give back to the community and local production"}</span>
              <span className="resource-node resource-land">{isZh ? "土地与初始水资源" : "Land and initial water resources"}</span>
            </div>
          </div>
          <p className="data-center-concept-hint">{isZh ? "左右滑动查看完整关系图" : "Swipe horizontally to view the full maps"}</p>
        </section>
        <section className="data-center-solar-section" aria-labelledby="data-center-solar-title">
          <h2 id="data-center-solar-title">{isZh ? "太阳辐射研究" : "Research On Solar Radiation"}</h2>
          <h3>{isZh ? "季节" : "Season"}</h3>
          <div className="data-center-solar-season">
            <ul className="data-center-solar-findings">
              <li>{isZh ? "图森夏季正午的直射辐照较强；冬季的散射辐射更多。" : "Strong midday direct irradiance in Tucson’s summers; more diffuse radiation in winter."}</li>
              <li>{isZh ? "部署朝南的光伏阵列，优先采用单轴跟踪器。" : "Deploy south-facing PV arrays with priority on single-axis trackers."}</li>
              <li>{isZh ? "为阵列预留充足间距，避免正午相互遮挡。" : "Arrange sufficient array spacing to prevent midday shading."}</li>
            </ul>
            <div className="data-center-solar-chart-scroll" tabIndex="0" role="group" aria-label={isZh ? "图森季节辐照热力图" : "Tucson seasonal irradiance heatmaps"}>
              <img src={`${import.meta.env.BASE_URL}assets/data-center-solar-heatmaps.png`} width="1089" height="477" alt={isZh ? "图森直接法向辐照度（DNI）与全球水平辐照度（GHI）热力图，按月份与一天中的小时展示辐照分布。" : "Tucson direct normal irradiance (DNI) and global horizontal irradiance (GHI) heatmaps, showing irradiance by month and hour of day."} loading="lazy" />
            </div>
          </div>
          <p className="data-center-solar-summary">{isZh ? "日照分析显示，屋顶、西立面和南立面全年都能获得强烈日照。在这些表面安装光伏板，可提高发电量。" : "Solar analysis shows the roof, west, and south facades get intense sunlight year-round. Installing panels on these surfaces can boost power generation."}</p>
          <p className="data-center-solar-efficiency-label">{isZh ? "各立面的工作效率：" : "Working Efficiency per facade:"}</p>
          <dl className="data-center-solar-efficiency">
            <div><dt>{isZh ? "屋顶" : "Top"}</dt><dd>70–85%</dd></div>
            <div><dt>{isZh ? "西南立面" : "Southwest facade"}</dt><dd>15–25%</dd></div>
            <div><dt>{isZh ? "西立面" : "West facade"}</dt><dd>0–10%</dd></div>
            <div><dt>{isZh ? "北立面与东立面" : "North and east"}</dt><dd>0%</dd></div>
          </dl>
          <div className="data-center-solar-simulation-scroll" tabIndex="0" role="group" aria-label={isZh ? "建筑日照模拟对比图" : "Building solar simulation comparisons"}>
            <img src={`${import.meta.env.BASE_URL}assets/data-center-solar-simulations.png`} width="2346" height="696" alt={isZh ? "两排共八张建筑日照模拟图：上排对比直接日照时长，下排对比辐射分布，保留原图中的太阳轨迹、朝向和色标。" : "Eight building solar simulations in two rows: direct sun hours above and radiation distribution below, retaining the original sun paths, orientations and color scales."} loading="lazy" />
          </div>
          <p className="data-center-solar-hint">{isZh ? "左右滑动查看完整热力图与日照模拟" : "Swipe horizontally to view the full heatmaps and simulations"}</p>
        </section>
        <section className="data-center-design-section" aria-labelledby="data-center-design-title">
          <h2 id="data-center-design-title">{isZh ? "设计" : "Design"}</h2>
          <div className="data-center-design-grid">
            <div className="data-center-design-development">
              <h3>{isZh ? "从草图到三维建模" : "From Sketching To 3D Modeling"}</h3>
              <p>{isZh ? "综合厂区布局中的多种要素，我设计了最小可行方案。" : "Considering the many elements in the plant layout, I designed a minimum viable plan."}</p>
              <img className="data-center-design-render" src={`${import.meta.env.BASE_URL}assets/data-center-design-render.png`} width="1856" height="1524" alt={isZh ? "数据中心建筑的透视线稿，展示外部管路、楼层和楼梯。" : "A perspective architectural drawing of the data center, showing external pipework, floors and stairs."} loading="lazy" />
              <div className="data-center-design-views">
                <figure><figcaption>{isZh ? "正视图" : "Front"}</figcaption><img src={`${import.meta.env.BASE_URL}assets/data-center-design-front.png`} width="496" height="378" alt={isZh ? "数据中心正视图" : "Data center front elevation"} loading="lazy" /></figure>
                <figure><figcaption>{isZh ? "左视图" : "Left"}</figcaption><img src={`${import.meta.env.BASE_URL}assets/data-center-design-left.png`} width="510" height="336" alt={isZh ? "数据中心左侧立面" : "Data center left elevation"} loading="lazy" /></figure>
                <figure><figcaption>{isZh ? "俯视图" : "Top"}</figcaption><img src={`${import.meta.env.BASE_URL}assets/data-center-design-top.png`} width="552" height="346" alt={isZh ? "数据中心屋顶俯视图" : "Data center roof plan"} loading="lazy" /></figure>
              </div>
            </div>
            <div className="data-center-design-cutaway-column">
              <div className="data-center-design-cutaway">
                <div className="design-thermosyphon-notes">
                  <p className="design-loop-title">{isZh ? "热虹吸循环" : "Thermosyphon loop"}</p>
                  <div className="design-pipe-notes">
                    <p className="design-pipe-hot"><strong>{isZh ? "红色管道：" : "Red pipes:"}</strong>{isZh ? "无需水泵，将热量带出数据中心。" : "Move the heat out of the data center without a pump."}</p>
                    <p className="design-pipe-cold"><strong>{isZh ? "蓝色管道：" : "Blue pipes:"}</strong>{isZh ? "液态制冷剂依靠重力回流。" : "Liquid refrigerant flows back down by gravity."}</p>
                  </div>
                </div>
                <div className="data-center-design-section-scroll" tabIndex="0" role="group" aria-label={isZh ? "热虹吸冷却与建筑剖面" : "Thermosyphon cooling and building section"}>
                  <div className="data-center-design-cutaway-figure">
                  <img src={`${import.meta.env.BASE_URL}assets/data-center-design-section.png`} width="2136" height="1818" alt={isZh ? "双层数据中心剖面：红蓝管道连接屋顶冷却设备与服务器，两层设备间上方设通风空间，地下管道沿底部布置。" : "A two-floor data center section with red and blue pipes connecting rooftop cooling equipment to the server rooms, ventilation above, and pipework below ground."} loading="lazy" />
                  <span className="design-ventilation-label">{isZh ? "通风" : "Ventilation"}</span>
                  <span className="design-underground-label">{isZh ? "地下水管" : "Underground water pipe"}</span>
                  </div>
                </div>
                <p className="design-evaporation-note">{isZh ? "蒸发后形成热空气与冷液，冷液随后用于冷却芯片。" : "Evaporation separates into hot air and cold liquid. The latter then cools the chips."}</p>
              </div>
            </div>
            <div className="data-center-design-exploded-scroll" tabIndex="0" role="group" aria-label={isZh ? "数据中心结构爆炸图" : "Data center exploded assembly"}>
              <div className="data-center-design-exploded">
                <img src={`${import.meta.env.BASE_URL}assets/data-center-design-exploded.png`} width="1242" height="1963" alt={isZh ? "数据中心结构爆炸图：屋顶太阳能板与冷凝器、通风空间、双层机房、两侧太阳能板及地基。" : "An exploded data center assembly with rooftop solar panels and condensers, an air-exchange space, two machine-room floors, side-mounted solar panels and the foundation."} loading="lazy" />
                <span className="design-assembly-label design-assembly-roof">{isZh ? "太阳能板与冷凝器" : "Solar Panels and Condenser"}</span>
                <span className="design-assembly-label design-assembly-air">{isZh ? "空气交换空间" : "Room for Air Exchange"}</span>
                <span className="design-assembly-label design-assembly-machine">{isZh ? "机房" : "Machine Room"}</span>
                <span className="design-assembly-label design-assembly-solar">{isZh ? "太阳能板" : "Solar Panels"}</span>
              </div>
            </div>
          </div>
          <p className="data-center-design-hint">{isZh ? "左右滑动查看完整剖面、结构与标注" : "Swipe horizontally to view the full section, assembly and labels"}</p>
        </section>
        <div className="data-center-showcase-grid">
          <section className="data-center-scenario-section" aria-labelledby="data-center-scenario-title">
            <h2 id="data-center-scenario-title">{isZh ? "场景" : "Scenario"}</h2>
            <div className="data-center-scenario-stage">
              <img className="data-center-scenario-image" src={`${import.meta.env.BASE_URL}assets/data-center-scenario.png`} width="5230" height="1738" alt={isZh ? "数据中心坐落于干旱山地景观中，建筑外部布置冷却管路和倾斜太阳能板。" : "The data center in an arid mountain landscape, with external cooling pipework and angled solar panels."} loading="lazy" />
              <ol className="data-center-scenario-cards">
                <li><span aria-hidden="true">01</span><div><p>{isZh ? "冷却系统" : "Cooling System"}</p><p>{isZh ? "太阳能发电" : "Solar Panel Generation"}</p></div></li>
                <li><span aria-hidden="true">02</span><div><p>{isZh ? "零用水" : "Zero Water Use"}</p><p className="scenario-card-note">{isZh ? "低电力消耗" : "Low Electric Consumption"}</p></div></li>
                <li><span aria-hidden="true">03</span><div><p>{isZh ? "数据中心" : "Data Center"}</p><p className="scenario-card-note">{isZh ? "可持续水循环" : "Sustainable Water Loop"}</p></div></li>
                <li><span aria-hidden="true">04</span><div><p>{isZh ? "AI 训练" : "AI Training"}</p><p>{isZh ? "工业生产分配" : "Manufacturing Distribution"}</p><p>{isZh ? "居民分配" : "Residential Distribution"}</p></div></li>
              </ol>
            </div>
          </section>
          <section className="data-center-model-section" aria-labelledby="data-center-model-title">
            <h2 id="data-center-model-title">{isZh ? "模型" : "Model"}</h2>
            <div className="data-center-model-stage">
              <img className="data-center-model-backdrop" src={`${import.meta.env.BASE_URL}assets/data-center-scenario.png`} width="5230" height="1738" alt="" loading="lazy" />
              <div className="data-center-model-collage">
                <img className="data-center-model-photo model-photo-overall" src={`${import.meta.env.BASE_URL}assets/data-center-model-overall.png`} width="1059" height="706" alt={isZh ? "完整实体模型，展示建筑框架、太阳能板和场地底座。" : "The complete physical model, showing its structural frame, solar panels and landscape base."} loading="lazy" />
                <img className="data-center-model-photo model-photo-entrance" src={`${import.meta.env.BASE_URL}assets/data-center-model-entrance.png`} width="646" height="654" alt={isZh ? "模型入口细节，展示架空底层、人物比例和场地台阶。" : "Entrance detail showing the raised ground floor, scale figures and landscape steps."} loading="lazy" />
                <img className="data-center-model-photo model-photo-rear" src={`${import.meta.env.BASE_URL}assets/data-center-model-rear.png`} width="778" height="454" alt={isZh ? "模型背面，展示围护板件与外露结构。" : "The rear of the model, showing cladding panels and exposed structure."} loading="lazy" />
                <img className="data-center-model-photo model-photo-detail" src={`${import.meta.env.BASE_URL}assets/data-center-model-detail.png`} width="490" height="680" alt={isZh ? "模型立面近景，展示太阳能板支架、框架和竖向板件。" : "A close view of the model facade, solar-panel supports, framing and vertical panels."} loading="lazy" />
                <ol className="data-center-model-materials">
                  <li>{isZh ? "PVC 发泡板底座" : "PVC foam board base"}</li>
                  <li>{isZh ? "3D 打印结构件" : "3D-printed structural parts"}</li>
                  <li>{isZh ? "切割 ABS 板件" : "Cut ABS panels"}</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
        <footer className="project-paper-footer"><a href="#works">← {isZh ? "返回精选作品" : "Back to selected work"}</a></footer>
      </article>
    </main>
  );

  if (isNexusPage) return (
    <main className="project-detail">
      <img className="project-background" src={`${import.meta.env.BASE_URL}assets/nexus-background.png`} alt="" />
      <header className="detail-header">
        <a href="#works" className="detail-back">← {isZh ? "返回作品" : "Back to work"}</a>
        <div className="language-switch" role="group" aria-label={isZh ? "切换语言" : "Language"}>
          <button type="button" lang="en" aria-pressed={!isZh} onClick={() => setLanguage("en")}>EN</button>
          <button type="button" lang="zh-CN" aria-pressed={isZh} onClick={() => setLanguage("zh")}>中文</button>
        </div>
      </header>
      <section className="detail-intro" aria-label={isZh ? "NEXUS 项目封面" : "NEXUS project cover"}>
        <a href="#/projects/nexus/content" className="detail-scroll" onClick={(event) => {
          event.preventDefault();
          document.getElementById("nexus-content")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }}>{isZh ? "向下浏览" : "Scroll to explore"} <span aria-hidden="true">↓</span></a>
      </section>
      <article className="project-paper" id="nexus-content" aria-labelledby="nexus-title">
        <div className="project-paper-heading">
          <p>{t("Wearable System · 2026")}</p>
          <h1 id="nexus-title">NEXUS</h1>
          <h2>{isZh ? "康复系统" : "Rehabilitation System"}</h2>
          <div className="nexus-project-meta" aria-label={isZh ? "作者、项目时间与个人贡献" : "Authors, project dates and contribution"}>
            <p className="nexus-project-byline"><span>Tianyang Feng, Ke Zhang</span><span><time dateTime="2026-07">2026.07</time>–<time dateTime="2026-10">2026.10</time></span></p>
            <p className="nexus-project-contribution">{isZh ? "贡献：材料研究与硬件开发" : "Contribution: Material Research & Hardware Development"}</p>
          </div>
        </div>
        <figure className="project-video">
          <iframe src="https://www.youtube-nocookie.com/embed/rakRKz4GoYA" title={isZh ? "NEXUS 产品演示视频" : "NEXUS product demonstration"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <figcaption><a href="https://youtu.be/rakRKz4GoYA" target="_blank" rel="noreferrer">{isZh ? "无法播放？在 YouTube 上观看 ↗" : "Having trouble playing? Watch on YouTube ↗"}</a></figcaption>
        </figure>
        <section className="nexus-background-section" aria-labelledby="nexus-background-title">
          <h2 id="nexus-background-title">01 {isZh ? "背景" : "Background"}</h2>
          <p className="nexus-background-lead">{isZh ? "腕部与踝部骨折患者面临漫长的康复周期" : "Wrist and ankle fracture patients facing long recovery periods"}</p>
          <div className="nexus-statistics">
            <img src={`${import.meta.env.BASE_URL}assets/nexus-background-cases.png`} width="690" height="462" alt={isZh ? "每年约 200 万例" : "2 million cases annually"} loading="lazy" />
            <img src={`${import.meta.env.BASE_URL}assets/nexus-background-fractures.png`} width="694" height="462" alt={isZh ? "占全部骨折的六分之一" : "1/6 of all fractures"} loading="lazy" />
            <img src={`${import.meta.env.BASE_URL}assets/nexus-background-patients.png`} width="692" height="462" alt={isZh ? "老年人与运动员是主要高发人群" : "Elderly and athletes as key high-incidence groups"} loading="lazy" />
          </div>
          <h3>{isZh ? "研究方向" : "Research Direction"}</h3>
          <ul className="nexus-research-directions">
            <li>{isZh ? "数据与评估" : "Data and Evaluation"}</li>
            <li>{isZh ? "患者体验" : "Patient Experience"}</li>
            <li>{isZh ? "居家康复" : "Home-based Rehabilitation"}</li>
          </ul>
          <p className="nexus-recovery-copy">{isZh ? "在急性治疗阶段，医生的直接介入与专业设备对精准治疗至关重要。只有在患者病情稳定后，才能逐步转向强度更低、更灵活的康复照护。" : "During critical care, hands-on doctors and professional equipment are essential for accurate treatment. Only after patients stabilize can we transition to less intensive, more flexible care."}</p>
          <figure className="nexus-recovery-figure">
            <img src={`${import.meta.env.BASE_URL}assets/nexus-recovery-phases.png`} width="2292" height="461" alt={isZh ? "骨折康复的四个阶段及骨骼状态：急性期、修复期、重塑期、功能恢复期。" : "Four fracture recovery phases and bone status: Acute Phase, Repair Phase, Remodeling Phase and Functional Recovery."} loading="lazy" />
            <figcaption>{isZh ? "急性期 → 修复期 → 重塑期 → 功能恢复期" : "Acute Phase → Repair Phase → Remodeling Phase → Functional Recovery"}</figcaption>
          </figure>
          <figure className="nexus-system-analysis">
            <img src={`${import.meta.env.BASE_URL}assets/nexus-medical-system-analysis.png`} width="2202" height="1893" alt={isZh ? "医疗系统与产品分析：以软件与硬件为轴，比较 Hinge Health、Ortholive、Force Therapeutics、Select Medical、Mayo Clinic，以及 Light Splint、Modular Airbags 和 Cast21 splint。设计机会是整合硬件与软件，实现精准照护。" : "Medical system and product analysis: a software–hardware map comparing Hinge Health, Ortholive, Force Therapeutics, Select Medical, Mayo Clinic, Light Splint, Modular Airbags and Cast21 splint. Opportunity: integrated hardware and software for precise care."} loading="lazy" />
            <figcaption>{isZh ? "梳理康复流程，为软硬件协同的自适应设备寻找定位。设计机会：整合硬件与软件，实现精准照护。" : "Mapping rehabilitation workflows to position an adaptive hardware–software device. Opportunity: integrated hardware and software for precise care."}</figcaption>
          </figure>
        </section>
        <section className="nexus-observation-section" aria-labelledby="nexus-observation-title">
          <h2 id="nexus-observation-title">02 {isZh ? "线上观察" : "Online Observation"}</h2>
          <p className="nexus-observation-intro">{isZh ? "分析了 14 篇小红书上的美国患者经历" : "Analyzed 14 Rednote patient experiences (US)"}</p>
          <table className="nexus-observation-table">
            <thead><tr>
              <th scope="col">{isZh ? "关键词" : "Keywords"}</th>
              <th scope="col">{isZh ? "康复时机" : "Rehabilitation Timing"}</th>
              <th scope="col">{isZh ? "功能重建" : "Functional Rebuilding"}</th>
              <th scope="col">{isZh ? "流程与安排" : "Process & Logistics"}</th>
            </tr></thead>
            <tbody>
              <tr className="nexus-observation-cases">
                <th scope="row">{isZh ? "具体案例" : "Detailed Case"}</th>
                <td><span className="nexus-observation-mobile-label">{isZh ? "康复时机" : "Rehabilitation Timing"}</span><img src={`${import.meta.env.BASE_URL}assets/nexus-observation-timing.png`} width="670" height="348" alt={isZh ? "案例摘录：休斯顿骨折自费治疗费用与就诊经历" : "Patient excerpt: out-of-pocket fracture treatment in Houston"} loading="lazy" /></td>
                <td><span className="nexus-observation-mobile-label">{isZh ? "功能重建" : "Functional Rebuilding"}</span><img src={`${import.meta.env.BASE_URL}assets/nexus-observation-function.png`} width="690" height="350" alt={isZh ? "案例摘录：滑雪受伤后在北美医疗系统中的治疗经历" : "Patient excerpt: treatment in the North American healthcare system after a skiing injury"} loading="lazy" /></td>
                <td><span className="nexus-observation-mobile-label">{isZh ? "流程与安排" : "Process & Logistics"}</span><img src={`${import.meta.env.BASE_URL}assets/nexus-observation-safety.png`} width="744" height="346" alt={isZh ? "案例摘录：美国骨科手术后的康复训练经历" : "Patient excerpt: rehabilitation after orthopedic surgery in the USA"} loading="lazy" /></td>
              </tr>
              <tr className="nexus-observation-pain">
                <th scope="row">{isZh ? "痛点" : "Pain Point"}</th>
                <td><span className="nexus-observation-mobile-label">{isZh ? "康复时机" : "Rehabilitation Timing"}</span>{isZh ? "专业指导介入滞后" : "Delayed Professional Guidance"}</td>
                <td><span className="nexus-observation-mobile-label">{isZh ? "功能重建" : "Functional Rebuilding"}</span>{isZh ? "低估肌肉萎缩" : "Underestimated Muscle Atrophy"}</td>
                <td><span className="nexus-observation-mobile-label">{isZh ? "流程与安排" : "Process & Logistics"}</span>{isZh ? "对康复安全高度焦虑" : "High Safety Anxiety"}</td>
              </tr>
              <tr className="nexus-observation-opportunities">
                <th scope="row">{isZh ? "设计机会" : "Opportunities"}</th>
                <td><h3>{isZh ? "早期专业指导的缺口" : "Gap in Early Professional Guidance"}</h3><p>{isZh ? "正式医疗流程缺乏细致指导。" : "Official medical protocol lacks detailed guidance."}</p></td>
                <td><h3>{isZh ? "功能训练的认知偏差" : "Cognitive Bias on Functional Training"}</h3><p>{isZh ? "患者高估了康复过程的复杂程度。" : "Patients overestimate their recovery complexity."}</p></td>
                <td><h3>{isZh ? "对安全保障的需求" : "Demand for Safety Assurance"}</h3><p>{isZh ? "患者的不信任反映出对康复安全的高度焦虑。" : "Patient distrust reflects high anxiety about rehab safety."}</p></td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="nexus-concept-section" aria-labelledby="nexus-concept-title">
          <h2 id="nexus-concept-title">03 {isZh ? "设计概念" : "Design Concept"}</h2>
          <figure>
            <img src={`${import.meta.env.BASE_URL}assets/nexus-design-concept.png`} alt={isZh ? "在线评估系统导图：云端、医生端、医生、智能康复夹板、患者与制造商之间的运动数据、训练计划、康复建议和训练报告流转。" : "Online assessment system linking the cloud, physician portal, physician, smart rehabilitation splint, patient and manufacturer through motion data, training plans, rehabilitation suggestions and reports."} loading="lazy" />
            <figcaption>{isZh ? "这项线上服务通过智能夹板连接医生与患者，提供骨折后的远程康复服务，减少反复到院就诊。" : "This online service connects doctors and patients through the smart splint to deliver remote post-fracture rehabilitation and cut repeated clinic visits."}</figcaption>
          </figure>
        </section>
        <section className="nexus-testing-section" aria-labelledby="nexus-testing-title">
          <h2 id="nexus-testing-title">04 {isZh ? "技术测试" : "Technical Testing"}</h2>
          <div className="nexus-testing-intro">
            <p>{isZh ? <>鼠妇的独特结构使其能够高效弯曲，为仿生设计提供了灵感。我尝试<strong>使用硅胶</strong>制作类似的结构。</> : <>The unique structure of pill bugs enables them to bend efficiently, providing inspiration for biomimetic design. I attempted to create a similar structure <strong>using silicone.</strong></>}</p>
            <img src={`${import.meta.env.BASE_URL}assets/nexus-test-inspiration.png`} width="1082" height="400" alt={isZh ? "硅胶气囊原型与鼠妇的分节结构对照" : "Silicone airbag prototype alongside the segmented structure of pill bugs"} loading="lazy" />
          </div>
          <h3 className="nexus-experiments-title">{isZh ? "实验" : "Experiments"}</h3>
          <div className="nexus-experiments-grid">
            <section aria-labelledby="nexus-movement-title">
              <h4 id="nexus-movement-title">{isZh ? "1. 硅胶气囊辅助手腕进行康复动作。" : "1. Silicone airbags facilitate wrist rehabilitation movements."}</h4>
              <div className="nexus-wrist-test">
                <img src={`${import.meta.env.BASE_URL}assets/nexus-test-wrist-1.png`} width="464" height="506" alt={isZh ? "手腕背侧硅胶气囊测试，初始姿态" : "Dorsal wrist silicone airbag test, initial position"} loading="lazy" />
                <img src={`${import.meta.env.BASE_URL}assets/nexus-test-wrist-2.png`} width="452" height="506" alt={isZh ? "手腕背侧硅胶气囊测试，弯曲姿态" : "Dorsal wrist silicone airbag test, bent position"} loading="lazy" />
                <div className="nexus-test-note"><p className="nexus-test-angles">3.21° — 73.53°</p><p>{isZh ? "在标准康复动作测试中，调整气泵的工作时间、压力等参数。" : "I adjusted the working time, pressure and other air-pump parameters during standard rehabilitation movements."}</p></div>
              </div>
              <div className="nexus-wrist-test">
                <img src={`${import.meta.env.BASE_URL}assets/nexus-test-wrist-3.png`} width="464" height="504" alt={isZh ? "手腕掌侧硅胶气囊测试，初始姿态" : "Palmar wrist silicone airbag test, initial position"} loading="lazy" />
                <img src={`${import.meta.env.BASE_URL}assets/nexus-test-wrist-4.png`} width="452" height="506" alt={isZh ? "手腕掌侧硅胶气囊测试，弯曲姿态" : "Palmar wrist silicone airbag test, bent position"} loading="lazy" />
                <div className="nexus-test-note"><p className="nexus-test-angles">0.12° — 0.12°</p><p>{isZh ? "数量更少、体积更大的气囊能够更快地促成大幅度动作，反之亦然。" : "Fewer but larger airbags can facilitate large-scale movements quickly, and vice versa."}</p></div>
              </div>
            </section>
            <section aria-labelledby="nexus-comparison-title">
              <h4 id="nexus-comparison-title">{isZh ? "2. 康复气囊对腕屈曲与腕伸展的影响。" : "2. Effect of the rehabilitation airbag on wrist flexion and extension."}</h4>
              <figure className="nexus-testing-chart"><img src={`${import.meta.env.BASE_URL}assets/nexus-test-chart.png`} width="1146" height="956" alt={isZh ? "腕屈曲与腕伸展实验曲线：橙线表示未使用康复设备，灰线表示使用康复设备；横轴为时间（秒），纵轴为角度。" : "Wrist flexion and extension experiment curves: orange represents without rehabilitation equipment; gray represents with equipment. Horizontal axis: time in seconds; vertical axis: angle in degrees."} loading="lazy" /></figure>
            </section>
          </div>
        </section>
        <section className="nexus-analysis-section" aria-labelledby="nexus-analysis-title">
          <div className="nexus-analysis-paper">
            <h2 id="nexus-analysis-title">05 {isZh ? "设计分析" : "Design Analysis"}</h2>
            <div className="nexus-analysis-development">
              <section className="nexus-analysis-sketch">
                <h3>{isZh ? "草图探索" : "Sketch"}</h3>
                <img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-sketch.png`} alt={isZh ? "手部与腕部夹板的形态、绑带和气囊布局草图" : "Sketches exploring splint forms, straps and airbag placement around the hand and wrist"} loading="lazy" />
                <p>{isZh ? "探索不同面料与组合方式，寻找气动效率更高的方案。" : "Explore various fabrics and combinations to find the solution with the highest pneumatic efficiency."}</p>
              </section>
              <section className="nexus-analysis-process">
                <h3>{isZh ? "制作流程" : "Process"}</h3>
                <div className="nexus-process-images">
                  <img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-process-code.png`} alt={isZh ? "编写 Arduino 气泵控制程序" : "Write Arduino air pump program"} loading="lazy" />
                  <img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-process-mold.png`} alt={isZh ? "打印气囊模具" : "Print the airbag mold"} loading="lazy" />
                  <img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-process-silicone.png`} alt={isZh ? "硅胶翻模制作" : "Cast the silicone"} loading="lazy" />
                </div>
              </section>
            </div>
            <section className="nexus-analysis-prototypes">
              <h3>{isZh ? "原型迭代" : "Prototype Iteration"}</h3>
              <p>{isZh ? "通过多轮手臂佩戴测试，评估气囊充气、舒适度、稳定性与使用便利性。" : "Multiple prototypes were tested on-arm to evaluate airbag inflation, comfort, stability, and ease of use."}</p>
              <div className="nexus-prototype-images">
                <figure><img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-prototype-straps.png`} alt={isZh ? "手臂绑带佩戴测试" : "On-arm strap fitting test"} loading="lazy" /><figcaption>{isZh ? "绑带与贴合" : "Straps & fit"}</figcaption></figure>
                <figure><img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-prototype-sewing.png`} alt={isZh ? "使用缝纫机制作织物原型" : "Sewing the fabric prototype"} loading="lazy" /><figcaption>{isZh ? "面料与缝制" : "Fabric & construction"}</figcaption></figure>
                <figure><img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-prototype-worn.png`} alt={isZh ? "手腕夹板原型的实际佩戴" : "Wearing the wrist splint prototype"} loading="lazy" /><figcaption>{isZh ? "佩戴与验证" : "Wear & evaluation"}</figcaption></figure>
              </div>
              <p>{isZh ? "每轮迭代都推动了气囊尺寸、绑带张力与内部走线的优化，使粗略模型逐步发展为可穿戴的功能系统。" : "Each iteration informed refinements in airbag size, strap tension, and internal routing, gradually moving from a rough mock-up to a wearable functional system."}</p>
            </section>
          </div>
          <div className="nexus-analysis-system">
            <h3>{isZh ? "系统架构" : "System Architecture"}</h3>
            <div className="nexus-architecture-grid">
              <img className="nexus-architecture-arm" src={`${import.meta.env.BASE_URL}assets/nexus-analysis-architecture.png`} alt={isZh ? "智能夹板系统结构图，标注七个组件的位置" : "Smart splint system architecture with seven numbered components"} loading="lazy" />
              <div className="nexus-architecture-diagrams">
                <figure><img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-angles.png`} alt={isZh ? "手腕运动角度示意：60°、90°、120°" : "Wrist movement angles: 60°, 90°, 120°"} loading="lazy" /><figcaption>{isZh ? "手腕运动范围与训练角度" : "Wrist Motion Range & Training Angles"}</figcaption></figure>
                <figure><img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-pneumatic.png`} alt={isZh ? "双气泵与双气囊的交叉连接示意" : "Cross-connected dual pumps and airbags"} loading="lazy" /><figcaption>{isZh ? "气动控制逻辑" : "Pneumatic Control Logic"}</figcaption></figure>
              </div>
              <ol className="nexus-system-components">
                <li>{isZh ? "加速度传感器追踪手腕运动。" : "Acceleration sensor tracks wrist movement."}</li>
                <li>{isZh ? "气囊在手套内部充气。" : "Airbag inflates inside the glove."}</li>
                <li>{isZh ? "气管连接气囊，辅助手部运动。" : "Air pipes connect to airbags for hand movement."}</li>
                <li>{isZh ? "锂电池为气泵供电。" : "Lithium batteries power the pumps."}</li>
                <li>{isZh ? "双气泵控制开关状态。" : "Dual air pumps control the on/off state."}</li>
                <li>{isZh ? "驱动模块控制气泵。" : "Drive module controls the pumps."}</li>
                <li>{isZh ? "Arduino Nano 管理整个程序，包括康复辅助与阻力训练。" : "Arduino Nano manages the entire program, including recovery assistance and resistance."}</li>
              </ol>
            </div>
            <section className="nexus-analysis-programming">
              <h3>{isZh ? "程序开发" : "Programming"}</h3>
              <div className="nexus-program-images">
                <figure><img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-program-1.png`} alt={isZh ? "Arduino 程序截图：气泵切换、加速度读取与角度计算" : "Arduino code: pump switching, acceleration readings and angle calculation"} loading="lazy" /><figcaption>{isZh ? "气泵控制与角度采集" : "Pump control & angle readings"}</figcaption></figure>
                <figure><img src={`${import.meta.env.BASE_URL}assets/nexus-analysis-program-2.png`} alt={isZh ? "Arduino 程序截图：角度校准与串口状态输出" : "Arduino code: angle calibration and serial status output"} loading="lazy" /><figcaption>{isZh ? "校准与状态监测" : "Calibration & status monitoring"}</figcaption></figure>
              </div>
            </section>
          </div>
        </section>
        <section className="nexus-wearing-section" aria-labelledby="nexus-wearing-title">
          <h2 id="nexus-wearing-title">06 {isZh ? "实际佩戴展示" : "Real-life Wearing Effect Presentation"}</h2>
          <div className="nexus-wearing-details">
            <img className="nexus-wearing-full" src={`${import.meta.env.BASE_URL}assets/nexus-wearing-full.png`} width="912" height="1398" alt={isZh ? "NEXUS 完整佩戴展示：手套、气管与手臂控制模块" : "Full NEXUS fit showing the glove, air tubes and arm-mounted control modules"} loading="lazy" />
            <div className="nexus-wearing-closeups">
              <div className="nexus-wearing-wrists">
                <img src={`${import.meta.env.BASE_URL}assets/nexus-wearing-wrist-1.png`} width="536" height="672" alt={isZh ? "手腕佩戴细节，气囊状态一" : "Wrist fit detail, first airbag state"} loading="lazy" />
                <img src={`${import.meta.env.BASE_URL}assets/nexus-wearing-wrist-2.png`} width="504" height="672" alt={isZh ? "手腕佩戴细节，气囊状态二" : "Wrist fit detail, second airbag state"} loading="lazy" />
              </div>
              <img className="nexus-wearing-hardware" src={`${import.meta.env.BASE_URL}assets/nexus-wearing-hardware.png`} width="1092" height="676" alt={isZh ? "半透明控制模块、绑带与气管的佩戴特写" : "Close-up of translucent control modules, straps and air tubes worn on the arm"} loading="lazy" />
            </div>
          </div>
          <div className="nexus-wearing-lifestyle">
            <img src={`${import.meta.env.BASE_URL}assets/nexus-wearing-laptop-1.png`} width="912" height="672" alt={isZh ? "佩戴 NEXUS 使用笔记本电脑的俯视场景" : "Overhead view of NEXUS worn while using a laptop"} loading="lazy" />
            <img src={`${import.meta.env.BASE_URL}assets/nexus-wearing-laptop-2.png`} width="912" height="664" alt={isZh ? "笔记本电脑旁的手腕佩戴展示" : "Wrist wearing view beside a laptop"} loading="lazy" />
          </div>
          <figure className="nexus-wearing-finale">
            <img src={`${import.meta.env.BASE_URL}assets/nexus-wearing-hero.png`} width="2048" height="1691" alt={isZh ? "抬臂展示 NEXUS 智能康复夹板的完整佩戴效果" : "Raised-arm presentation of the NEXUS smart rehabilitation splint"} loading="lazy" />
          </figure>
        </section>
        <section className="nexus-ai-section" aria-labelledby="nexus-ai-title">
          <h2 id="nexus-ai-title">07 {isZh ? "AI 驱动的闭环康复控制" : "AI-Driven Closed-Loop Rehabilitation Control"}</h2>
          <figure>
            <img src={`${import.meta.env.BASE_URL}assets/nexus-ai-control.png`} width="2048" height="1480" alt={isZh ? "AI 闭环康复控制流程图：设备采集角度、压力与训练数据，经数据训练与 API 推理后输出患者端控制指令；下方展示患者运动、传感器数据、AI 推理、气囊控制和充气的流程。" : "AI-driven closed-loop rehabilitation control diagram: angle, pressure and session data flow through data training and an API to patient-side commands. The lower sequence shows patient motion, sensor data, AI inference, airbag control and inflation."} loading="lazy" />
          </figure>
        </section>
        <section className="nexus-reflection-section" aria-labelledby="nexus-reflection-title">
          <h2 id="nexus-reflection-title">08 {isZh ? "反思" : "Reflection"}</h2>
          <div className="nexus-reflection-grid">
            <div><h3>{isZh ? "下一步" : "What To Do"}</h3><p>{isZh ? "迭代产品形态，让气动控制与实时数据协同，并构建统一的网页平台。" : "Iterating on form, aligning pneumatic controls with real-time data, and building a unified web platform."}</p></div>
            <div><h3>{isZh ? "挑战" : "Challenge"}</h3><p>{isZh ? "建立平台化思维，将设备、算法与界面视为相互依存的整体。" : "Developing a platform-oriented mindset to view devices, algorithms, and interfaces as interdependent."}</p></div>
            <div><h3>{isZh ? "未来展望" : "Future Expectations"}</h3><p>{isZh ? "在研究生阶段，探索面向人与系统交互的自适应系统及可扩展的数字平台。" : "Exploring adaptive systems and scalable digital platforms for human-system interactions in grad study."}</p></div>
          </div>
          <figure><img src={`${import.meta.env.BASE_URL}assets/nexus-reflection-platform.png`} width="2048" height="1058" alt={isZh ? "NEXUS 网页平台概念：桌面显示器上的医生端与笔记本电脑上的患者端" : "NEXUS web platform concept showing the doctor interface on a desktop monitor and the patient interface on a laptop"} loading="lazy" /></figure>
        </section>
        <footer className="project-paper-footer"><a href="#works">← {isZh ? "返回精选作品" : "Back to selected work"}</a></footer>
      </article>
    </main>
  );

  if (isSynthPage) return (
    <main className="project-detail">
      <img className="project-background" src={`${import.meta.env.BASE_URL}assets/m-synth-background.png`} alt="" />
      <header className="detail-header">
        <a href="#works" className="detail-back">← {isZh ? "返回作品" : "Back to work"}</a>
        <div className="language-switch" role="group" aria-label={isZh ? "切换语言" : "Language"}>
          <button type="button" lang="en" aria-pressed={!isZh} onClick={() => setLanguage("en")}>EN</button>
          <button type="button" lang="zh-CN" aria-pressed={isZh} onClick={() => setLanguage("zh")}>中文</button>
        </div>
      </header>
      <section className="detail-intro" aria-label={isZh ? "M-Synth 项目封面" : "M-Synth project cover"}>
        <a href="#/projects/msynth/content" className="detail-scroll" onClick={(event) => {
          event.preventDefault();
          document.getElementById("synth-content")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }}>{isZh ? "向下浏览" : "Scroll to explore"} <span aria-hidden="true">↓</span></a>
      </section>
      <article className="project-paper" id="synth-content" aria-labelledby="synth-title">
        <div className="project-paper-heading">
          <p>{t("Hardware Interaction · 2025")}</p>
          <h1 id="synth-title">M-Synth</h1>
          <h2>{isZh ? "模块化合成器" : "Modular Synthesizer"}</h2>
        </div>
        <figure className="project-video">
          <iframe src="https://www.youtube-nocookie.com/embed/Ynp2w8SrVgo" title={isZh ? "M-Synth 产品演示视频" : "M-Synth product demonstration"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <figcaption><a href="https://youtu.be/Ynp2w8SrVgo" target="_blank" rel="noreferrer">{isZh ? "无法播放？在 YouTube 上观看 ↗" : "Having trouble playing? Watch on YouTube ↗"}</a></figcaption>
        </figure>
        <section className="desk-research" aria-labelledby="desk-research-title">
          <h2 className="research-title" id="desk-research-title">{isZh ? "桌面研究" : "Desk Research"}</h2>
          <section className="research-topic" aria-labelledby="education-title">
            <h3 id="education-title">{isZh ? "1. 学校音乐教育中的问题" : "1. The problems of music education at school"}</h3>
            <div className="education-grid">
              <div className="education-confidence">
                <img className="research-flow" src={`${import.meta.env.BASE_URL}assets/research-flow.png`} alt={isZh ? "音乐创作信心流程图：音乐天赋与制作软件的使用经验影响创作信心。" : "Flowchart: musical talent and experience using music production software influence confidence in music creation."} loading="lazy" />
                <p>{isZh ? "许多青少年缺乏音乐创作的经验与信心。" : "Many teenagers lack experience and confidence in music creation."}</p>
              </div>
              <div className="education-software">
                <p>{isZh ? "调查显示，GarageBand 等软件被用于音乐教学：" : "Surveys show that software like GarageBand is used in music teaching:"}</p>
                <div className="classroom-example">
                  <img src={`${import.meta.env.BASE_URL}assets/research-classroom.png`} alt={isZh ? "教师在课堂上演示音乐制作软件" : "A teacher demonstrating music production software in a classroom"} loading="lazy" width="282" height="242" />
                  <p>{isZh ? "鼓励学生从音乐创作的角度学习。" : "Encourage students to learn from the perspective of music composition."}</p>
                </div>
                <ol>
                  <li>{isZh ? "尝试和学习软件耗时较长。" : "Too much time to try the software."}</li>
                  <li>{isZh ? "难以熟练地表达创意。" : "Feel hard to express creativity skillfully."}</li>
                </ol>
              </div>
            </div>
          </section>
          <section className="research-topic research-tools-section" aria-labelledby="tools-title">
            <h3 id="tools-title">{isZh ? "2. 面向青少年的音乐制作工具" : "2. The music production tools for teenagers"}</h3>
            <p>{isZh ? <>我分析了青少年可能接触到的一些同类音乐制作工具。它们各有特色，但<strong>很难在操作的多样性与易用性之间取得平衡。</strong></> : <>I analyzed some similar music production tools that teenagers might come into contact with. Each of them has its own unique features, but it is <strong>difficult to strike a balance between the diversity of operations and the ease of use.</strong></>}</p>
            <figure className="research-tools-chart">
              <figcaption>{isZh ? "功能丰富度" : "Comprehensive Feature"}</figcaption>
              <img src={`${import.meta.env.BASE_URL}assets/research-tools.png`} alt={isZh ? "对比 MIDI、GarageBand、PO-33、Stylosette keys 和 Sketch-a-song 的功能丰富度与易用性" : "Comparison of MIDI, GarageBand, PO-33, Stylosette keys and Sketch-a-song by feature range and ease of use"} loading="lazy" />
            </figure>
          </section>
          <section className="research-topic research-logic" aria-labelledby="logic-title">
            <h3 id="logic-title">{isZh ? "3. 如何简化音乐制作的逻辑？" : "3. How can we simplify the logic of production?"}</h3>
            <div className="logic-notes">
              <p>{isZh ? "调性往往是创作中最大的挑战。" : "Tonality is often the biggest challenge of work"}</p>
              <p>{isZh ? "在节奏方面，流行歌曲主要采用 4/4 拍。" : "Related to rhythm, in popular songs, 4/4 time signature is predominant."}</p>
            </div>
            <figure className="logic-diagram">
              <img src={`${import.meta.env.BASE_URL}assets/research-loops.png`} alt={isZh ? "循环乐段由调性、节拍与速度三个要素构成" : "A loop connects three elements: tonality, beat and speed"} loading="lazy" />
            </figure>
            <div className="research-interview">
              <h4>{isZh ? "访谈" : "Interview"}</h4>
              <ol className="interview-insights">
                <li><span aria-hidden="true">1</span><p>{isZh ? "丰富的旋律确立基调，并传达核心主题。" : "Diverse melodies set the tone and convey key themes."}</p></li>
                <li><span aria-hidden="true">2</span><p>{isZh ? "旋律、贝斯和鼓共同推动节奏，增强音乐的吸引力。" : "Melody, bass, and drums drive the rhythm, adding musical appeal."}</p></li>
                <li><span aria-hidden="true">3</span><p>{isZh ? "同一段落内保持速度一致，以确保音乐和谐。" : "Keep the tempo consistent within a section to ensure harmony."}</p></li>
              </ol>
              <div className="interview-credit">
                <div><p>Xinran Zhao</p><p>{isZh ? "音乐制作教师" : "Music production teacher"}</p></div>
                <img src={`${import.meta.env.BASE_URL}assets/research-interview.png`} alt={isZh ? "访谈者提供的个人图片" : "Interviewee profile image"} width="132" height="132" loading="lazy" />
              </div>
            </div>
          </section>
        </section>
        <section className="experiment-section" aria-labelledby="experiment-title">
          <h2 className="research-title" id="experiment-title">{isZh ? "实验" : "Experiment"}</h2>
          <div className="experiment-intro">
            <div className="experiment-questions">
              <section><h3>{isZh ? "1. 目的" : "1. Purpose"}</h3><p>{isZh ? "探索音乐教育" : "Explore music education"}</p></section>
              <section><h3>{isZh ? "2. 研究问题" : "2. Research Questions"}</h3><p>{isZh ? "哪种形式能让孩子轻松创作音乐，并激发他们的灵感？" : "Which format makes music creation easy and inspiring for kids?"}</p></section>
            </div>
            <div className="experiment-prototypes">
              <figure><img src={`${import.meta.env.BASE_URL}assets/experiment-hardware.png`} alt={isZh ? "用纸板制作的音乐硬件原型" : "Cardboard hardware prototypes with rotary controls"} width="388" height="292" loading="lazy" /><figcaption>{isZh ? "硬件原型" : "Hardware prototype"}</figcaption></figure>
              <figure><img src={`${import.meta.env.BASE_URL}assets/experiment-software.png`} alt={isZh ? "模拟网页音乐制作界面的纸质原型" : "Paper prototype simulating a web-based music interface"} width="380" height="286" loading="lazy" /><figcaption>{isZh ? "模拟网页的软件原型" : <>Software prototype<br />with “webpages”</>}</figcaption></figure>
            </div>
          </div>
          <section className="experiment-tasks">
            <h3>{isZh ? "3. 参与者任务" : "3. Tasks Of Participants"}</h3>
            <ol><li>{isZh ? "使用硬件设备，在 5–10 分钟内创作一段音乐。" : "Use a hardware device to create a music piece in 5–10 minutes."}</li><li>{isZh ? "使用网页，在 5–10 分钟内创作一段音乐。" : "Use a web to create a music piece in 5–10 minutes."}</li></ol>
          </section>
          <section className="experiment-procedure">
            <h3>{isZh ? "4. 实验过程" : "4. Procedure"}</h3>
            <div className="experiment-procedure-grid">
              <div className="experiment-photos">
                <img src={`${import.meta.env.BASE_URL}assets/experiment-session-1.png`} alt={isZh ? "参与者体验音乐制作原型" : "A participant exploring the music production prototypes"} width="678" height="376" loading="lazy" />
                <img src={`${import.meta.env.BASE_URL}assets/experiment-session-2.png`} alt={isZh ? "演示并讨论音乐制作任务" : "Demonstrating and discussing the music creation task"} width="672" height="220" loading="lazy" />
                <img src={`${import.meta.env.BASE_URL}assets/experiment-session-3.png`} alt={isZh ? "参与者对比两种创作方式" : "A participant comparing the two approaches to music creation"} width="674" height="184" loading="lazy" />
              </div>
              <div className="experiment-findings">
                <p>{isZh ? "参与者：13 岁的学生，对流行音乐有不同的偏好。" : "Participants: 13-year-old students with diverse preferences in popular music."}</p>
                <p>{isZh ? "参与者先体验两种模拟的音乐制作流程，再选择自己更偏好的方式。" : "Participants first went through two simulated music production processes, then chose their preference."}</p>
                <section className="experiment-conclusion">
                  <h3>{isZh ? "5. 结论" : "5. Conclusion"}</h3>
                  <p>{isZh ? <>所有参与者都认为网页操作过于复杂。他们更偏好传统的音乐制作方式，认为它<strong>更直观、更有沉浸感，也更能吸引他们参与。</strong></> : <>All agreed that the web was overly complicated. They preferred the traditional music production method, considering it to be <strong>more intuitive, immersive, and engaging.</strong></>}</p>
                </section>
              </div>
            </div>
          </section>
        </section>
        <section className="persona-section" aria-labelledby="persona-title">
          <h2 className="research-title" id="persona-title">{isZh ? "用户画像" : "Persona"}</h2>
          <div className="persona-grid">
            {[
              { name: "Olivia", age: 15, address: "Los Angeles, US", addressZh: "美国 · 洛杉矶", hobbies: "Singing, learning music", hobbiesZh: "唱歌、学习音乐", image: `${import.meta.env.BASE_URL}assets/persona-olivia.png`, ratings: [3, 1, 3, 4], traits: ["Observant", "Instrument experience", "Longs for approval"], traitsZh: ["善于观察", "有乐器学习经验", "渴望获得认可"], quote: "Besides the school's vocal music course, her parents enrolled her in piano lessons to develop her musical talent.", quoteZh: "除了学校的声乐课程，父母还为她报名了钢琴课，希望培养她的音乐天赋。" },
              { name: "Lucas", age: 12, address: "Ohio, US", addressZh: "美国 · 俄亥俄州", hobbies: "Traveling, building blocks", hobbiesZh: "旅行、搭积木", image: `${import.meta.env.BASE_URL}assets/persona-lucas.png`, ratings: [4, 3, 2, 3], traits: ["Active mind", "Strong hands-on ability", "Social butterfly"], traitsZh: ["思维活跃", "动手能力强", "善于社交"], quote: "I often hang out with friends, trying different games for novelty and excitement.", quoteZh: "我经常和朋友一起玩，尝试不同的游戏，寻找新鲜感和刺激。" },
            ].map(persona => (
              <article className="persona-card" key={persona.name} aria-labelledby={`persona-${persona.name}`}>
                <div className="persona-info">
                  <h3 id={`persona-${persona.name}`}>{persona.name}<span>{persona.age} {isZh ? "岁" : "years old"}</span></h3>
                  <dl className="persona-facts">
                    <div><dt>{isZh ? "教育" : "Education"}</dt><dd>{isZh ? "中学生" : "Middle school student"}</dd></div>
                    <div><dt>{isZh ? "居住地" : "Location"}</dt><dd>{isZh ? persona.addressZh : persona.address}</dd></div>
                    <div><dt>{isZh ? "爱好" : "Hobbies"}</dt><dd>{isZh ? persona.hobbiesZh : persona.hobbies}</dd></div>
                  </dl>
                  <dl className="persona-ratings">
                    {(isZh ? ["好奇心", "外向程度", "学习耐心", "重视反馈"] : ["Curiosity", "Extroversion", "Patience in learning", "Emphasis on feedback"]).map((label, index) => (
                      <div key={label}><dt>{label}</dt><dd aria-label={`${persona.ratings[index]} / 4`}><span className="persona-rating-blocks" aria-hidden="true">{[1,2,3,4].map(value => <i key={value} className={value <= persona.ratings[index] ? "filled" : ""} />)}</span><span className="sr-only">{persona.ratings[index]} / 4</span></dd></div>
                    ))}
                  </dl>
                </div>
                <div className="persona-story">
                  <img src={persona.image} alt={isZh ? `${persona.name} 用户画像配图` : `${persona.name} persona illustration`} loading="lazy" />
                  <div className="persona-story-copy">
                    <ul>{(isZh ? persona.traitsZh : persona.traits).map(trait => <li key={trait}>{trait}</li>)}</ul>
                    <blockquote>{isZh ? persona.quoteZh : persona.quote}</blockquote>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="concept-section" aria-labelledby="concept-title">
          <h2 className="research-title" id="concept-title">{isZh ? "设计概念" : "Design Concept"}</h2>
          <p className="concept-lead">{isZh ? "让初学者享受简单、有趣的音乐创作，跨越学习门槛，成为创作者。" : "A device that lets beginners enjoy simple, fun music creation, break through learning barriers, and become creators."}</p>
          <figure className="concept-mindmap">
            <img src={`${import.meta.env.BASE_URL}assets/concept-mindmap.png`} alt={isZh ? "设计概念思维导图：围绕简单逻辑、创作输出、乐趣和探索成长，降低设备与乐理门槛，改善反馈并鼓励自由创作。" : "Design concept mind map: simple logic, output, joy and developing connect lower equipment barriers, better feedback and free music creation."} loading="lazy" />
          </figure>
          <ol className="concept-steps" aria-label={isZh ? "音乐创作流程" : "Music creation workflow"}>
            <li className="concept-step">
              <p className="concept-step-number">{isZh ? "步骤 1" : "Step 1"}</p><h3>{isZh ? "下载循环乐段" : "Download loops"}</h3>
              <div className="concept-step-art download-art" aria-hidden="true">
                <img src={`${import.meta.env.BASE_URL}assets/concept-cloud.png`} alt="" loading="lazy" />
                <img src={`${import.meta.env.BASE_URL}assets/concept-download.png`} alt="" loading="lazy" />
                <img src={`${import.meta.env.BASE_URL}assets/concept-folder.png`} alt="" loading="lazy" />
              </div>
            </li>
            <li className="concept-step">
              <p className="concept-step-number">{isZh ? "步骤 2" : "Step 2"}</p><h3>{isZh ? "混合声音" : "Mix the sound"}</h3>
              <div className="concept-step-art tracks-art">
                <div className="concept-track"><span>{isZh ? "人声" : "vocal"}</span><img src={`${import.meta.env.BASE_URL}assets/concept-vocal.png`} alt="" loading="lazy" /></div>
                <div className="concept-track"><span>{isZh ? "贝斯" : "bass"}</span><img src={`${import.meta.env.BASE_URL}assets/concept-bass.png`} alt="" loading="lazy" /></div>
                <div className="concept-track"><span>{isZh ? "旋律" : "melody"}</span><img src={`${import.meta.env.BASE_URL}assets/concept-melody.png`} alt="" loading="lazy" /></div>
                <div className="concept-track"><span>{isZh ? "鼓点" : "drums"}</span><img src={`${import.meta.env.BASE_URL}assets/concept-drums.png`} alt="" loading="lazy" /></div>
              </div>
            </li>
            <li className="concept-step">
              <p className="concept-step-number">{isZh ? "步骤 3" : "Step 3"}</p><h3>{isZh ? "播放" : "Play"}</h3>
              <div className="concept-step-art speaker-art"><img src={`${import.meta.env.BASE_URL}assets/concept-speaker.png`} alt={isZh ? "扬声器" : "Speaker"} loading="lazy" /></div>
            </li>
          </ol>
        </section>
        <section className="technical-section" aria-labelledby="technical-title">
          <h2 className="research-title" id="technical-title">{isZh ? "技术探索" : "Technical Exploration"}</h2>
          <p className="technical-lead">{isZh ? "我尝试了三种音乐制作逻辑，从四个维度进行评估，最终选择了多块 Arduino 搭配多个播放器的方案。" : "I tried three music-production logic approaches, evaluated them on four dimensions, and chose multiple Arduinos with multiple players."}</p>
          <div className="technical-comparison">
            {[
              { title: "Logic 1 — Arduino library", zh: "方案 1 — Arduino 音频库", photos: [`${import.meta.env.BASE_URL}assets/tech-prototype-1.png`], logic: `${import.meta.env.BASE_URL}assets/tech-logic-1.png`, radar: `${import.meta.env.BASE_URL}assets/tech-radar-1.png` },
              { title: "Logic 2 — Arduino + decoder", zh: "方案 2 — Arduino + 解码器", photos: [`${import.meta.env.BASE_URL}assets/tech-prototype-2a.png`, `${import.meta.env.BASE_URL}assets/tech-prototype-2b.png`], logic: `${import.meta.env.BASE_URL}assets/tech-logic-2.png`, radar: `${import.meta.env.BASE_URL}assets/tech-radar-2.png` },
              { title: "Logic 3 — Several Arduinos", zh: "方案 3 — 多块 Arduino", photos: [`${import.meta.env.BASE_URL}assets/tech-prototype-3.png`], logic: `${import.meta.env.BASE_URL}assets/tech-logic-3.png`, radar: `${import.meta.env.BASE_URL}assets/tech-radar-3.png` },
            ].map((approach, index) => <article className="technical-approach" key={approach.title}>
              <h3>{isZh ? approach.zh : approach.title}</h3>
              <div className="technical-approach-row">
                <div className="technical-prototypes">{approach.photos.map((photo, photoIndex) => <img key={photo} src={photo} alt={`${isZh ? approach.zh : approach.title} — ${isZh ? "硬件原型" : "hardware prototype"} ${photoIndex + 1}`} loading="lazy" />)}</div>
                <img className="technical-logic-image" src={approach.logic} alt={isZh ? `方案 ${index + 1} 音频处理逻辑图` : `Approach ${index + 1} audio processing logic`} loading="lazy" />
                <img className="technical-radar-image" src={approach.radar} alt={isZh ? `方案 ${index + 1} 在质量、逻辑性、开放性和趣味性四个维度的评估` : `Approach ${index + 1} evaluation: quality, logic, openness and interest`} loading="lazy" />
              </div>
            </article>)}
          </div>
          <section className="technical-circuit-section" aria-labelledby="circuit-title">
            <h3 className="technical-subtitle" id="circuit-title">{isZh ? "电路与组件" : "Circuit & components"}</h3>
            <div className="technical-circuit-grid">
              <img className="technical-circuit" src={`${import.meta.env.BASE_URL}assets/tech-circuit.png`} alt={isZh ? "Arduino Nano 连接 MP3 播放器、按键、超声波传感器、LED、电池、电位器与灯带的电路图" : "Arduino Nano wiring diagram with MP3 player, buttons, ultrasonic sensors, LEDs, battery, potentiometers and light strips"} loading="lazy" />
              <dl className="technical-legend">{(isZh ? ["MP3 播放器", "按键", "Arduino Nano", "超声波传感器", "LED", "锂电池", "电位器", "灯带"] : ["MP3 Player", "Buttons", "Arduino Nano", "Ultrasonic Sensors", "LED", "Lithium Battery", "Potentiometer", "Light Strips"]).map((label, index) => <div key={label}><dt>{String.fromCharCode(97 + index)}</dt><dd>{label}</dd></div>)}</dl>
            </div>
          </section>
          <section className="technical-code-section" aria-labelledby="code-title">
            <h3 className="technical-subtitle" id="code-title">{isZh ? "代码" : "Code"}</h3>
            <div className="technical-code-grid">{[
              { image: `${import.meta.env.BASE_URL}assets/tech-code-1.png`, title: "Libraries & pin definitions", zh: "库与引脚定义" },
              { image: `${import.meta.env.BASE_URL}assets/tech-code-2.png`, title: "Setup & main loop", zh: "初始化与主循环" },
              { image: `${import.meta.env.BASE_URL}assets/tech-code-3.png`, title: "Volume & light control", zh: "音量与灯光控制" },
            ].map(code => <figure key={code.title}><img src={code.image} alt={isZh ? code.zh : code.title} loading="lazy" /><figcaption>{isZh ? code.zh : code.title}</figcaption></figure>)}</div>
          </section>
          <section className="technical-controls" aria-labelledby="controls-title">
            <h3 className="technical-subtitle" id="controls-title">{isZh ? "控制逻辑" : "Control logic"}</h3>
            <figure className="technical-control-figure">
              <img src={`${import.meta.env.BASE_URL}assets/tech-control-logic.png`} alt={isZh ? "控制逻辑图：预设 MP3 循环乐段连接按键、电位器旋钮、超声波传感器及 LED，并支持磁吸连接。" : "Control logic: preset MP3 loops connect buttons, potentiometer knobs, ultrasonic sensors and LEDs, with magnetic attachment."} loading="lazy" />
            </figure>
          </section>
        </section>
        <figure className="project-sketch-section">
          <img src={`${import.meta.env.BASE_URL}assets/sketch-exploded.png`} alt={isZh ? "草图与迭代，以及 M-Synth 的结构爆炸图，展示外壳、按键、电路板和传感器等组件。" : "Sketch and Iteration, and an exploded diagram of M-Synth showing its shell, buttons, circuit board and sensors."} loading="lazy" />
        </figure>
        <section className="modules-section" aria-labelledby="modules-title">
          <div className="modules-layout">
            <div className="modules-catalog">
              <h2 id="modules-title">{isZh ? "模块" : "Modules"}</h2>
              <div className="module-list">
                {[
                  { id: "bass", title: "Bass loops", zh: "贝斯循环乐段", image: `${import.meta.env.BASE_URL}assets/module-bass.png`, description: "Many long, full-sounding pre-recorded arpeggio and drum loops.", descriptionZh: "多种预录制的长循环琶音与鼓点，声音饱满。" },
                  { id: "melody", title: "Melody loops", zh: "旋律循环乐段", image: `${import.meta.env.BASE_URL}assets/module-melody.png`, description: "Users can pick loops and adjust pitch and speed without worrying about key.", descriptionZh: "自由选择循环乐段，调整音高和速度，无需担心调性。" },
                  { id: "drums", title: "Drum loops", zh: "鼓点循环乐段", image: `${import.meta.env.BASE_URL}assets/module-drums.png`, description: "Built-in drum kits for different pop styles—adds energy to the music.", descriptionZh: "内置适用于不同流行音乐风格的鼓组，为音乐增添活力。" },
                  { id: "effects", title: "Effects loops", zh: "音效循环乐段", image: `${import.meta.env.BASE_URL}assets/module-effects.png`, description: "Many unexpected effects (background sounds, vocals) add fun.", descriptionZh: "丰富的背景声、人声等意想不到的音效，增添创作乐趣。" },
                ].map(module => <article className={`module-item module-${module.id}`} key={module.id}>
                  <img src={module.image} alt={isZh ? module.zh : module.title} loading="lazy" />
                  <div><h3>{isZh ? module.zh : module.title}</h3><p>{isZh ? module.descriptionZh : module.description}</p></div>
                </article>)}
              </div>
            </div>
            <div className="modules-gallery">
              <img className="modules-assembled" src={`${import.meta.env.BASE_URL}assets/modules-assembled.png`} alt={isZh ? "四个 M-Synth 模块拼接在一起" : "Four M-Synth modules assembled together"} loading="lazy" />
              <h2>{isZh ? "细节" : "Details"}</h2>
              <img className="modules-details" src={`${import.meta.env.BASE_URL}assets/modules-details.png`} alt={isZh ? "紫色旋律模块的顶面、侧面、传感器与底部四视图" : "Four views of the purple melody module: top, side, sensors and underside"} loading="lazy" />
            </div>
          </div>
        </section>
        <section className="journey-section" aria-labelledby="journey-title">
          <h2 className="research-title" id="journey-title">{isZh ? "用户旅程" : "User Journey Map"}</h2>
          <ol className="journey-stages">
            {[{"title": "Open switches", "zh": "打开开关", "emotion": "Full of curiosity", "emotionZh": "充满好奇", "image": `${import.meta.env.BASE_URL}assets/journey-1.png`, "icon": `${import.meta.env.BASE_URL}assets/emotion-1.png`}, {"title": "Adjust the sounds", "zh": "调整声音", "emotion": "Explore favorite loops", "emotionZh": "探索喜欢的循环乐段", "image": `${import.meta.env.BASE_URL}assets/journey-2.png`, "icon": `${import.meta.env.BASE_URL}assets/emotion-2.png`}, {"title": "Add components", "zh": "添加模块", "emotion": "Discover and keep loops", "emotionZh": "发现并保留循环乐段", "image": `${import.meta.env.BASE_URL}assets/journey-3.png`, "icon": `${import.meta.env.BASE_URL}assets/emotion-3.png`}, {"title": "Assemble components", "zh": "拼接模块", "emotion": "Be patient and keep trying", "emotionZh": "耐心尝试", "image": `${import.meta.env.BASE_URL}assets/journey-4.png`, "icon": `${import.meta.env.BASE_URL}assets/emotion-4.png`}, {"title": "Get a complete musical section", "zh": "完成音乐段落", "emotion": "Feel a sense of achievement", "emotionZh": "获得成就感", "image": `${import.meta.env.BASE_URL}assets/journey-5.png`, "icon": `${import.meta.env.BASE_URL}assets/emotion-5.png`}].map((stage, index) => <li className="journey-stage" key={stage.title}>
              <img className="journey-photo" src={stage.image} alt={isZh ? stage.zh : stage.title} loading="lazy" />
              <div className="journey-step-marker" aria-hidden="true"><span>{index + 1}</span></div>
              <h3>{isZh ? stage.zh : stage.title}</h3>
              <p>{isZh ? stage.emotionZh : stage.emotion}</p>
            </li>)}
          </ol>
          <section className="journey-apps" aria-labelledby="linked-apps-title">
            <h3 id="linked-apps-title">{isZh ? "配套软件概念" : "Linked software concept"}</h3>
            <figure className="journey-app-panorama">
              <img src={`${import.meta.env.BASE_URL}assets/app-four-screens.png`} alt={isZh ? "M-Synth 四个手机界面：连接设备、选择循环乐段、命名并保存音乐，以及 AR 相机识别。" : "Four M-Synth mobile screens: connect a device, browse loops, name and save a song, and identify music with the AR camera."} loading="lazy" />
            </figure>
          </section>
        </section>
        <section className="future-section" aria-labelledby="future-title">
          <h2 className="research-title" id="future-title">{isZh ? "未来展望" : "Future Expectation"}</h2>
          <div className="future-grid">
            <figure><img src={`${import.meta.env.BASE_URL}assets/future-share.png`} alt={isZh ? "一起分享音乐的未来使用场景" : "Future scenario of sharing music together"} loading="lazy" /><figcaption>{isZh ? "与他人分享音乐" : "Share music with others"}</figcaption></figure>
            <figure><img src={`${import.meta.env.BASE_URL}assets/future-cloud.png`} alt={isZh ? "通过平板获取循环乐段的概念场景" : "Concept of accessing loops on a tablet"} loading="lazy" /><figcaption>{isZh ? "从云端下载循环乐段" : "Download loops from the cloud"}</figcaption></figure>
            <figure><img src={`${import.meta.env.BASE_URL}assets/future-community.png`} alt={isZh ? "交流和分享音乐创作的未来场景" : "Future scenario of discussing and sharing music"} loading="lazy" /><figcaption>{isZh ? "向在线社区分享作品" : "Contribute works to an online community"}</figcaption></figure>
          </div>
          <p className="future-vision">{isZh ? <>我希望构建一个支持设备间音源传输的技术生态，让创作者能够<strong>在旅途中便捷地创作音乐。</strong></> : <>I hope to have a technology ecosystem that can assist in the transfer of audio sources between devices, making it convenient for creators to <strong>compose music when traveling.</strong></>}</p>
          <section className="reflection-section" aria-labelledby="reflection-title">
            <div className="reflection-copy"><h3 id="reflection-title">{isZh ? "反思" : "Reflection"}</h3><ul>
              <li>{isZh ? <>社会影响：M-Synth 可以激发更多年轻人对音乐学习的兴趣，让音乐成为人人都能参与的共享活动。</> : <>Social impact: M-Synth can inspire more young people to love music learning, making it a shared activity for all.</>}</li>
              <li>{isZh ? <>局限性：小型合成器难以制作专业品质的音乐；开放循环乐段资源将进一步提升可玩性。</> : <>Limitations: Small synths struggle to produce professional-quality music; open-source loops would boost playability.</>}</li>
            </ul></div>
            <img src={`${import.meta.env.BASE_URL}assets/reflection-child.png`} alt={isZh ? "手持 M-Synth 的儿童概念配图" : "Concept illustration of a child holding M-Synth"} loading="lazy" />
          </section>
        </section>
        <footer className="project-paper-footer"><a href="#works">← {isZh ? "返回精选作品" : "Back to selected work"}</a></footer>
      </article>
    </main>
  );

  return (
    <OpeningIntro><main className="portfolio-shell">
      <div className="hero">
      <header className="masthead">
        <button className="identity" type="button" aria-label={isZh ? "打开个人简介" : "Open Tianyang Feng profile"} onClick={() => dialogRef.current.showModal()}>
          <span>Tianyang Feng</span>
          <small>{t("Product · Interaction")}</small>
        </button>
        <p className="edition">{t("Selected practice / Beijing")}</p>
        <nav className="header-actions" aria-label={isZh ? "顶部导航" : "Header navigation"}>
          <div className="language-switch" role="group" aria-label={isZh ? "切换语言" : "Language"}>
            <button type="button" lang="en" aria-pressed={!isZh} onClick={() => setLanguage("en")}>EN</button>
            <button type="button" lang="zh-CN" aria-pressed={isZh} onClick={() => setLanguage("zh")}>中文</button>
          </div>
          <button className="profile-trigger" type="button" onClick={() => dialogRef.current.showModal()}>{t("Profile")}</button>
        </nav>
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
        <span className="axis-label axis-label-top">{t("Product / Interaction")}</span>

        <span className="locator-axis locator-axis-vertical" aria-hidden="true" />
        <span className="locator-axis locator-axis-horizontal" aria-hidden="true" />
        <div className="gallery-run">
          <GallerySequence copy="main" onActivate={activateProject} onHoverProject={hoverProject} onFocusProject={focusProject} flashKey={flashKey} projects={localizedProjects} isZh={isZh} />
          <GallerySequence copy="copy" onActivate={activateProject} onHoverProject={hoverProject} onFocusProject={focusProject} flashKey={flashKey} projects={localizedProjects} isZh={isZh} />
        </div>
      </section>

      <section className="statement" aria-labelledby="statement-title">
        <p className="selected-work" aria-live="polite">{localizedProjects[selected].title} — {localizedProjects[selected].discipline}</p>
        <h1 id="statement-title">{isZh ? <>以设计连接人与物，<br />探索技术的更多可能。</> : <>Designing the space between people,<br /> matter and technology.</>}</h1>
        <div className="pagination" aria-hidden="true">
          {projects.map((project, index) => <span className={selected === index ? "current" : ""} key={project.id} />)}
        </div>
      </section>

      <a className="work-scroll" href="#works">{t("Explore selected work")} <span aria-hidden="true">↓</span></a>
      </div>

      <section className="works-section" id="works" aria-labelledby="works-title">
        <div className="works-heading">
          <h2 id="works-title">{t("Selected work")}</h2>
        </div>
        <div className="works-grid">
          {localizedCards.map((project) => (
            <article className={`work-card${project.id === "team-project" ? " work-card-team" : ""}`} key={project.id}>
              <a className="work-cover" href={`#/projects/${project.id}`} aria-label={`${isZh ? "查看项目" : "View project"}: ${project.title}`}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="work-view">{isZh ? "查看项目" : "View project"} <span aria-hidden="true">↗</span></span>
              </a>
              <div className="work-caption"><h3>{project.title}</h3><p>{project.discipline}</p></div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer-line">
        <span>© 2026 Tianyang Feng</span>
        <a href="mailto:fengtim@aliyun.com" aria-label="Email Tianyang Feng">fengtim@aliyun.com</a>
      </footer>

      <dialog className="artwork-dialog" ref={artworkRef} aria-labelledby="artwork-title" onClick={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) artworkRef.current.close();
      }}>
        <div className="artwork-heading"><h2 id="artwork-title">{artwork.title}</h2><button type="button" onClick={() => artworkRef.current.close()}>{t("Close ×")}</button></div>
        <img src={artwork.image} alt={artwork.title} />
        <p>{artwork.discipline}</p>
      </dialog>

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
          <span>{t("Profile")}</span>
          <button type="button" onClick={() => dialogRef.current.close()}>{t("Close")}</button>
        </div>
        <h2 id="profile-title">Tianyang Feng</h2>
        <p className="profile-lead">{t("A product designer working across physical interaction, spatial experience and CMF—turning technical systems into tangible, considered objects.")}</p>

        <section className="profile-intro" aria-labelledby="about-heading">
          <span className="profile-kicker">{t("About / Cross-disciplinary Designer")}</span>
          <div>
            <h3 id="about-heading">{t("Working across product, interaction and CMF.")}</h3>
            <p>{t("I study Product Design at Tsinghua University. My practice begins with user research and prototyping, then extends into hardware interaction, spatial experience and consumer-electronics CMF. I’m interested in making technical systems clearer, more tangible and more humane.")}</p>
          </div>
        </section>

        <section className="profile-section" aria-labelledby="experience-heading">
          <h3 className="profile-section-title" id="experience-heading">{t("Experience / Axis")}</h3>
          <div className="profile-timeline" aria-label="Experience timeline">
            <article className="timeline-event">
              <time>{t("2026.07 — Now")}</time>
              <span className="timeline-node" aria-hidden="true" />
              <div><strong>{t("Lenovo")}</strong><small>{t("CMF Design Intern — Legion, YOGA & Idea")}</small><p>{t("Contributing to color, material and finish research, product-line differentiation and concept communication across Lenovo consumer electronics.")}</p></div>
            </article>
            <article className="timeline-event">
              <time>2026.04 — 2026.07</time>
              <span className="timeline-node" aria-hidden="true" />
              <div><strong>{t("Meituan")}</strong><small>{t("Product Design Intern")}</small><p>{t("Improved core workflows for an internal AI platform and contributed to design-to-code tooling, a generative-design knowledge base and AI product-design workflows.")}</p></div>
            </article>
            <article className="timeline-event">
              <time>2023.08 — 2027.07</time>
              <span className="timeline-node" aria-hidden="true" />
              <div><strong>{t("Tsinghua University")}</strong><small>{t("Academy of Arts & Design · Product Design")}</small><p>{t("Studying user research, intelligent products, service design and social innovation through physical, digital and spatial design projects.")}</p></div>
            </article>
          </div>
        </section>

        <section className="profile-projects" aria-labelledby="projects-heading">
          <h3 className="profile-section-title" id="projects-heading">{t("Selected Projects / Research")}</h3>
          <div className="project-list">
            <div className="project-row"><time>2026</time><strong>{t("Refrigerator & Freshness Technology Display")}</strong><span>CMF / AIGC</span></div>
            <div className="project-row"><time>2025</time><strong>BuyMate — CHI 2026 Extended Abstracts</strong><span>{t("HCI / Research")}</span></div>
            <div className="project-row"><time>2025</time><strong>{t("Beijing–Tianjin–Hebei Rail Hub Study")}</strong><span>{t("Space / Service")}</span></div>
            <div className="project-row"><time>2025</time><strong>{t("Four Design & Creative Competition Honors")}</strong><span>{t("Awards")}</span></div>
          </div>
        </section>

        <section className="profile-skills" aria-labelledby="skills-heading">
          <h3 className="profile-section-title" id="skills-heading">{t("Skills / Toolkit")}</h3>
          <div className="skill-grid">
            <div><h4>{t("Design")}</h4><p>Figma / Photoshop<br />Rhino / KeyShot<br />Blender / CMF</p></div>
            <div><h4>{t("Prototype")}</h4><p>Arduino / Python<br />{t("3D Printing")}<br />{t("AI-assisted Workflow")}</p></div>
            <div><h4>{t("Research")}</h4><p>{t("User Research")}<br />{t("Service Design")}<br />{t("Experiment Design")}</p></div>
          </div>
        </section>

        <footer className="profile-footer">
          <strong>{isZh ? <>聊聊<br />合作。</> : <>Let’s<br />talk.</>}</strong>
          <a className="profile-email" href="mailto:fengtim@aliyun.com">{t("Write an email — fengtim@aliyun.com ↗")}</a>
        </footer>
      </dialog>
    </main></OpeningIntro>
  );
}
