# CCB Presentation Skill

制作建行风格（白蓝配色）的经营数据驾驶舱 + 汇报模式 HTML 页面。

## 制作全流程

### 第一步：读取数据源

用户提供 Excel(.xlsx) + Word(.docx) 两份文件。用 Node.js 解析：

```bash
npm install xlsx mammoth
node -e "const XLSX=require('xlsx');const wb=XLSX.readFile('xxx.xlsx');..."
node -e "const mammoth=require('mammoth');mammoth.convertToHtml({path:'xxx.docx'})..."
```

Excel 提取所有时点数据（4行：2024全年/2025全年/2025-06-30/2026-06-30）。
Word 提取经营分析文本（亮点、短板、原因、措施、案例）。
💰 数据全部是增量（增额），不是存量。不良率/逾期率是百分比。

### 第二步：确认数据维度

- 业务线：存款/贷款/中收/户数/风险
- 条线：公司部/个金部/个贷中心
- 时间：整年 vs 半年需区分标签
- 排名：每个指标在同业中的排名（1-10）

### 第三步：写驾驶舱骨架

单文件 HTML，不用 dashi-ppt。

### 第四步：筛选器联动

三个筛选组 `fT/fD/fB` → `T/DP/BZ` → `RF()` → `RKPI()` + `UM()`。

### 第五步：图表四视图

趋势=折线, 双期=双柱, 排名=横向条(无轴线), 诊断=三栏卡片。
**排名图用 `filter` 排除 null 排名，不要强转为第9名。**

### 第六步：汇报模式

每页按四层结构，**不照搬 Word 原文**：
```
现状：数据表现是什么
问题：目前卡在哪里
原因：为什么会这样
措施：下一步怎么做
```
整体流程：封面→总体结论→增存→增贷→增收→增户→控风险→亮点案例→行动闭环→结尾
退出时 `PRpi=0;prUpd()`。

### 第七步：侧边栏尺寸

宽 `380px`（1600px以下 `320px`）。诊断字号 10px/13px，看板字号 13px/12px/11px。

### 第八步：验证

```bash
node -e "new Function(code)"  # 检查 try/catch 配对
```

## 用户设计原则（来自用户明确要求）

1. **"数据驾驶舱 + 论文式诊断"混合结构** — 驾驶舱页面保留数据、图表、诊断卡片，方便领导快速看懂；汇报模式用完整的"现状→问题→原因→措施"逻辑链展开，不是把论文原文整段搬进去
2. **数值精度保留 2~3 位小数** — 不超3位，不四舍五入失真
3. **KPI 卡片颜色不能黑色** — `--gold`/`--red` 等别名必须在 `:root` 中预定义，否则 CSS 变量未定义会回退到黑色正文色
4. **侧边栏颜色方案是用户喜欢的** — 经营诊断用 #389e0d(绿)/#d4380d(红) 直接量，行动看板用 hex + rgba 背景，禁用 CSS 变量拼接
5. **侧边栏不能太小** — 380px宽，字号 10px~13px，内边距充裕

## 数据规范

```js
RAW = {
  dep: [{ca, car, ra, rar}×4],
  loan: [{cl, clr, pl, plr, hl, hlr, co, cor}×4],
  fee: [{cf, cfr, rf, rfr, inst, instr}×4],
  cust: [{cc, ccr, st, str, rc, rcr}×4],
  risk: [{bd, bdr, od, odr}×4],
  fd: {nb, nbr, cc, ccr, iv, ivr, ex}
}
```
时点标签：`['2024年整年','2025年整年','2025年6月','2026年6月']`

## 20大关键教训

1. `setOption` 前必须 `c.clear()`
2. 饼图 `formatter` 用 function 不用模板字面量含换行
3. 图表容器不可见时延迟 init
4. 用 `lastIndexOf('</script>')` 定位内联 script
5. 汇报 CSS 全用 `pr-` 前缀
6. 趋势图智能分两组（整年/半年）
7. 变量先声明再调用
8. 排名用 `RK` 映射表不用字符串拼接
9. 桌面用 `transform:scale` 等比缩放
10. 窄屏筛选栏 `overflow-x:auto`
11. **`try{` 必须配 `catch(e){}`，用 `new Function(code)` 验证**
12. **`<script src>` 和 `<script>` 拆开（浏览器忽略带 src 的标签体）**
13. **`removeChild` 彻底删除诊断 DOM，不用 `display:none`**
14. **关闭汇报重置 `PRpi=0;prUpd()`**
15. **颜色用 hex + rgba 直接量，不拼 CSS 变量（`var(--red)+"15"` 非法）**
16. **`--gold` 等别名必须在 `:root` 中定义**
17. **`DOMContentLoaded` 中发起始 resize 事件**
18. **null 排名用 `filter` 排除**
19. **诊断容器彻底移除而非隐藏**
20. **从 `DG[k.field].c` 动态读取描述**

## 颜色体系

```css
--a: #15498c; --a2: #2b6cb0; --al: #eaf0f8;
--r: #d4380d; --g: #389e0d; --am: #d48806;
--p: #722ed1; --t: #1f2a3d; --t2: #5a6675; --m: #94a2b5;
--green: var(--g); --gold: var(--am); --blue: var(--a);
--purple: var(--p); --red: var(--r); --amber: var(--am);
```
