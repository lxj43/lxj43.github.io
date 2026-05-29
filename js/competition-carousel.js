/**
 * 竞赛获奖展示数据与交互
 * 证书图片：images/awards/award-01.jpg …（与 id 对应）
 */
const AWARDS = [
  {
    id: "01",
    level: "国家一等奖",
    tier: "national",
    name: "2025 年高教社杯全国大学生数学建模竞赛（本科组）",
    image: "images/awards/award-01.jpg",
    imageAlt: "2025 高教社杯数学建模国家一等奖证书",
    intro: "以真实复杂问题为入口，完成问题拆解、模型构建、算法求解、结果解释与论文写作，集中体现数学建模与团队协同能力。",
    tags: ["数学建模", "算法求解", "论文写作"],
  },
  {
    id: "02",
    level: "国家一等奖",
    tier: "national",
    name: "2025 年 iCAN 大学生创新创业大赛「精创杯」全国数字经济决策创新挑战赛",
    image: "images/awards/award-02.jpg",
    imageAlt: "2025 iCAN 精创杯国家一等奖证书",
    intro: "围绕数字经济决策场景进行方案设计与推演，突出市场判断、数据建模、商业分析与决策优化能力。",
    tags: ["数字经济", "决策推演", "商业分析"],
  },
  {
    id: "03",
    level: "国家二等奖",
    tier: "national",
    name: "2024 年高教社杯全国大学生数学建模竞赛（本科组）",
    image: "images/awards/award-03.jpg",
    imageAlt: "2024 高教社杯数学建模国家二等奖证书",
    intro: "在全国性数学建模竞赛中完成从建模假设、数据处理到结果论证的完整流程，为后续高水平建模竞赛积累经验。",
    tags: ["模型构建", "数据处理", "结果论证"],
  },
  {
    id: "04",
    level: "国家二等奖",
    tier: "national",
    name: "2026 年第十二届全国大学生能源经济学术创意大赛",
    image: "images/awards/award-04.jpg",
    imageAlt: "2026 能源经济学术创意大赛国家二等奖证书",
    intro: "面向能源经济议题进行学术创意表达，体现经济学分析、政策理解与数据化论证能力。",
    tags: ["能源经济", "学术创意", "政策分析"],
  },
  {
    id: "05",
    level: "国家二等奖",
    tier: "national",
    name: "2026 年全国企业模拟竞争大赛",
    image: "images/awards/award-05.jpg",
    imageAlt: "2026 全国企业模拟竞争大赛国家二等奖证书",
    intro: "在企业经营模拟环境中进行战略选择、财务判断、市场博弈和资源配置，训练复杂商业环境下的动态决策能力。",
    tags: ["企业模拟", "经营决策", "资源配置"],
  },
  {
    id: "06",
    level: "国家二等奖",
    tier: "national",
    name: "2025 年第七届全球校园人工智能算法精英大赛（算法创新赛）",
    image: "images/awards/award-06.jpg",
    imageAlt: "2025 全球校园人工智能算法精英大赛国家二等奖证书",
    intro: "围绕人工智能算法创新任务进行方案构建与性能优化，强化机器学习、算法设计和实验验证能力。",
    tags: ["人工智能", "算法创新", "实验验证"],
  },
  {
    id: "07",
    level: "国家二等奖",
    tier: "national",
    name: "2024 年全国大学生数字贸易综合技能大赛",
    image: "images/awards/award-07.jpg",
    imageAlt: "2024 数字贸易综合技能大赛国家二等奖证书",
    intro: "覆盖数字贸易业务流程、数据分析和综合技能应用，体现数字经济专业背景下的跨场景实践能力。",
    tags: ["数字贸易", "综合技能", "场景实践"],
  },
  {
    id: "08",
    level: "国家三等奖",
    tier: "national",
    name: "2024—2025 年美国大学生数学建模竞赛（S 奖）",
    image: "images/awards/award-08.jpg",
    imageAlt: "美国大学生数学建模竞赛 S 奖证书",
    intro: "在国际建模赛事中完成英文建模论文，训练跨语言表达、开放问题建模与国际化学术写作能力。",
    tags: ["国际竞赛", "英文论文", "开放建模"],
  },
  {
    id: "09",
    level: "国家优秀奖",
    tier: "national",
    name: "2025 年第七届全球校园人工智能算法精英大赛（算法挑战赛）",
    image: "images/awards/award-09.jpg",
    imageAlt: "2025 全球校园人工智能算法精英大赛国家优秀奖证书",
    intro: "面向算法挑战题进行模型选择、训练调优和结果提交，补充算法竞赛经验与工程化实践能力。",
    tags: ["算法挑战", "模型调优", "工程实践"],
  },
  {
    id: "10",
    level: "一等奖",
    tier: "other",
    name: "2025 年纪念萧嘉魁先生诞辰 115 周年多模态数字优秀作品大赛",
    image: "images/awards/award-10.jpg",
    imageAlt: "2025 统计多模态数字优秀作品大赛一等奖证书",
    intro: "结合多模态数字作品表达与统计/数据叙事方法，体现跨媒介表达和信息可视化能力。",
    tags: ["多模态", "数字作品", "可视化表达"],
  },
  {
    id: "11",
    level: "国家级优秀结项",
    tier: "national",
    name: "2024 年度国家级大学生创新创业训练计划（核心成员，优秀结项）",
    image: "images/awards/award-11.jpg",
    imageAlt: "2024 国家级大创优秀结项证书",
    intro: "完成国家级大创项目建设与结项，体现项目管理、产品化思维、材料撰写和团队协作能力。",
    tags: ["国家级大创", "优秀结项", "项目管理"],
  },
  {
    id: "12",
    level: "国家级立项",
    tier: "national",
    name: "2024 年度国家级大学生创新创业训练计划（核心成员，立项）",
    image: "images/awards/award-12.jpg",
    imageAlt: "2024 国家级大创立项证书",
    intro: "作为核心成员参与国家级大创立项，围绕创新场景完成问题定义、方案设计与实施计划。",
    tags: ["大创立项", "创新方案", "团队协作"],
  },
  {
    id: "13",
    level: "国家级立项",
    tier: "national",
    name: "2025 年度国家级大学生创新创业训练计划（核心成员，立项）",
    image: "images/awards/award-13.jpg",
    imageAlt: "2025 国家级大创立项证书",
    intro: "延续 AI+教育、数字经济应用等方向，形成项目化研究与平台化落地能力。",
    tags: ["AI+教育", "平台建设", "场景化应用"],
  },
  {
    id: "14",
    level: "天津赛区三等奖",
    tier: "provincial",
    name: "2025 年 iCAN 大学生创新创业大赛（天津赛区）",
    image: "images/awards/award-14.jpg",
    imageAlt: "2025 iCAN 天津赛区三等奖证书",
    intro: "在区域创新创业赛事中进行项目展示和方案表达，为全国赛阶段积累材料与路演经验。",
    tags: ["创新创业", "区域赛", "路演表达"],
  },
  {
    id: "15",
    level: "天津市铜奖",
    tier: "provincial",
    name: "2025 年中国国际大学生创新创业大赛（天津市）",
    image: "images/awards/award-15.jpg",
    imageAlt: "2025 中国国际大学生创新创业大赛天津市铜奖证书",
    intro: "围绕创新创业项目进行商业模式、应用价值和团队能力展示，强化项目包装与答辩表达。",
    tags: ["创新创业", "商业模式", "答辩表达"],
  },
  {
    id: "16",
    level: "天津市三等奖",
    tier: "provincial",
    name: "第十六届全国大学生数学竞赛（非数学 B 类，天津赛区）",
    image: "images/awards/award-16.jpg",
    imageAlt: "全国大学生数学竞赛天津市三等奖证书",
    intro: "通过数学基础竞赛检验高等数学与逻辑推导能力，为建模与算法问题提供理论基础。",
    tags: ["数学基础", "逻辑推导", "数理能力"],
  },
  {
    id: "17",
    level: "市级立项",
    tier: "other",
    name: "2024 年度天津市大学生创新创业训练计划（项目主持人，立项）",
    image: "images/awards/award-17.jpg",
    imageAlt: "2024 市级大创立项证书",
    intro: "作为项目主持人推进市级大创立项，承担选题设计、进度组织与材料统筹。",
    tags: ["项目主持", "市级大创", "组织统筹"],
  },
  {
    id: "18",
    level: "市级结项",
    tier: "other",
    name: "2024 年度天津市大学生创新创业训练计划（项目主持人，结项）",
    image: "images/awards/award-18.jpg",
    imageAlt: "2024 市级大创结项证书",
    intro: "完成市级大创项目结项，体现项目交付、成果沉淀和阶段性复盘能力。",
    tags: ["项目结项", "成果沉淀", "复盘迭代"],
  },
  {
    id: "19",
    level: "软件著作权",
    tier: "other",
    name: "《惠 Graph 图数据库可视化平台 V1.0》软件著作权",
    image: "images/awards/award-19.jpg",
    imageAlt: "惠 Graph 图数据库可视化平台软件著作权证书",
    intro: "围绕复杂关系网络和知识图谱可视化开发平台，支撑多节点关联分析和智能体辅助分析。",
    tags: ["软件著作权", "图数据库", "知识图谱"],
  },
];

