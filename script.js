/* ============================================================
   曹智锦 个人简历 | script.js
   深色极客风 · 数据 + 渲染 + 交互
============================================================ */

/* ---------------- 1. 数据 ---------------- */
const resume = {
  name: "曹智锦",
  role: "AI应用工程师 / 智慧养老产品运营 / 数据分析实习生",
  phone: "13046275981",
  email: "caozhijin@ai-care.com",
  location: "广东 · 信宜",
  birth: "7月11日",
  earth: { lat: 22.4, lng: 110.9, label: "广东 · 信宜" },

  hero: {
    badge: "00后 · 准大学生 · AI能力护城河",
    titleWords: ["你好，", "我是", "曹智锦"],
    titleAccent: "曹智锦",
    tagline: "00后准大一。<span class='num-hi'>2个月</span>拿下<span class='num-hi'>5家</span>头部企业 AI 认证。聚焦<span class='kw'>智慧养老</span> × <span class='kw'>大模型</span>落地。",
    tags: ["AI应用工程师","智慧养老运营","数据分析","PPT实战派","00后极客"]
  },

  about: {
    paragraphs: [
      "身份：<span class='kw'>曹智锦</span>，惠州卫生职业技术学院·准大一，<span class='kw'>智慧养老服务与管理</span>专业。",
      "暑期战绩：<span class='num-hi'>2 个月</span>通关<span class='num-hi'>5 家</span>头部企业 AI 认证，构筑能力护城河。",
      "方向：把<span class='kw'>大模型</span>能力 → 落地到护理问答 / 知识库 / 数据分析等<span class='kw'>养老</span>真实场景。"
    ]
  },

  stats: [
    { num: 5,    suffix: "", label: "头部企业AI认证", accent: false },
    { num: 2,    suffix: "月", label: "完成认证体系",  accent: false },
    { num: 35,   suffix: "%", label: "护理查询效率提升", accent: true },
    { num: 40,   suffix: "%", label: "数据处理效率提升", accent: true }
  ],

  skills: [
    { group: "AI 应用", items: [
      { name: "大模型API集成",   lvl: "p" },
      { name: "通义千问",        lvl: "p" },
      { name: "讯飞星火",        lvl: "p" },
      { name: "华为盘古",        lvl: "p" },
      { name: "Prompt工程",      lvl: "m" },
      { name: "RAG",             lvl: "p" },
      { name: "Agent开发",      lvl: "b" },
      { name: "数据处理",        lvl: "p" }
    ]},
    { group: "办公 & 协作", items: [
      { name: "PPT全流程",       lvl: "m" },
      { name: "Excel数据透视",   lvl: "p" },
      { name: "数据可视化",      lvl: "p" },
      { name: "飞书 / 钉钉",     lvl: "p" },
      { name: "Notion",          lvl: "p" }
    ]},
    { group: "行业 & 关键词", items: [
      { name: "智慧养老",        kw: true },
      { name: "大模型",          kw: true },
      { name: "居家养老",        kw: true },
      { name: "社区养老",        kw: true },
      { name: "机构养老",        kw: true },
      { name: "AI for Science",  kw: true },
      { name: "结构化表达",      kw: false },
      { name: "结果导向",        kw: false }
    ]}
  ],

  projectsNotes: {
    tabs: [
      { id: "all",  label: "全部",     filter: "all" },
      { id: "proj", label: "项目",     filter: "project" },
      { id: "note", label: "个人笔记", filter: "note" }
    ],
    items: [
      { kind: "project", cv: "cv-1", glyph: "AI", name: "「银发智护」智慧养老问答系统", role: "项目负责人", desc: "痛点：护理人员专业知识获取难、培训成本高。方案：轻量化AI问答，<1秒响应。",
        tags: ["通义千问","讯飞星火","RAG","养老护理"],
        results: ["双模型+垂直知识库","RAG架构精准问答","预计降低新人培训成本"] },
      { kind: "project", cv: "cv-2", glyph: "PPT", name: "「适老化AI助手」PPT方案集", role: "独立创作者", desc: "场景：AI × 养老。输出：产品介绍 / 行业分析 / 培训课件。交付：风格统一，逻辑闭环。",
        tags: ["PPT全流程","视觉设计","动效呈现","内容策划"],
        results: ["0→1 全流程独立完成","风格统一·逻辑清晰","建立个人技术品牌影响力"] },
      { kind: "note", cv: "cv-3", glyph: "RAG", title: "RAG 架构落地笔记", tag: "技术笔记", date: "2026.07",
        body: "架构：通义千问 + 讯飞星火 双模型融合。流程：PDF分块（512字+128重叠）→ text2vec建索引 → top-k召回 → LLM生成答案。",
        kp: ["分块策略","向量索引","双模型融合","Prompt调优"],
        take: "核心：质量不在模型大小，在分块边界。护理标准类内容：每3-5条加一次人工校验。" },
      { kind: "note", cv: "cv-4", glyph: "PPT", title: "PPT 方法论：3秒抓力公式", tag: "设计笔记", date: "2026.07",
        body: "结构：封面 → 问题 → 方案 → 成果四步。原则：每页=1视觉锚点+≤3行正文。数字用渐变描边拉满冲击力。",
        kp: ["封面视觉锚点","四步叙事结构","数字渐变描边","≤3行正文原则"],
        take: "核心：PPT不是信息堆砌，是3秒大脑缓冲区。对比图：永远橙-蓝双色。" },
      { kind: "note", cv: "cv-5", glyph: "AGE", title: "智慧养老赛道：三类玩家拆解", tag: "行业笔记", date: "2026.08",
        body: "居家：AI外呼+被动监测。社区：SaaS打通+政府补贴。机构：SOP数字化+护理问答，ROI最快验证。",
        kp: ["居家外呼监测","社区SaaS补贴","机构SOP数字化","护理问答ROI"],
        take: "核心：AI落地起点=支付方是否明确。结论：机构端B端付费清晰——最佳切入点。" }
    ]
  },

  timeline: [
    { type: "intern", org: "智慧养老服务平台", role: "AI应用运营实习生", time: "待补", collapsed: false,
      points: [
        { tag: "业务调研", text: "走访社区养老机构，采集护理+老年用户需求，输出《AI需求图谱》。" },
        { tag: "工具落地", text: "基于通义千问API搭建「智能护理问答助手」原型，日均查询效率↑约35%。" },
        { tag: "数据分析", text: "搭建用户行为周报体系，分层识别高价值用户，次月留存率提升。" }
      ] },
    { type: "intern", org: "校外AI技术实践项目组", role: "项目成员", time: "待补", collapsed: false,
      points: [
        { tag: "技术学习", text: "Datawhale AI夏令营课程通关，掌握大模型应用·RAG·Agent核心栈。" },
        { tag: "方案输出", text: "「AI+医疗健康」方案设计，负责PPT汇报+路演展示，获评委高度评价。" },
        { tag: "团队协作", text: "跨校团队协同推进，需求拆解+进度跟进+成果整合，项目按期交付。" }
      ] },
    { type: "edu", org: "惠州卫生职业技术学院", role: "智慧养老服务与管理（专科）", time: "2026.09 – 2029.06", collapsed: false,
      isEducation: true,
      courses: ["智慧养老概论","老年护理学","养老机构管理","健康大数据分析","人工智能应用基础","养老服务心理学","康复辅助技术"],
      plan: "目标：GPA【待补】，专业排名前10%。主线：AI + 智慧养老复合型能力体系。",
      certs: [
        { org: "阿里巴巴", name: "阿里云人工智能工程师认证（ACA / ACP）", year: "2026夏",
          images: ["cert1.jpg", "cert2.jpg"],
          desc: "核心栈：ML/DL/NLP。工具：通义千问·PAI工程化。" },
        { org: "科大讯飞", name: "讯飞星火大模型应用开发认证", year: "2026夏",
          images: ["m.png", "n.png", "Ai.png"],
          desc: "考点：大模型API·Prompt工程·多模态应用开发。" },
        { org: "北京深势科技", name: "AI for Science 实践认证", year: "2026夏",
          desc: "AI×科研：分子模拟·材料发现·药物研发。" },
        { org: "华为/华为云", name: "华为云人工智能初级工程师认证（HCIA-AI）", year: "2026夏",
          desc: "基础：AI概览·Python·数学·ML/DL。模型：盘古大模型应用。" },
        { org: "Datawhale", name: "Datawhale AI开源学习系列认证", year: "2026夏",
          desc: "栈：大模型应用·RAG·Agent·Prompt工程。" }
      ]
    }
  ],

  updateDate: "2026年8月"
};

