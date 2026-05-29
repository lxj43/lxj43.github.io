/**
 * 竞赛获奖双滚轮
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
  },
  {
    id: "02",
    level: "国家一等奖",
    tier: "national",
    name: "2025 年 iCAN 大学生创新创业大赛「精创杯」全国数字经济决策创新挑战赛",
    image: "images/awards/award-02.jpg",
    imageAlt: "2025 iCAN 精创杯国家一等奖证书",
  },
  {
    id: "03",
    level: "国家二等奖",
    tier: "national",
    name: "2024 年高教社杯全国大学生数学建模竞赛（本科组）",
    image: "images/awards/award-03.jpg",
    imageAlt: "2024 高教社杯数学建模国家二等奖证书",
  },
  {
    id: "04",
    level: "国家二等奖",
    tier: "national",
    name: "2026 年第十二届全国大学生能源经济学术创意大赛",
    image: "images/awards/award-04.jpg",
    imageAlt: "2026 能源经济学术创意大赛国家二等奖证书",
  },
  {
    id: "05",
    level: "国家二等奖",
    tier: "national",
    name: "2026 年全国企业模拟竞争大赛",
    image: "images/awards/award-05.jpg",
    imageAlt: "2026 全国企业模拟竞争大赛国家二等奖证书",
  },
  {
    id: "06",
    level: "国家二等奖",
    tier: "national",
    name: "2025 年第七届全球校园人工智能算法精英大赛（算法创新赛）",
    image: "images/awards/award-06.jpg",
    imageAlt: "2025 全球校园人工智能算法精英大赛国家二等奖证书",
  },
  {
    id: "07",
    level: "国家二等奖",
    tier: "national",
    name: "2024 年全国大学生数字贸易综合技能大赛",
    image: "images/awards/award-07.jpg",
    imageAlt: "2024 数字贸易综合技能大赛国家二等奖证书",
  },
  {
    id: "08",
    level: "国家三等奖",
    tier: "national",
    name: "2024—2025 年美国大学生数学建模竞赛（S 奖）",
    image: "images/awards/award-08.jpg",
    imageAlt: "美国大学生数学建模竞赛 S 奖证书",
  },
  {
    id: "09",
    level: "国家优秀奖",
    tier: "national",
    name: "2025 年第七届全球校园人工智能算法精英大赛（算法挑战赛）",
    image: "images/awards/award-09.jpg",
    imageAlt: "2025 全球校园人工智能算法精英大赛国家优秀奖证书",
  },
  {
    id: "10",
    level: "一等奖",
    tier: "other",
    name: "2025 年纪念萧嘉魁先生诞辰 115 周年多模态数字优秀作品大赛",
    image: "images/awards/award-10.jpg",
    imageAlt: "2025 统计多模态数字优秀作品大赛一等奖证书",
  },
  {
    id: "11",
    level: "国家级优秀结项",
    tier: "national",
    name: "2024 年度国家级大学生创新创业训练计划（核心成员，优秀结项）",
    image: "images/awards/award-11.jpg",
    imageAlt: "2024 国家级大创优秀结项证书",
  },
  {
    id: "12",
    level: "国家级立项",
    tier: "national",
    name: "2024 年度国家级大学生创新创业训练计划（核心成员，立项）",
    image: "images/awards/award-12.jpg",
    imageAlt: "2024 国家级大创立项证书",
  },
  {
    id: "13",
    level: "国家级立项",
    tier: "national",
    name: "2025 年度国家级大学生创新创业训练计划（核心成员，立项）",
    image: "images/awards/award-13.jpg",
    imageAlt: "2025 国家级大创立项证书",
  },
  {
    id: "14",
    level: "天津赛区三等奖",
    tier: "provincial",
    name: "2025 年 iCAN 大学生创新创业大赛（天津赛区）",
    image: "images/awards/award-14.jpg",
    imageAlt: "2025 iCAN 天津赛区三等奖证书",
  },
  {
    id: "15",
    level: "天津市铜奖",
    tier: "provincial",
    name: "2025 年中国国际大学生创新创业大赛（天津市）",
    image: "images/awards/award-15.jpg",
    imageAlt: "2025 中国国际大学生创新创业大赛天津市铜奖证书",
  },
  {
    id: "16",
    level: "天津市三等奖",
    tier: "provincial",
    name: "第十六届全国大学生数学竞赛（非数学 B 类，天津赛区）",
    image: "images/awards/award-16.jpg",
    imageAlt: "全国大学生数学竞赛天津市三等奖证书",
  },
  {
    id: "17",
    level: "市级立项",
    tier: "other",
    name: "2024 年度天津市大学生创新创业训练计划（项目主持人，立项）",
    image: "images/awards/award-17.jpg",
    imageAlt: "2024 市级大创立项证书",
  },
  {
    id: "18",
    level: "市级结项",
    tier: "other",
    name: "2024 年度天津市大学生创新创业训练计划（项目主持人，结项）",
    image: "images/awards/award-18.jpg",
    imageAlt: "2024 市级大创结项证书",
  },
  {
    id: "19",
    level: "软件著作权",
    tier: "other",
    name: "《惠 Graph 图数据库可视化平台 V1.0》软件著作权",
    image: "images/awards/award-19.jpg",
    imageAlt: "惠 Graph 图数据库可视化平台软件著作权证书",
  },
];

function countByTier(tier) {
  return AWARDS.filter((a) => a.tier === tier).length;
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
        <span class="award-stat__label">其他奖项</span>
      </div>
    </div>
  `;
}

function buildWheelItems() {
  const textItems = AWARDS.map(
    (a, i) => `
      <article class="wheel-item wheel-item--text" data-index="${i}">
        <span class="wheel-item__level">${a.level}</span>
        <h4 class="wheel-item__name">${a.name}</h4>
      </article>
    `
  ).join("");

  const imageItems = AWARDS.map(
    (a, i) => `
      <article class="wheel-item wheel-item--image" data-index="${i}">
        <div class="cert-frame">
          <img
            src="${a.image}"
            alt="${a.imageAlt}"
            loading="lazy"
            data-award-id="${a.id}"
          />
          <div class="cert-placeholder" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.6">
              <rect x="8" y="10" width="48" height="38" rx="4"/>
              <path d="M20 24h24M20 32h18M20 40h22"/>
              <circle cx="44" cy="18" r="6"/>
            </svg>
            <p>证书待上传</p>
            <code>${a.image}</code>
          </div>
        </div>
      </article>
    `
  ).join("");

  return { textItems, imageItems };
}

function initCompetitionCarousel(root) {
  if (!root || AWARDS.length === 0) return;

  const { textItems, imageItems } = buildWheelItems();
  root.innerHTML = `
    ${buildOverview()}
    <div class="award-carousel">
      <div class="award-carousel__wheels">
        <div class="wheel-panel">
          <p class="wheel-panel__label">奖项信息</p>
          <div class="wheel-viewport" data-wheel="text">
            <div class="wheel-track">${textItems}</div>
          </div>
        </div>
        <div class="wheel-panel">
          <p class="wheel-panel__label">证书展示</p>
          <div class="wheel-viewport" data-wheel="image">
            <div class="wheel-track">${imageItems}</div>
          </div>
        </div>
      </div>
      <div class="award-carousel__controls">
        <button type="button" class="wheel-btn wheel-btn--prev" aria-label="上一项">
          <span aria-hidden="true">↑</span> 上一项
        </button>
        <p class="wheel-indicator" aria-live="polite">
          <span class="wheel-indicator__current">1</span>
          <span class="wheel-indicator__sep">/</span>
          <span class="wheel-indicator__total">${AWARDS.length}</span>
        </p>
        <button type="button" class="wheel-btn wheel-btn--next" aria-label="下一项">
          下一项 <span aria-hidden="true">↓</span>
        </button>
      </div>
    </div>
  `;

  const textTrack = root.querySelector('[data-wheel="text"] .wheel-track');
  const imageTrack = root.querySelector('[data-wheel="image"] .wheel-track');
  const prevBtn = root.querySelector(".wheel-btn--prev");
  const nextBtn = root.querySelector(".wheel-btn--next");
  const currentEl = root.querySelector(".wheel-indicator__current");
  const images = root.querySelectorAll(".cert-frame img");

  let index = 0;
  let itemStep = 0;
  let isAnimating = false;

  function measureStep() {
    const first = textTrack.querySelector(".wheel-item");
    if (!first) return;
    const styles = getComputedStyle(textTrack);
    const gap = parseFloat(styles.gap) || 0;
    itemStep = first.offsetHeight + gap;
  }

  function updateWheel(disableTransition = false) {
    const offset = -index * itemStep;
    const transform = `translate3d(0, ${offset}px, 0)`;

    if (disableTransition) {
      textTrack.style.transition = "none";
      imageTrack.style.transition = "none";
    }

    textTrack.style.transform = transform;
    imageTrack.style.transform = transform;

    textTrack.querySelectorAll(".wheel-item").forEach((el, i) => {
      el.classList.toggle("is-active", i === index);
      el.classList.toggle("is-adjacent", Math.abs(i - index) === 1);
    });
    imageTrack.querySelectorAll(".wheel-item").forEach((el, i) => {
      el.classList.toggle("is-active", i === index);
      el.classList.toggle("is-adjacent", Math.abs(i - index) === 1);
    });

    currentEl.textContent = String(index + 1);
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === AWARDS.length - 1;

    if (disableTransition) {
      requestAnimationFrame(() => {
        textTrack.style.transition = "";
        imageTrack.style.transition = "";
      });
    }
  }

  function go(delta) {
    if (isAnimating) return;
    const next = index + delta;
    if (next < 0 || next >= AWARDS.length) return;
    isAnimating = true;
    index = next;
    updateWheel();
    setTimeout(() => {
      isAnimating = false;
    }, 520);
  }

  images.forEach((img) => {
    const showPlaceholder = () => {
      img.closest(".cert-frame")?.classList.add("is-missing");
    };
    if (img.complete && img.naturalWidth === 0) showPlaceholder();
    else img.addEventListener("error", showPlaceholder, { once: true });
  });

  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));

  measureStep();
  updateWheel(true);
  window.addEventListener("resize", () => {
    measureStep();
    updateWheel(true);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCompetitionCarousel(document.getElementById("award-carousel-root"));
});