function countByTier(tier) {
  return AWARDS.filter((a) => a.tier === tier).length;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildAwardImage(a, className = "") {
  return `
    <div class="cert-frame cert-frame--cover ${className}">
      <img src="${a.image}" alt="${escapeHtml(a.imageAlt)}" loading="lazy" data-award-id="${a.id}" />
      <div class="cert-placeholder" aria-hidden="true">
        <svg viewBox="0 0 64 64" width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.6">
          <rect x="8" y="10" width="48" height="38" rx="4"/>
          <path d="M20 24h24M20 32h18M20 40h22"/>
          <circle cx="44" cy="18" r="6"/>
        </svg>
        <p>证书待上传</p>
        <code>${a.image}</code>
      </div>
    </div>
  `;
}

function watchMissingImages(root) {
  root.querySelectorAll(".cert-frame img").forEach((img) => {
    const showPlaceholder = () => img.closest(".cert-frame")?.classList.add("is-missing");
    if (img.complete && img.naturalWidth === 0) showPlaceholder();
    img.addEventListener("error", showPlaceholder, { once: true });
  });
}

function buildOverview() {
  const national = countByTier("national");
  const provincial = countByTier("provincial");
  const other = countByTier("other");

  return `
    <div class="award-overview" aria-label="获奖总览">
      <div class="award-stat">
        <span class="award-stat__num">${national}</span>
        <span class="award-stat__label">国家级及以上</span>
      </div>
      <div class="award-stat">
        <span class="award-stat__num">${provincial}</span>
        <span class="award-stat__label">省部级及以上</span>
      </div>
      <div class="award-stat">
        <span class="award-stat__num">${other}</span>
        <span class="award-stat__label">其他奖项/成果</span>
      </div>
    </div>
  `;
}

function initCompetitionCarousel(root) {
  if (!root || AWARDS.length === 0) return;
  root.classList.add("is-ready");

  const cards = AWARDS.map((a, i) => `
    <button class="award-cover-card" type="button" data-index="${i}" aria-label="定位到 ${escapeHtml(a.name)}">
      <span class="award-cover-card__level">${escapeHtml(a.level)}</span>
      ${buildAwardImage(a)}
      <span class="award-cover-card__id">${String(i + 1).padStart(2, "0")}</span>
    </button>
  `).join("");

  const tierName = {
    national: "国家级及以上",
    provincial: "省部级",
    other: "项目/成果",
  };

  root.innerHTML = `
    ${buildOverview()}
    <div class="award-showcase award-showcase--stacked" aria-label="竞赛证书展示">
      <aside class="award-detail award-detail--top" aria-live="polite">
        <div class="award-detail__topline">
          <p class="eyebrow">SELECTED AWARD</p>
          <span class="award-detail__tier"></span>
        </div>
        <div class="award-detail__mainrow">
          <span class="award-detail__level"></span>
          <h3 class="award-detail__name"></h3>
        </div>
        <p class="award-detail__intro"></p>
        <div class="award-detail__bottomrow">
          <div class="award-detail__tags"></div>
          <div class="award-detail__meta">
            <span class="award-detail__current">01</span>
            <span>/</span>
            <span class="award-detail__total">${String(AWARDS.length).padStart(2, "0")}</span>
          </div>
        </div>
        <div class="award-progress" aria-hidden="true"><i></i></div>
      </aside>

      <div class="award-coverflow award-coverflow--wide" tabindex="0" aria-label="证书阵列。鼠标移入此区域后，使用鼠标滚轮切换奖项。">
        <div class="award-coverflow__header">
          <span>CERTIFICATE WALL</span>
          <strong>Hover + Wheel</strong>
        </div>
        <button type="button" class="award-arrow award-arrow--prev" aria-label="上一项"><span aria-hidden="true"></span></button>
        <div class="award-coverflow__rail">${cards}</div>
        <button type="button" class="award-arrow award-arrow--next" aria-label="下一项"><span aria-hidden="true"></span></button>
        <div class="award-wheel-hint">
          <span>鼠标移入证书区</span>
          <strong>滚动切换 / 点击箭头</strong>
        </div>
      </div>
    </div>
  `;

  const coverflow = root.querySelector(".award-coverflow");
  const coverCards = [...root.querySelectorAll(".award-cover-card")];
  const levelEl = root.querySelector(".award-detail__level");
  const tierEl = root.querySelector(".award-detail__tier");
  const nameEl = root.querySelector(".award-detail__name");
  const introEl = root.querySelector(".award-detail__intro");
  const tagsEl = root.querySelector(".award-detail__tags");
  const currentEl = root.querySelector(".award-detail__current");
  const progressEl = root.querySelector(".award-progress i");
  const prevBtn = root.querySelector(".award-arrow--prev");
  const nextBtn = root.querySelector(".award-arrow--next");
  let index = 0;
  let wheelLocked = false;

  function setIndex(nextIndex) {
    index = (nextIndex + AWARDS.length) % AWARDS.length;
    const active = AWARDS[index];

    coverCards.forEach((card, i) => {
      let offset = i - index;
      if (offset > AWARDS.length / 2) offset -= AWARDS.length;
      if (offset < -AWARDS.length / 2) offset += AWARDS.length;
      const absOffset = Math.abs(offset);
      const visible = absOffset <= 5;
      const scale = offset === 0 ? 1.16 : 0.84 - Math.min(absOffset * 0.045, 0.22);
      card.style.setProperty("--offset", offset);
      card.style.setProperty("--abs-offset", absOffset);
      card.style.setProperty("--scale", scale);
      card.style.setProperty("--z", offset === 0 ? 120 : 80 - absOffset);
      card.dataset.offset = String(offset);
      card.classList.toggle("is-active", i === index);
      card.classList.toggle("is-visible", visible);
      card.classList.toggle("is-near", absOffset > 0 && absOffset <= 2);
      card.tabIndex = visible ? 0 : -1;
    });

    levelEl.textContent = active.level;
    tierEl.textContent = tierName[active.tier] || "成果展示";
    nameEl.textContent = active.name;
    introEl.textContent = active.intro;
    tagsEl.innerHTML = active.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    currentEl.textContent = String(index + 1).padStart(2, "0");
    progressEl.style.width = `${((index + 1) / AWARDS.length) * 100}%`;
  }

  function step(delta) {
    setIndex(index + delta);
  }

  coverflow.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (wheelLocked) return;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (delta === 0) return;
    wheelLocked = true;
    step(delta > 0 ? 1 : -1);
    window.setTimeout(() => {
      wheelLocked = false;
    }, 360);
  }, { passive: false });

  coverflow.addEventListener("mouseenter", () => coverflow.classList.add("is-wheel-ready"));
  coverflow.addEventListener("mouseleave", () => coverflow.classList.remove("is-wheel-ready"));

  coverCards.forEach((card) => {
    const i = Number(card.dataset.index);
    card.addEventListener("click", () => setIndex(i));
  });

  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  });

  watchMissingImages(root);
  setIndex(0);
}

function initHomeAwardMarquee(root) {
  if (!root) return;
  const marqueeItems = AWARDS.map((a, i) => `
    <article class="award-mini-card">
      ${buildAwardImage(a, "cert-frame--mini")}
      <div class="award-mini-card__body">
        <span>${String(i + 1).padStart(2, "0")} · ${escapeHtml(a.level)}</span>
        <strong>${escapeHtml(a.name)}</strong>
      </div>
    </article>
  `).join("");

  root.innerHTML = `
    <div class="award-marquee" role="list">
      <div class="award-marquee__track">
        ${marqueeItems}
        ${marqueeItems}
      </div>
    </div>
  `;
  watchMissingImages(root);
}

function bootAwardWidgets() {
  document.documentElement.classList.add("js-enabled");
  try {
    initCompetitionCarousel(document.getElementById("award-carousel-root"));
    initHomeAwardMarquee(document.getElementById("home-award-marquee-root"));
  } catch (error) {
    console.error("奖状/竞赛组件初始化失败：", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootAwardWidgets);
} else {
  bootAwardWidgets();
}
