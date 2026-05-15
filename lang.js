let currentLang = 'en';

const T = {
en: {
  heroTag:'B2B Sales · Business Development · Project Management',
  heroDesc:"Most sales reps master one industry. I've built revenue across seven global markets, led teams of 280+ headcount, and delivered results in four industries over 12 years. I don't just close deals — I manage people, projects, and accounts at scale.",
  openToWork:'Open to Work · Available Now', btnViewExp:'View Experience',
  stats:['YoY Revenue Growth','Client Base Expansion','Headcount Managed','Years Experience'],
  nav:['Impact','Experience','Markets','Contact'],
  winsTitle:'Numbers That Matter', winsSub:'Verified results from real roles across 12 years.',
  storyTitle:'My Story',
  expTitle:'Work History', expSub:'Six roles across investment banking, SaaS, healthcare staffing, outsourcing, and web design. Full details in the CV.',
  marketsTitle:'Markets I Work', marketsSub:'Direct sales experience across seven international markets.',
  skillsTitle:'Core Skills', skillsSub:'Built across every role over 12 years.',
  approachTitle:'My Approach', approachSub:'Three principles behind every deal I work.',
  whyTitle:'Why You Should Choose Me', whySub:'Three things that separate me from every other BD candidate on your shortlist.',
  contactTitle:'Ready to Interview', contactSub:'Open to senior BD, sales leadership, and fractional BDR roles — remote preferred. Available across AU, SG, Dubai, Canada, and the US. Response within 24 hours.',
  emailBtn:'✉ Email Me', cvCtaTitle:'Want the full details?', cvCtaSub:'Download the complete CV with all role specifics and achievements.',
  showExp:'Show Experience', hideExp:'Hide Experience',
  sl:['Impact','The Journey','Career','Geography','Industries','Capabilities','How I Sell','Why Ian','Credentials','Contact'],
  wt:['YoY Revenue Growth','Pipeline Forecast Accuracy','Client Base Expansion','Conversion Rate Improvement','Global Client Base Doubled','Deal Size Range','Headcount Managed','Enterprise Account Budgets'],
  wd:['Drove 40% year-over-year growth at Novatech through targeted outbound and strategic account planning across Fortune 1000 companies.','Maintained 85%+ accuracy across a 50+ account portfolio at CP Partners using Salesforce CRM.','Grew the Canadian healthcare client base by 50% in 18 months at Medvocation through LinkedIn outreach and referral programs.','Improved lead-to-client conversion by 35% by redesigning the sales funnel and using data to remove friction points.','Doubled Virtual Workforce Partners\' global client base within 2 years through multi-channel outbound across 5 markets.','Qualified and managed investment banking mandates from $5M to $100M+ covering M&A, capital advisory, and fundraising.','Oversaw a team of 280+ staff at Virtual Workforce Partners — managing performance, client alignment, and operational delivery across multiple enterprise accounts.','Managed enterprise client accounts with budgets ranging from $100K to $2M, handling full account lifecycle from onboarding to renewal.'],
  sp:['I didn\'t start in a corner office. I started on the phones in fintech — cold calling merchants, learning to handle rejection, learning what makes people say yes. That foundation taught me something most salespeople never get: <strong>the discipline to work a system and the instinct to know when to deviate from it.</strong>','From there, I took that same hunger into outsourcing, then healthcare staffing, then SaaS, then investment banking. Every industry was a new language — new buyers, new objections, new stakes. Most reps never cross one vertical. I crossed four, on five continents, and grew revenue in every single one.','What I learned is that the fundamentals of sales never change. <strong>People buy from people they trust, who understand their problem, and who make the decision feel obvious.</strong> I built my career on that truth — and the numbers are proof it works.',"I'm not looking for a place to coast. I'm looking for a team that wants a closer who brings energy, structure, and results from day one."],
  stl:['Learned the grind. Built the discipline. 20% YoY growth from pure outbound hustle.','Went global and went deep. Doubled the client base across 5 markets, managed 280+ headcount, and ran full project delivery across enterprise accounts.','Went consultative. Grew Canada 50%, built UAE from zero, improved conversion 35%.','Went enterprise. 40% YoY growth. Fortune 1000 accounts. Structured upsell programs.','Went to the top. $5M–$100M+ mandates. C-suite relationships. 85%+ forecast accuracy.'],
  apt:['Research Before Outreach','Questions Over Pitches','Systems, Not Sprints'],
  apx:['Every prospect gets studied before first contact. Understand their business, their pain, and who makes the decision. No generic cold messages.','NEPQ-trained. The best reps ask better questions. I surface the gap between where a prospect is and where they want to be, then show the path.','Consistent pipeline comes from repeatable processes. I build outbound systems that produce results every week, not just at end-of-quarter.'],
  wht:['I Adapt Where Others Don\'t','I Deliver Numbers, Not Narratives','I Build Systems That Outlast Me'],
  whx:['Most salespeople are built for one industry, one buyer type, one market. I\'ve sold fintech to US merchants, outsourcing to enterprise clients in 5 countries, healthcare staffing in Canada and the UAE, SaaS to Fortune 1000s, and investment banking mandates worth $100M+. Every time I entered a new vertical, I didn\'t just survive — I grew revenue.','I don\'t talk about what I\'m going to do — I show what I\'ve already done. 40% YoY revenue growth. 50% client base expansion in 18 months. 85%+ pipeline forecast accuracy. 35% improvement in lead-to-client conversion. These aren\'t estimates. They\'re results from real roles with real accountability attached to them.','Any rep can have a good quarter. I build the process that makes the next 12 quarters repeatable. Referral networks that generated recurring revenue at VWP. Outbound systems that kept the pipeline full at Novatech. Funnel redesigns that cut friction at Medvocation. I don\'t just hit targets — I leave teams better than I found them.'],
  whp:['→ 4 industries. 5 markets. Growth in every single one.','→ Every claim on this page is backed by a real outcome.','→ I\'m not a sprint. I\'m a system.'],
  sg:['Sales & Business Development','Management & Operations','Tools & Platforms'],
  er:['Business Development Manager','Business Development & Account Manager','Country Sales & Business Development Manager','Project Manager & Business Development Director','Sales & Business Development Executive','Freelance Web Designer & Creative'],
  ex:['Built and managed a 50+ prospect pipeline for mandates valued at $5M to $100M+. Drove C-suite engagement with founders, CEOs, and CFOs across technology, healthcare, and financial services. Maintained 85%+ forecast accuracy using Salesforce CRM.','Drove 40% year-over-year revenue growth through outbound prospecting across Fortune 1000 and mid-market enterprises. Achieved 85%+ client retention and grew average account value by 25% via structured upsell programs.','Expanded the Canadian client base by 50% in 18 months. Improved conversion by 35% by redesigning the sales funnel. Built the UAE pipeline from zero while managing full Canadian revenue accountability.','Doubled the global client base in 2 years across UK, US, Australia, UAE, and APAC. Managed a team of 280+ headcount — overseeing performance, client alignment, and delivery across enterprise accounts with budgets from $100K to $2M. Built referral networks that generated recurring revenue while running full project management across simultaneous client engagements.','Achieved 20% year-over-year sales growth and grew merchant partnerships by 30%. Mentored a 5-member junior sales team to 100% KPI attainment, improving team close rates by 15%.','Designed and built websites, landing pages, and branded creative assets for clients across various industries. Delivered end-to-end projects covering UI/UX layout, visual identity, and digital content production.'],
  mn:['Primary market','Enterprise clients','Healthcare & SaaS','Finance & Advisory','Institutional BD','Enterprise clients','BD & Partnerships'],
  ip:['Investment Banking','SaaS','Managed IT','Healthcare Staffing','Fintech','Outsourcing','Virtual Staffing','Professional Services'],
  cs:'Formal education plus active professional certs.',
  ngt:'Get in touch', dcvh:'Download CV', dcvb:'&#8595; Download Full CV',
  footerRight:'B2B Sales &amp; Business Development &nbsp;|&nbsp; Philippines &nbsp;|&nbsp; &copy; 2026'
},

zh: {
  heroTag:'B2B销售 · 业务拓展 · 项目管理',
  heroDesc:'大多数销售人员精通一个行业。我在12年间跨越七个全球市场、带领280+人团队，在四个行业持续交付成果。我不只是谈成交易——我管理人员、项目和大客户。',
  openToWork:'正在求职 · 随时可入职', btnViewExp:'查看经历',
  stats:['年度营收增长','客户基础扩张','管理人员规模','年从业经验'],
  nav:['亮点成就','工作经历','市场区域','联系我'],
  winsTitle:'核心数据', winsSub:'12年真实岗位的可验证成果。',
  storyTitle:'我的故事',
  expTitle:'工作经历', expSub:'横跨投资银行、SaaS、医疗招聘、外包及网页设计的六段经历。详情见简历。',
  marketsTitle:'目标市场', marketsSub:'七个国际市场的直接销售经验。',
  skillsTitle:'核心技能', skillsSub:'在12年每个职位中积累。',
  approachTitle:'我的销售方法', approachSub:'每笔交易背后的三大原则。',
  whyTitle:'为何选择我', whySub:'让我在众多候选人中脱颖而出的三点优势。',
  contactTitle:'期待面试', contactSub:'开放高级BD、销售领导及分散式BDR职位——优先远程。覆盖澳大利亚、新加坡、迪拜、加拿大及美国。24小时内回复。',
  emailBtn:'✉ 发送邮件', cvCtaTitle:'需要完整详情？', cvCtaSub:'下载包含所有岗位细节和成就的完整简历。',
  showExp:'查看工作经历', hideExp:'收起工作经历',
  sl:['亮点成就','历程','职业经历','地理范围','行业','能力','我的销售方式','为何选择Ian','资质认证','联系我'],
  wt:['年度营收增长','管道预测准确率','客户基础扩张','转化率提升','全球客户翻倍','交易规模范围','管理人员规模','企业客户预算'],
  wd:['通过有针对性的外向销售和战略客户规划，在Novatech实现了40%的年度营收增长，覆盖财富1000强企业。','在CP Partners使用Salesforce CRM，在50+个客户组合中维持了85%以上的预测准确率。','通过LinkedIn拓展和转介绍计划，在18个月内将Medvocation的加拿大医疗客户群增长了50%。','通过重新设计销售漏斗并利用数据消除摩擦点，将潜在客户到签约客户的转化率提升了35%。','通过5个市场的多渠道外向销售，在两年内将Virtual Workforce Partners的全球客户群翻倍。','资格审核并管理了从500万到1亿美元以上的投资银行授权业务，涵盖并购、资本顾问和融资。','在Virtual Workforce Partners负责管理280+名员工团队——处理跨多个企业客户的绩效管理、客户协调和运营交付。','管理预算从10万到200万美元的企业客户账户，负责从入职到续约的完整客户生命周期管理。'],
  sp:['我并非从豪华办公室起步。我从金融科技行业的电话销售开始——给商家打陌拜电话，学会处理拒绝，学会什么能让人说"是"。这段经历让我习得了大多数销售人员从未真正掌握的东西：<strong>严守体系的纪律，以及知道何时打破规则的直觉。</strong>','从那以后，我带着同样的进取心进入了外包行业，然后是医疗人力、SaaS，最终到投资银行。每个行业都是一门新语言——新的买家、新的异议、新的风险。大多数销售人员从未跨越一个垂直领域。我跨越了四个，在五大洲，并且在每一个领域都实现了营收增长。','我学到的是，销售的基本原则永远不会改变。<strong>人们向他们信任的、理解他们问题的、能让决策显得顺理成章的人购买。</strong>我的职业生涯建立在这个真理之上——那些数字就是证明。','我不是在寻找一个可以安逸的地方。我在寻找一支想要一名能从第一天起就带来能量、结构和成果的成交专家的团队。'],
  stl:['磨砺技能。铸就纪律。通过纯粹的外向销售实现20%的年度增长。','走向全球，深耕细作。在5个市场将客户群翻倍，管理280+人员，并在企业客户中完成全程项目交付。','转型为顾问式销售。加拿大增长50%，从零建立阿联酋市场，转化率提升35%。','转向企业市场。年度增长40%。财富1000强客户。结构化增值销售计划。','走向顶峰。500万至1亿美元以上的授权业务。与C级高管建立关系。85%以上的预测准确率。'],
  apt:['外展前先调研','提问而非推销','体系而非冲刺'],
  apx:['每一个潜在客户在首次联系前都经过深入研究。了解他们的业务、痛点，以及谁是决策者。没有泛泛而谈的冷消息。','经过NEPQ培训。最优秀的销售人员会提出更好的问题。我能发现潜在客户现状与目标之间的差距，然后展示解决路径。','稳定的销售管道来自可重复的流程。我构建每周都能产出成果的外向销售系统，而不仅仅在季末冲刺。'],
  wht:['我能适应他人无法适应的环境','我交付数字，而非叙事','我构建超越自己的系统'],
  whx:['大多数销售人员只为一个行业、一种买家类型、一个市场服务。我曾向美国商家销售金融科技，向5个国家的企业客户销售外包服务，在加拿大和阿联酋销售医疗人力，向财富1000强销售SaaS，以及价值1亿美元以上的投行授权业务。每次进入新领域，我不仅生存下来——还实现了营收增长。','我不空谈计划——我展示已经完成的成果。40%的年度营收增长。18个月内50%的客户群扩张。85%以上的管道预测准确率。潜在客户到签约客户的转化率提升35%。这些不是估算，而是有真实责任背书的真实岗位成果。','任何销售人员都可以有一个好季度。我构建让接下来12个季度可持续重复的流程。在VWP建立的转介绍网络产生了持续性收入。在Novatech保持管道充实的外向销售系统。在Medvocation减少摩擦的漏斗重新设计。我不只是完成目标——我让团队比我加入时更强。'],
  whp:['→ 4个行业。5个市场。每一个都实现增长。','→ 本页上的每一项声明都有真实成果支持。','→ 我不是短跑运动员。我是一套系统。'],
  sg:['销售与业务拓展','管理与运营','工具与平台'],
  er:['商务拓展经理','商务拓展与客户经理','国家销售与业务拓展经理','项目经理与商务拓展总监','销售与业务拓展主管','自由网页设计师与创意人'],
  ex:['构建并管理了价值500万至1亿美元以上授权业务的50+潜在客户管道。推动了与科技、医疗和金融服务行业的创始人、CEO和CFO的C级高管接触。使用Salesforce CRM保持85%以上的预测准确率。','通过针对财富1000强和中端市场企业的外向销售，实现了40%的年度营收增长。实现了85%以上的客户留存率，并通过结构化增值销售计划将平均客户价值提升了25%。','在18个月内将加拿大客户群扩大了50%。通过重新设计销售漏斗，提升转化率35%。同时从零开始建立阿联酋销售管道，并负责全加拿大营收管理。','在两年内，在英国、美国、澳大利亚、阿联酋和亚太地区将全球客户群翻倍。管理280+名员工团队——监督预算从10万到200万美元的企业客户的绩效、客户协调和交付。建立了产生持续性收入的转介绍网络，同时在多个同步客户项目中完成全程项目管理。','实现了20%的年度销售增长，并将商家合作伙伴关系增长了30%。指导了一个5人初级销售团队达到100%的KPI目标，将团队成交率提升了15%。','为各行业客户设计并构建网站、落地页和品牌创意素材。完成了从UI/UX布局、视觉标识到数字内容制作的端到端项目。'],
  mn:['主要市场','企业客户','医疗与SaaS','金融与咨询','机构业务拓展','企业客户','业务拓展与合作伙伴'],
  ip:['投资银行','SaaS','托管IT','医疗人力','Fintech','外包','虚拟人力','专业服务'],
  cs:'正规教育及现行专业认证。',
  ngt:'联系我', dcvh:'下载简历', dcvb:'&#8595; 下载完整简历',
  footerRight:'B2B销售与业务拓展 &nbsp;|&nbsp; 菲律宾 &nbsp;|&nbsp; &copy; 2026'
},

ja: {
  heroTag:'B2B営業 · ビジネス開発 · プロジェクト管理',
  heroDesc:'多くの営業担当者は一つの業界しか知りません。私は12年間で7つのグローバル市場を開拓し、280名以上のチームを率い、4つの業界で成果を出し続けてきました。商談を成立させるだけでなく、人材・プロジェクト・大口顧客を大規模に管理します。',
  openToWork:'転職活動中 · 即入社可能', btnViewExp:'経歴を見る',
  stats:['年間収益成長率','顧客基盤拡大率','管理人員数','経験年数'],
  nav:['実績','職歴','市場','お問い合わせ'],
  winsTitle:'重要な数字', winsSub:'12年間の実際の職歴から検証済みの成果。',
  storyTitle:'私のストーリー',
  expTitle:'職歴', expSub:'投資銀行、SaaS、医療スタッフィング、アウトソーシング、ウェブデザインにわたる6つの職歴。詳細はCVをご覧ください。',
  marketsTitle:'対応市場', marketsSub:'7つの国際市場での直接販売経験。',
  skillsTitle:'コアスキル', skillsSub:'12年間のすべての職歴を通じて培ったスキル。',
  approachTitle:'私のアプローチ', approachSub:'すべての商談に込める3つの原則。',
  whyTitle:'なぜ私を選ぶべきか', whySub:'他のすべてのBD候補者と私を差別化する3つのポイント。',
  contactTitle:'面接の準備ができています', contactSub:'シニアBD、営業リーダー、フラクショナルBDRポジションを希望——リモート優先。AU・SG・ドバイ・カナダ・米国対応可。24時間以内に返信。',
  emailBtn:'✉ メールを送る', cvCtaTitle:'詳細をご希望ですか？', cvCtaSub:'すべての職務詳細と実績を含む完全なCVをダウンロードしてください。',
  showExp:'職歴を表示', hideExp:'職歴を非表示',
  sl:['実績','歩み','キャリア','地域','業界','スキル','私の営業スタイル','なぜIanなのか','資格・学歴','お問い合わせ'],
  wt:['年間収益成長率','パイプライン予測精度','顧客基盤拡大','コンバージョン率向上','グローバル顧客基盤の倍増','案件規模','管理人員数','エンタープライズアカウント予算'],
  wd:['ターゲット型アウトバウンドと戦略的アカウントプランニングを通じて、NovateachでフォーチュンFortune 1000企業に対し40%の年間成長を達成。','CP PartnersでSalesforce CRMを使い、50以上のアカウントポートフォリオで85%以上の予測精度を維持。','Medvocationで、LinkedInアウトリーチと紹介プログラムを通じて、18か月でカナダの医療顧客基盤を50%拡大。','セールスファネルを再設計し、データを活用してフリクションポイントを排除することで、リードから顧客への転換率を35%向上。','5市場にわたるマルチチャネルアウトバウンドにより、2年以内にVirtual Workforce Partnersのグローバル顧客基盤を2倍に。','M&A、資本アドバイザリー、資金調達をカバーする500万ドルから1億ドル超の投資銀行マンデートを資格審査・管理。','Virtual Workforce Partnersで280名以上のスタッフを統括——複数のエンタープライズ企業に対してパフォーマンス管理、クライアントアラインメント、オペレーション管理を実施。','10万ドルから200万ドルのバジェットを持つエンタープライズ顧客のアカウントを管理——オンボーディングから更新まで完全なアカウントライフサイクルを担当。'],
  sp:['私はコーナーオフィスから始めたわけではありません。フィンテックの電話営業から出発し、加盟店に飛び込み電話をかけ、断られることを学び、人がイエスと言う理由を理解していきました。その基盤が、ほとんどの営業担当者が得られないものを私に与えてくれました：<strong>システムを動かす規律と、いつそこから外れるべきかを知る直感。</strong>','その後、同じ熱量でアウトソーシング、医療スタッフィング、SaaS、そして投資銀行へと進んでいきました。どの業界も新たな言語——新しい買い手、新しい反論、新しいリスクがありました。ほとんどの営業担当者は一つの業界しか経験しません。私は四つを経験し、五大陸で、そのすべてで収益を上げました。','私が学んだのは、販売の基本は変わらないということです。<strong>人々は信頼できる人、自分の問題を理解している人、決断を当然のことのように感じさせてくれる人から買う。</strong>私はこの真実にキャリアを築き——その数字がそれを証明しています。','楽な場所を探しているわけではありません。初日からエネルギー、構造、結果をもたらすクロージング担当を求めているチームを探しています。'],
  stl:['地道な努力を学んだ。規律を身につけた。純粋なアウトバウンドの勤勉さから20%の年間成長を達成。','グローバル化し、深化した。5市場で顧客基盤を倍増、280名以上を管理、エンタープライズ企業の完全プロジェクト管理を実施。','コンサルタティブに転換。カナダを50%成長させ、UAEをゼロから構築し、転換率を35%改善。','エンタープライズに移行。40%の年間成長。フォーチュン1000企業のアカウント。構造化アップセルプログラム。','頂点へ。500万ドル〜1億ドル超のマンデート。C-suiteとの関係構築。85%以上の予測精度。'],
  apt:['アウトリーチ前にリサーチ','ピッチよりも質問','スプリントではなくシステム'],
  apx:['すべての見込み客は初回コンタクト前に研究します。彼らのビジネス、痛み、誰が決定を下すかを理解する。一般的なコールドメッセージは送らない。','NEPQ訓練済み。優秀な営業担当者はより良い質問をします。見込み客の現状と望む状態とのギャップを浮き彫りにし、そのパスを示します。','一貫したパイプラインは繰り返し可能なプロセスから生まれます。私は四半期末だけでなく、毎週結果を出すアウトバウンドシステムを構築します。'],
  wht:['他の人が適応できないところで私は適応する','数字を届ける、物語ではなく','自分が去った後も続くシステムを構築する'],
  whx:['ほとんどの営業担当者は、一つの業界、一種の買い手、一つの市場向けに設計されています。私はフィンテックを米国の商人に、アウトソーシングを5カ国の企業クライアントに、カナダとUAEで医療スタッフィングを、フォーチュン1000企業にSaaSを、そして1億ドル以上の投資銀行マンデートを販売しました。新しい業界に入るたびに、生き残るだけでなく——収益を伸ばしました。','何をするつもりかは語りません——すでに達成したことを見せます。40%の年間収益成長。18カ月で50%の顧客基盤拡大。85%以上のパイプライン予測精度。リードから顧客への転換率35%改善。これらは推定値ではなく、実際の役割で実際の責任を伴って得た結果です。','どの営業担当者も好調な四半期を持てます。私は次の12四半期を再現可能にするプロセスを構築します。VWPで構築した紹介ネットワークが継続収益を生み出しました。Novateachでパイプラインを充実させ続けたアウトバウンドシステム。Medvocationでフリクションを削減したファネル再設計。目標を達成するだけでなく——チームを見つけた状態より良くして去ります。'],
  whp:['→ 4業界。5市場。すべてで成長。','→ このページのすべての主張は実際の成果に裏付けられています。','→ 私はスプリントではなく、システムです。'],
  sg:['営業とビジネス開発','マネジメントとオペレーション','ツールとプラットフォーム'],
  er:['ビジネス開発マネージャー','ビジネス開発・アカウントマネージャー','カントリーセールス・ビジネス開発マネージャー','プロジェクトマネージャー・ビジネス開発ディレクター','セールス・ビジネス開発エグゼクティブ','フリーランスWebデザイナー・クリエイティブ'],
  ex:['500万ドルから1億ドル超の価値のあるマンデートに対する50以上の見込み客パイプラインを構築・管理。テクノロジー、医療、金融サービス全般にわたる創設者、CEO、CFOとのC-suiteエンゲージメントを推進。Salesforce CRMを使用して85%以上の予測精度を維持。','フォーチュン1000および中堅企業向けアウトバウンドプロスペクティングを通じて40%の年間収益成長を達成。85%以上のクライアント保持率を実現し、構造化アップセルプログラムにより平均アカウント価値を25%向上。','18か月でカナダの顧客基盤を50%拡大。セールスファネルの再設計により転換率を35%改善。カナダの全収益管理を担当しながら、UAEのパイプラインをゼロから構築。','英国、米国、オーストラリア、UAE、APACにわたり2年間でグローバル顧客基盤を倍増。280名以上のチームを管理——10万ドルから200万ドルの予算を持つエンタープライズ顧客のパフォーマンス、クライアントアラインメント、デリバリーを監督。継続収益を生み出す紹介ネットワークを構築しながら、複数の同時クライアントプロジェクトの完全なプロジェクト管理を実施。','20%の年間売上成長を達成し、加盟店のパートナーシップを30%拡大。5名のジュニアセールスチームを指導し100%のKPI達成を実現、チームの成約率を15%向上。','様々な業界のクライアント向けにウェブサイト、ランディングページ、ブランドクリエイティブアセットを設計・構築。UI/UXレイアウト、ビジュアルアイデンティティ、デジタルコンテンツ制作を網羅したエンドツーエンドのプロジェクトを納品。'],
  mn:['主要市場','企業クライアント','医療・SaaS','ファイナンス・アドバイザリー','機関投資家向けBD','企業クライアント','BDとパートナーシップ'],
  ip:['投資銀行','SaaS','マネージドIT','医療スタッフィング','Fintech','アウトソーシング','バーチャルスタッフィング','プロフェッショナルサービス'],
  cs:'正式な教育と現在有効な職業資格。',
  ngt:'お問い合わせ', dcvh:'CVをダウンロード', dcvb:'&#8595; 完全版CVをダウンロード',
  footerRight:'B2B営業・ビジネス開発 &nbsp;|&nbsp; フィリピン &nbsp;|&nbsp; &copy; 2026'
},

ko: {
  heroTag:'B2B 영업 · 사업 개발 · 프로젝트 관리',
  heroDesc:'대부분의 영업 담당자는 하나의 산업만 다룹니다. 저는 12년간 7개 글로벌 시장에서 수익을 창출하고, 280명 이상의 팀을 이끌며, 4개 산업에서 성과를 달성했습니다. 단순히 계약을 성사시키는 것을 넘어, 인력·프로젝트·대형 거래처를 대규모로 관리합니다.',
  openToWork:'구직 중 · 즉시 입사 가능', btnViewExp:'경력 보기',
  stats:['연간 매출 성장률','고객 기반 확장','관리 인원','경력 연수'],
  nav:['성과','경력','시장','연락처'],
  winsTitle:'중요한 숫자들', winsSub:'12년간 실제 직무에서 검증된 성과.',
  storyTitle:'나의 이야기',
  expTitle:'경력 사항', expSub:'투자 은행, SaaS, 의료 인력, 아웃소싱 및 웹 디자인에 걸친 6가지 경력. 상세 내용은 CV를 참조하세요.',
  marketsTitle:'담당 시장', marketsSub:'7개 국제 시장에서의 직접 영업 경험.',
  skillsTitle:'핵심 역량', skillsSub:'12년간 모든 직무에서 쌓은 역량.',
  approachTitle:'나의 영업 방식', approachSub:'모든 거래 뒤에 있는 세 가지 원칙.',
  whyTitle:'왜 저를 선택해야 하는가', whySub:'다른 모든 BD 후보자와 저를 차별화하는 세 가지.',
  contactTitle:'면접 준비 완료', contactSub:'시니어 BD, 영업 리더십, 프랙셔널 BDR 포지션 지원 가능 — 원격 근무 선호. AU, SG, 두바이, 캐나다, 미국 대응 가능. 24시간 내 답변.',
  emailBtn:'✉ 이메일 보내기', cvCtaTitle:'상세 내용이 필요하신가요?', cvCtaSub:'모든 직무 세부 사항과 성과가 포함된 전체 CV를 다운로드하세요.',
  showExp:'경력 보기', hideExp:'경력 닫기',
  sl:['성과','여정','경력','지역','산업','역량','나의 영업 방식','왜 Ian인가','자격증','연락처'],
  wt:['연간 매출 성장','파이프라인 예측 정확도','고객 기반 확장','전환율 개선','글로벌 고객 기반 2배 성장','거래 규모 범위','관리 인원','기업 계정 예산'],
  wd:['Novatech에서 포춘 1000대 기업을 대상으로 한 타겟 아웃바운드 및 전략적 계정 기획을 통해 연간 40% 매출 성장 달성.','CP Partners에서 Salesforce CRM을 활용해 50개 이상의 계정 포트폴리오에서 85% 이상의 예측 정확도 유지.','Medvocation에서 LinkedIn 아웃리치와 추천 프로그램을 통해 18개월 만에 캐나다 의료 고객 기반을 50% 성장시킴.','영업 퍼널을 재설계하고 데이터를 활용해 마찰 지점을 제거함으로써 잠재 고객에서 고객으로의 전환율을 35% 개선.','5개 시장 전반에 걸친 멀티채널 아웃바운드를 통해 2년 내에 Virtual Workforce Partners의 글로벌 고객 기반을 2배로 성장시킴.','M&A, 자본 자문, 자금 조달을 포괄하는 500만~1억 달러 이상의 투자은행 위임 업무를 심사하고 관리함.','Virtual Workforce Partners에서 280명 이상의 직원 팀을 총괄 — 여러 기업 계정에 걸쳐 성과 관리, 클라이언트 조정 및 운영 납품 관리.','10만~200만 달러 예산의 기업 클라이언트 계정을 관리하며, 온보딩부터 갱신까지 전체 계정 생애주기 담당.'],
  sp:['저는 으리으리한 사무실에서 시작하지 않았습니다. 핀테크 업계에서 전화 영업으로 시작했습니다 — 가맹점에 콜드콜을 하고, 거절을 처리하는 법을 배우고, 사람들이 \'예\'라고 말하게 만드는 것을 배웠습니다. 그 토대가 대부분의 영업인이 얻지 못하는 것을 가르쳐 주었습니다: <strong>시스템을 따르는 규율과 언제 그것을 벗어나야 하는지 아는 직관.</strong>','그 후, 동일한 열정으로 아웃소싱, 의료 인력 파견, SaaS, 투자은행으로 나아갔습니다. 모든 산업이 새로운 언어였습니다 — 새로운 구매자, 새로운 반대 의견, 새로운 판돈. 대부분의 영업 담당자는 하나의 업종도 넘어서지 못합니다. 저는 네 개를 넘었고, 5개 대륙에서 모든 분야에서 수익을 창출했습니다.','제가 배운 것은 영업의 기본은 절대 변하지 않는다는 것입니다. <strong>사람들은 그들이 신뢰하고, 그들의 문제를 이해하며, 결정을 당연하게 느끼도록 만드는 사람에게서 삽니다.</strong> 저는 그 진실 위에 경력을 쌓았고 — 숫자가 그것이 효과가 있다는 증거입니다.','저는 편하게 지낼 곳을 찾는 것이 아닙니다. 첫날부터 에너지, 구조, 결과를 가져오는 클로저를 원하는 팀을 찾고 있습니다.'],
  stl:['고생을 배웠습니다. 규율을 쌓았습니다. 순수한 아웃바운드 노력으로 20% 연간 성장 달성.','글로벌로 나아가고 깊이 파고들었습니다. 5개 시장에서 고객 기반을 두 배로 늘리고, 280명 이상을 관리하며, 기업 계정 전반에 걸쳐 완전한 프로젝트 납품을 이행.','컨설팅 방식으로 전환했습니다. 캐나다 50% 성장, 아랍에미리트를 제로에서 구축, 전환율 35% 개선.','엔터프라이즈로 전환했습니다. 40% 연간 성장. 포춘 1000대 계정. 구조화된 업셀 프로그램.','정상으로 올라갔습니다. 500만~1억 달러 이상의 위임 업무. C-레벨 관계. 85% 이상의 예측 정확도.'],
  apt:['아웃리치 전 리서치','피치보다 질문','스프린트가 아닌 시스템'],
  apx:['모든 잠재 고객은 첫 연락 전에 철저히 연구됩니다. 그들의 비즈니스, 고충, 그리고 누가 결정을 내리는지 파악합니다. 일반적인 콜드 메시지는 없습니다.','NEPQ 훈련을 받았습니다. 최고의 영업 담당자는 더 나은 질문을 합니다. 잠재 고객이 현재 있는 곳과 원하는 곳 사이의 격차를 드러내고 그 길을 보여줍니다.','일관된 파이프라인은 반복 가능한 프로세스에서 나옵니다. 저는 분기 말뿐만 아니라 매주 결과를 생산하는 아웃바운드 시스템을 구축합니다.'],
  wht:['다른 사람들이 적응하지 못하는 곳에서 적응합니다','저는 이야기가 아닌 숫자를 제공합니다','저보다 오래 지속되는 시스템을 구축합니다'],
  whx:['대부분의 영업 담당자는 하나의 산업, 하나의 구매자 유형, 하나의 시장에 맞게 설계되어 있습니다. 저는 미국 가맹점에 핀테크를, 5개국의 기업 클라이언트에 아웃소싱을, 캐나다와 UAE에서 의료 인력 파견을, 포춘 1000대 기업에 SaaS를, 1억 달러 이상의 투자은행 위임 업무를 판매했습니다. 새로운 분야에 들어갈 때마다, 단순히 살아남은 것이 아니라 — 수익을 성장시켰습니다.','제가 할 일을 말하는 것이 아니라 — 이미 이룬 것을 보여줍니다. 40% 연간 매출 성장. 18개월 내 50% 고객 기반 확장. 85% 이상의 파이프라인 예측 정확도. 잠재 고객에서 고객으로의 전환율 35% 개선. 이것들은 추정치가 아닙니다. 실제 역할에서 실제 책임이 수반된 결과입니다.','어떤 영업 담당자든 좋은 분기를 가질 수 있습니다. 저는 다음 12개 분기를 반복 가능하게 만드는 프로세스를 구축합니다. VWP에서 구축한 추천 네트워크가 반복 수익을 창출했습니다. Novatech에서 파이프라인을 가득 채운 아웃바운드 시스템. Medvocation에서 마찰을 줄인 퍼널 재설계. 저는 단순히 목표를 달성하는 것이 아닙니다 — 팀을 내가 찾았을 때보다 더 좋게 남겨둡니다.'],
  whp:['→ 4개 산업. 5개 시장. 모든 곳에서 성장.','→ 이 페이지의 모든 주장은 실제 결과로 뒷받침됩니다.','→ 저는 단거리 달리기가 아닙니다. 저는 시스템입니다.'],
  sg:['영업 및 사업 개발','관리 및 운영','도구 및 플랫폼'],
  er:['사업 개발 매니저','사업 개발 및 계정 관리자','국가 영업 및 사업 개발 매니저','프로젝트 매니저 및 사업 개발 이사','영업 및 사업 개발 임원','프리랜서 웹 디자이너 및 크리에이티브'],
  ex:['500만~1억 달러 이상의 위임 업무에 대한 50개 이상의 잠재 고객 파이프라인을 구축하고 관리했습니다. 기술, 의료, 금융 서비스 전반의 창업자, CEO, CFO와의 C-레벨 참여를 이끌었습니다. Salesforce CRM을 사용해 85% 이상의 예측 정확도를 유지했습니다.','포춘 1000대 기업과 중간 시장 기업에 대한 아웃바운드 프로스펙팅을 통해 40% 연간 매출 성장을 달성했습니다. 85% 이상의 고객 유지율을 달성하고 구조화된 업셀 프로그램으로 평균 계정 가치를 25% 높였습니다.','18개월 만에 캐나다 고객 기반을 50% 확장했습니다. 영업 퍼널 재설계로 전환율을 35% 개선했습니다. 캐나다의 전체 수익 책임을 관리하면서 UAE 파이프라인을 제로에서 구축했습니다.','영국, 미국, 호주, UAE, APAC 전역에서 2년 내 글로벌 고객 기반을 두 배로 늘렸습니다. 280명 이상의 팀을 관리 — 10만~200만 달러 예산의 기업 계정에 걸쳐 성과, 클라이언트 정렬, 납품을 감독했습니다. 동시 클라이언트 참여 전반에 걸쳐 완전한 프로젝트 관리를 수행하면서 반복 수익을 창출하는 추천 네트워크를 구축했습니다.','연간 20% 판매 성장을 달성하고 가맹점 파트너십을 30% 성장시켰습니다. 5명의 주니어 영업팀을 멘토링하여 100% KPI 달성을 이끌었으며, 팀 성약률을 15% 개선했습니다.','다양한 산업의 클라이언트를 위해 웹사이트, 랜딩 페이지, 브랜드 크리에이티브 자산을 설계하고 구축했습니다. UI/UX 레이아웃, 비주얼 아이덴티티, 디지털 콘텐츠 제작을 포괄하는 엔드투엔드 프로젝트를 납품했습니다.'],
  mn:['주요 시장','기업 클라이언트','의료 및 SaaS','금융 및 자문','기관 사업 개발','기업 클라이언트','사업 개발 및 파트너십'],
  ip:['투자 은행','SaaS','관리형 IT','의료 인력 파견','Fintech','아웃소싱','가상 인력 파견','전문 서비스'],
  cs:'정규 교육 및 현재 유효한 전문 자격증.',
  ngt:'연락하기', dcvh:'이력서 다운로드', dcvb:'&#8595; 전체 이력서 다운로드',
  footerRight:'B2B 영업 &amp; 사업 개발 &nbsp;|&nbsp; 필리핀 &nbsp;|&nbsp; &copy; 2026'
},

es: {
  heroTag:'Ventas B2B · Desarrollo de Negocios · Gestión de Proyectos',
  heroDesc:'La mayoría de los vendedores dominan una sola industria. He generado ingresos en siete mercados globales, liderado equipos de más de 280 personas y obtenido resultados en cuatro industrias durante 12 años. No solo cierro negocios — gestiono personas, proyectos y cuentas a gran escala.',
  openToWork:'En búsqueda activa · Disponible ahora', btnViewExp:'Ver experiencia',
  stats:['Crecimiento de ingresos anual','Expansión de clientes','Personas gestionadas','Años de experiencia'],
  nav:['Logros','Experiencia','Mercados','Contacto'],
  winsTitle:'Números que importan', winsSub:'Resultados verificados de roles reales durante 12 años.',
  storyTitle:'Mi historia',
  expTitle:'Trayectoria profesional', expSub:'Seis roles en banca de inversión, SaaS, staffing sanitario, outsourcing y diseño web. Detalles completos en el CV.',
  marketsTitle:'Mercados en los que trabajo', marketsSub:'Experiencia de ventas directas en siete mercados internacionales.',
  skillsTitle:'Competencias clave', skillsSub:'Desarrolladas en cada rol durante 12 años.',
  approachTitle:'Mi enfoque', approachSub:'Tres principios detrás de cada trato que trabajo.',
  whyTitle:'Por qué deberías elegirme', whySub:'Tres cosas que me diferencian de todos los demás candidatos de BD.',
  contactTitle:'Listo para la entrevista', contactSub:'Abierto a roles senior de BD, liderazgo comercial y BDR fraccional — preferiblemente remoto. Disponible para AU, SG, Dubai, Canadá y EE.UU. Respuesta en 24 horas.',
  emailBtn:'✉ Enviarme un email', cvCtaTitle:'¿Quieres todos los detalles?', cvCtaSub:'Descarga el CV completo con todas las especificaciones y logros.',
  showExp:'Ver experiencia', hideExp:'Ocultar experiencia',
  sl:['Logros','El Recorrido','Carrera','Geografía','Industrias','Capacidades','Cómo Vendo','Por qué Ian','Credenciales','Contacto'],
  wt:['Crecimiento de ingresos anuales','Precisión en la previsión del pipeline','Expansión de cartera de clientes','Mejora de la tasa de conversión','Base de clientes global duplicada','Rango de tamaño de operaciones','Personal gestionado','Presupuestos de cuentas empresariales'],
  wd:['Logré un crecimiento del 40% interanual en Novatech mediante prospección outbound dirigida y planificación estratégica de cuentas en empresas Fortune 1000.','Mantuve una precisión superior al 85% en una cartera de más de 50 cuentas en CP Partners utilizando Salesforce CRM.','Aumenté la base de clientes de atención médica canadiense en un 50% en 18 meses en Medvocation mediante alcance en LinkedIn y programas de referencias.','Mejoré la conversión de lead a cliente un 35% rediseñando el funnel de ventas y utilizando datos para eliminar puntos de fricción.','Dupliqué la base de clientes global de Virtual Workforce Partners en 2 años mediante outbound multicanal en 5 mercados.','Califiqué y gestioné mandatos de banca de inversión de $5M a más de $100M abarcando M&A, asesoramiento de capital y captación de fondos.','Supervisé un equipo de más de 280 empleados en Virtual Workforce Partners — gestionando el rendimiento, la alineación con clientes y la entrega operativa en múltiples cuentas empresariales.','Gestioné cuentas de clientes empresariales con presupuestos de $100K a $2M, manejando el ciclo completo de cuenta desde el onboarding hasta la renovación.'],
  sp:['No empecé en una oficina de lujo. Empecé haciendo llamadas en frío en fintech — llamando a comerciantes, aprendiendo a manejar el rechazo, aprendiendo qué hace que la gente diga sí. Esa base me enseñó algo que la mayoría de los vendedores nunca aprenden: <strong>la disciplina para seguir un sistema y el instinto para saber cuándo desviarse de él.</strong>','Desde allí, llevé ese mismo hambre al outsourcing, luego al staffing sanitario, luego al SaaS, luego a la banca de inversión. Cada industria era un nuevo idioma — nuevos compradores, nuevas objeciones, nuevas apuestas. La mayoría de los representantes nunca cruzan un vertical. Yo crucé cuatro, en cinco continentes, y generé ingresos en todos y cada uno de ellos.','Lo que aprendí es que los fundamentos de la venta nunca cambian. <strong>La gente compra a las personas en las que confía, que entienden su problema y que hacen que la decisión se sienta obvia.</strong> Construí mi carrera sobre esa verdad — y los números son la prueba de que funciona.','No busco un lugar donde acomodarme. Busco un equipo que quiera un cierre que aporte energía, estructura y resultados desde el primer día.'],
  stl:['Aprendí el esfuerzo. Construí la disciplina. 20% de crecimiento anual por puro trabajo de outbound.','Me fui global y fui a fondo. Dupliqué la cartera en 5 mercados, gestioné 280+ personas y llevé a cabo la entrega completa de proyectos en cuentas empresariales.','Pasé a ser consultivo. Hice crecer Canadá un 50%, construí los EAU desde cero, mejoré la conversión un 35%.','Me fui al enterprise. 40% de crecimiento anual. Cuentas Fortune 1000. Programas de upsell estructurados.','Llegué a la cima. Mandatos de $5M a más de $100M. Relaciones con la C-suite. 85%+ de precisión en previsiones.'],
  apt:['Investigación antes de contactar','Preguntas sobre discursos','Sistemas, no sprints'],
  apx:['Cada prospecto se estudia antes del primer contacto. Entender su negocio, su dolor y quién toma la decisión. Nada de mensajes fríos genéricos.','Entrenado en NEPQ. Los mejores representantes hacen mejores preguntas. Identifico la brecha entre donde está el prospecto y donde quiere estar, y luego muestro el camino.','Un pipeline consistente proviene de procesos repetibles. Construyo sistemas outbound que producen resultados cada semana, no solo al final del trimestre.'],
  wht:['Me adapto donde otros no lo hacen','Entrego números, no narrativas','Construyo sistemas que me sobreviven'],
  whx:['La mayoría de los vendedores están diseñados para una industria, un tipo de comprador, un mercado. He vendido fintech a comerciantes estadounidenses, outsourcing a clientes empresariales en 5 países, staffing sanitario en Canadá y los EAU, SaaS a Fortune 1000 y mandatos de banca de inversión por más de $100M. Cada vez que entré en un nuevo vertical, no solo sobreviví — generé ingresos.','No hablo de lo que voy a hacer — muestro lo que ya he hecho. 40% de crecimiento de ingresos YoY. 50% de expansión de la base de clientes en 18 meses. 85%+ de precisión en la previsión del pipeline. 35% de mejora en la conversión de lead a cliente. No son estimaciones. Son resultados de roles reales con responsabilidad real adjunta.','Cualquier representante puede tener un buen trimestre. Construyo el proceso que hace repetibles los siguientes 12 trimestres. Redes de referencias que generaron ingresos recurrentes en VWP. Sistemas outbound que mantuvieron el pipeline lleno en Novatech. Rediseños del embudo que redujeron la fricción en Medvocation. No solo alcanzo objetivos — dejo los equipos mejor de como los encontré.'],
  whp:['→ 4 industrias. 5 mercados. Crecimiento en cada uno de ellos.','→ Cada afirmación en esta página está respaldada por un resultado real.','→ No soy un sprint. Soy un sistema.'],
  sg:['Ventas y Desarrollo de Negocios','Gestión y Operaciones','Herramientas y Plataformas'],
  er:['Director de Desarrollo de Negocios','Manager de Desarrollo de Negocios y Cuentas','Director de Ventas y Desarrollo de Negocios por País','Director de Proyectos y Desarrollo de Negocios','Ejecutivo de Ventas y Desarrollo de Negocios','Diseñador Web Freelance y Creativo'],
  ex:['Construí y gestioné un pipeline de 50+ prospectos para mandatos valorados entre $5M y más de $100M. Impulsé el compromiso C-suite con fundadores, CEOs y CFOs en tecnología, salud y servicios financieros. Mantuve una precisión de previsión superior al 85% usando Salesforce CRM.','Logré un crecimiento de ingresos del 40% YoY mediante prospección outbound en empresas Fortune 1000 y mid-market. Alcancé una retención de clientes superior al 85% y aumenté el valor promedio de cuenta en un 25% mediante programas de upsell estructurados.','Expandí la base de clientes canadiense un 50% en 18 meses. Mejoré la conversión un 35% rediseñando el funnel de ventas. Construí el pipeline de EAU desde cero mientras gestionaba la responsabilidad total de ingresos de Canadá.','Dupliqué la base de clientes global en 2 años en UK, EE.UU., Australia, EAU y APAC. Gestioné un equipo de 280+ personas — supervisando rendimiento, alineación de clientes y entrega en cuentas empresariales con presupuestos de $100K a $2M. Construí redes de referencias que generaron ingresos recurrentes mientras ejecutaba la gestión completa de proyectos en compromisos simultáneos con clientes.','Logré un crecimiento de ventas del 20% interanual y aumenté las asociaciones de comerciantes en un 30%. Mentorié a un equipo de ventas junior de 5 miembros para alcanzar el 100% de los KPIs, mejorando las tasas de cierre del equipo en un 15%.','Diseñé y construí sitios web, páginas de destino y activos creativos de marca para clientes de diversas industrias. Entregué proyectos de extremo a extremo que cubrían el diseño UI/UX, la identidad visual y la producción de contenido digital.'],
  mn:['Mercado principal','Clientes empresariales','Salud y SaaS','Finanzas y Asesoramiento','BD Institucional','Clientes empresariales','BD y Alianzas'],
  ip:['Banca de Inversión','SaaS','TI Gestionada','Staffing Sanitario','Fintech','Outsourcing','Staffing Virtual','Servicios Profesionales'],
  cs:'Educación formal más certificaciones profesionales activas.',
  ngt:'Contáctame', dcvh:'Descargar CV', dcvb:'&#8595; Descargar CV completo',
  footerRight:'Ventas B2B y Desarrollo de Negocios &nbsp;|&nbsp; Filipinas &nbsp;|&nbsp; &copy; 2026'
},

fr: {
  heroTag:'Ventes B2B · Développement Commercial · Gestion de Projet',
  heroDesc:"La plupart des commerciaux maîtrisent un seul secteur. J'ai développé le chiffre d'affaires sur sept marchés mondiaux, dirigé des équipes de plus de 280 personnes et obtenu des résultats dans quatre secteurs en 12 ans. Je ne fais pas que conclure des ventes — je gère des équipes, des projets et des comptes d'envergure.",
  openToWork:"En recherche d'emploi · Disponible maintenant", btnViewExp:"Voir l'expérience",
  stats:['Croissance CA annuelle','Expansion clientèle','Effectifs gérés',"Années d'expérience"],
  nav:['Résultats','Expérience','Marchés','Contact'],
  winsTitle:'Des chiffres qui parlent', winsSub:'Résultats vérifiés issus de postes réels sur 12 ans.',
  storyTitle:'Mon parcours',
  expTitle:'Expérience professionnelle', expSub:"Six postes en banque d'investissement, SaaS, staffing médical, outsourcing et design web. Détails complets dans le CV.",
  marketsTitle:'Marchés couverts', marketsSub:'Expérience de vente directe sur sept marchés internationaux.',
  skillsTitle:'Compétences clés', skillsSub:'Développées dans chaque poste sur 12 ans.',
  approachTitle:'Ma méthode', approachSub:'Trois principes derrière chaque deal que je travaille.',
  whyTitle:'Pourquoi me choisir', whySub:'Trois choses qui me distinguent de tous les autres candidats BD.',
  contactTitle:"Prêt pour l'entretien", contactSub:"Ouvert aux postes seniors BD, direction commerciale et BDR fractionnel — télétravail de préférence. Disponible pour AU, SG, Dubaï, Canada et USA. Réponse sous 24h.",
  emailBtn:"✉ M'envoyer un email", cvCtaTitle:'Vous voulez tous les détails ?', cvCtaSub:'Téléchargez le CV complet avec toutes les spécificités et réalisations.',
  showExp:"Voir l'expérience", hideExp:"Masquer l'expérience",
  sl:['Résultats','Le Parcours','Carrière','Géographie','Industries','Compétences','Ma Méthode de Vente','Pourquoi Ian','Diplômes','Contact'],
  wt:['Croissance du CA annuel','Précision des prévisions de pipeline','Expansion de la clientèle','Amélioration du taux de conversion','Base clients mondiale doublée','Gamme de taille des deals','Effectifs gérés','Budgets des comptes entreprises'],
  wd:["J'ai généré une croissance de 40% en glissement annuel chez Novatech grâce à un outbound ciblé et une planification stratégique des comptes auprès des entreprises Fortune 1000.",'J\'ai maintenu une précision de prévision supérieure à 85% sur un portefeuille de plus de 50 comptes chez CP Partners avec Salesforce CRM.',"J'ai augmenté la base clients santé canadienne de 50% en 18 mois chez Medvocation grâce à LinkedIn et des programmes de parrainage.",'J\'ai amélioré le taux de conversion lead-client de 35% en repensant le tunnel de vente et en utilisant les données pour supprimer les points de friction.',"J'ai doublé la base clients mondiale de Virtual Workforce Partners en 2 ans grâce à un outbound multicanal sur 5 marchés.",'J\'ai qualifié et géré des mandats en banque d\'investissement de 5M$ à plus de 100M$ couvrant M&A, conseil en capital et levées de fonds.',"J'ai supervisé une équipe de plus de 280 personnes chez Virtual Workforce Partners — gérant la performance, l'alignement client et la livraison opérationnelle sur plusieurs comptes d'entreprise.",'J\'ai géré des comptes clients d\'entreprise avec des budgets allant de 100K$ à 2M$, couvrant tout le cycle de vie du compte de l\'onboarding au renouvellement.'],
  sp:["Je n'ai pas commencé dans un bureau de direction. J'ai commencé au téléphone dans la fintech — appels à froid auprès de commerçants, apprentissage du refus, découverte de ce qui fait dire oui. Cette base m'a appris quelque chose que la plupart des commerciaux n'acquièrent jamais : <strong>la discipline pour suivre un système et l'instinct pour savoir quand en dévier.</strong>","À partir de là, j'ai apporté cette même faim dans l'outsourcing, puis le staffing médical, puis le SaaS, puis la banque d'investissement. Chaque secteur était une nouvelle langue — nouveaux acheteurs, nouvelles objections, nouveaux enjeux. La plupart des commerciaux ne franchissent jamais un seul secteur. J'en ai traversé quatre, sur cinq continents, et j'ai développé le chiffre d'affaires dans chacun d'eux.","Ce que j'ai appris, c'est que les fondamentaux de la vente ne changent jamais. <strong>Les gens achètent auprès de personnes en qui ils ont confiance, qui comprennent leur problème et qui rendent la décision évidente.</strong> J'ai construit ma carrière sur cette vérité — et les chiffres en sont la preuve.",'Je ne cherche pas un endroit où me la couler douce. Je cherche une équipe qui veut un closer qui apporte de l\'énergie, de la structure et des résultats dès le premier jour.'],
  stl:["J'ai appris l'effort. Bâti la discipline. 20% de croissance annuelle grâce à un pur travail outbound.",'J\'ai internationalisé et approfondi. Doublé la base clients sur 5 marchés, géré 280+ personnes et assuré la livraison complète de projets sur des comptes d\'entreprise.','Suis passé au consultatif. Grandi le Canada de 50%, construit les EAU de zéro, amélioré la conversion de 35%.','Passé à l\'entreprise. 40% de croissance annuelle. Comptes Fortune 1000. Programmes d\'upsell structurés.','Suis monté au sommet. Mandats de 5M$ à plus de 100M$. Relations C-suite. 85%+ de précision des prévisions.'],
  apt:['Recherche avant prospection','Questions plutôt que pitches','Systèmes, pas sprints'],
  apx:['Chaque prospect est étudié avant le premier contact. Comprendre leur activité, leur douleur et qui prend la décision. Pas de messages froids génériques.','Formé NEPQ. Les meilleurs représentants posent de meilleures questions. Je révèle l\'écart entre où se trouve un prospect et où il veut aller, puis je montre la voie.','Un pipeline cohérent vient de processus reproductibles. Je construis des systèmes outbound qui produisent des résultats chaque semaine, pas seulement en fin de trimestre.'],
  wht:["Je m'adapte là où les autres n'y arrivent pas",'Je livre des chiffres, pas des discours','Je construis des systèmes qui me survivent'],
  whx:["La plupart des commerciaux sont conçus pour un seul secteur, un type d'acheteur, un marché. J'ai vendu de la fintech à des commerçants américains, de l'outsourcing à des entreprises dans 5 pays, du staffing médical au Canada et aux EAU, du SaaS à des Fortune 1000 et des mandats bancaires à plus de 100M$. À chaque fois que je suis entré dans un nouveau vertical, je n'ai pas juste survécu — j'ai développé le chiffre d'affaires.",'Je ne parle pas de ce que je vais faire — je montre ce que j\'ai déjà accompli. 40% de croissance du CA annuel. 50% d\'expansion de la base clients en 18 mois. 85%+ de précision des prévisions pipeline. 35% d\'amélioration du taux de conversion lead-client. Ce ne sont pas des estimations. Ce sont des résultats de postes réels avec une responsabilité réelle associée.',"N'importe quel représentant peut avoir un bon trimestre. Je construis le processus qui rend les 12 prochains trimestres reproductibles. Des réseaux de parrainage qui ont généré des revenus récurrents chez VWP. Des systèmes outbound qui ont maintenu le pipeline plein chez Novatech. Des refonte de tunnels qui ont réduit les frictions chez Medvocation. Je ne fais pas que frapper des cibles — je laisse les équipes meilleures que je ne les ai trouvées."],
  whp:['→ 4 secteurs. 5 marchés. Croissance dans chacun d\'eux.',"→ Chaque affirmation sur cette page est soutenue par un résultat réel.",'→ Je ne suis pas un sprint. Je suis un système.'],
  sg:['Ventes et Développement Commercial','Management et Opérations','Outils et Plateformes'],
  er:['Responsable Développement Commercial','Responsable Développement Commercial & Comptes','Directeur Commercial et Développement par Pays','Directeur de Projet et Développement Commercial','Directeur Commercial et Développement Business','Designer Web Freelance et Créatif'],
  ex:["J'ai construit et géré un pipeline de 50+ prospects pour des mandats évalués entre 5M$ et plus de 100M$. J'ai stimulé l'engagement C-suite avec des fondateurs, PDG et DAF dans les secteurs technologie, santé et services financiers. Précision de prévision maintenue à 85%+ avec Salesforce CRM.",'J\'ai réalisé une croissance des revenus de 40% en glissement annuel grâce à la prospection outbound auprès des entreprises Fortune 1000 et mid-market. J\'ai atteint une rétention client supérieure à 85% et augmenté la valeur moyenne des comptes de 25% via des programmes d\'upsell structurés.',"J'ai étendu la base clients canadienne de 50% en 18 mois. Amélioré la conversion de 35% en reconfigurant le tunnel de vente. Construit le pipeline EAU de zéro tout en gérant la responsabilité complète des revenus canadiens.",'J\'ai doublé la base clients mondiale en 2 ans au Royaume-Uni, aux États-Unis, en Australie, aux EAU et en APAC. J\'ai géré une équipe de 280+ personnes — supervisant performance, alignement client et livraison sur des comptes d\'entreprise avec des budgets de 100K$ à 2M$. J\'ai construit des réseaux de parrainage générant des revenus récurrents tout en assurant la gestion complète de projets simultanés.','J\'ai réalisé une croissance des ventes de 20% en glissement annuel et développé les partenariats commerçants de 30%. J\'ai mentoré une équipe de vente junior de 5 personnes pour atteindre 100% des KPIs, améliorant les taux de clôture de l\'équipe de 15%.',"J'ai conçu et construit des sites web, des pages de destination et des actifs créatifs de marque pour des clients dans diverses industries. J'ai livré des projets complets couvrant la mise en page UI/UX, l'identité visuelle et la production de contenu numérique."],
  mn:['Marché principal','Clients entreprises','Santé et SaaS','Finance et Conseil','BD Institutionnel','Clients entreprises','BD et Partenariats'],
  ip:["Banque d'Investissement",'SaaS','IT Géré','Staffing Médical','Fintech','Externalisation','Staffing Virtuel','Services Professionnels'],
  cs:'Formation formelle et certifications professionnelles actives.',
  ngt:'Me contacter', dcvh:'Télécharger le CV', dcvb:'&#8595; Télécharger le CV complet',
  footerRight:'Ventes B2B et Développement Commercial &nbsp;|&nbsp; Philippines &nbsp;|&nbsp; &copy; 2026'
},

de: {
  heroTag:'B2B-Vertrieb · Geschäftsentwicklung · Projektmanagement',
  heroDesc:'Die meisten Vertriebler kennen nur eine Branche. Ich habe in 12 Jahren Umsatz auf sieben globalen Märkten aufgebaut, Teams von über 280 Mitarbeitern geführt und in vier Branchen Ergebnisse geliefert. Ich schließe nicht nur Deals — ich manage Menschen, Projekte und Accounts in großem Maßstab.',
  openToWork:'Offen für neue Stellen · Sofort verfügbar', btnViewExp:'Erfahrung ansehen',
  stats:['Jahresumsatzwachstum','Kundenbasis-Erweiterung','Verwaltete Mitarbeiter','Jahre Erfahrung'],
  nav:['Erfolge','Erfahrung','Märkte','Kontakt'],
  winsTitle:'Zahlen, die zählen', winsSub:'Verifizierte Ergebnisse aus echten Stellen über 12 Jahre.',
  storyTitle:'Meine Geschichte',
  expTitle:'Berufserfahrung', expSub:'Sechs Stellen in Investment Banking, SaaS, Healthcare-Staffing, Outsourcing und Webdesign. Vollständige Details im CV.',
  marketsTitle:'Märkte, in denen ich arbeite', marketsSub:'Direkter Vertriebserfahrung auf sieben internationalen Märkten.',
  skillsTitle:'Kernkompetenzen', skillsSub:'In jeder Stelle über 12 Jahre aufgebaut.',
  approachTitle:'Mein Ansatz', approachSub:'Drei Prinzipien hinter jedem Deal, den ich bearbeite.',
  whyTitle:'Warum Sie mich wählen sollten', whySub:'Drei Dinge, die mich von jedem anderen BD-Kandidaten abheben.',
  contactTitle:'Bereit für das Vorstellungsgespräch', contactSub:'Offen für Senior-BD-, Vertriebsführungs- und fraktionale BDR-Positionen — Remote bevorzugt. Verfügbar für AU, SG, Dubai, Kanada und die USA. Antwort innerhalb von 24 Stunden.',
  emailBtn:'✉ E-Mail senden', cvCtaTitle:'Alle Details gewünscht?', cvCtaSub:'Vollständigen Lebenslauf mit allen Stellendetails und Erfolgen herunterladen.',
  showExp:'Erfahrung anzeigen', hideExp:'Erfahrung ausblenden',
  sl:['Erfolge','Die Reise','Karriere','Geografie','Branchen','Fähigkeiten','Meine Verkaufsmethode','Warum Ian','Qualifikationen','Kontakt'],
  wt:['Jahresumsatzwachstum','Pipeline-Prognosegenauigkeit','Kundenbasis-Erweiterung','Verbesserung der Konversionsrate','Globale Kundenbasis verdoppelt','Deal-Größenbereich','Verwaltete Mitarbeiterzahl','Unternehmenskundenbudgets'],
  wd:['Bei Novatech erzielte ich durch gezieltes Outbound und strategische Account-Planung ein Jahresumsatzwachstum von 40% bei Fortune-1000-Unternehmen.','Bei CP Partners hielt ich mit Salesforce CRM eine Prognosegenauigkeit von 85%+ über ein Portfolio von 50+ Accounts.','Bei Medvocation vergrößerte ich die kanadische Healthcare-Kundenbasis durch LinkedIn-Outreach und Empfehlungsprogramme in 18 Monaten um 50%.','Durch Neugestaltung des Verkaufstrichters und datengestützte Beseitigung von Reibungspunkten verbesserte ich die Lead-zu-Kunden-Conversion um 35%.','Durch Multichannel-Outbound in 5 Märkten verdoppelte ich die globale Kundenbasis von Virtual Workforce Partners in 2 Jahren.','Qualifizierte und verwaltete Investment-Banking-Mandate von 5 Mio. bis über 100 Mio. USD in den Bereichen M&A, Kapitalberatung und Fundraising.','Bei Virtual Workforce Partners leitete ich ein Team von 280+ Mitarbeitern — Leistungsmanagement, Kundensynchronisation und operative Lieferung über mehrere Unternehmenskonten.','Verwaltete Unternehmenskundenkonten mit Budgets von 100.000 bis 2 Mio. USD und deckte den gesamten Account-Lebenszyklus von Onboarding bis Verlängerung ab.'],
  sp:['Ich begann nicht in einem Eckbüro. Ich begann mit Telefonaten im Fintech-Bereich — Kaltakquise bei Händlern, Umgang mit Ablehnung, Verstehen was Menschen \'ja\' sagen lässt. Das lehrte mich etwas, das die meisten Vertriebler nie bekommen: <strong>die Disziplin, ein System zu verfolgen, und das Instinkt, zu wissen wann man davon abweicht.</strong>','Von dort nahm ich denselben Hunger mit ins Outsourcing, dann ins Healthcare-Staffing, dann in SaaS, dann ins Investment Banking. Jede Branche war eine neue Sprache — neue Käufer, neue Einwände, neue Einsätze. Die meisten Vertriebler wechseln nie eine Branche. Ich wechselte vier, auf fünf Kontinenten, und steigerte den Umsatz in jeder einzelnen davon.','Was ich gelernt habe: Die Grundlagen des Vertriebs ändern sich nie. <strong>Menschen kaufen von Menschen, denen sie vertrauen, die ihr Problem verstehen und die die Entscheidung offensichtlich erscheinen lassen.</strong> Ich habe meine Karriere auf dieser Wahrheit aufgebaut — und die Zahlen beweisen, dass es funktioniert.','Ich suche keinen Platz zum Ausruhen. Ich suche ein Team, das einen Closer will, der ab Tag eins Energie, Struktur und Ergebnisse mitbringt.'],
  stl:['Lernte den Kampf. Baute die Disziplin auf. 20% Jahreswachstum durch reinen Outbound-Einsatz.','Wurde global und ging in die Tiefe. Verdoppelte die Kundenbasis in 5 Märkten, verwaltete 280+ Mitarbeiter und führte vollständige Projektabwicklung bei Unternehmenskunden.','Wurde beratend. Wuchs Kanada um 50%, baute VAE von null auf, verbesserte die Conversion um 35%.','Wechselte ins Enterprise. 40% Jahreswachstum. Fortune-1000-Accounts. Strukturierte Upsell-Programme.','Stieg an die Spitze. Mandate von 5M$ bis 100M$+. C-Suite-Beziehungen. 85%+ Prognosegenauigkeit.'],
  apt:['Recherche vor Outreach','Fragen statt Pitches','Systeme, keine Sprints'],
  apx:['Jeder Interessent wird vor dem ersten Kontakt studiert. Ihr Geschäft, ihren Schmerz und den Entscheider verstehen. Keine generischen Kaltmails.','NEPQ-geschult. Die besten Vertriebler stellen bessere Fragen. Ich zeige die Lücke zwischen dem aktuellen Stand und den Zielen eines Interessenten und zeige dann den Weg dorthin.','Ein beständiger Pipeline entsteht durch wiederholbare Prozesse. Ich baue Outbound-Systeme, die jede Woche Ergebnisse liefern, nicht nur am Quartalsende.'],
  wht:['Ich adaptiere mich dort, wo andere es nicht tun','Ich liefere Zahlen, keine Geschichten','Ich baue Systeme, die mich überdauern'],
  whx:['Die meisten Vertriebler sind für eine Branche, einen Käufertyp, einen Markt ausgelegt. Ich habe Fintech an US-Händler, Outsourcing an Unternehmenskunden in 5 Ländern, Healthcare-Staffing in Kanada und den VAE, SaaS an Fortune-1000-Unternehmen und Investment-Banking-Mandate im Wert von über 100 Mio. USD verkauft. Jedes Mal, wenn ich in ein neues Segment eingestiegen bin, habe ich nicht nur überlebt — ich habe den Umsatz gesteigert.','Ich rede nicht darüber, was ich tun werde — ich zeige, was ich bereits getan habe. 40% Jahresumsatzwachstum. 50% Kundenbasis-Erweiterung in 18 Monaten. 85%+ Pipeline-Prognosegenauigkeit. 35% Verbesserung der Lead-zu-Kunden-Conversion. Das sind keine Schätzungen. Es sind Ergebnisse aus echten Rollen mit echter Verantwortung.','Jeder Vertriebler kann ein gutes Quartal haben. Ich baue den Prozess, der die nächsten 12 Quartale wiederholbar macht. Empfehlungsnetzwerke, die bei VWP wiederkehrende Einnahmen generierten. Outbound-Systeme, die bei Novatech den Pipeline voll hielten. Funnel-Redesigns, die bei Medvocation Reibung reduzierten. Ich erreiche nicht nur Ziele — ich verlasse Teams besser als ich sie gefunden habe.'],
  whp:['→ 4 Branchen. 5 Märkte. Wachstum in jeder einzelnen.','→ Jede Aussage auf dieser Seite ist durch ein echtes Ergebnis belegt.','→ Ich bin kein Sprint. Ich bin ein System.'],
  sg:['Vertrieb und Geschäftsentwicklung','Management und Betrieb','Tools und Plattformen'],
  er:['Business Development Manager','Business Development & Account Manager','Country Sales & Business Development Manager','Projektmanager & Business Development Director','Vertriebs- und Geschäftsentwicklungs-Executive','Freiberuflicher Webdesigner & Creative'],
  ex:['Aufgebaut und verwaltet ein Pipeline von 50+ Interessenten für Mandate im Wert von 5M bis über 100M USD. Führte C-Suite-Engagement mit Gründern, CEOs und CFOs in den Bereichen Technologie, Gesundheit und Finanzdienstleistungen. 85%+ Prognosegenauigkeit mit Salesforce CRM aufrechterhalten.','Erzielte 40% Jahresumsatzwachstum durch Outbound-Prospektierung bei Fortune-1000- und mittelständischen Unternehmen. Erreichte 85%+ Kundenbindungsrate und steigerte den durchschnittlichen Account-Wert durch strukturierte Upsell-Programme um 25%.','Erweiterte die kanadische Kundenbasis in 18 Monaten um 50%. Verbesserte die Conversion durch Neugestaltung des Verkaufstrichters um 35%. Baute die VAE-Pipeline von null auf, während ich die volle Umsatzverantwortung für Kanada verwaltete.','Verdoppelte die globale Kundenbasis in 2 Jahren in UK, USA, Australien, VAE und APAC. Verwaltete ein Team von 280+ Mitarbeitern — Überwachung von Leistung, Kundensynchronisation und Lieferung bei Unternehmenskonten mit Budgets von 100.000 bis 2 Mio. USD. Empfehlungsnetzwerke aufgebaut, die wiederkehrende Einnahmen generierten, während vollständiges Projektmanagement für simultane Kundenprojekte durchgeführt wurde.','Erzielte 20% Jahresverkaufswachstum und steigerte Händlerpartnerschaften um 30%. Mentorte ein 5-köpfiges Junior-Vertriebsteam zur 100%-KPI-Erreichung und verbesserte die Team-Abschlussraten um 15%.','Entwarf und baute Websites, Landingpages und gebrandete Kreativmaterialien für Kunden in verschiedenen Branchen. Lieferte End-to-End-Projekte, die UI/UX-Layout, visuelle Identität und digitale Inhaltserstellung umfassten.'],
  mn:['Hauptmarkt','Unternehmenskunden','Gesundheitswesen & SaaS','Finanzen & Beratung','Institutionelles BD','Unternehmenskunden','BD & Partnerschaften'],
  ip:['Investmentbanking','SaaS','Managed IT','Healthcare-Staffing','Fintech','Outsourcing','Virtuelles Staffing','Professional Services'],
  cs:'Formale Bildung plus aktive Berufsqualifikationen.',
  ngt:'Kontakt aufnehmen', dcvh:'Lebenslauf herunterladen', dcvb:'&#8595; Vollständigen Lebenslauf herunterladen',
  footerRight:'B2B-Vertrieb &amp; Geschäftsentwicklung &nbsp;|&nbsp; Philippinen &nbsp;|&nbsp; &copy; 2026'
},

it: {
  heroTag:'Vendite B2B · Sviluppo Business · Gestione Progetti',
  heroDesc:'La maggior parte dei venditori conosce un solo settore. Ho generato ricavi in sette mercati globali, guidato team di oltre 280 persone e ottenuto risultati in quattro settori in 12 anni. Non mi limito a chiudere trattative — gestisco persone, progetti e account su larga scala.',
  openToWork:'In cerca di lavoro · Disponibile ora', btnViewExp:'Vedi esperienza',
  stats:['Crescita Ricavi Annuali','Espansione Clienti','Personale Gestito','Anni di Esperienza'],
  nav:['Risultati','Esperienza','Mercati','Contatto'],
  winsTitle:'Numeri che contano', winsSub:'Risultati verificati da ruoli reali in 12 anni.',
  storyTitle:'La mia storia',
  expTitle:'Esperienza lavorativa', expSub:'Sei ruoli in investment banking, SaaS, healthcare staffing, outsourcing e web design. Dettagli completi nel CV.',
  marketsTitle:'Mercati in cui lavoro', marketsSub:'Esperienza di vendita diretta in sette mercati internazionali.',
  skillsTitle:'Competenze chiave', skillsSub:'Sviluppate in ogni ruolo nel corso di 12 anni.',
  approachTitle:'Il mio approccio', approachSub:'Tre principi dietro ogni trattativa che lavoro.',
  whyTitle:'Perché dovresti scegliermi', whySub:'Tre cose che mi distinguono da tutti gli altri candidati BD.',
  contactTitle:'Pronto per il colloquio', contactSub:'Disponibile per ruoli senior BD, leadership commerciale e BDR frazionale — preferibilmente da remoto. Disponibile per AU, SG, Dubai, Canada e USA. Risposta entro 24 ore.',
  emailBtn:'✉ Scrivimi', cvCtaTitle:'Vuoi tutti i dettagli?', cvCtaSub:'Scarica il CV completo con tutte le specifiche e i risultati.',
  showExp:'Mostra esperienza', hideExp:'Nascondi esperienza',
  sl:['Risultati','Il Percorso','Carriera','Geografia','Settori','Competenze','Come Vendo','Perché Ian','Credenziali','Contatto'],
  wt:['Crescita Ricavi Annuali','Precisione Previsionale Pipeline','Espansione della Base Clienti','Miglioramento Tasso di Conversione','Base Clienti Globale Raddoppiata','Dimensione dei Contratti','Personale Gestito','Budget Clienti Enterprise'],
  wd:['Ho guidato una crescita del 40% anno su anno in Novatech attraverso outbound mirato e pianificazione strategica degli account tra le aziende Fortune 1000.','Ho mantenuto un\'accuratezza superiore all\'85% su un portfolio di 50+ account in CP Partners usando Salesforce CRM.','Ho aumentato del 50% la base clienti sanitari canadesi in 18 mesi da Medvocation attraverso LinkedIn e programmi di referral.','Ho migliorato la conversione da lead a cliente del 35% riprogettando il funnel di vendita e usando i dati per eliminare i punti di attrito.','Ho raddoppiato la base clienti globale di Virtual Workforce Partners in 2 anni attraverso outbound multicanale in 5 mercati.','Ho qualificato e gestito mandati di investment banking da $5M a oltre $100M in M&A, consulenza patrimoniale e raccolta fondi.','Ho supervisionato un team di 280+ dipendenti in Virtual Workforce Partners — gestendo performance, allineamento clienti e delivery operativa su più account enterprise.','Ho gestito account clienti enterprise con budget da $100K a $2M, gestendo l\'intero ciclo di vita dell\'account dall\'onboarding al rinnovo.'],
  sp:['Non ho iniziato in un ufficio esclusivo. Ho iniziato al telefono nel fintech — chiamate a freddo ai merchant, imparare a gestire i rifiuti, capire cosa fa dire sì alle persone. Quella base mi ha insegnato qualcosa che la maggior parte dei venditori non ottiene mai: <strong>la disciplina di lavorare con un sistema e l\'istinto di sapere quando deviare da esso.</strong>','Da lì, ho portato la stessa fame nell\'outsourcing, poi nell\'healthcare staffing, poi nel SaaS, poi nell\'investment banking. Ogni settore era un nuovo linguaggio — nuovi acquirenti, nuove obiezioni, nuove sfide. La maggior parte dei venditori non attraversa mai un vertical. Ne ho attraversati quattro, su cinque continenti, e ho aumentato i ricavi in ognuno di essi.','Quello che ho imparato è che i fondamentali della vendita non cambiano mai. <strong>Le persone comprano da chi si fidano, che capisce il loro problema e che rende la decisione ovvia.</strong> Ho costruito la mia carriera su questa verità — e i numeri sono la prova che funziona.','Non cerco un posto dove rilassarmi. Cerco un team che voglia un closer che porti energia, struttura e risultati dal primo giorno.'],
  stl:['Ho imparato la fatica. Costruito la disciplina. 20% di crescita YoY da puro lavoro outbound.','Sono andato globale e in profondità. Raddoppiata la base clienti in 5 mercati, gestiti 280+ dipendenti e gestita la consegna completa dei progetti per account enterprise.','Sono diventato consultivo. Cresciuto Canada del 50%, costruito UAE da zero, migliorato la conversione del 35%.','Sono passato all\'enterprise. 40% di crescita YoY. Account Fortune 1000. Programmi di upsell strutturati.','Sono arrivato al vertice. Mandati da $5M a oltre $100M. Relazioni C-suite. 85%+ di accuratezza previsionale.'],
  apt:['Ricerca Prima dell\'Outreach','Domande Invece di Pitch','Sistemi, Non Sprint'],
  apx:['Ogni prospect viene studiato prima del primo contatto. Capire il loro business, il loro dolore e chi prende le decisioni. Niente messaggi freddi generici.','Formato NEPQ. I migliori rappresentanti fanno domande migliori. Faccio emergere il divario tra dove si trova un prospect e dove vuole essere, poi mostro il percorso.','Una pipeline costante deriva da processi ripetibili. Costruisco sistemi outbound che producono risultati ogni settimana, non solo a fine trimestre.'],
  wht:['Mi Adatto Dove Gli Altri Non Riescono','Consegno Numeri, Non Storie','Costruisco Sistemi Che Durano Oltre di Me'],
  whx:['La maggior parte dei venditori è costruita per un settore, un tipo di acquirente, un mercato. Ho venduto fintech a merchant americani, outsourcing a clienti enterprise in 5 paesi, healthcare staffing in Canada e negli EAU, SaaS a Fortune 1000 e mandati di investment banking per oltre $100M. Ogni volta che sono entrato in un nuovo verticale, non ho solo sopravvissuto — ho fatto crescere i ricavi.','Non parlo di ciò che farò — mostro ciò che ho già fatto. 40% di crescita dei ricavi YoY. 50% di espansione della base clienti in 18 mesi. 85%+ di accuratezza previsionale del pipeline. 35% di miglioramento nella conversione lead-cliente. Non sono stime. Sono risultati di ruoli reali con responsabilità reale.','Qualsiasi rappresentante può avere un buon trimestre. Costruisco il processo che rende ripetibili i prossimi 12 trimestri. Reti di referral che hanno generato ricavi ricorrenti a VWP. Sistemi outbound che hanno mantenuto il pipeline pieno a Novatech. Riprogettazioni del funnel che hanno ridotto la frizione a Medvocation. Non mi limito a raggiungere gli obiettivi — lascio i team migliori di come li ho trovati.'],
  whp:['→ 4 settori. 5 mercati. Crescita in ognuno di essi.','→ Ogni affermazione su questa pagina è supportata da un risultato reale.','→ Non sono uno sprint. Sono un sistema.'],
  sg:['Vendite e Sviluppo del Business','Management e Operazioni','Strumenti e Piattaforme'],
  er:['Responsabile Sviluppo Business','Business Development e Account Manager','Country Sales & Business Development Manager','Project Manager e Direttore Sviluppo Business','Dirigente Vendite e Sviluppo Business','Web Designer Freelance e Creativo'],
  ex:['Ho costruito e gestito una pipeline di 50+ prospect per mandati del valore da $5M a oltre $100M. Ho guidato il coinvolgimento C-suite con fondatori, CEO e CFO in tecnologia, sanità e servizi finanziari. Ho mantenuto un\'accuratezza previsionale dell\'85%+ con Salesforce CRM.','Ho guidato una crescita dei ricavi del 40% anno su anno attraverso prospecting outbound in aziende Fortune 1000 e mid-market. Ho ottenuto una fidelizzazione cliente dell\'85%+ e aumentato il valore medio dell\'account del 25% tramite programmi di upsell strutturati.','Ho espanso la base clienti canadese del 50% in 18 mesi. Ho migliorato la conversione del 35% riprogettando il funnel di vendita. Ho costruito il pipeline UAE da zero gestendo la piena responsabilità dei ricavi canadesi.','Ho raddoppiato la base clienti globale in 2 anni nel UK, USA, Australia, EAU e APAC. Ho gestito un team di 280+ persone — supervisionando performance, allineamento clienti e delivery su account enterprise con budget da $100K a $2M. Ho costruito reti di referral che hanno generato ricavi ricorrenti mentre gestivo il project management completo su più impegni clienti simultanei.','Ho raggiunto una crescita delle vendite del 20% anno su anno e ho aumentato le partnership con i merchant del 30%. Ho mentorizzato un team di vendite junior di 5 persone al 100% di raggiungimento KPI, migliorando i tassi di chiusura del team del 15%.','Ho progettato e costruito siti web, landing page e asset creativi brandizzati per clienti in vari settori. Ho consegnato progetti end-to-end che coprono layout UI/UX, identità visiva e produzione di contenuti digitali.'],
  mn:['Mercato principale','Clienti enterprise','Sanità e SaaS','Finanza e Consulenza','BD Istituzionale','Clienti enterprise','BD e Partnership'],
  ip:['Investment Banking','SaaS','IT Gestito','Healthcare Staffing','Fintech','Outsourcing','Virtual Staffing','Servizi Professionali'],
  cs:'Istruzione formale e certificazioni professionali attive.',
  ngt:'Contattami', dcvh:'Scarica CV', dcvb:'&#8595; Scarica CV Completo',
  footerRight:'Vendite B2B e Sviluppo Business &nbsp;|&nbsp; Filippine &nbsp;|&nbsp; &copy; 2026'
},

nl: {
  heroTag:'B2B Verkoop · Bedrijfsontwikkeling · Projectmanagement',
  heroDesc:'De meeste verkopers kennen maar één branche. Ik heb in 12 jaar omzet opgebouwd in zeven wereldwijde markten, teams van 280+ medewerkers geleid en resultaten behaald in vier sectoren. Ik sluit niet alleen deals — ik manage mensen, projecten en accounts op schaal.',
  openToWork:'Beschikbaar · Direct inzetbaar', btnViewExp:'Ervaring bekijken',
  stats:['Jaarlijkse Omzetgroei','Klantenbasis Uitbreiding','Beheerd Personeelsbestand','Jaren Ervaring'],
  nav:['Prestaties','Ervaring','Markten','Contact'],
  winsTitle:'Cijfers die tellen', winsSub:'Geverifieerde resultaten uit echte functies over 12 jaar.',
  storyTitle:'Mijn verhaal',
  expTitle:'Werkervaring', expSub:'Zes functies in investment banking, SaaS, zorg staffing, outsourcing en webdesign. Volledige details in het CV.',
  marketsTitle:'Markten waarin ik werk', marketsSub:'Directe verkoopervaring op zeven internationale markten.',
  skillsTitle:'Kernvaardigheden', skillsSub:'Opgebouwd in elke functie over 12 jaar.',
  approachTitle:'Mijn aanpak', approachSub:'Drie principes achter elke deal die ik werk.',
  whyTitle:'Waarom u mij zou moeten kiezen', whySub:'Drie dingen die mij onderscheiden van elke andere BD-kandidaat.',
  contactTitle:'Klaar voor een gesprek', contactSub:'Open voor senior BD-, salesleiderschap- en fractionele BDR-functies — bij voorkeur remote. Beschikbaar voor AU, SG, Dubai, Canada en de VS. Reactie binnen 24 uur.',
  emailBtn:'✉ Mail mij', cvCtaTitle:'Wilt u alle details?', cvCtaSub:'Download het volledige CV met alle functiedetails en prestaties.',
  showExp:'Ervaring tonen', hideExp:'Ervaring verbergen',
  sl:['Prestaties','De Reis','Carrière','Geografie','Sectoren','Vaardigheden','Hoe Ik Verkoop','Waarom Ian','Kwalificaties','Contact'],
  wt:['Jaarlijkse Omzetgroei','Pipeline Prognose Nauwkeurigheid','Klantenbasis Uitbreiding','Verbetering Conversieratio','Wereldwijde Klantenbasis Verdubbeld','Deal Grootte Bereik','Beheerd Personeelsbestand','Enterprise Account Budgetten'],
  wd:['Realiseerde 40% jaar-op-jaar groei bij Novatech door gerichte outbound-prospectie en strategische accountplanning bij Fortune 1000-bedrijven.','Handhaafde 85%+ nauwkeurigheid over een portfolio van 50+ accounts bij CP Partners met Salesforce CRM.','Groeide de Canadese zorgklantenbasis bij Medvocation met 50% in 18 maanden via LinkedIn outreach en referralprogramma\'s.','Verbeterde lead-naar-klant-conversie met 35% door de verkooptrechter opnieuw te ontwerpen en data te gebruiken om wrijvingspunten te verwijderen.','Verdubbelde de wereldwijde klantenbasis van Virtual Workforce Partners binnen 2 jaar via multi-channel outbound in 5 markten.','Kwalificeerde en beheerde investment banking-mandaten van $5M tot $100M+ voor M&A, kapitaaladvisering en fondswerving.','Leidde een team van 280+ medewerkers bij Virtual Workforce Partners — prestatiemanagement, klantafstemming en operationele levering voor meerdere enterprise accounts.','Beheerde enterprise klantaccounts met budgetten van $100K tot $2M, met volledige accountlevenscyclus van onboarding tot verlenging.'],
  sp:['Ik begon niet in een hoekkantoortje. Ik begon aan de telefoon in fintech — cold calling naar merchants, leren omgaan met afwijzing, leren wat mensen ja laat zeggen. Die basis leerde me iets dat de meeste verkopers nooit krijgen: <strong>de discipline om een systeem te volgen en het instinct om te weten wanneer je ervan moet afwijken.</strong>','Van daaruit nam ik diezelfde honger mee naar outsourcing, dan healthcare staffing, dan SaaS, dan investment banking. Elke branche was een nieuwe taal — nieuwe kopers, nieuwe bezwaren, nieuwe inzetten. De meeste verkopers steken nooit één verticaal over. Ik stak er vier over, op vijf continenten, en groeide in elke enkele.','Wat ik leerde is dat de fundamenten van verkoop nooit veranderen. <strong>Mensen kopen van mensen die ze vertrouwen, die hun probleem begrijpen en die de beslissing vanzelfsprekend laten aanvoelen.</strong> Ik bouwde mijn carrière op die waarheid — en de cijfers zijn het bewijs dat het werkt.','Ik zoek geen plek om op mijn lauweren te rusten. Ik zoek een team dat een closer wil die vanaf dag één energie, structuur en resultaten meebrengt.'],
  stl:['Leerde het harde werken. Bouwde de discipline. 20% jaarlijkse groei door pure outbound inspanning.','Ging globaal en ging diep. Verdubbelde de klantenbasis in 5 markten, beheerde 280+ medewerkers en voerde volledig projectleveringen uit voor enterprise accounts.','Werd consultatief. Canada 50% gegroeid, UAE vanuit nul opgebouwd, conversie 35% verbeterd.','Ging naar enterprise. 40% jaarlijkse groei. Fortune 1000 accounts. Gestructureerde upsell programma\'s.','Ging naar de top. Mandaten van $5M tot $100M+. C-suite relaties. 85%+ prognose nauwkeurigheid.'],
  apt:['Onderzoek Voor Outreach','Vragen Boven Pitches','Systemen, Geen Sprints'],
  apx:['Elke prospect wordt bestudeerd voor het eerste contact. Begrijp hun bedrijf, hun pijn en wie de beslissing neemt. Geen generieke cold messages.','NEPQ-getraind. De beste verkopers stellen betere vragen. Ik breng het gat naar boven tussen waar een prospect is en waar ze willen zijn, en toon dan het pad.','Een consistente pipeline komt van herhaalbare processen. Ik bouw outbound systemen die elke week resultaten produceren, niet alleen aan het einde van het kwartaal.'],
  wht:['Ik Pas Me Aan Waar Anderen Dat Niet Doen','Ik Lever Cijfers, Geen Verhalen','Ik Bouw Systemen Die Langer Dan Ik Meegaan'],
  whx:['De meeste verkopers zijn gebouwd voor één industrie, één type koper, één markt. Ik heb fintech verkocht aan Amerikaanse merchants, outsourcing aan enterprise klanten in 5 landen, healthcare staffing in Canada en de VAE, SaaS aan Fortune 1000s en investment banking mandaten ter waarde van $100M+. Elke keer dat ik een nieuw verticaal betrad, overleefde ik niet alleen — ik groeide de omzet.','Ik praat niet over wat ik ga doen — ik toon wat ik al heb gedaan. 40% jaarlijkse omzetgroei. 50% klantenbasis uitbreiding in 18 maanden. 85%+ pipeline prognose nauwkeurigheid. 35% verbetering in lead-naar-klant conversie. Dit zijn geen schattingen. Dit zijn resultaten uit echte functies met echte verantwoordelijkheid.','Elke verkoper kan een goed kwartaal hebben. Ik bouw het proces dat de volgende 12 kwartalen herhaalbaar maakt. Referralnetwerken die terugkerende inkomsten genereerden bij VWP. Outbound systemen die de pipeline vol hielden bij Novatech. Funnel herontwerpen die wrijving verminderde bij Medvocation. Ik haal niet alleen targets — ik laat teams beter achter dan ik ze vond.'],
  whp:['→ 4 sectoren. 5 markten. Groei in elke enkele.','→ Elke bewering op deze pagina wordt ondersteund door een echt resultaat.','→ Ik ben geen sprint. Ik ben een systeem.'],
  sg:['Verkoop en Bedrijfsontwikkeling','Management en Operaties','Tools en Platformen'],
  er:['Business Development Manager','Business Development & Account Manager','Country Sales & Business Development Manager','Projectmanager & Business Development Directeur','Sales & Business Development Executive','Freelance Webdesigner & Creatief'],
  ex:['Bouwde en beheerde een pipeline van 50+ prospects voor mandaten ter waarde van $5M tot $100M+. Stimuleerde C-suite betrokkenheid bij oprichters, CEO\'s en CFO\'s in technologie, gezondheidszorg en financiële dienstverlening. 85%+ prognose nauwkeurigheid gehandhaafd met Salesforce CRM.','Realiseerde 40% jaarlijkse omzetgroei via outbound prospectie bij Fortune 1000 en mid-market bedrijven. Bereikte 85%+ klantbehoud en groeide de gemiddelde accountwaarde met 25% via gestructureerde upsell programma\'s.','Breidde de Canadese klantenbasis met 50% uit in 18 maanden. Verbeterde conversie met 35% door het verkooptrechter opnieuw te ontwerpen. Bouwde de VAE-pipeline vanuit nul terwijl ik de volledige Canadese omzetverantwoordelijkheid beheerde.','Verdubbelde de wereldwijde klantenbasis in 2 jaar in UK, VS, Australië, VAE en APAC. Beheerde een team van 280+ medewerkers — toezicht op prestaties, klantafstemming en levering bij enterprise accounts met budgetten van $100K tot $2M. Bouwde referralnetwerken die terugkerende inkomsten genereerden terwijl ik volledig projectmanagement uitvoerde voor gelijktijdige klantbetrokkenheden.','Bereikte 20% jaarlijkse verkoopgroei en groeide merchant partnerships met 30%. Mentorde een 5-persoon junior verkoopteam naar 100% KPI-prestatie, wat teamsluitingspercentages verbeterde met 15%.','Ontwierp en bouwde websites, landingspagina\'s en gebrandmerk creatieve assets voor klanten in verschillende sectoren. Leverde end-to-end projecten op het gebied van UI/UX-opmaak, visuele identiteit en digitale contentproductie.'],
  mn:['Primaire markt','Enterprise klanten','Gezondheidszorg & SaaS','Financiën & Advies','Institutionele BD','Enterprise klanten','BD & Partnerships'],
  ip:['Investeringsbankieren','SaaS','Managed IT','Zorg Staffing','Fintech','Outsourcing','Virtueel Staffing','Professionele Diensten'],
  cs:'Formeel onderwijs plus actieve professionele certificaten.',
  ngt:'Neem contact op', dcvh:'CV downloaden', dcvb:'&#8595; Download Volledig CV',
  footerRight:'B2B Verkoop &amp; Bedrijfsontwikkeling &nbsp;|&nbsp; Filipijnen &nbsp;|&nbsp; &copy; 2026'
}
};