/* ---------------- 2. 图标 ---------------- */
const icons = {
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  cake:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3M12 8v3M17 8v3"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'
};

/* ---------------- 3. 工具 ---------------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.prototype.slice.call(r.querySelectorAll(s));
function h(tag, props, children) {
  const el = document.createElement(tag);
  if (props) Object.keys(props).forEach(function(k) {
    if (k === 'class') el.className = props[k];
    else if (k === 'html') el.innerHTML = props[k];
    else if (k.indexOf('on') === 0 && typeof props[k] === 'function') el.addEventListener(k.slice(2).toLowerCase(), props[k]);
    else el.setAttribute(k, props[k]);
  });
  (function append(c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(append); return; }
    el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  })(children);
  return el;
}
function scrollToSec(sel) { var el = $(sel); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

/* ---------------- 4. Hero 渲染（含逐字弹出） ---------------- */
function renderHero() {
  var sec = $('#hero');
  sec.innerHTML = '';
  var d = resume.hero;

  // 标题逐字弹出：每个字一个 span，递增延迟
  var titleHtml = '';
  var fullText = '你好，我是曹智锦';
  for (var i = 0; i < fullText.length; i++) {
    var ch = fullText[i];
    var isAccent = (i >= 5);  // "曹智锦" 三字渐变高亮
    titleHtml += '<span class="pop' + (isAccent ? ' accent' : '') + '" style="animation-delay:' + (i * 0.08) + 's">' + ch + '</span>';
  }

  var left = h('div', { class: 'hero-left' }, [
    h('div', { class: 'badge' }, d.badge),
    h('h1', { class: 'hero-title', html: titleHtml }),
    h('p', { class: 'hero-tagline', html: d.tagline }),
    h('div', { class: 'hero-tags' }, d.tags.map(function(t) { return h('span', { class: 'tag' }, t); })),
    h('div', { class: 'hero-cta' }, [
      h('button', { class: 'btn-shine primary', onclick: function() { scrollToSec('#timeline'); } }, [h('span', { html: icons.doc }), '查看简历']),
      h('button', { class: 'btn-shine', onclick: copyEmail }, [h('span', { html: icons.copy }), '复制邮箱'])
    ])
  ]);
  var right = h('div', { class: 'hero-right' }, [
    h('div', { class: 'earth-card glass' }, [
      h('div', { class: 'earth-card-head' }, [
        h('div', { class: 't' }, 'EARTH · LIVE'),
        h('div', { class: 'dot' })
      ]),
      h('div', { class: 'earth-container', id: 'earthContainer' }, [
        h('div', { class: 'earth-loading', id: 'earthLoading' }, '加载地球中…')
      ]),
      h('div', { class: 'earth-cap' }, [
        h('div', { class: 'loc' }, resume.earth.label),
        h('div', { class: 'coord' }, resume.earth.lat + '°N, ' + resume.earth.lng + '°E')
      ])
    ])
  ]);
  sec.appendChild(h('div', { class: 'hero' }, [left, right]));
}

