# CCB Presentation Skill

制作建行风格（白蓝配色）的经营数据驾驶舱 + 汇报模式 HTML 页面。

## 数据源处理

```bash
npm install xlsx mammoth
node -e "const XLSX=require('xlsx');const wb=XLSX.readFile('数据.xlsx');..."
node -e "const mammoth=require('mammoth');mammoth.convertToMarkdown({path:'分析.docx'})..."
```

Excel 数据结构：4 行 × N 列，行对应 4 个时点（2024全年/2025全年/2025-06/2026-06），列对应各指标（新增额、排名、计划完成率）。数据全部是**增量（增额）**，不是存量。不良率/逾期率在 Excel 中是小数（0.0083=0.83%），展示时乘以 100。

## 制作流程

### 1. 确定维度
- 业务线：存款 / 贷款 / 中收 / 户数 / 风险
- 条线：公司部 / 个金部 / 个贷中心
- 时间：整年标签用"2024年整年"，半年用"2025年6月"
- 排名：1-10

### 2. 构建数据对象

```js
RAW = {
  dep: [{ca, car, ra, rar}×4],
  loan: [{cl, clr, pl, plr, hl, hlr, co, cor}×4],
  fee: [{cf, cfr, rf, rfr, inst, instr}×4],
  cust: [{cc, ccr, st, str, rc, rcr}×4],
  risk: [{bd, bdr, od, odr}×4],
  fd: {nb, nbr, cc, ccr, iv, ivr, ex}  // 个人中收细分(仅当期)
}
```

### 3. 设计幻灯片结构（20 页）

```
01 封面
02 PART1 分隔（居中蓝底 + 横线）
03 KPI 总览（6 大指标卡片）
04 三条线同比（雷达图 - 归一化展示增长率）
05 排名跃升（横向条形图 - 第1名带发光）
06 四时点趋势（折线图 - 存/贷/中收）
07 增存（堆叠柱+合计折线组合）
08 增贷（百分比堆叠柱 - 看结构变化）
09 增收（三列 stat 卡片）
10 增户（双柱+同比虚线）
11 传化案例（环形饼图）
12 控风险（面积图 - 渐变填充）
13 PART2 分隔（左侧竖线 + 右侧文字）
14 个人存款下滑（问题+根因剖析）
15 个人中收（环形饼图 - 细分构成）
16 消费贷回落（问题+根因剖析）
17 个客增长乏力（问题+根因剖析）
18 PART3 分隔（顶部彩条 + 居中）
19 重点推进表（8 项行动卡片）
20 结尾
```

### 4. 图表类型选择原则

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

### 5. 视觉精修清单

- **animationDuration**: 800~1000ms，数据生成长入
- **tooltip**: 白底 `rgba(255,255,255,.96)` + 蓝边框 `borderColor:'#1E5BC6'` + `borderWidth:2`
- **legend**: `icon:'roundRect'` 或 `'circle'`，`itemWidth/Height` 控制大小
- **axisLabel/axisLine**: 浅灰 `#5A6878` / `#E2E8F0`
- **splitLine**: `type:'dashed'` 虚线，颜色 `rgba(0,0,0,.05)`
- **label**: 字体 12-14px，颜色与系列色一致
- **emphasis**: 饼图加 `shadowBlur:10,shadowColor,scaleSize:6`
- **数据标签格式**: `formatter:function(p){return p.seriesName+'\n'+p.value.toLocaleString()}`

## 常见问题与修复

### 运行时 Bug

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

### 设计原则

1. **"数据驾驶舱 + 论文式诊断"混合结构** — 驾驶舱保留数据/图表/诊断卡片；汇报模式用完整"现状→问题→原因→措施"逻辑链
2. **数值精度 2~3 位小数** — 不超 3 位
3. **幻灯片不要照搬 Word** — 提炼成四层结构
4. **分隔页要有差异性** — 三个 part divider 用不同布局（居中横线 / 左侧竖线 / 顶部彩条）
5. **图表必须有图例** — 每张图顶部 legend 标注色块含义
6. **数据标签含系列名** — `formatter` 显示 `系列名 + 数值`

## 配色体系

```css
--a: #1E5BC6;    --a2: #5990E0;  --a-deep: #0E3A78;
--a-soft: #EAF1FC; --a-softer: #F4F8FE; --a-cyan: #36C5C0;
--r: #E03B30;    --g: #16A36E;   --am: #E89A2E;
--t1: #0F1B33;   --t2: #5A6878;  --t3: #94A2B5;  --line: #E2E8F0;
--green: var(--g); --gold: var(--am); --blue: var(--a);
--red: var(--r); --amber: var(--am);
```

## 幻灯片关键类名

| 用途 | CSS 类 |
|------|--------|
| 舞台容器 | `.deck-stage`（1920×1080, transform 等比缩放） |
| 普通幻灯片 | `.slide` + `.active`/`.visible` |
| 封面/结尾 | `.slide.center` |
| 分隔页 | `.slide.part.p1` / `.p2` / `.p3` |
| KPI 网格 | `.kpi-grid` + `.kpi`（`.warn`/`.bad`） |
| 统计卡片 | `.stat-row` + `.stat` |
| 问题分析 | `.issue-wrap` + `.issue-stat` + `.issue-reason` |
| 行动看板 | `.act-grid` + `.act` |
| 图表容器 | `.chart-wrap`（`.glow` 光晕） + `.chart` |
| 页码角标 | `.bignum` |
| 入场动画 | `.reveal`（opacity + translateY） |
| 标题下划线 | `.slide-head`（`::after` 渐变线） |
| 底部导航 | `.deck-controls` + `.dot` + `.pageno` |

## 三要素检查清单

发布前确认：
- [ ] `new Function(code)` 检查无语法错误
- [ ] 所有图表有 legend 标注
- [ ] 所有 bar/line 标签含系列名
- [ ] 部分分隔页使用不同布局（左竖线/顶部彩条/居中）
- [ ] 图表类型多样化（雷达/面积/百分比堆叠/组合）
- [ ] tooltip 美化（白底蓝框）
- [ ] `animationDuration` 动画
- [ ] 无 `var(--xxx)` 未定义变量
- [ ] 无 `try` 缺少 `catch`
- [ ] 无 `display:none` 残留（用 `removeChild`）
- [ ] PRpi 退出时重置
