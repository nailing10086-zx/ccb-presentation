# CCB Presentation Skill

制作建行风格（白蓝配色）的经营数据驾驶舱 + 汇报模式 HTML 页面。

## Executive Dashboard Pipeline（完整工作流）

阅读所有 `.docx` / `.xlsx` / `.csv` / `.json` 和已有 `.html` 后设计。提取 Word 标题、段落、表格、占位符、案例、原因、措施、责任人、节奏。检查 Excel 的页、表头、单位、期间、目标、排名、缺失值。**"待补充"占位符保留为缺失证据，不补造事实。**

### 1. 确立数据契约

记录：主期间、对比期间、单位、量级、指标类型、目标值、完成率、排名方向、数据来源位置。当要求对比 `202606 vs 202506` 时全程保持一致。

五大业务主题：**增存、增贷、增收、增户、控风险**。区分管理主题"增额"与行级指标（如"对公存款"、"个人存款"）。**不要混用余额、新增额、流量、完成率、排名值。**

### 2. 撰写管理诊断

每个重要主题写四层：

| 层次 | 内容 |
|------|------|
| **现状** | 数值、单位、对比、排名、完成率 |
| **问题** | 哪里不均衡、不足或不可复制 |
| **原因分析** | 有证据支持的归因或谨慎管理推断 |
| **解决措施** | 具体行动、责任人、节奏、复盘 |

偏好有用的解释而非泛泛的"加强营销"。例如：个人存款用资金支付节奏和产品迁移；个人中收用商户收单、网金、信用卡；消费贷用大额还款和新客偏小；有效客户用获客渠道和沉睡户激活。案例用作证据且有可复制的场景。**不编造来源中不存在的客户名、金额、责任人或结果。**

### 3. 构建驾驶舱

使用普通响应式 HTML，不是裁剪的固定 PPT 画布。包含：

- 粘性头部 + 来源/期间标签
- 五个主题或业务线筛选器
- 大号 KPI 卡片（带单位和变化量）
- 趋势 / 双期对比 / 排名 / 诊断 四个 tab
- 右侧栏（领导关注、风险预警、行动进度）
- 诊断卡片 + 带责任人/节奏的行动表格
- 案例研究 + 运营节奏章节

图表选型：

| 目的 | 图表 |
|------|------|
| 趋势 | 折线图 |
| 双期对比 | 分组柱状图 |
| 排名 | 横向条形图 |
| 结构 | 堆叠柱 / 环形图 |
| 中收贡献 | 正负发散横条 |
| 风险 | 折线或状态对比 |
| 案例流程 | 时间线或流程图 |

文字保持可读，偏好纵向滚动而非裁剪。红色仅用于真实短板或风险。表格用于可比的行/列，不要用散文替代。

### 4. 构建汇报模式

汇报模式必须是完整故事，不是摘要。约 8-12 页：

```
1. 标题和数据口径
2. 总体结论
3. 公司条线回顾
4. 零售条线回顾
5. 增存/增额深潜
6. 增贷深潜
7. 增收 + 增户深潜
8. 风险回顾
9. 案例研究
10. 行动闭环
11. 结论 / Q&A
```

每页回答一个领导问题，与驾驶舱保持一致。支持箭头键、空格、触屏/鼠标导航、ESC 退出、页码计数。

### 5. 交付单文件

所有 CSS 和 JS 嵌入最终 HTML 中。不使用 iframe 包裹或要求同级文件。核心渲染和交互无需外部库即可工作；字体可以有优雅降级。

### 6. 验收

交付前检查：

- [ ] 独立的单文件，无同级依赖
- [ ] 每个内联脚本语法正确
- [ ] 期间标签、单位、主题名称一致
- [ ] 筛选器到图表联动正确
- [ ] 趋势是折线图，排名是横向条形图
- [ ] 桌面和窄屏无裁切内容
- [ ] 汇报模式可启动、翻页、退出、显示页码
- [ ] 原因和措施不超出来源证据

## Scroll-story 演示规则

### Scroll-story 集成教训

