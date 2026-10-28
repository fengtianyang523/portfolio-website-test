import "./DataUnion.css";
import { DataUnionProcess } from "./DataUnionProcess.jsx";
import { DataUnionObject } from "./DataUnionObject.jsx";

const asset = (name) => `${import.meta.env.BASE_URL}assets/data-union/${name}`;
const dimensions = { "data-stakeholders.png": [1366, 528], "interview.png": [1490, 479], "manuel-castells.png": [246, 248], "horizontal-relationships.png": [1778, 570], "clean-room.png": [764, 563], "federated-learning.png": [634, 512], "geographical-traceability.png": [836, 390], "definition.png": [3318, 2022] };

export function DataUnion({ isZh, setLanguage }) {
  const text = (en, zh) => isZh ? zh : en;
  const image = (name, en, zh, className = "") => <img className={className} src={asset(name)} width={dimensions[name][0]} height={dimensions[name][1]} alt={text(en, zh)} loading="lazy" />;
  const technologies = [
    { title: ["Data clean room", "数据净室"], file: "clean-room.png", description: ["A protected environment where companies and departments can collaborate on sensitive or regulated data while protecting privacy.", "为企业和部门提供受保护的协作空间，在保护隐私的前提下处理敏感或受监管的数据。"], principle: ["Create a protected space for collaboration.", "在受保护的空间内开展数据协作。"] },
    { title: ["Federated learning", "联邦学习"], file: "federated-learning.png", description: ["Nodes train locally and send updates to a central server to improve a shared model, without sharing their original data.", "各节点在本地训练，将更新发送至中央服务器以改进共享模型，无需直接共享原始数据。"], principle: ["Keep original data at its source.", "让原始数据留在本地。"] },
    { title: ["Geographical data traceability", "地理数据可追溯性"], file: "geographical-traceability.png", description: ["Adding location to AI data governance enables local deletion, copyright tracking and jurisdiction-specific compliance.", "在 AI 数据治理中引入地理位置，以支持本地删除、版权追踪和适用司法辖区的合规管理。"], principle: ["Make data use traceable.", "让数据使用行为可追溯。"] },
  ];
  return <main className="project-detail union-detail">
    <img className="project-background" src={`${import.meta.env.BASE_URL}assets/data-union-cover.png`} fetchPriority="high" alt="" />
    <header className="detail-header">
      <a className="detail-back" href="#works">← {text("Back to work", "返回作品")}</a>
      <div className="language-switch" role="group" aria-label={text("Language", "切换语言")}>
        <button type="button" lang="en" aria-pressed={!isZh} onClick={() => setLanguage("en")}>EN</button>
        <button type="button" lang="zh-CN" aria-pressed={isZh} onClick={() => setLanguage("zh")}>中文</button>
      </div>
    </header>
    <section className="detail-intro" aria-label={text("Data Union interactive installation", "数据联盟交互装置")}>
      <a className="detail-scroll" href="#/projects/data-union/content" onClick={event => {
        event.preventDefault();
        document.getElementById("union-content")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      }}>{text("Explore project", "探索项目")} <span aria-hidden="true">↓</span></a>
    </section>
    <article className="project-paper" id="union-content" aria-labelledby="union-title">
      <header className="project-paper-heading union-heading">
        <div><p>{text("Reflective design / Interactive installation", "反思性设计 / 交互装置")}</p><h1 id="union-title">{text("Data Union", "数据联盟")}</h1><h2>{text("Rethinking who controls our data.", "重新思考：谁掌控我们的数据？")}</h2></div>
        <div className="union-introduction"><time dateTime="2026-07">2026.07 — 2026.10</time><p>{text("As platforms profit from personal data with limited user control, Data Union proposes a user-led marketplace that rethinks data ownership, consent and value sharing.", "当平台通过个人数据获利，而用户的控制权仍然有限时，数据联盟提出一个由用户主导的市场，重新思考数据所有权、授权同意与价值分配。")}</p></div>
      </header>
      <figure className="project-video union-video">
        <iframe src="https://www.youtube-nocookie.com/embed/vHbISkXTyqo" title={text("Data Union installation demonstration", "数据联盟装置演示视频")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        <figcaption><a href="https://youtu.be/vHbISkXTyqo" target="_blank" rel="noreferrer">{text("Having trouble playing? Watch on YouTube ↗", "无法播放？在 YouTube 上观看 ↗")}</a></figcaption>
      </figure>
      <div className="union-body">
        <section className="union-research" aria-labelledby="union-research-title">
          <h2 id="union-research-title" className="union-section-title">{text("Background research", "背景研究")}</h2>
          <div className="union-research-grid">
            <div>
              <h3>{text("The risk of personal data misuse", "个人数据滥用的风险")}</h3>
              <p>{text("The excessive extraction of data creates risks for individuals and society. Everyday actions generate corporate value and private power, enabling companies to influence our choices and perceptions.", "过度提取数据为个人与社会带来风险。日常行为产生的数据创造了企业价值与私有权力，使企业能够影响我们的选择与认知。")}</p>
              <figure className="union-stakeholders">{image("data-stakeholders.png", "Personal data connects nations, corporations, individuals and groups", "个人数据连接国家、企业、个人与群体")}</figure>
              <div className="union-interview"><h3>{text("Interview", "用户访谈")}</h3>{image("interview.png", "Interview excerpts about collection without consent and the sale of family genetic information", "访谈摘录：未经同意的数据收集，以及家庭基因信息被售卖的担忧")}<p className="union-caption">{text("Concerns about consent, visibility and who receives our data.", "对授权同意、交易透明度与数据接收方的担忧。")}</p></div>
            </div>
            <div>
              <aside className="union-theory">{image("manuel-castells.png", "Manuel Castells", "曼纽尔·卡斯特")}<div><h3>{text("Control in a networked society", "网络社会中的控制权")}</h3><p>{text("The research draws on Manuel Castells’s account of how networked information reorganizes power, capital and labor.", "研究借助曼纽尔·卡斯特关于网络信息如何重组权力、资本与劳动关系的观点。")}</p><span>Manuel Castells</span></div></aside>
              <h3>{text("How does data abuse cause harm?", "数据滥用如何造成伤害？")}</h3>
              <p>{text("Legal structures tend to monitor vertical flows between users and platforms, overlooking the horizontal relationships between users.", "法律结构往往关注用户与平台之间的纵向数据流，却忽视用户之间的横向关联。")}</p>
              <div className="union-vertical-flow" aria-label={text("Vertical data flows from holders to collectors", "数据从持有者流向收集者")}>
                {[0, 1].map(n => <div key={n}><span>{text("Data collectors", "数据收集者")}</span><b aria-hidden="true">↑</b><span>{text("Data holders", "数据持有者")}</span></div>)}
              </div>
            </div>
          </div>
          <section className="union-horizontal-study" aria-labelledby="union-horizontal-title">
              <h3 id="union-horizontal-title">{text("Horizontal predictions between users", "用户之间的横向预测")}</h3>
              <figure className="union-relationships">{image("horizontal-relationships.png", "Seven data categories connect users A, B and C through shared characteristics", "身份、联系、生物特征、财务、在线、健康和职业数据，通过相似特征连接三位用户")}</figure>
              <p>{text("By grouping people with similar incomes, ages and locations, companies can infer preferences and shopping habits. Even someone who protects their own data may be exposed through data from similar users.", "企业通过汇集收入、年龄和地理位置相近的人群数据，推断偏好与购物习惯。即使一个人保护了自己的数据，也可能因相似用户的数据泄露而面临风险。")}</p>
          </section>
        </section>
        <section className="union-technology" aria-labelledby="union-technology-title">
          <h2 id="union-technology-title" className="union-section-title">{text("Data protection technology", "数据保护技术")}</h2>
          {technologies.map(tech => <div className="union-tech-row" key={tech.file}>
            <figure>{image(tech.file, tech.title[0] + " diagram", tech.title[1] + "示意图")}</figure>
            <div><h3>{text(...tech.title)}</h3><p>{text(...tech.description)}</p><p className="union-principle">{text(...tech.principle)}</p></div>
          </div>)}
        </section>
      </div>
      <section className="union-definition" aria-labelledby="union-definition-title">
        <div className="union-definition-intro"><h2 id="union-definition-title">{text("What is a data union?", "什么是数据联盟？")}</h2><p>{text("A geographically organized alliance that brings member data together, requires collective authorization for external use and makes transactions visible to its members.", "以地理区域为组织基础，汇集成员数据，对外部使用实行联盟授权，并向成员公开交易记录。")}</p></div>
        <figure>{image("definition.png", "Data Union concept: geographically connected members, integrated data, authorized external enterprises and transparent public records", "数据联盟概念图：地理关联的成员、数据整合、经授权的外部企业与公开透明的交易记录")}</figure>
        <div className="union-definition-notes"><p>{text("Collective authorization", "集体授权")}<span>{text("External enterprises require alliance approval; misuse carries a penalty.", "外部企业需获得联盟授权，数据滥用须承担惩罚。")}</span></p><p>{text("Shared visibility", "共同监督")}<span>{text("Transaction flows are public to members so data exchanges can be scrutinized.", "交易流向对联盟成员公开，使数据交换可被监督。")}</span></p></div>
      </section>
      <DataUnionProcess isZh={isZh} />
      <DataUnionObject isZh={isZh} />
      <footer className="project-paper-footer"><a href="#works">← {text("Back to selected work", "返回精选作品")}</a></footer>
    </article>
  </main>;
}