/* ---------------- 5. About + 数字仪表盘（数字滚动） ---------------- */
function renderAbout() {
  var sec = $('#about');
  sec.innerHTML = '';
  sec.appendChild(h('div', { class: 'section-head' }, [
    h('span', { class: 'num' }, '01'),
    h('div', { class: 'bar' }),
    h('h2', {}, '关于我'),
    h('span', { class: 'en' }, 'About Me')
  ]));

  // 左栏：我是谁（3行）
  var text = h('div', { class: 'about-text glass' }, [
    h('h3', {}, '我是谁'),
    resume.about.paragraphs.map(function(p) { return h('p', { html: p }); })
  ]);
  text.style.padding = '24px';

  // 右栏：核心数据仪表盘
  var stats = h('div', { class: 'about-stats glass' }, resume.stats.map(function(s) {
    return h('div', { class: 'stat-card' + (s.accent ? ' accent' : '') }, [
      h('div', { class: 'stat-num', 'data-target': s.num, 'data-suffix': s.suffix }, '0'),
      h('div', { class: 'stat-label' }, s.label)
    ]);
  }));

  sec.appendChild(h('div', { class: 'about-grid' }, [text, stats]));
}

/* 数字滚动到视口时从 0 跳到目标值 */
function initNumberRoll() {
  if (!('IntersectionObserver' in window)) {
    $$('.stat-num').forEach(function(el) {
      var t = parseInt(el.getAttribute('data-target'), 10);
      var s = el.getAttribute('data-suffix') || '';
      el.textContent = t + s;
    });
    return;
  }
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      var target = parseInt(el.getAttribute('data-target'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var dur = 1200;
      var start = performance.now();
      function step(now) {
        var p = Math.min((now - start) / dur, 1);
        // easeOutCubic
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.4 });
  $$('.stat-num').forEach(function(el) { io.observe(el); });
}

/* ---------------- 6. Skills 标签云 ---------------- */
function renderSkills() {
  var sec = $('#skills');
  sec.innerHTML = '';
  sec.appendChild(h('div', { class: 'section-head' }, [
    h('span', { class: 'num' }, '02'),
    h('div', { class: 'bar' }),
    h('h2', {}, '技能矩阵'),
    h('span', { class: 'en' }, 'Skills & Highlights')
  ]));

  var groups = resume.skills.map(function(g) {
    return h('div', { class: 'skills-group' }, [
      h('h4', {}, g.group),
      h('div', { class: 'skills-tags' }, g.items.map(function(it) {
        var cls = 'skill-chip';
        if (it.kw === true) cls += ' kw';
        else if (it.lvl === 'm') cls += ' lvl-m';
        else if (it.lvl === 'p') cls += ' lvl-p';
        return h('span', { class: cls }, it.name);
      }))
    ]);
  });
  sec.appendChild(h('div', { class: 'skills-wrap glass' }, groups));
}

/* ---------------- 7. Projects & Notes ---------------- */
function renderProjectsNotes() {
  var sec = $('#projects');
  sec.innerHTML = '';
  sec.appendChild(h('div', { class: 'section-head' }, [
    h('span', { class: 'num' }, '03'),
    h('div', { class: 'bar' }),
    h('h2', {}, '项目 & 笔记'),
    h('span', { class: 'en' }, 'Projects & Notes')
  ]));

  var data = resume.projectsNotes;
  var wrap = h('div', { class: 'tabs-wrap glass' });
  var list = h('div', { class: 'tab-list', role: 'tablist' });
  var grid = h('div', { class: 'proj-grid', id: 'projectsGrid' });

  function renderFiltered(filterKey) {
    grid.innerHTML = '';
    var items = data.items;
    if (filterKey !== 'all') items = items.filter(function(it) { return it.kind === filterKey; });
    items.forEach(function(it) { grid.appendChild(renderItem(it)); });
  }

  data.tabs.forEach(function(tab, idx) {
    var btn = h('button', {
      class: 'tab-btn', role: 'tab',
      'aria-selected': idx === 0 ? 'true' : 'false',
      tabindex: idx === 0 ? '0' : '-1',
      onclick: function() {
        $$('.tab-btn', list).forEach(function(b, i) {
          b.setAttribute('aria-selected', i === idx ? 'true' : 'false');
          b.setAttribute('tabindex', i === idx ? '0' : '-1');
        });
        renderFiltered(tab.filter);
      }
    }, tab.label);
    list.appendChild(btn);
  });

  list.addEventListener('keydown', function(e) {
    var btns = $$('.tab-btn', list);
    var cur = btns.indexOf(document.activeElement);
    if (cur < 0) return;
    var next = -1;
    if (e.key === 'ArrowRight') next = (cur + 1) % btns.length;
    else if (e.key === 'ArrowLeft') next = (cur - 1 + btns.length) % btns.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = btns.length - 1;
    if (next >= 0) { e.preventDefault(); btns[next].focus(); btns[next].click(); }
  });

  wrap.appendChild(list);
  wrap.appendChild(grid);
  sec.appendChild(wrap);
  renderFiltered('all');
}
function renderItem(it) {
  if (it.kind === 'project') return renderProjectCard(it);
  return renderNoteCard(it);
}
function renderProjectCard(p) {
  return h('div', { class: 'proj-card' }, [
    h('div', { class: 'proj-cover ' + p.cv }, [
      h('div', { class: 'deco' }),
      h('div', { class: 'glyph' }, p.glyph)
    ]),
    h('div', { class: 'proj-body' }, [
      h('div', { class: 'proj-meta' }, [
        h('div', { class: 'proj-name' }, p.name),
        h('span', { class: 'proj-role' }, p.role)
      ]),
      h('p', { class: 'proj-desc' }, p.desc),
      h('div', { class: 'proj-tags' }, p.tags.map(function(t) { return h('span', { class: 'proj-tag' }, t); })),
      h('div', { class: 'proj-results' }, [
        h('div', { class: 'ttl' }, '核心成果'),
        h('ul', {}, p.results.map(function(r) { return h('li', {}, r); }))
      ])
    ])
  ]);
}
function renderNoteCard(n) {
  return h('div', { class: 'proj-card' }, [
    h('div', { class: 'proj-cover ' + n.cv }, [
      h('div', { class: 'deco' }),
      h('div', { class: 'glyph' }, n.glyph)
    ]),
    h('div', { class: 'proj-body' }, [
      h('div', { class: 'proj-meta' }, [
        h('div', { class: 'proj-name' }, n.title),
        h('span', { class: 'proj-note-tag' }, n.tag)
      ]),
      h('p', { class: 'note-body' }, n.body),
      h('div', { class: 'note-kp' }, n.kp.map(function(k) { return h('span', {}, k); })),
      h('div', { class: 'note-take' }, [
        h('div', { class: 'l' }, '💡 核心收获'),
        h('p', {}, n.take)
      ])
    ])
  ]);
}

/* ---------------- 8. Timeline（经历&教育） ---------------- */
function renderTimeline() {
  var sec = $('#timeline');
  sec.innerHTML = '';
  sec.appendChild(h('div', { class: 'section-head' }, [
    h('span', { class: 'num' }, '04'),
    h('div', { class: 'bar' }),
    h('h2', {}, '经历 & 教育'),
    h('span', { class: 'en' }, 'Timeline')
  ]));

  var tl = h('div', { class: 'timeline' });
  resume.timeline.forEach(function(it) {
    var isEdu = !!it.isEducation;
    var item = h('div', { class: 'tl-item' + (isEdu ? ' edu' : '') });
    var card = h('div', { class: 'tl-card glass' });

    card.appendChild(h('div', { class: 'tl-head' }, [
      h('div', { class: 'tl-org' }, [it.org, h('span', { class: 'role' }, it.role)]),
      h('div', { class: 'tl-meta' }, it.time)
    ]));

    if (!isEdu) {
      // 3 个 bullet + 折叠
      var list = h('ul', { class: 'tl-list collapsed' }, it.points.map(function(p) {
        return h('li', {}, [h('strong', {}, p.tag + '：'), p.text]);
      }));
      card.appendChild(list);
      card.appendChild(h('button', { class: 'tl-expand', onclick: function(e) {
        var l = list; var btn = e.target;
        if (l.classList.contains('collapsed')) { l.classList.remove('collapsed'); btn.textContent = '收起 ▲'; }
        else { l.classList.add('collapsed'); btn.textContent = '展开 ▼'; }
      } }, '展开 ▼'));
    } else {
      // 教育：课程 + 学业规划 + 证书
      card.appendChild(h('div', { class: 'tl-courses' }, it.courses.map(function(c) { return h('span', { class: 'c' }, c); })));
      card.appendChild(h('p', { style: 'font-size:13px;color:var(--text-soft);line-height:1.75;margin-top:12px;padding:12px 14px;background:var(--card-hi);border-radius:9px;border-left:3px solid var(--violet)' }, it.plan));
      var certs = h('div', { class: 'tl-certs' }, it.certs.map(function(c) {
        var infoChildren = [
          h('div', { class: 'org' }, c.org),
          h('div', { class: 'name' }, c.name)
        ];
        if (c.desc) infoChildren.push(h('div', { class: 'desc' }, c.desc));
        if (c.images && c.images.length) {
          infoChildren.push(h('div', { class: 'cert-thumbs' }, c.images.map(function(src, idx) {
            var title = c.org + ' · 证书 ' + (idx + 1);
            return h('img', {
              class: 'cert-thumb', src: src, alt: c.org + ' 证书 ' + (idx + 1),
              loading: 'lazy', decoding: 'async', width: 68, height: 48,
              onclick: function(e) { e.stopPropagation(); openLightbox(src, title); }
            });
          })));
        }
        return h('div', { class: 'tl-cert' }, [
          h('div', { class: 'ci' }, c.org.charAt(0)),
          h('div', { class: 'info' }, infoChildren),
          h('div', { class: 'yr' }, c.year)
        ]);
      }));
      card.appendChild(certs);
    }
    item.appendChild(card);
    tl.appendChild(item);
  });
  sec.appendChild(tl);
}

/* ---------------- 9. Contact 极简条 ---------------- */
function renderContact() {
  var sec = $('#contact');
  sec.innerHTML = '';
  sec.appendChild(h('div', { class: 'section-head' }, [
    h('span', { class: 'num' }, '05'),
    h('div', { class: 'bar' }),
    h('h2', {}, '联系我'),
    h('span', { class: 'en' }, 'Contact')
  ]));
  var items = h('div', { class: 'contact-items' }, [
    h('a', { class: 'contact-item', href: 'tel:' + resume.phone }, [h('span', { html: icons.phone }), resume.phone]),
    h('a', { class: 'contact-item email', href: 'javascript:void(0)', onclick: copyEmail }, [h('span', { html: icons.mail }), resume.email]),
    h('span', { class: 'contact-item' }, [h('span', { html: icons.map }), resume.location]),
    h('span', { class: 'contact-item' }, [h('span', { html: icons.cake }), '生日 ' + resume.birth])
  ]);
  var copy = h('div', { class: 'contact-copy' }, '点击邮箱即可一键复制');
  var qrPanel = h('div', { class: 'wechat-panel', id: 'wechatPanel' }, [
    h('img', {
      class: 'wechat-qr',
      src: 'wechat-qr.jpg',
      alt: '曹智锦的微信二维码',
      loading: 'lazy',
      decoding: 'async',
      width: '240',
      height: '296'
    }),
    h('div', { class: 'wechat-copy' }, [
      h('strong', {}, '微信联系'),
      h('span', {}, '扫码添加，备注「个人网站」')
    ])
  ]);
  qrPanel.hidden = true;

  var qrButton = h('button', {
    class: 'btn-shine wechat-btn',
    type: 'button',
    'aria-expanded': 'false',
    'aria-controls': 'wechatPanel',
    onclick: function(e) {
      var btn = e.currentTarget;
      var willOpen = qrPanel.hidden;
      qrPanel.hidden = !willOpen;
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      btn.querySelector('.wechat-label').textContent = willOpen ? '收起微信二维码' : '扫码加微信';
      if (willOpen) {
        requestAnimationFrame(function() {
          qrPanel.classList.add('show');
          qrPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
      } else {
        qrPanel.classList.remove('show');
      }
    }
  }, [
    h('span', { class: 'wechat-icon', 'aria-hidden': 'true' }, '📱'),
    h('span', { class: 'wechat-label' }, '扫码加微信')
  ]);

  var contactBar = h('div', { class: 'contact-bar' }, [items, copy]);
  var contactAction = h('div', { class: 'contact-action' }, [qrButton, qrPanel]);
  sec.appendChild(h('div', { class: 'contact-shell glass' }, [contactBar, contactAction]));

  // 底部 footer
  var year = new Date().getFullYear();
  var footer = h('footer', {}, [
    h('div', { class: 'copy', html: '\u00A9 ' + year + ' <strong>曹智锦</strong> · 个人简历 · 更新于 ' + resume.updateDate})
  ]);
  sec.appendChild(footer);
}

/* ---------------- 10. 复制邮箱 + Toast ---------------- */
var toastTimer;
function showToast(msg) {
  var t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { t.classList.remove('show'); }, 2400);
}
function copyEmail() {
  var email = resume.email;
  function fallback() {
    var ta = document.createElement('textarea'); ta.value = email;
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); showToast('邮箱已复制：' + email); }
    catch (e) { showToast('复制失败，请手动复制：' + email); }
    document.body.removeChild(ta);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(function() { showToast('邮箱已复制：' + email); }, fallback);
  } else { fallback(); }
}