- 源演示可能包含 19 个章节块，即使只有 16 个有 h1/h2 标题；分别统计章节、分隔页、封面和结尾页。
- 不要声称"保留了全部内容"却只构建了 8 个场景的摘要。保留页到场景的映射，并明确标注任何请求的摘要。
- "公司存款跃升"页必须保留对比表格：2025H1、2026H1、增长率、占比/分母。解释性文字和管理判断必须可见。
- 固定舞台必须在深入滚动文档后测试。如果舞台未固定，后面的场景可能成为空白背景。
- 从右到左的参考过渡通常是主题移动 + 缩放、景深模糊、扫光，而不仅仅是全屏 clip-path 揭示。
- 每个可视化图表都需要可读的管理解释。仅图表的场景对领导层简报是不完整的。
- 开场动效应使用清晰可辨的已有品牌资产或可读的品牌文字。用户提供了原始标识时，不要发明或 AI 重绘企业标志。
- 任何动画重写后，在浏览器中重新加载，测试开场，滚动到至少四个远程位置，检查截图，并检查控制台错误。

### Reference-site cinematic motion directives

当用户要求参考官方站点的视频风格时，使用以下行为作为默认：

1. **开场构图**：从暗色品牌场和一个 unmistakable 主体或品牌标识开始。让主体呼吸、放大并溶解到第一个场景中。不需要按钮或可见时间线。
2. **滚动作为进度条**：将文档滚动进度映射到归一化的动画进度。动画必须在精确的滚动位置暂停，用户向上滚动时反转。不使用定时器作为主要驱动。
3. **Hero 到信息变形**：以主图像/对象占据视口开始。随着进度推进，将对象平移和缩放到稳定的左侧或右侧容器中，同时解释从对侧进入。容器本身必须调整大小，而不仅仅是移动其子元素。
4. **主体扫光**：实现参考过渡为主体从右边缘外行进到其静止位置，带有缩放、运动模糊、发光和短扫光效果。全场景 clip-path 单独不可接受。
5. **分层到达**：先背景氛围，再主体，再标题/kicker，最后解释/标签。使用小的交错偏移，而不是同时改变透明度。
6. **深度和视差**：让背景轨道/网格、主体、图表和文字以不同的速率移动。保持背景微妙，使图表保持可读。
7. **停顿保持**：在对象和文字到达最终位置后保留滚动距离。讲解者必须在下一节开始前能停留在完整的图表加上完整的解释上。
8. **连续过渡**：在新主体进入时交叉淡出旧场景；避免黑闪、空白帧或硬页面跳转。反向滚动时，以相反顺序恢复相同阶段。
9. **内容完整性**：每个动画图表必须携带其源值、单位、期间标签和可见的管理解释。不要让动效隐藏表格或将标签推送到视口外。
10. **验证**：测试开场、hero 到左/右变形、主体扫光、深处滚动、反向滚动和窄视口。重新加载后检查截图和控制台错误。

当用户要求电影感、参考站式或滚动控制的 PPT HTML 时，使用由文档滚动驱动的固定全屏舞台。

- 以可读的品牌/标题入口开始。不要重绘或扭曲已有的品牌标志。
- 用滚动位置作为动画时间线：停止滚动即停止动画，反向滚动即反向播放。
- 保持舞台固定，文档提供滚动距离；验证大滚动偏移，以防后期的场景消失不见。
- 通过将主题本身从视口外移入到位来实现过渡，而不是仅靠 clip-path 擦除。
- 图表容器和解释性文字放在不同区域。图表标签必须随图表缩放或重排，且不能与文字重叠。
- 保留重要的对比表格，不要用装饰卡片替换。公司存款页必须保留双期、增长率、占比/分母信息。
- 场景完成后添加停顿距离，方便讲解。
- 如果 JS 加载失败，第一场景仍应可见。

## 经营驾驶舱与汇报模式整合经验

### 先保护驾驶舱边界

编辑前记录原始页面的 ID、筛选按钮、数据绑定、事件处理、KPI 数量和主要布局。**只替换汇报容器、汇报样式和汇报脚本**，不为方便嵌入而重构驾驶舱。

### 汇报样式必须命名空间隔离

不要把 `body`、`*`、`.slide`、`.active`、`.progress`、`.kpi`、`.container` 等全局选择器直接粘贴进驾驶舱。使用唯一根节点（`.report-presenter`），为汇报页面的幻灯片、按钮和显示状态加前缀（`pr-`），避免汇报模式改坏驾驶舱的卡片、间距或可见性。

