# 李学均 · 个人简介主页

在线地址：[https://lxj43.github.io](https://lxj43.github.io)

## 本次更新重点

- 首页扩展为更充实的个人展示页：首屏双栏信息、指标卡、能力主线、奖状循环带、站点导览。
- 竞赛页重构为 Coverflow 式证书阵列：左侧侧放式并排证书，右侧同步显示奖项名称、介绍、等级和能力标签。
- 科研页由简单列表升级为“导览 + 项目详情板块”：每个项目包含研究问题、负责工作、方法流程和后续可补充内容。
- 根据简历补齐教育课程、实习与志愿服务等内容。

## 站点结构（五个板块）

| 页面 | 文件 | 内容 |
|------|------|------|
| 主页 | `index.html` | 个人信息 + 指标概览 + 能力主线 + 奖状循环带 + 板块入口 |
| 教育背景 | `education.html` | 院校、成绩、课程、校内荣誉 |
| 科研经历 | `research.html` | 项目导览 + 论文/大创/软著详细板块 |
| 竞赛获奖 | `competition.html` | 总览统计 + Coverflow 证书展示 |
| 实习与其他经历 | `other.html` | 实习与志愿服务 |

## 目录结构

```text
lxj43.github.io/
├── index.html
├── education.html
├── research.html
├── competition.html
├── other.html
├── css/
│   └── style.css
├── js/
│   ├── site-nav.js
│   └── competition-carousel.js
├── images/
│   ├── avatar.jpg
│   └── awards/
│       ├── award-01.jpg
│       ├── award-02.jpg
│       └── ...
└── README.md
```

## 本次视觉修订说明

- 首页改为更大块面的首屏布局，扩大内容区域占比，减少背景留白。
- 竞赛页证书展示改为“证书墙 + 右侧详情”结构：鼠标移入左侧证书区后，通过鼠标滚轮切换奖项；左右按钮仍可切换。
- 视觉风格从圆角手账卡片调整为低圆角、弱边框、大留白内容块，整体更偏学术展示页。
- 证书图片仍沿用 `images/awards/award-01.jpg` … `award-19.jpg`，缺失图片会自动保留占位。

## 本地预览

建议使用本地静态服务预览，避免部分浏览器对本地脚本加载限制：

```powershell
cd "e:\天财资料\汇总\个人简介\lxj43.github.io"
python -m http.server 8000
```

然后访问：`http://localhost:8000`

## 推送更新

```powershell
cd "e:\天财资料\汇总\个人简介\lxj43.github.io"
git add index.html education.html research.html competition.html other.html css/style.css js/site-nav.js js/competition-carousel.js README.md
git commit -m "美化主页并重构竞赛与科研展示"
git push
```

## 图片说明

- 个人头像沿用：`images/avatar.jpg`
- 证书图片放在：`images/awards/`
- 命名规则沿用：`award-01.jpg`、`award-02.jpg` ……
- 如果某一项证书图片暂未上传，页面会自动保留“证书待上传”的占位卡片。


## 本次版式调整说明

- 顶栏导航改为靠右显示，并整体放大字号。
- 首页「站点导览」加入横向等距的视觉占位块，和教育页荣誉图片区保持统一展示节奏。
- 教育背景页改为大版面：排名、GPA、四六级、课程成绩和校内荣誉使用更大的卡片与字号展示。
- 校内荣誉图片预留路径：`images/honors/honor-01.jpg` 到 `images/honors/honor-04.jpg`。
- 竞赛页改为上方奖项介绍、下方证书墙；鼠标移入证书墙后滚轮切换，左右两侧线性箭头也可切换。
- 实习与其他经历页改为「导览 + 详情」结构，详情采用左侧 70% 文字、右侧 30% 图片占位布局。
- 实习图片预留路径：`images/experience/experience-01.jpg` 到 `images/experience/experience-04.jpg`。
