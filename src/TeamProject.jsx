import "./TeamProject.css";

const asset = (name) => `${import.meta.env.BASE_URL}assets/team-project/${name}`;

export function TeamProject({ isZh, setLanguage }) {
  return (
    <main className="project-detail team-detail">
      <img className="project-background" src={asset("mars-background.png")} width="1682" height="3063" fetchPriority="high" alt="" />
      <header className="detail-header">
        <a href="#works" className="detail-back">← {isZh ? "返回作品" : "Back to work"}</a>
        <div className="language-switch" role="group" aria-label={isZh ? "切换语言" : "Language"}>
          <button type="button" lang="en" aria-pressed={!isZh} onClick={() => setLanguage("en")}>EN</button>
          <button type="button" lang="zh-CN" aria-pressed={isZh} onClick={() => setLanguage("zh")}>中文</button>
        </div>
      </header>
      <section className="detail-intro" aria-label={isZh ? "荧惑天宫：火星空间站渲染图" : "Deimos Celestial Palace: a space station above Mars"}>
        <a href="#/projects/team-project/content" className="detail-scroll" onClick={(event) => {
          event.preventDefault();
          document.getElementById("team-content")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
        }}>{isZh ? "探索项目" : "Explore project"} <span aria-hidden="true">↓</span></a>
      </section>

      <article className="project-paper" id="team-content" aria-labelledby="team-title">
        <header className="project-paper-heading">
          <div className="team-title-block">
            <p>{isZh ? "团队作品 / 科幻装置" : "Team Project / Sci-fi Installation"}</p>
            <h1 id="team-title">{isZh ? "荧惑天宫" : <>Deimos<br />Celestial Palace</>}</h1>
            <h2>{isZh ? "火星空间站装置" : "A Mars Space Station Installation"}</h2>
          </div>
          <section className="team-contribution" aria-labelledby="team-responsibilities">
            <h2 id="team-responsibilities">{isZh ? "个人分工" : "My contribution"}<span>{isZh ? "5 人团队" : "A team of five"}</span></h2>
            <dl>
              <div><dt>{isZh ? "部件设计" : "Components design"}</dt><dd>20%</dd></div>
              <div><dt>{isZh ? "团队管理" : "Team management"}</dt><dd>40%</dd></div>
              <div><dt>{isZh ? "视觉渲染" : "Visual rendering"}</dt><dd>60%</dd></div>
            </dl>
          </section>
        </header>

        <div className="team-content">
          <section className="team-overview" aria-label={isZh ? "项目概述与个人分工" : "Project overview and personal responsibilities"}>
            <figure className="team-prototype" data-node-id="190:13565">
              <img src={asset("prototype.png")} width="1245" height="1245" alt={isZh ? "荧惑天宫机械原型的齿轮、轨道与白色环形结构特写" : "Close-up of the prototype's white ring structure, gears and tracks"} loading="lazy" />
              <figcaption>{isZh ? "机械原型 · 齿轮与轨道细节" : "Mechanical prototype · Gears and tracks"}</figcaption>
            </figure>
            <div className="team-overview-copy">
              <section className="team-concept" aria-labelledby="team-concept-title">
                <h2 id="team-concept-title">{isZh ? "一座建于火卫二的空间站" : "A station on Deimos"}</h2>
                <p className="team-lead">{isZh ? "这是一件机械科幻装置，描绘了一座开拓性的火星空间站。它被构想为四阶段火星地球化战略第一阶段的核心。" : "A mechanical science-fiction installation depicting a pioneering Mars space station, conceived as the centerpiece of Phase One of a four-step Mars terraforming strategy."}</p>
                <p>{isZh ? "空间站建于火卫二，利用其低重力、水冰和矿产资源，通过原位资源利用技术提取水和建筑材料，以维持自身运行。" : "Built on Deimos, it takes advantage of the moon’s low gravity, water ice, and mineral resources. Using in-situ resource utilization technology, it extracts water and construction materials to sustain itself."}</p>
              </section>
            </div>
          </section>

          <section className="team-world" aria-labelledby="team-world-title">
            <div className="team-world-intro">
              <h2 id="team-world-title">{isZh ? "从科幻想象到实体装置" : "From fiction to a physical world"}</h2>
              <p className="team-statement">{isZh ? "我们制作了空间站的机械原型来展示其运行方式，并搭建了与科幻设定相呼应的火星地貌。我们希望这件作品能为未来的星际探索带来启发。" : "We built a mechanical prototype of a space station to demonstrate how it operates. Alongside it, we created a matching Martian landscape as part of our sci-fi setting. We believe our work will serve as an inspiration for future interstellar exploration."}</p>
            </div>
            <div className="team-scenes">
              <figure className="team-landscape" data-node-id="190:13573">
                <img src={asset("landscape.png")} width="505" height="387" alt={isZh ? "空间站在火星地貌中的俯视渲染" : "Overhead rendering of the station in a Martian landscape"} loading="lazy" />
                <figcaption>{isZh ? "火星地貌" : "Martian landscape"}</figcaption>
              </figure>
              <figure className="team-exhibition" data-node-id="190:13574">
                <img src={asset("exhibition.png")} width="421" height="443" alt={isZh ? "空间站机械装置与演示屏幕的展览现场" : "The mechanical installation on display beside its demonstration screen"} loading="lazy" />
                <figcaption>{isZh ? "装置展览现场" : "The installation on display"}</figcaption>
              </figure>
              <figure className="team-render" data-node-id="190:13572">
                <img src={asset("mars-render.png")} width="361" height="479" alt={isZh ? "火星上空的荧惑天宫空间站" : "Deimos Celestial Palace above the surface of Mars"} loading="lazy" />
                <figcaption>{isZh ? "空间站视觉渲染" : "Station rendering"}</figcaption>
              </figure>
            </div>
          </section>

          <div className="team-engineering">
          <section className="team-making" aria-labelledby="team-making-title">
            <h2 id="team-making-title">{isZh ? "制作过程" : "Making process"}</h2>
            <div className="team-process-images">
              <figure data-node-id="209:1561"><img src={asset("process-frame.png")} width="391" height="521" alt={isZh ? "搭建中的空间站金属骨架与中心轴" : "The station's metal framework and central shaft during construction"} loading="lazy" /><figcaption>{isZh ? "中心骨架" : "Central framework"}</figcaption></figure>
              <figure data-node-id="190:13567"><img src={asset("process-shell.png")} width="455" height="521" alt={isZh ? "安装白色外壳后的空间站机械原型" : "The mechanical prototype with its white outer shell assembled"} loading="lazy" /><figcaption>{isZh ? "外壳组装" : "Shell assembly"}</figcaption></figure>
            </div>
            <div>
              <ol className="team-steps">
                <li>{isZh ? "研究火星，构建叙事。" : "Research Mars and develop the narrative."}</li>
                <li>{isZh ? "铸造钢制框架。" : "Cast the steel framework."}</li>
                <li>{isZh ? "测试齿轮旋转与轨道运动。" : "Test the rotation of the gears and the movement of the tracks."}</li>
                <li>{isZh ? "3D 打印外壳部件。" : "3D-print the outer shell components."}</li>
              </ol>
              <p>{isZh ? "这项课程作业包含一件装置和一段视频演示，展现了团队协作。我们以设计师的身份共同深入探索工程结构。" : "This course assignment includes a device and a video demonstration, showcasing excellent teamwork. We worked together as designers to explore engineering structures in greater depth."}</p>
            </div>
          </section>

          <section className="team-structure" aria-labelledby="team-structure-title">
            <h2 id="team-structure-title">{isZh ? "空间站结构" : "Station structure"}</h2>
            <figure className="team-technical-figure">
              <img className="team-diagram" src={asset("station-structure-labeled.png")} width="1977" height="1280" loading="lazy" alt={isZh ? "空间站结构：储气罐、原材料储存、居住舱、可变重力舱、水培与科研舱、动力核心、增材制造阵列和锚定系统，原图附英文标注" : "Station structure with original labels for gas storage, raw material storage, habitation, variable gravity, hydroponics and research, power core, additive manufacturing and anchoring"} />
              <figcaption>{isZh ? "空间站功能模块示意" : "Functional modules of the station"}</figcaption>
            </figure>
          </section>
          </div>
        </div>
        <footer className="project-paper-footer"><a href="#works">← {isZh ? "返回精选作品" : "Back to selected work"}</a></footer>
      </article>
    </main>
  );
}