### 脚本初始化顺序

汇报脚本不能在驾驶舱函数定义之前调用 `refresh()` 等函数。合并后提取所有内联脚本做 `new Function(code)` 语法检查。

### 图表按分析目的选型

趋势用折线图，结构用堆叠柱或环形图，排名用横向条形图，正负贡献用发散横条，两项相关指标用双折线。**不要为了统一而把所有数据画成普通柱状图。**

### 验收必须验证行为，不只看源码

至少检查：五个分析口径是否仍能切换；驾驶舱标题和图表是否同步；汇报按钮是否打开页面；图表是否渲染；控制台是否无报错。应截图检查 1280×720 和窄屏视口。

### 横向滚动轨道的垂直居中

当页面使用 `sticky` 舞台承载横向滚动内容时，不能只给轨道设置 `align-items: center`。如果轨道没有自身高度，子元素仍会从舞台顶部开始排版，造成标题和卡片贴顶、下方大面积空白。

固定舞台和横向轨道应同时满足：

```css
.scene { position: relative; height: 300vh; }
.scene-sticky { position: sticky; top: 0; height: 100vh; overflow: hidden; }
.track {
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  width: max-content;
}
```

轨道的垂直居中应由整屏高度负责，不要用大段 `padding-top`、`margin-top` 或固定的 `vh` 偏移模拟。装饰线可以独立使用 `position: absolute`，不要让它参与轨道高度计算。验收时要在 1280×720 和窄屏下定位到该场景，确认标题、说明和横向卡片都以视口中心为基准，并且滚动到轨道末尾后仍保持完整可读。

### 驾驶舱和汇报共用同一数据口径

两种模式必须保持期间、单位、主题名称和源数据一致。更换图表类型时，只改变视觉表达，不改变指标定义、计算口径或数据值。

### Scroll-story 集成教训

- 源演示可能包含 19 个章节块，即使只有 16 个有 h1/h2 标题；分别统计章节、分隔页、封面和结尾页。
- 不要声称"保留了全部内容"却只构建了 8 个场景的摘要。保留页到场景的映射，并明确标注任何请求的摘要。
- "公司存款跃升"页必须保留对比表格：2025H1、2026H1、增长率、占比/分母。解释性文字和管理判断必须可见。
- 固定舞台必须在深入滚动文档后测试。如果舞台未固定，后面的场景可能成为空白背景。
- 从右到左的参考过渡通常是主题移动 + 缩放、景深模糊、扫光，而不仅仅是全屏 clip-path 揭示。
- 每个可视化图表都需要可读的管理解释。仅图表的场景对领导层简报是不完整的。
- 开场动效应使用清晰可辨的已有品牌资产或可读的品牌文字。用户提供了原始标识时，不要发明或 AI 重绘企业标志。
- 任何动画重写后，在浏览器中重新加载，测试开场，滚动到至少四个远程位置，检查截图，并检查控制台错误。

## 三要素检查清单

### 驾驶舱保护
- [ ] 驾驶舱原有筛选器、KPI 和布局未被改动
- [ ] 汇报 CSS 全部处于独立命名空间（`pr-` 前缀）
- [ ] 所有内联脚本通过 `new Function(code)` 语法检查
- [ ] 浏览器控制台无错误

### 功能验证
- [ ] 五个主题按钮（时间/部门/业务）与标题、图表联动
- [ ] 驾驶舱标题和图表是否同步
- [ ] 汇报页数、翻页和退出功能正常
- [ ] 首屏是否可见，图表是否渲染
- [ ] 桌面端与窄屏截图无裁切、溢出或重叠（检查 1280×720 + 窄屏）

### 数据一致
- [ ] 所有图表有 legend 标注
- [ ] 所有 bar/line 标签含系列名
- [ ] 驾驶舱和汇报共用同一数据口径（期间/单位/主题）

### 图表与设计
- [ ] 图表类型多样化（雷达/面积/百分比堆叠/组合），非清一色柱状图
- [ ] tooltip 美化（白底蓝框）
- [ ] `animationDuration` 动画
- [ ] 部分分隔页使用不同布局（左竖线/顶部彩条/居中）

