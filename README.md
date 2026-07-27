# CCB Presentation

中国建设银行支行经营驾驶舱 + 汇报模式 HTML 生成器。

## 用途

给支行做季度/半年经营形势分析汇报用。一份 HTML 包含：

- **驾驶舱模式** — 三轴筛选（时间/部门/业务）、KPI 卡片、ECharts 图表四视图（趋势/双期/排名/诊断）、经营诊断侧边栏、行动看板
- **汇报模式** — 全屏幻灯片，按「现状→问题→原因→措施」四层结构展开

## 所需技能（Reasonix Skills）

| 技能 | 用途 |
|------|------|
| `ccb-presentation` | 本技能，制作驾驶舱 + 汇报 HTML |
| `push-skills` | 推送技能更新到 Gitee/GitHub |
| `dashi-ppt` | PPT 演示文稿制作参考 |
| `ppt-master` | PPT 工作流参考 |
| `guizang-ppt-skill` | 网页 PPT 生成参考 |
| `frontend-slides` | 动画 HTML 演示参考 |
| `paper-spine` / `paperspine` | 论文/报告写作参考 |
| `academic-paper` | 学术论文全流程参考 |
| `deep-research` | 深度调研参考 |
| `humanizer-zh` / `remove-ai-flavor` / `deslop` / `avoid-ai-writing` | AI 文本润色去痕迹 |
| `forkprobe` | 技能/方案对比推荐 |
| `init` | 项目初始化 |
| `install-capability` | 安装 MCP/技能 |
| `reasonix-guide` | Reasonix 配置排障 |

## 所需 MCP

| MCP | 用途 |
|-----|------|
| `firecrawl-mcp` | `firecrawl_parse` 解析 xlsx/docx 数据源；`firecrawl_search` 网络搜索；`firecrawl_scrape` 网页抓取 |
| `luma-mcp` | `image_understand` 看图识别截图/报错 |

## 所需本地工具

| 工具 | 用途 |
|------|------|
| Node.js + `xlsx` + `mammoth` | 解析 Excel/Word 数据源 |
| Git | 推送到 Gitee + GitHub |
| ECharts 5.5+ (CDN) | 运行时图表渲染 |

## 交互流程

```
时间筛选 ─┬→ 2024整年/2025整年/2025年6月/2026年6月
部门筛选 ─┼→ 全部/公司部/个金部/个贷中心
业务筛选 ─┘→ 全业务/存款/贷款/中收/户数/风险
         ↓
     KPI 卡片联动 → 图表四视图
                    ├─ 趋势（折线）
                    ├─ 双期（双柱对比）
                    ├─ 排名（横向条形）
                    └─ 诊断（问题/原因/对策）
```

## 数据源

`npm install xlsx mammoth` 解析 Excel + Word，提取 4 时点（2024 全年 / 2025 全年 / 2025-06 / 2026-06）的经营指标和诊断文本，输出单文件 HTML。

## 幻灯片结构

```
封面 → 总体结论 → 增存 → 增贷 → 增收 → 增户 → 控风险 → 亮点案例 → 行动闭环 → 结尾
```

每页分四层：**现状 → 问题 → 原因 → 措施**，不照搬 Word 原文。

## 技术栈

- 单文件 HTML（无构建工具）
- ECharts 5.5.0（CDN 加载）
- 纯 CSS 变量白蓝建行色系
- 响应式断点（480px ~ 1920px）

## 致谢

感谢 Reasonix 生态提供的技能和 MCP 支持：


**技能**：`dashi-ppt` · `ppt-master` · `guizang-ppt-skill` · `frontend-slides` · `push-skills` · `reasonix-guide` · `install-capability` · `init` · `review` · `security-review` · `explore` · `research` · `test` · `humanizer-zh` · `remove-ai-flavor` · `deslop` · `avoid-ai-writing` · `paper-spine` · `paperspine` · `academic-paper` · `deep-research` · `forkprobe`


**MCP**：`firecrawl-mcp`（数据解析/搜索/抓取）· `luma-mcp`（图像理解）


感谢开源生态：ECharts · xlsx · mammoth · Node.js · Git。


## License


MIT
