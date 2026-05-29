# 李学均 · 个人简介主页

在线地址：[https://lxj43.github.io](https://lxj43.github.io)

## 目录结构

```text
lxj43.github.io/
├── index.html          # 主页面
├── css/style.css       # 样式（含右上角导览）
├── images/
│   └── avatar.jpg      # 证件照
└── README.md
```

## 本地更新后推送

```powershell
cd "e:\天财资料\汇总\个人简介\lxj43.github.io"
git status
git add index.html css/ images/
git commit -m "更新个人信息与简历分块导览"
git push
```

## 页面导览锚点

| 导览项 | 对应区块 |
|--------|----------|
| 教育经历 | `#education` |
| 科研竞赛 | `#research-competition` |
| 其他经历 | `#other` |

## 竞赛获奖滚轮

数据与分类见 `js/competition-carousel.js`，证书图在 `images/awards/`。

当前总览统计：**国家级及以上 12 项 · 省部级及以上 3 项 · 其他 4 项**（共 19 项）。

| 文件 | 说明 |
|------|------|
| `award-01` ~ `award-08` | 数学建模、iCAN、数字贸易、美赛等主要竞赛 |
| `award-09` | 全球校园 AI 算法挑战赛国家优秀奖 |
| `award-10` | 统计多模态数字优秀作品大赛一等奖 |
| `award-11` ~ `award-13` | 国家级大创（优秀结项 / 立项） |
| `award-14` ~ `award-16` | 天津市 / 天津赛区竞赛奖项 |
| `award-17` ~ `award-18` | 市级大创立项 / 结项 |
| `award-19` | 惠 Graph 软件著作权 |
| `award-04`、`award-05` | 能源经济、企业模拟国赛（证书待补充） |