### 代码安全
- [ ] 无 `var(--xxx)` 未定义变量
- [ ] 无 `try` 缺少 `catch`
- [ ] 无 `display:none` 残留（用 `removeChild`）
- [ ] `PRpi` 退出时重置
- [ ] 诊断文案遵循四层框架，使用稳健表述

## 配色体系

```css
--a: #1E5BC6; --a2: #5990E0; --a-deep: #0E3A78;
--a-soft: #EAF1FC; --a-softer: #F4F8FE; --a-cyan: #36C5C0;
--r: #E03B30; --g: #16A36E; --am: #E89A2E;
--t1: #0F1B33; --t2: #5A6878; --t3: #94A2B5; --line: #E2E8F0;
--green: var(--g); --gold: var(--am); --blue: var(--a);
--red: var(--r); --amber: var(--am);
```

## 图表类型选择原则

| 数据类型 | 推荐图表 | 原因 |
|---------|---------|------|
| 多指标同比增速 | **雷达图** | 归一化到 %，量级差异大时不互相压制 |
| 排名数据 | 横向条形图 | 标签在左侧，值在右侧，直观 |
| 时间趋势 | 折线图 / 面积图（渐变） | 趋势线 + 面积增强视觉冲击 |
| 构成 + 总额 | 堆叠柱 + 折线组合 | 双 Y 轴，柱状看构成、折线看合计 |
| 结构变化 | **百分比堆叠柱** | 看占比变化而非绝对值 |
| 双期对比 + 变化率 | 双柱 + 虚线折线 | 双 Y 轴 |
| 占比 / 构成 | 环形饼图 | 加 emphasis 高亮和阴影 |
| 问题分析 | 左卡片（数据）+ 右列表（根因） | issue-wrap 布局 |
| 中收贡献 | **正负发散横条** | 收入为正、费用为负 |
| 案例流程 | 时间线或流程图 | 三种色阶步骤卡 |

## 常见问题与修复

| 问题 | 原因 | 修复 |
|------|------|------|
| 点击无响应 | `<script src>` 内联代码被忽略 | 拆成两个 `<script>` 标签 |
| 图表空白 | `try{` 没有 `catch` | 加 `catch(e){}`，用 `new Function(code)` 验证 |
| 诊断切回趋势空白 | `diagWrap` 仅 `display:none` | 用 `removeChild` 彻底删除 |
| 颜色显示黑色 | `--gold` 未在 `:root` 定义 | 加别名 `--gold:var(--am)` 等 |
| 行动看板颜色无效 | `var(--red)+'15'` 非法 CSS | 用 `rgba(212,56,13,0.15)` 直接量 |
| 侧边栏太小 | 字号 8px 看不清 | 字号提升到 10px/13px |
| 首次打开无缩放 | resize 只绑 resize 事件 | `DOMContentLoaded` 中触发 |
| null 排名显示第9名 | 强转为 number | 用 `filter` 排除无排名数据 |
| 关闭汇报不重置 | `PRpi` 未归零 | `PRpi=0;prUpd()` |
| 分隔页内容偏下 | 继承普通幻灯片 padding | 设 `padding:0` 或 `60px 0 0` |
| 驾驶舱和汇报样式冲突 | 全局 CSS 选择器污染 | 汇报样式用 `pr-` 前缀隔离 |
| 合并后脚本变量冲突 | 两个脚本定义同名变量 | 合并后做 `new Function(code)` 检查 |
| 中文乱码 | Windows 终端默认编码问题 | 文件显式 UTF-8，以浏览器渲染为准 |
| 图表动画不重播 | ECharts 数据不变跳过动画 | `clear()` 后再 `setOption()` |
| catch 静默吞错误 | `catch(e){}` 无日志 | 改为 `console.warn(e)` |

## 设计原则

