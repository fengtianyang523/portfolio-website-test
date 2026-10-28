const asset = name => `${import.meta.env.BASE_URL}assets/data-union/${name}.png`;

export function DataUnionObject({ isZh }) {
  const t = (en, zh) => isZh ? zh : en;
  const photo = (name, width, height, en, zh) => <img src={asset(name)} width={width} height={height} alt={t(en, zh)} loading="lazy" />;
  const actions = [
    ["insert-key", 622, 366, "Insert the LoRa key", "插入 LoRa 钥匙"],
    ["select-buyer", 622, 369, "Select a buyer", "选择买家"],
    ["take-receipt", 622, 350, "Take the receipt", "取走凭证"],
  ];
  return <>
    <section className="union-body union-object" aria-labelledby="union-object-title">
      <h2 className="union-section-title" id="union-object-title">{t("The physical system", "实体系统")}</h2>
      <div className="union-radio">
        <div><h3>{t("A wireless link through LoRa", "通过 LoRa 建立无线连接")}</h3><p>{t("The prototype uses LoRa for low-power wireless communication between a pair of physical keys and the data trader. The connection operates independently of the Internet.", "原型通过 LoRa 实现一对实体钥匙与数据交易装置之间的低功耗无线通信，连接独立于互联网运行。")}</p><div className="union-radio-route" aria-label={t("Prototype communication path", "原型通信路径")}><span>{t("Computer", "计算机")}</span><b aria-hidden="true">→</b><span>{t("LoRa key pair", "LoRa 钥匙对")}</span><b aria-hidden="true">→</b><span>{t("Data trader", "数据交易装置")}</span></div></div>
        <figure>{photo("lora-module",390,294,"LoRa DL-XL01 wireless communication module","LoRa DL-XL01 无线通信模块")}<figcaption>LoRa DL-XL01</figcaption></figure>
      </div>
      <div className="union-object-heading"><h3>{t("Data trader & LoRa key", "数据交易装置与 LoRa 钥匙")}</h3><p>{t("Acrylic panels, a metal frame and physical controls bring the data transaction into a tangible object.", "亚克力板、金属框架与实体控件，将数据交易转化为可感知的装置。")}</p></div>
      <figure className="union-object-structure">
        <svg viewBox="1180 110 1320 910" role="img" aria-labelledby="union-object-structure-label"><title id="union-object-structure-label">{t("Exploded structure of the data trader and LoRa key, showing acrylic panels, metal shafts, joystick, printer and key housing", "数据交易装置与 LoRa 钥匙的结构爆炸图，展示亚克力板、金属轴、摇杆、打印机与钥匙外壳")}</title><image href={asset("technical-board")} width="3054" height="2160" /></svg>
        <figcaption>{t("Exploded view · Data trader and wireless key", "结构爆炸图 · 数据交易装置与无线钥匙")}</figcaption>
      </figure>
    </section>
    <section className="union-object-experience" aria-labelledby="union-experience-title">
      <header><h2 id="union-experience-title">{t("Making data exchange tangible", "让数据交换变得可感知")}</h2><p>{t("An interaction that ends with something you can hold.", "一次以实体凭证结束的交互。")}</p></header>
      <figure className="union-object-hero">{photo("usage-scenario",2570,1676,"A participant taking a long printed receipt from the finished Data Union installation","参与者从完成的数据联盟装置中取出长条打印凭证")}<figcaption>{t("The installation in use", "装置使用现场")}</figcaption></figure>
      <div className="union-object-details"><figure>{photo("acrylic-detail",866,482,"Layered translucent acrylic panels and metal fasteners","层叠的半透明亚克力板与金属连接件")}<figcaption>{t("Layered acrylic & metal structure", "层叠亚克力与金属结构")}</figcaption></figure><figure>{photo("receipt-detail",872,482,"Printed transaction receipt emerging from the installation","从装置中输出的纸质交易凭证")}<figcaption>{t("A physical record of the exchange", "交换行为的实体记录")}</figcaption></figure></div>
      <div className="union-object-actions">{actions.map(([name,w,h,en,zh], i) => <figure key={name}>{photo(name,w,h,en,zh)}<figcaption><span>{String(i+1).padStart(2,"0")}</span>{t(en,zh)}</figcaption></figure>)}</div>
      <figure className="union-object-closing">{photo("installation-final",1542,752,"The completed Data Union installation, showing its full acrylic and metal structure","完成的数据联盟装置全景，展示完整的亚克力与金属结构")}</figure>
    </section>
  </>;
}
