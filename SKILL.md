# CCB Presentation Skill

将银行 Excel 经营数据 + Word 分析文档 → 建行白蓝风格驾驶舱 + 汇报模式 HTML。

## 用户需求模式

银行经营分析驾驶舱的典型需求：

```
数据: Excel(4时点×24指标) + Word(分析文本)
业务: 存款/贷款/中收/户数/风险 五大维度
条线: 公司部/个金部/个贷中心
对比: 当期6月 vs 去年同期6月（半年对半年，整年对整年）
汇报: 总体→分条线→专项下钻→风险→行动闭环
风格: 建行白蓝(#15498c)，领导可看，手机可开
```

## 制作流程（8步）

### 1. 解析数据源

```bash
npm install xlsx mammoth
# 读 Excel: XLSX.readFile → sheet_to_json → 提取每行44列的4行数据
# 读 Word: mammoth.convertToHtml → 提取经营分析和诊断文本
```

数据全部是**增量**，不是存量。不良率/逾期率是比率。

### 2. 组织数据结构

```js
RAW = {
  dep: [{ca,car,ra,rar}×4],    // 对公/个人存款
  loan: [{cl,clr,pl,plr,hl,hlr,co,cor}×4], // 贷款四类
  fee: [{cf,cfr,rf,rfr,inst,instr}×4], // 中收三类 + 细分
  cust: [{cc,ccr,st,str,rc,rcr}×4], // 客户三类
  risk: [{bd,bdr,od,odr}×4],  // 风险双率
  fd: {nb,nbr,cc,ccr,iv,ivr,ex} // 个人中收细分(当期)
}
CAT = {ca:'dep', ra:'dep', cl:'loan', ...}  // 字段→类别映射
RK = {ca:'car', ra:'rar', ...}              // 字段→排名字段（硬编码）
LBL = ['2024年整年','2025年整年','2025年6月','2026年6月']
```

### 3. 核心函数

```js
function GV(k,ti){...} // 取值，ti可选
function GR(k,ti){...} // 取排名，用RK映射表
function YY(k){...}    // 同比，分母0→返回''
function GK(){...}     // 按T/DP/BZ筛选生成KPI列表
function U(k){...}     // 单位：%/户/万
```

### 4. 驾驶舱 HTML 骨架

单文件结构，CSS类名全用缩写：

```
Header(.hd)   筛选器fT/fD/fB + 模式按钮mC/mP
KPI Strip(.ks) 6张卡片，onclick切换
Main(.ly-main)
  Detail(.dp)  [趋势|双期|排名|诊断] tabs + dc0/dc1/dc2图表
Sidebar(.ly-side) 诊断列表 + 行动看板(红黄绿灯)
Overlay(.pr-overlay) 汇报模式
```

### 5. 图表四视图实现

**趋势** — 折线图，半年vs半年/整年vs整年智能分组：
```js
if(T>=2){ its=[v[2],v[3]]; labels=[LBL[2],LBL[3]] }
else    { its=[v[0],v[1]]; labels=[LBL[0],LBL[1]] }
```

**双期** — 双柱对比，每series用满数组+null占位：
```js
series:[
  {name:LBL[vi], data:[v0,null]},
  {name:LBL[T],  data:[null,v1]}
]
```

**排名** — 横向条形图，x/y轴全设show:false，标签position:'left'：
```js
xAxis:{show:false,axisLine:{show:false},splitLine:{show:false}}
yAxis:{show:false,...}
label:{position:'left',formatter:function(p){return p.name+' 第'+p.value}}
```

**诊断** — rf走饼图+排名条，其他走趋势线+三栏问题/原因/对策卡片：
```html
<div class="三栏">❌问题 | 🔍原因 | ✅对策</div>
```

每次 `setOption` 前必须 `c.clear()`。

### 6. 筛选器

```html
<div class="fg" id="fT">
  <button class="fbtn" data-v="0">2024整年</button>...
</div>
```

点击 → 更新全局变量 → `RF()` → `RKPI()`+`UM()`。KPI卡片用内联onclick。

### 7. 汇报模式

独立overlay（`position:fixed;inset:0;z-index:10000`），16:9画布1920×1080等比缩放。