1. **分开建，分别验证，再合并** — 驾驶舱和汇报模式独立开发
2. **大版本不开原文件** — 新建 `indexv{N}.html`，不覆盖旧版本
3. **"数据驾驶舱 + 论文式诊断"混合结构**
4. **数值精度 2~3 位小数**
5. **幻灯片不要照搬 Word** — 提炼成四层结构
6. **分隔页要有差异性**
7. **图表必须有图例**
8. **数据标签含系列名**
9. **写作稳健** — "阶段性回调""仍需培育""建议关注"，不补造事实
10. **命名空间隔离** — 汇报样式加 `pr-` 前缀
11. **同一数据口径**
12. **红色仅用于真实短板或风险**
13. **"待补充"保留为缺口，不编造**

## 其他 PPT Skill 的可借鉴经验

### dashi-ppt（模板编排器）

| 可借鉴点 | 说明 |
|---------|------|
| **每页一个信息角色** | 封面/摘要/指标/趋势/对比/分布/案例/流程/风险/行动/结尾 |
| **layout + props 模式** | 不要手写每页的 HTML，预定义布局模板，只填数据 |
| **成果验收流程** | 逐页检查→标记待修正→修改→重跑全部校验→最多 2 轮 |
| **12 套风格参考** | 轻拟态/炫光紫绿/深浅代码/玻璃糖果/色谱图表/深色图谱/冷白调研/黑金实验/深蓝杂志/金色指数/高能增长/声波霓虹 |
| **`validate:goal-spec` 校验** | 数值边界检查、文案长度拦截、数组数量校验 |

### guizang-ppt-skill（WebGL + GSAP）

| 可借鉴点 | 说明 |
|---------|------|
| **风格 A：电子杂志 × 电子墨水** | WebGL 流体背景、衬线标题、暖色、Monocle 杂志感 |
| **风格 B：瑞士国际主义** | WebGL 极细网格点阵、全程无衬线、高反差功能色（IKB/柠檬黄/安全橙） |
| **Motion One 入场动效** | 横向翻页、滚轮、触屏、ESC 索引 |
| **Lucide 图标系统** | 内联 SVG 图标，随意组合 |
| **ASCII 呼吸场** | 封面/封底的 WebGL 粒子动画背景 |
| **Carbon 2x Grid** | 8px 基线对齐的间距模数系统 |

### frontend-slides（动画富 HTML 演示）

| 可借鉴点 | 说明 |
|---------|------|
| **Fixed 16:9 Stage** | 1920×1080 固定画布，transform 等比缩放，不重排内容 |
| **内容密度模式** | 演讲型（低密度/大字/少要点）vs 阅读型（高密度/网格/多卡片） |
| **设计美学原则** | 避免 AI 泛化审美（Inter/Roboto 字体、紫色渐变、三卡片布局） |
| **零依赖** | 单文件 HTML，无 npm、无构建工具 |
| **样式预览** | 用视觉参考而非抽象选择来帮用户定风格 |
| **Phase 0 检测模式** | 新建/转换/增强三种入口区分处理 |

### ppt-master（PPTX 工作流）

| 可借鉴点 | 说明 |
|---------|------|
| **品牌/布局/Deck 三层分离** | 先定品牌色+字体，再定布局模板，最后填充内容 |
| **可编辑 PPTX 导出** | HTML→PPTX 保持可编辑文本和形状，非截图嵌入 |

## 参考视频中的高级动效（Layered 3D Web Sequence）

当用户要求复刻参考视频的电影感体验时，以下效果需要组合实现，而非翻页动画：

| 效果 | 实现方式 |
|------|---------|
| **厚实 Hero 环/对象** | 可见体积、边缘光、内部反射、阴影、慢速旋转，而非扁平 CSS 圆形 |
| **环境切换** | 从黑/暗色 Hero 空间过渡到浅色内容区域，再回到暗色页脚区域 |
| **超大排版** | 尺寸夸张的文字放置在 Hero 对象后面/旁边/下方，运动时允许设计性遮挡 |
| **景深移动** | 主体缩放 + 方向模糊 + 发光拖尾 + 稳定阶段，而非均匀横向平移 |
| **固定导航栏** | 持续可见，带当前章节色标、语言/CTA 处理、稳定品牌标识 |
| **滚动提示** | 小尺寸 scroll-to-explore 提示 + 曲线/虚线引导路径，而非进度条 |
| **缓慢流动背景** | 流体/网格/波浪纹理，视差频率低于主体对象 |
| **部分出画裁切** | 过渡时部分内容超出视口，随后构图的刻意稳定；需区分设计性裁切与表格/文字被意外裁剪 |
| **结尾内容/页脚** | 联系方式或关闭信息，让体验有退场序列，而非停在最后一个图表 |
| **层级覆盖** | Hero 对象最前 → 巨大标题第二 → 支持段落第三 → 导航始终在最上层 |