const langLabels = {en:'EN',zh:'中文',ja:'日本語',ko:'한국어',es:'ES',fr:'FR',de:'DE',it:'IT',nl:'NL'};

function switchLang(code) {
  currentLang = code;
  const t = T[code];
  document.getElementById('lang-label').textContent = langLabels[code];
  document.querySelectorAll('.lang-option').forEach((el,i) => el.classList.toggle('active', Object.keys(T)[i] === code));

  // Hero
  document.querySelector('.hero-tag').textContent = t.heroTag;
  document.querySelector('.hero-content > p').textContent = t.heroDesc;
  document.querySelector('.open-to-work').textContent = t.openToWork;
  document.querySelector('.btn-blue').textContent = t.btnViewExp;
  document.querySelectorAll('.stat-lbl').forEach((el,i) => { if(t.stats[i]) el.textContent = t.stats[i]; });
  document.querySelectorAll('.nav-links a').forEach((el,i) => { if(t.nav[i]) el.textContent = t.nav[i]; });
  document.querySelector('.nav-btn').textContent = t.ngt;
  const btnOutline = document.querySelector('.btn-outline');
  if(btnOutline) btnOutline.textContent = t.dcvh;

  // Section titles & subs
  document.querySelector('#wins .section-title').textContent = t.winsTitle;
  document.querySelector('#wins .section-sub').textContent = t.winsSub;
  document.querySelector('#story .section-title').textContent = t.storyTitle;
  document.querySelector('#experience .section-title').textContent = t.expTitle;
  document.querySelector('#experience .section-sub').textContent = t.expSub;
  document.querySelector('#markets .section-title').textContent = t.marketsTitle;
  document.querySelector('#markets .section-sub').textContent = t.marketsSub;
  document.querySelector('#skills .section-title').textContent = t.skillsTitle;
  document.querySelector('#skills .section-sub').textContent = t.skillsSub;
  document.querySelector('#approach .section-title').textContent = t.approachTitle;
  document.querySelector('#approach .section-sub').textContent = t.approachSub;
  document.querySelector('#why .section-title').textContent = t.whyTitle;
  document.querySelector('#why .section-sub').textContent = t.whySub;
  document.querySelector('#contact .section-title').textContent = t.contactTitle;
  document.querySelector('.contact-sub').textContent = t.contactSub;
  document.querySelector('.c-link-primary').textContent = t.emailBtn;
  document.querySelector('.cv-cta-left h3').textContent = t.cvCtaTitle;
  document.querySelector('.cv-cta-left p').textContent = t.cvCtaSub;

  // Section labels (10 total)
  const slEls = [
    document.querySelector('#wins .section-label'),
    document.querySelector('#story .section-label'),
    document.querySelector('#experience .section-label'),
    ...Array.from(document.querySelectorAll('#markets .section-label')),
    document.querySelector('#skills .section-label'),
    document.querySelector('#approach .section-label'),
    document.querySelector('#why .section-label'),
    document.querySelector('#certs .section-label'),
    document.querySelector('.contact-section .section-label')
  ];
  slEls.forEach((el,i) => { if(el && t.sl[i]) el.textContent = t.sl[i]; });

  // Wins
  document.querySelectorAll('.win-title').forEach((el,i) => { if(t.wt[i]) el.textContent = t.wt[i]; });
  document.querySelectorAll('.win-desc').forEach((el,i) => { if(t.wd[i]) el.textContent = t.wd[i]; });

  // Story paragraphs & timeline
  document.querySelectorAll('#story .story-text p').forEach((el,i) => { if(t.sp[i]) el.innerHTML = t.sp[i]; });
  document.querySelectorAll('.step-lesson').forEach((el,i) => { if(t.stl[i]) el.textContent = t.stl[i]; });

  // Approach
  document.querySelectorAll('.ap-title').forEach((el,i) => { if(t.apt[i]) el.textContent = t.apt[i]; });
  document.querySelectorAll('.ap-text').forEach((el,i) => { if(t.apx[i]) el.textContent = t.apx[i]; });

  // Why Ian
  document.querySelectorAll('.why-title').forEach((el,i) => { if(t.wht[i]) el.textContent = t.wht[i]; });
  document.querySelectorAll('.why-text').forEach((el,i) => { if(t.whx[i]) el.textContent = t.whx[i]; });
  document.querySelectorAll('.why-proof').forEach((el,i) => { if(t.whp[i]) el.textContent = t.whp[i]; });

  // Skills
  document.querySelectorAll('.skill-group-label').forEach((el,i) => { if(t.sg[i]) el.textContent = t.sg[i]; });

  // Experience
  document.querySelectorAll('#exp-list .exp-role').forEach((el,i) => { if(t.er[i]) el.textContent = t.er[i]; });
  document.querySelectorAll('#exp-list .exp-desc').forEach((el,i) => { if(t.ex[i]) el.textContent = t.ex[i]; });

  // Markets & industries
  document.querySelectorAll('.m-note').forEach((el,i) => { if(t.mn[i]) el.textContent = t.mn[i]; });
  document.querySelectorAll('.ind-pill').forEach((el,i) => { if(t.ip[i]) el.textContent = t.ip[i]; });

  // Certs sub
  const certSub = document.querySelector('#certs .section-sub');
  if(certSub) certSub.textContent = t.cs;

  // CV buttons
  const cvBtn = document.querySelector('.cv-btn');
  if(cvBtn) cvBtn.innerHTML = t.dcvb;

  // Footer
  const fRight = document.querySelector('.f-right');
  if(fRight) fRight.innerHTML = t.footerRight;

  // Exp toggle button
  const tb = document.querySelector('.exp-toggle-btn');
  if(tb) tb.innerHTML = (tb.classList.contains('open') ? t.hideExp : t.showExp) + ' <span class="arrow">&#9660;</span>';
}

function toggleExperience(btn) {
  const list = document.getElementById('exp-list');
  const isHidden = list.classList.toggle('hidden');
  btn.classList.toggle('open', !isHidden);
  const t = T[currentLang];
  btn.innerHTML = (isHidden ? t.showExp : t.hideExp) + ' <span class="arrow">&#9660;</span>';
}
