const asset = name => `${import.meta.env.BASE_URL}assets/data-union/${name}`;
const sizes = { "authorization-process": [704,1530], "geographical-map": [304,300], "choose-union": [484,310], "join-union": [498,332], participate: [480,294], review: [453,268], "operation-record": [614,338], "operation-start": [594,338], "operation-select": [620,338], "operation-print": [620,338], "computer-log": [905,579], "data-receiving": [905,576], "business-menu": [977,576], "thermal-printer": [977,576], "interaction-flow": [1324,1828] };

export function DataUnionProcess({ isZh }) {
  const t = (en, zh) => isZh ? zh : en;
  const picture = (name, en, zh, className = "") => <img className={className} src={asset(`${name}.png`)} width={sizes[name][0]} height={sizes[name][1]} alt={t(en, zh)} loading="lazy" />;
  const authorization = [
    ["Merchant data request", "商家提出数据请求", "Merchants state the data purpose, type, sensitivity and compensation. Terms are public and fixed.", "商家说明数据用途、类型、敏感程度和报酬，条款公开且固定。"],
    ["Alliance review & matching", "联盟审核与匹配", "The alliance reviews requests and matches approved merchants with consenting users.", "联盟审核请求，将通过审核的商家与同意参与的用户进行匹配。"],
    ["User consent & transaction", "用户同意与交易", "Users review the merchant, data use, duration and rewards before joining. The alliance shares approved data, and users receive compensation.", "用户在参与前查看商家、数据用途、使用期限与报酬。联盟共享获得授权的数据，用户获得相应报酬。"],
    ["Usage monitoring", "使用监督", "The alliance records each transaction. Users can view usage, receive alerts, revoke consent and hold violators accountable.", "联盟记录每笔交易。用户可以查看使用情况、接收提醒、撤回授权，并追究违规者的责任。"],
  ];
  const journey = [
    ["Choose a data union", "选择数据联盟", "Check the alliances near your current location and decide whether to request data protection.", "查看当前位置附近的联盟，决定是否申请数据保护。", "choose-union"],
    ["Join a data union", "加入数据联盟", "Join the union to get data monitoring devices and traders, and view all major cooperative transactions.", "加入联盟，获得数据监测和交易装置，并查看主要合作交易。", "join-union"],
    ["Participate in the transaction", "参与数据交易", "Use the device to collect and trade your daily data. Authorize a transaction to view its information.", "使用装置收集和交易日常数据，授权交易后查看相关信息。", "participate"],
    ["Retrospective review", "回溯与审查", "After the transaction, use the voucher to check data usage. Report secondary transactions or violations and terminate the transaction.", "交易后通过凭证检查数据使用情况。如发现二次交易或违规行为，可举报并终止交易。", "review"],
  ];
  const operations = [
    ["Record data daily", "记录日常数据", "Keymonitor recording", "键盘活动记录", "A Python script monitors keyboard input in real time and logs activity. In this prototype, keyboard input becomes a source of tradable data.", "Python 脚本实时监测键盘输入并记录活动。在这一原型中，键盘输入成为可交易的数据来源。", "operation-record", "computer-log", "Computer log", "计算机日志"],
    ["Press button to start", "按下按钮开始", "Trading program", "交易程序", "Data is uploaded to physical keys. Plug in the key to access the data.", "数据被上传到实体钥匙中，插入钥匙即可访问数据。", "operation-start", "data-receiving", "Data receiving", "数据接收"],
    ["Review data usage & benefits", "查看数据用途与收益", "Select a transaction", "选择交易", "Move the joystick to browse and highlight a merchant. Press to select and refresh.", "通过摇杆浏览并高亮商家，按下摇杆进行选择并刷新。", "operation-select", "business-menu", "Business menu", "商家菜单"],
    ["Print receipt", "打印凭证", "Print the receipt", "打印交易凭证", "On confirmation, save the result, update the screen, print the receipt and reset the session.", "确认后保存结果、更新屏幕、打印凭证，并重置会话。", "operation-print", "thermal-printer", "Thermal printer", "热敏打印机"],
  ];
  return <div className="union-body union-process-content">
    <section className="union-authorization" aria-labelledby="union-authorization-title">
      <h2 className="union-section-title" id="union-authorization-title">{t("Authorization process", "授权流程")}</h2>
      <p className="union-party-flow">{t("Merchant", "商家")}<span aria-hidden="true">→</span>{t("Alliance", "联盟")}<span aria-hidden="true">→</span>{t("Individuals", "个人")}</p>
      <div className="union-authorization-grid">
        <figure>{picture("authorization-process", "Data request, alliance review, consent, usage records and revocation of permission", "数据请求、联盟审核、用户同意、使用记录及授权撤回流程")}</figure>
        <ol className="union-authorization-steps">{authorization.map((step, i) => <li key={step[0]}><span className="union-step-number">{String(i + 1).padStart(2,"0")}</span><div><h3>{t(step[0],step[1])}</h3><p>{t(step[2],step[3])}</p></div></li>)}</ol>
      </div>
    </section>
    <section className="union-userflow" aria-labelledby="union-userflow-title">
      <h2 className="union-section-title" id="union-userflow-title">{t("User flow", "用户流程")}</h2>
      <p className="union-process-lead">{t("How an ideal data union works, and the reasons behind it.", "一个理想的数据联盟如何运作，以及背后的原因。")}</p>
      <ol className="union-journey">{journey.map((step,i) => <li key={step[0]}><span className="union-step-number">{t("Step", "步骤")} {i+1}</span><div><h3>{t(step[0],step[1])}</h3><p>{t(step[2],step[3])}</p></div>{picture(step[4], step[0] + " illustration", step[1] + "示意图")}</li>)}</ol>
      <div className="union-rationale">
        <aside><h3>{t("Why organize by geography?", "为什么按地理位置划分？")}</h3>{picture("geographical-map", "Map of shared local activity routes", "共同活动区域与路线地图")}<p>{t("People in similar activity locations often share behavioral characteristics, such as travel routes and consumption levels. These commonalities provide a basis for a union.", "活动区域相近的人往往具有相似的行为特征，例如出行路线与消费水平。这些共性构成了建立联盟的基础。")}</p><p>{t("Organizing by geography rather than data category aims to avoid overlapping information and an uncontrolled number of users.", "以地理区域而非数据类别组织联盟，旨在避免信息重叠和用户规模失控。")}</p></aside>
        <aside><h3>{t("Protecting against horizontal harm", "防范横向关联伤害")}</h3><p>{t("The alliance must let users review their own data to prevent external companies from reselling or abusing it.", "联盟必须允许用户审查自己的数据，以防止外部企业转售或滥用数据。")}</p></aside>
      </div>
    </section>
    <section className="union-operation" aria-labelledby="union-operation-title">
      <h2 className="union-section-title" id="union-operation-title">{t("Operation instruction", "操作说明")}</h2>
      <div className="union-operation-grid">{operations.map((step,i) => <section className="union-operation-step" key={step[0]}>
        <h3>{t(step[0],step[1])}</h3>
        <figure className="union-operation-drawing">{picture(step[6],step[0],step[1])}</figure>
        <div className="union-operation-copy"><h4><span>{String(i+1).padStart(2,"0")}</span>{t(step[2],step[3])}</h4><p>{t(step[4],step[5])}</p></div>
        <figure className="union-operation-photo">{picture(step[7],step[8],step[9])}</figure>
      </section>)}</div>
    </section>
    <section className="union-interaction" aria-labelledby="union-interaction-title">
      <h2 className="union-section-title" id="union-interaction-title">{t("ESP32 / Interaction flow", "ESP32 / 交互流程")}</h2>
      <div className="union-interaction-grid"><div><h3>{t("From data input to a printed receipt", "从数据输入到打印凭证")}</h3><p>{t("After input remains quiet for six seconds, the device shows the privacy dashboard. Press the joystick to match buyers, browse with up/down movements and press to select.", "输入停止六秒后，装置显示隐私面板。按下摇杆匹配买家，上下移动浏览，再按下完成选择。")}</p><p>{t("Continuing requires a selected buyer and confirmation of the deal. A confirmed transaction triggers the data-rights animation and prints a receipt. Cancelling ends the session without a receipt. Both paths return to waiting for new data.", "继续交易需要已选择买家并确认成交。确认后播放数据权利动画并打印凭证；取消则结束会话，不打印凭证。两条路径最终都返回等待新数据的状态。")}</p></div><figure>{picture("interaction-flow", "ESP32 interaction flow including six-second input timeout, buyer selection, confirmation, cancellation and receipt printing", "ESP32 交互流程，包含六秒输入超时、买家选择、确认、取消与凭证打印")}</figure></div>
    </section>
  </div>;
}