### 实现要点

- 使用 `scroll` 作为动画时间线：停止滚动即暂停，反向滚动即反向播放
- 每个动画场景必须包含可读的管理解释，仅图表的场景对领导层不完整
- 开场动效使用已有品牌资产，不发明或重绘
- 动画重写后测试：开场 → Hero 变形 → 主体扫光 → 深处滚动 → 反向滚动 → 窄视口

## 高级滚动动效（nanfu.global 逆向实战总结）

从南孚国际官网逆向学到的"炫酷"滚动叙事手法，适用于领导汇报的"数据气势"页。

### 1. 超大数字滚动叙事（Swiper 横向整屏翻页，非数字滑入）

真站 +345% 页实测：3 个 Reasons（+345% / 31 years / No.1）是 **Swiper 横向 3 屏滑块**（DOM：tabParent tab-1/2/3 + tabBox swiper-wrapper），滚动时**整屏从右往左翻页**，每屏含超大数字 + 照片 + 穿梭电池。不是数字单独滑入！

实现（滚动驱动整屏横向平移，仿 Swiper）：
```css
.reasons-scene{position:relative;height:300vh}          /* 3屏滚动空间 */
.reasons-sticky{position:sticky;top:0;height:100vh;overflow:hidden;display:flex;align-items:center}
.reasons{width:300%;display:flex;will-change:transform}  /* 3屏横向排列 */
.reason{width:33.333%;height:100vh;flex-shrink:0;display:flex;flex-direction:column;justify-content:center;padding:0 8vw;position:relative}
.reason .rn{font-size:clamp(80px,16vw,280px);font-weight:800;
  background:linear-gradient(135deg,主色,亮色);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
/* 每屏右侧照片占位 */
.reason .imgbox{position:absolute;right:-4vw;top:50%;width:clamp(200px,26vw,420px);transform:translateY(-50%)}
```
```js
function reasonsUpdate(){
  var rect = reasonsSec.getBoundingClientRect();
  var total = reasonsSec.offsetHeight - window.innerHeight;
  var p = Math.min(Math.max(-rect.top / total, 0), 1);
  var maxShift = reasonsTrack.scrollWidth - window.innerWidth;
  reasonsTrack.style.transform = 'translateX(' + (-p * maxShift) + 'px)';  /* 整屏右→左翻页 */
}
window.addEventListener('scroll', reasonsUpdate);
```

**核心区别**：是横向排列的整屏容器整体平移（像 Swiper/轮播翻页），不是单个数字/元素各自滑入。检测真站是否用此法：查 DOM 是否有 swiper-wrapper / tabParent tab-N / 多个等高 col 横向排列 + width:300% 容器。
### 2. 穿梭元素（setImg 同款：旋转 + 弧线移动）

真站电池图随滚动 `rotate(0→540°) + translateX(右→左) + sin 弧线`：

```js
flt.style.transform = 'translateX(' + (20 - sp * 70) + 'vw) translateY(' +
  (Math.sin(sp * Math.PI) * 30) + 'px) rotate(' + (sp * 540 - 30) + 'deg)';
```

CSS 穿梭环（银行版用蓝色能量环替代电池）：
```css
.flt{position:absolute;right:-8vw;top:50%;will-change:transform;opacity:0}
.flt-ring{width:100%;aspect-ratio:1;border-radius:50%;border:2px solid rgba(主色,.5);
  box-shadow:0 0 40px rgba(主色,.2),inset 0 0 40px rgba(主色,.1)}
.flt-ring::before{content:'';position:absolute;inset:18%;border-radius:50%;border:1px dashed rgba(主色,.35)}
.flt-ring::after{content:'';position:absolute;inset:34%;border-radius:50%;background:radial-gradient(circle,rgba(主色,.3),transparent 70%)}
```

### 3. 关键实现要点