/* ---------------- 11. 3D 地球（保留全部升级特性） ---------------- */
function initEarth() {
  var container = $('#earthContainer');
  if (!container) return;

  /* 移动端 / 慢速网络降级标志 */
  var isMobile = window.matchMedia('(max-width: 680px)').matches;
  var isSlow = (navigator.connection && navigator.connection.effectiveType)
    ? /2g|slow/.test(navigator.connection.effectiveType)
    : false;
  var downgrade = isMobile || isSlow;

  /* 懒加载：等 earthContainer 接近视口再初始化，避免首屏阻塞 */
  var started = false;
  function start() {
    if (started) return; started = true;
    doInitEarth(downgrade);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) { io.disconnect(); start(); break; }
      }
    }, { rootMargin: '200px' });
    io.observe(container);
    /* 兜底：10 秒后强制启动，避免 IntersectionObserver 失效时卡 loading */
    setTimeout(start, 10000);
  } else {
    start();
  }
}

function doInitEarth(downgrade) {
  if (typeof THREE === 'undefined') { console.warn('[Earth] THREE 未加载，跳过 3D 地球初始化'); return; }
  var container = $('#earthContainer');
  if (!container) return;
  var W = 280, H = 280;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 1000);
  camera.position.set(0, 0, 3.2);

  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  container.appendChild(renderer.domElement);

  /* Lights */
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  var dir = new THREE.DirectionalLight(0xffffff, 1.0);
  dir.position.set(5, 3, 5); scene.add(dir);

  /* Earth */
  var earthRadius = 1;
  var loader = new THREE.TextureLoader();
  loader.setCrossOrigin('anonymous');
  /* 移动端用更小的纹理 + jsDelivr 国内镜像，桌面端保留高清 */
  var texUrl = downgrade
    ? 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_atmos_2048.jpg'
    : 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg';
  var segEarth = downgrade ? 32 : 64;
  var earthMat = new THREE.MeshPhongMaterial({ color: 0x22405a, shininess: 6 });
  var earth = new THREE.Mesh(new THREE.SphereGeometry(earthRadius, segEarth, segEarth), earthMat);
  scene.add(earth);
  loader.load(texUrl, function(tex) {
    tex.anisotropy = downgrade ? 1 : 4;
    earthMat.map = tex; earthMat.color = new THREE.Color(0xffffff); earthMat.needsUpdate = true;
    var ld = $('#earthLoading'); if (ld) ld.classList.add('hide');
  }, undefined, function() {
    var ld = $('#earthLoading'); if (ld) { ld.textContent = '地球纹理加载失败'; }
  });

  /* Clouds：移动端跳过云图，少一次大图请求 */
  var clouds;
  var cloudsMat = new THREE.MeshPhongMaterial({ transparent: true, opacity: 0.42, depthWrite: false });
  if (downgrade) {
    clouds = new THREE.Mesh(new THREE.SphereGeometry(earthRadius * 1.012, 24, 24), cloudsMat);
    clouds.visible = false;
  } else {
    var cloudsTexUrl = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_clouds_1024.png';
    clouds = new THREE.Mesh(new THREE.SphereGeometry(earthRadius * 1.012, 48, 48), cloudsMat);
    loader.load(cloudsTexUrl, function(tex) {
      cloudsMat.map = tex; cloudsMat.alphaMap = tex; cloudsMat.needsUpdate = true;
    }, undefined, function() { clouds.visible = false; });
  }
  scene.add(clouds);

  /* Atmosphere */
  var atmSeg = downgrade ? 24 : 48;
  var atmMat = new THREE.MeshBasicMaterial({ color: 0x4a9fe0, transparent: true, opacity: 0.22, side: THREE.BackSide });
  var atm = new THREE.Mesh(new THREE.SphereGeometry(earthRadius * 1.08, atmSeg, atmSeg), atmMat);
  scene.add(atm);
  var atmGlowMat = new THREE.MeshBasicMaterial({ color: 0x6ab8f5, transparent: true, opacity: 0.10, side: THREE.BackSide });
  var atmGlow = new THREE.Mesh(new THREE.SphereGeometry(earthRadius * 1.18, downgrade ? 20 : 32, downgrade ? 20 : 32), atmGlowMat);
  scene.add(atmGlow);

  function latLngToVec3(lat, lng, radius) {
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (lng + 180) * Math.PI / 180;
    var r = Math.max(0.001, radius);
    var x = -r * Math.sin(phi) * Math.cos(theta);
    var z =  r * Math.sin(phi) * Math.sin(theta);
    var y =  r * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

  var markerGroup = new THREE.Group(); scene.add(markerGroup);
  var pos = latLngToVec3(resume.earth.lat, resume.earth.lng, earthRadius);
  var up = pos.clone().normalize();

  var markerMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
  var marker = new THREE.Mesh(new THREE.SphereGeometry(0.022, 16, 16), markerMat);
  marker.position.copy(pos); markerGroup.add(marker);

  var ringMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false });
  var ring1 = new THREE.Mesh(new THREE.RingGeometry(0.03, 0.06, 32), ringMat.clone());
  ring1.position.copy(pos); ring1.lookAt(0, 0, 0); markerGroup.add(ring1);
  var ring2 = new THREE.Mesh(new THREE.RingGeometry(0.03, 0.06, 32), ringMat.clone());
  ring2.position.copy(pos); ring2.lookAt(0, 0, 0); markerGroup.add(ring2);

  /* Beacon: 两道相交旋转环 + 淡蓝光束 */
  var beaconGroup = new THREE.Group();
  beaconGroup.position.copy(pos);
  beaconGroup.lookAt(pos.clone().add(up));
  markerGroup.add(beaconGroup);

  var beaconRingMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.75, side: THREE.DoubleSide, depthWrite: false });
  var beaconRingA = new THREE.Mesh(new THREE.TorusGeometry(0.10, 0.004, 8, 48), beaconRingMat.clone());
  beaconGroup.add(beaconRingA);
  var beaconRingB = new THREE.Mesh(new THREE.TorusGeometry(0.10, 0.004, 8, 48), beaconRingMat.clone());
  beaconRingB.rotation.x = Math.PI / 2;
  beaconGroup.add(beaconRingB);

  var beamMat = new THREE.MeshBasicMaterial({ color: 0x6ab8f5, transparent: true, opacity: 0.45, depthWrite: false, side: THREE.DoubleSide });
  var beam = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.002, 0.45, 12, 1, true), beamMat);
  beam.rotation.x = -Math.PI / 2;
  beam.position.set(0, 0, 0.22);
  beaconGroup.add(beam);
  var beamTip = new THREE.Mesh(
    new THREE.SphereGeometry(0.018, 12, 12),
    new THREE.MeshBasicMaterial({ color: 0x9fd0ff, transparent: true, opacity: 0.9, depthWrite: false })
  );
  beamTip.position.set(0, 0, 0.45);
  beaconGroup.add(beamTip);

  /* Starfield：移动端降到 400，桌面端保持 1000 */
  var starCount = downgrade ? 400 : 1000;
  var starGeom = new THREE.BufferGeometry();
  var starPos = new Float32Array(starCount * 3);
  var starColors = new Float32Array(starCount * 3);
  for (var i = 0; i < starCount; i++) {
    var r = 20 + Math.random() * 30;
    var theta = Math.random() * Math.PI * 2;
    var phi = Math.acos(2 * Math.random() - 1);
    starPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    starPos[i * 3 + 2] = r * Math.cos(phi);
    var tint = Math.random();
    if (tint < 0.75) { starColors[i*3]=1; starColors[i*3+1]=1; starColors[i*3+2]=1; }
    else if (tint < 0.88) { starColors[i*3]=1; starColors[i*3+1]=0.92; starColors[i*3+2]=0.78; }
    else { starColors[i*3]=0.78; starColors[i*3+1]=0.88; starColors[i*3+2]=1; }
  }
  starGeom.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  starGeom.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
  var starMat = new THREE.PointsMaterial({
    size: 0.18, sizeAttenuation: true, vertexColors: true,
    transparent: true, opacity: 0.9, depthWrite: false
  });
  var stars = new THREE.Points(starGeom, starMat);
  scene.add(stars);

  /* Tooltip 毛玻璃气泡 */
  var tooltip = document.createElement('div');
  tooltip.className = 'earth-tooltip';
  tooltip.innerHTML = '<div class="et-title">' + resume.earth.label + '</div>' +
    '<div class="et-coord">' + resume.earth.lat + '°N, ' + resume.earth.lng + '°E</div>' +
    '<div class="et-sub">广东 · 信宜 · 我的家乡</div>';
  container.appendChild(tooltip);

  var raycaster = new THREE.Raycaster();
  var mouseNDC = new THREE.Vector2();
  function onMouseMove(ev) {
    var rect = renderer.domElement.getBoundingClientRect();
    mouseNDC.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    mouseNDC.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouseNDC, camera);
    var hits = raycaster.intersectObjects([marker, beamTip, beaconRingA, beaconRingB], false);
    if (hits.length > 0) {
      tooltip.classList.add('show');
      tooltip.style.left = (ev.clientX - rect.left + 14) + 'px';
      tooltip.style.top  = (ev.clientY - rect.top - 10) + 'px';
      renderer.domElement.style.cursor = 'pointer';
    } else {
      tooltip.classList.remove('show');
      renderer.domElement.style.cursor = '';
    }
  }
  renderer.domElement.addEventListener('mousemove', onMouseMove);
  renderer.domElement.addEventListener('mouseleave', function() { tooltip.classList.remove('show'); });

  /* 视差 */
  var parallax = { x: 0, y: 0, tx: 0, ty: 0 };
  renderer.domElement.addEventListener('mousemove', function(ev) {
    var rect = renderer.domElement.getBoundingClientRect();
    parallax.tx = ((ev.clientX - rect.left) / rect.width - 0.5) * 2;
    parallax.ty = ((ev.clientY - rect.top) / rect.height - 0.5) * 2;
  });

  /* OrbitControls */
  var controls = (typeof THREE.OrbitControls !== 'undefined')
    ? new THREE.OrbitControls(camera, renderer.domElement)
    : (typeof OrbitControls !== 'undefined' ? new OrbitControls(camera, renderer.domElement) : null);
  if (controls) {
    controls.enableDamping = true; controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.5; controls.enablePan = false;
    controls.minDistance = 2.0; controls.maxDistance = 5.0;
    controls.autoRotate = true; controls.autoRotateSpeed = 0.5;
  }
  container.addEventListener('mouseenter', function() { if (controls) controls.autoRotate = false; });
  container.addEventListener('mouseleave', function() { if (controls) controls.autoRotate = true; });

  function onResize() {
    var cw = container.clientWidth;
    if (cw > 0 && Math.abs(cw - W) > 8) {
      W = cw; H = cw;
      camera.aspect = W / H; camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    }
  }
  window.addEventListener('resize', onResize);

  var clock = new THREE.Clock();
  function animate() {
    var t = clock.getElapsedTime();
    if (clouds && clouds.visible) clouds.rotation.y = earth.rotation.y - t * 0.08;
    var pulse = 0.5 + 0.5 * Math.sin(t * 0.8);
    atmMat.opacity = 0.18 + pulse * 0.10;
    atmGlowMat.opacity = 0.06 + pulse * 0.08;
    var p1 = (t % 2) / 2, p2 = ((t + 1) % 2) / 2;
    ring1.scale.setScalar(1 + p1 * 1.2); ring1.material.opacity = 0.6 * (1 - p1);
    ring2.scale.setScalar(1 + p2 * 1.2); ring2.material.opacity = 0.5 * (1 - p2);
    marker.scale.setScalar(1 + Math.sin(t * 4) * 0.12);
    beaconRingA.rotation.z = t * 1.2;
    beaconRingB.rotation.y = t * 1.6;
    var beamPulse = 0.5 + 0.5 * Math.sin(t * 2.4);
    beamMat.opacity = 0.30 + beamPulse * 0.25;
    beamTip.scale.setScalar(0.8 + beamPulse * 0.5);
    beamTip.material.opacity = 0.7 + beamPulse * 0.3;
    stars.rotation.y = t * 0.01; stars.rotation.x = t * 0.005;
    starMat.opacity = 0.7 + 0.2 * Math.sin(t * 1.4);
    parallax.x += (parallax.tx - parallax.x) * 0.05;
    parallax.y += (parallax.ty - parallax.y) * 0.05;
    stars.position.x = parallax.x * 1.5; stars.position.y = -parallax.y * 1.5;
    if (controls) controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

/* ---------------- 12. 导航 ScrollSpy + 返回顶部 + 汉堡菜单 ---------------- */
function initNavScrollSpy() {
  var links = $$('.nav-links a');
  var sections = links.map(function(a) { return $(a.getAttribute('href')); }).filter(Boolean);
  function update() {
    var scrollPos = window.scrollY + 120;
    var cur = null;
    sections.forEach(function(s) { if (s && s.offsetTop <= scrollPos) cur = s; });
    links.forEach(function(a) { a.classList.toggle('active', cur && a.getAttribute('href') === '#' + cur.id); });
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}
function initToTop() {
  var btn = $('#toTop');
  window.addEventListener('scroll', function() { btn.classList.toggle('show', window.scrollY > 500); }, { passive: true });
  btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
}
function initMobileMenu() {
  var open = false;
  var btn = $('#menuBtn');
  var links = $('#navLinks');
  var mOpen = $('#iconMenu'), mClose = $('#iconClose');
  function closeMenu() {
    if (!open) return;
    open = false;
    links.style.display = ''; links.style.position = '';
    links.style.top = ''; links.style.left = ''; links.style.right = '';
    links.style.background = ''; links.style.flexDirection = '';
    links.style.padding = ''; links.style.borderBottom = ''; links.style.boxShadow = '';
    btn.setAttribute('aria-expanded', 'false');
    mOpen.style.display = 'block'; mClose.style.display = 'none';
  }
  btn.addEventListener('click', function() {
    open = !open;
    if (open) {
      links.style.display = 'flex'; links.style.position = 'fixed'; links.style.top = '62px';
      links.style.left = '0'; links.style.right = '0';
      links.style.background = 'rgba(10,14,26,.95)';
      links.style.backdropFilter = 'blur(20px) saturate(180%)';
      links.style.webkitBackdropFilter = 'blur(20px) saturate(180%)';
      links.style.flexDirection = 'column'; links.style.padding = '12px 18px';
      links.style.borderBottom = '1px solid var(--border)';
      links.style.boxShadow = 'var(--shadow-lg)';
    } else { closeMenu(); }
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    mOpen.style.display = open ? 'none' : 'block';
    mClose.style.display = open ? 'block' : 'none';
  });
  links.addEventListener('click', function(e) { if (e.target.tagName === 'A') closeMenu(); });
  window.addEventListener('resize', function() { if (window.innerWidth >= 900) closeMenu(); });
}

/* ---------------- 13. Lightbox ---------------- */
var lbLastFocus = null;
function openLightbox(src, caption) {
  var lb = $('#lightbox');
  lbLastFocus = document.activeElement;
  $('#lbImg').src = src;
  $('#lbImg').alt = caption || '';
  $('#lbCap').textContent = caption || '';
  lb.classList.add('show');
  document.body.style.overflow = 'hidden';
  $('#lbClose').focus();
}
function closeLightbox() {
  var lb = $('#lightbox');
  lb.classList.remove('show');
  document.body.style.overflow = '';
  $('#lbImg').src = '';
  if (lbLastFocus) lbLastFocus.focus();
}

/* ---------------- 14. Reveal 滚动淡入 ---------------- */
function initReveal() {
  if (!('IntersectionObserver' in window)) { $$('.reveal').forEach(function(el) { el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  $$('.reveal').forEach(function(el) { io.observe(el); });
}

/* ---------------- 15. 初始化 ---------------- */
function init() {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjectsNotes();
  renderTimeline();
  renderContact();

  initEarth();
  initNumberRoll();
  initToTop();
  initMobileMenu();
  initNavScrollSpy();
  initReveal();

  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lightbox').addEventListener('click', function(e) { if (e.target === this) closeLightbox(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && $('#lightbox').classList.contains('show')) closeLightbox(); });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
