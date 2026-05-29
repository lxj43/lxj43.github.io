# 李学均 · 个人简介主页

在线地址：[https://lxj43.github.io](https://lxj43.github.io)

## 站点结构（五个板块）

| 页面 | 文件 | 内容 |
|------|------|------|
| 主页 | `index.html` | 个人信息 + 各板块入口 |
| 教育背景 | `education.html` | 院校、成绩、课程、校内荣誉 |
| 科研经历 | `research.html` | 论文、大创、软著 |
| 竞赛获奖 | `competition.html` | 总览统计 + 双滚轮证书展示 |
| 实习与其他经历 | `other.html` | 实习与志愿 |

## 目录结构

```text
lxj43.github.io/
├── index.html
├── education.html
├── research.html
├── competition.html
├── other.html
├── css/style.css
├── js/competition-carousel.js
├── images/
│   ├── avatar.jpg
│   └── awards/
└── README.md
```

## 本地预览

双击 `index.html`，或通过顶栏导航切换各页面。

## 推送更新

```powershell
cd "e:\天财资料\汇总\个人简介\lxj43.github.io"
git add index.html education.html research.html competition.html other.html css/style.css README.md
git commit -m "拆分站点为五个独立板块页面"
git push
```

## 竞赛证书

证书图片放在 `images/awards/`，命名 `award-01.jpg` …，详见 `js/competition-carousel.js`。