- **sticky 多屏滚动**：`min-height:300vh` 容器 + 子元素 `position:sticky;top:0;height:100vh`，让每个数字独占一屏滚动区间
- **滚动进度映射**：`p = -rect.top / (offsetHeight - innerHeight)`，0~1 归一化
- **错峰分片**：`seg = p * N - i` 让 N 个元素各自在 1/N 区间依次出现
- **will-change**：滚动动画元素加 `will-change:transform,opacity` 防卡顿
- **颜色主题**：南孚金 `#FFCD00` → 建行蓝 `#2E6FD2`/`#4D94FF` 直接替换，CSS 变量化更佳

### 4. 适用场景（领导汇报数据页）

- 核心增长率（+144.8% / +87.4%）→ 超大数字右→左滑入
- 关键排名跃升（排7→5 / 排9→5）→ 同上
- 成就亮点（结算第1 / 40户）→ 同上
- 穿梭元素替换为银行相关视觉：能量环 / 电池 / 光点

### 5. 验收要点

- 滚动到数字区：数字应从右侧滑入并停在左侧，opacity 随进度渐变
- 穿梭元素应旋转 + 弧线移动，不遮挡数字可读性
- 检查 300vh 容器滚动到底后最后一个数字完整显示
- 窄屏下超大数字不溢出（clamp 上限控制）

## 特效库全集（nanfu.global 完整逆向沉淀）

以下所有特效均从南孚国际官网逆向验证，可直接套用到银行汇报。统一用 CSS 变量换色（`--acc` 主色、`--acc2` 亮色）。

### 特效 1 · 开场动画（Hero）

真站：视频背景 + bannerCv 帧动画 + 标题行依次滑入。无视频素材时用渐变 + CSS 模拟。

```css
.hero h1 .line{display:block;overflow:hidden}
.hero h1 .line span{display:inline-block;transform:translateY(110%);transition:transform 1.2s cubic-bezier(.16,1,.3,1)}
.hero.loaded h1 .line:nth-child(1) span{transform:translateY(0)}
.hero.loaded h1 .line:nth-child(2) span{transform:translateY(0);transition-delay:.15s}
/* 背景渐变淡入 + KPI 延迟浮现 */
.hero-bg{opacity:0;transition:opacity 1.2s ease .3s}
.hero .kpis{opacity:0;transform:translateY(40px);transition:all 1.2s ease .8s}
```
```js
setTimeout(function(){ document.getElementById('hero').classList.add('loaded'); }, 400);
```

### 特效 2 · 粒子背景

固定 canvas 粒子层（z-index 0，内容 z-index 1）：
```js
var cv = document.getElementById('particles'), ctx = cv.getContext('2d');
var W, H, ps = [];
function resize(){ W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();
for(var i = 0; i < 45; i++) ps.push({ x: Math.random()*W, y: Math.random()*H, r: Math.random()*2.5+.5, dx: (Math.random()-.5)*.4, dy: (Math.random()-.5)*.4 });
(function draw(){
  ctx.clearRect(0,0,W,H);
  for(var i = 0; i < ps.length; i++){
    var p = ps[i]; p.x += p.dx; p.y += p.dy;
    if(p.x<0)p.x=W; if(p.x>W)p.x=0; if(p.y<0)p.y=H; if(p.y>H)p.y=0;
    ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = 'rgba(' + RGB + ',' + (Math.random()*.3+.08) + ')'; ctx.fill();
  }
  requestAnimationFrame(draw);
})();
```

### 特效 3 · 磨砂导航

```css
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:22px 6vw;background:transparent;transition:all .4s}
nav.scrolled{background:rgba(底色,.85);backdrop-filter:blur(18px);padding:14px 6vw;border-bottom:1px solid rgba(255,255,255,.06)}
```
```js
window.addEventListener('scroll', function(){ nav.classList.toggle('scrolled', window.scrollY > 60); });
```

### 特效 4 · 场景底色交替

```css
.s-dark{background:#070b14}
.s-deep{background:linear-gradient(180deg,#070b14,#0a1220)}
.s-glow{background:radial-gradient(ellipse at 80% 20%,rgba(主色,.12),transparent 60%),#070b14}
```
每屏换一个底色，滚动时产生节奏感。

