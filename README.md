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

后续可在 `images/awards/` 等目录添加证书图片，并在对应 section 中引用。
