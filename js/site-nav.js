/**
 * 全站统一顶栏导览（始终 5 项，当前页高亮）
 */
const SITE_NAV_ITEMS = [
  { id: "home", href: "index.html", label: "主页" },
  { id: "education", href: "education.html", label: "教育背景" },
  { id: "research", href: "research.html", label: "科研经历" },
  { id: "competition", href: "competition.html", label: "竞赛获奖" },
  { id: "other", href: "other.html", label: "实习与其他经历" },
];

function getCurrentNavId() {
  const file = window.location.pathname.split("/").pop() || "index.html";
  if (file === "" || file === "index.html") return "home";
  const found = SITE_NAV_ITEMS.find((item) => item.href === file);
  return found ? found.id : "home";
}

function renderSiteNav() {
  const nav = document.getElementById("site-nav");
  if (!nav) return;

  const currentId = getCurrentNavId();
  nav.innerHTML = SITE_NAV_ITEMS.map((item) => {
    const isCurrent = item.id === currentId;
    const currentAttr = isCurrent ? ' aria-current="page"' : "";
    return `<a href="${item.href}" class="site-nav__link${isCurrent ? " is-current" : ""}"${currentAttr}>${item.label}</a>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderSiteNav);