### 特效 5 · 滚动入场（IO + 错峰）

```css
.rv{opacity:0;transform:translateY(50px);transition:opacity 1s cubic-bezier(.16,1,.3,1),transform 1s cubic-bezier(.16,1,.3,1)}
.rv.in{opacity:1;transform:translateY(0)}
.rv:nth-child(2){transition-delay:.12s}.rv:nth-child(3){transition-delay:.24s}.rv:nth-child(4){transition-delay:.36s}
```
```js
var io = new IntersectionObserver(function(es){
  es.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('in'); });
}, {threshold:.2});
document.querySelectorAll('.rv,.diag,.act').forEach(function(el){ io.observe(el); });
```

### 特效 6 · 横向时间线（滚动横向平移）

真站：`group process` 宽 8496px，滚动时 `translateX(-6488px)` 右到左扫过，年份 f-90 超大。

```css
.process-scene{position:relative;height:300vh}
.process-sticky{position:sticky;top:0;height:100vh;overflow:hidden;display:flex;align-items:center}
.process{width:260%;display:flex;align-items:center;gap:5vw;will-change:transform;padding:0 8vw}
.tl-card .ty{font-size:clamp(44px,6vw,90px);font-weight:800;background:linear-gradient(135deg,主色,亮色);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
```
```js
(function(){
  pt += (ptarget - pt) * .06;
  var maxShift = track.scrollWidth - window.innerWidth;
  track.style.transform = 'translateX(' + (-pt * maxShift) + 'px)';
  requestAnimationFrame(arguments.callee);
})();
```

### 特效 7 · 帧序列动画检测与复刻

真站 bannerCv/batteryCv 是预渲染 PNG 帧序列（非实时绘制）：
```html
<canvas class="bannerCv" data-path="/templates/assets/home/bannerFm/" data-count="120"></canvas>
```
```js
this.imagesPath = canvas.getAttribute("data-path");
this.frameCount = canvas.getAttribute("data-count");
// 滚动驱动帧：cur = floor(progress * frameCount)，逐帧 drawImage
```
**检测要点**：复刻任何 canvas 动画前，先查 `data-path`/`data-count` 属性——真站常用帧序列而非实时绘制。帧素材可能受 WAF 保护（返回 JS 挑战页），需与用户确认复刻深度。

### 特效 8 · 超大字体体系

真站用 `f-300/f-140/f-120/f-90/f-80/f-60` 等级 + `word_b`(粗) `wc`(白) `mc/txt-color`(渐变)。

| 级别 | 用途 | 字号 |
|------|------|------|
| f-300 | 核心增长数字（+345%） | `clamp(90px,18vw,300px)` |
| f-120 | 板块大标题（Our Products） | `clamp(44px,7vw,120px)` |
| f-90 | 时间线年份 | `clamp(44px,6vw,90px)` |
| f-60 | Hero 主标题 | `clamp(40px,6vw,96px)` |

统一金色渐变：`linear-gradient(135deg,#FFCD00,#FFE47A)`；银行版换 `linear-gradient(135deg,#4D94FF,#2E6FD2)`。

### 特效 9 · 卡片/元素微交互

```css
.card{transition:all .4s}
.card:hover{transform:translateY(-8px);border-color:rgba(主色,.35);box-shadow:0 30px 80px rgba(0,0,0,.6)}
```

### 特效 10 · 图表动效

- `animationDuration: 1000` + `animationEasing: 'bounceOut'` 数据从 0 生长
- 深色主题图表：轴 `rgba(255,255,255,.1)`、标签 `#94a2b5`、分割线虚线
- 正负发散条（中收构成）：收入正值 + 费用负值
- 图表容器随 `.rv.in` 触发 ECharts `resize()` 确保尺寸正确

### 综合使用建议（银行汇报）

```
Hero开场(特效1+2+3) → 总体结论(特效5+10)
→ 超大数字区(特效8+右往左+穿梭环) → 各主题深潜(特效5+10+四层诊断)
→ 横向时间线(特效6) → 行动闭环(特效5) → 结尾(特效1)
```

深色底(特效4)贯穿，粒子(特效2)全局，导航(特效3)常驻。