10-11页幻灯片：
1. 封面(三大KPI)
2. 总体结论(三项改善·两项承压)
3. 增存(对公跃升·个金回调)
4. 增贷(房贷进位·消费贷企稳)
5. 增收(对公培育·个金短板)
6. 增户(结算第1·个客待突破)
7. 控风险(主动管控三抓手)
8. 传化物流案例(圈链群模式)
9. 短板与原因分析
10. 行动闭环(PDCA)
11. 结尾

每页左文右图（`grid-template-columns:1fr 1fr`），图表在overlay展开后`setTimeout(init,200)`。

### 8. 合并到驾驶舱

- CSS追加到`<style>`末尾，全用`pr-`前缀
- HTML追加到`</body>`前
- JS函数名加`Pr`前缀，追加到内联`</script>`前
- **用`lastIndexOf('</script>')`**定位，别用`indexOf`（会撞CDN标签）

## 10大关键教训

| # | 错误 | 症状 | 根因 | 修复 |
|---|---|---|---|---|
| 1 | setOption合并 | 蓝横线 | 旧配置残留 | 每次`c.clear()`再`setOption` |
| 2 | 饼图\\n | JS崩溃 | 文件转义成真实换行 | 用`function(p){return p.name+' '+p.percent+'%'}` |
| 3 | 隐藏容器init | 图表空白 | ECharts尺寸0 | 先展开再`setTimeout(init,200)` |
| 4 | replace注入 | 代码丢失 | 匹配到CDN标签 | `lastIndexOf('</script>')` |
| 5 | CSS重名 | 样式混乱 | 两套模式共用类名 | 汇报全用`pr-`前缀 |
| 6 | 整年/半年混比 | 数据误导 | 12月增量vs6月增量 | 趋势图智能分组 |
| 7 | LBL后置 | undefined | 在RF()后才赋值 | 数据变量放调用前 |
| 8 | 排名拼接 | 取到数值 | 字符串拼字段名 | 硬编码`RK`映射表 |
| 9 | resize缩小 | 图表不变 | ECharts canvas缩小缺陷 | 桌面用`transform:scale`等比 |
| 10 | 头部换行 | 遮挡内容 | 筛选栏太长 | 窄屏`overflow-x:auto;flex-wrap:nowrap` |

## 颜色体系

```css
--a: #15498c;   /* 建行蓝 主色 */
--a2: #2b6cb0;  /* 浅蓝 */
--al: #eaf0f8;  /* 极浅蓝 背景 */
--r: #d4380d;   /* 红色 预警/下跌 */
--g: #389e0d;   /* 绿色 增长 */
--am: #d48806;  /* 琥珀 注意 */
--t: #1f2a3d;   /* 深色 正文 */
--m: #94a2b5;   /* 灰色 辅助 */
--l: rgba(21,73,140,.1); /* 分隔线 */
```

## 响应式断点

```
>1600px   全尺寸+scale等比缩放
1200-1600 缩小图表/KPI/侧栏
800-1200  竖排，侧栏横向，单列图表
480-800   单列KPI，藏侧栏
<480px   最小化，筛选栏横向滚动，字16px
```

## 汇报模式幻灯片结构

```
0 封面: logo+标题+三大KPI
1 总体结论: 三项改善·两项承压
2 增存: 对公跃升+144.8% | 个金-8.3%
3 增贷: 房贷9→5↑4 | 消费贷企稳
4 增收: 对公培育 | 个金短板38.8%
5 增户: 结算第1 | 个客-32.6%
6 控风险: 不良0.83%/逾期1.45%
7 传化案例: 40户/月均8户/100%有效
8 短板分析: 现状→问题→原因→措施
9 行动闭环: 4项重点工作+PDCA
10 结尾: 恳请批评指正
```

## 关键代码模板

### 驾驶舱KPI卡片
```html
<div class="kc" onclick="SK=0;RKPI();UM()">
  <div class="kt"><span class="kt-l">对公存款新增</span><span class="kt-b">排5</span></div>
  <span class="kv" style="color:var(--g)">1,766.5万</span>
  <span class="kn" style="color:var(--g)">+144.8%</span>
</div>
```

### 筛选器按钮
```html
<div class="fg" id="fT">
  <button class="fbtn" data-v="0">2024整年</button>
  <button class="fbtn active" data-v="3">2026年6月</button>
</div>
```

### 图表实例管理
```js
var CH={}; // 驾驶舱图表
videoObject CH={};
echarts.init(dom) → CH.dc0 = instance;
c.clear(); c.setOption({...});
window resize → Object.values(CH).forEach(c=>c.resize())
```
