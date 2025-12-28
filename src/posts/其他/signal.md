---
title: 信号与线性系统
cover: /assets/images/cover1.jpg
icon: pen-to-square
date: 2025-12-23
category:
  - 信号与系统	
star: true
sticky: true
author: superxuan
---

# 信号与线性系统知识点总结
## 第一章 信号与系统
### 一、信号相关概念
1. **基本定义**
    - **消息**：来自外界的各种报道。
    - **信息**：消息中有意义的内容，课程中与“消息”不加严格区分。
    - **信号**：信息的载体，可分为电信号与非电信号，本课程主要讨论电信号，常用时间函数或波形描述。
2. **信号分类**
    - **按确定性划分**：
        - **确定信号**：可用确定时间函数表示，如正弦信号。
        - **随机信号**：取值具有不确定性，如电子系统中的起伏热噪声；**伪随机信号**：貌似随机却遵循严格规律，如伪随机码。
    - **按时间连续性划分**：
        - **连续时间信号**：在连续时间范围内，任意时间值都有对应函数值，定义域连续，值域可连续或含间断点。
        - **离散时间信号**：仅在离散瞬间有定义，定义域离散，离散点间隔可等可不等，等间隔时称为序列，记为$f(kT)$（$T$为间隔），简写为$f(k)$。
        - **模拟信号**：时间和幅值均连续的信号；**抽样信号**：时间离散、幅值连续的信号；**数字信号**：时间和幅值均离散的信号。
    - **按周期性划分**：
        - **连续周期信号**：满足$f(t) = f(t + mT)$（$m = 0,\pm1,\pm2,\dots$），$T$为周期，如$\sin2t$。两连续周期信号之和为周期信号的充要条件是周期比为有理数。
        - **离散周期信号**：满足$f(k) = f(k + mN)$（$m = 0,\pm1,\pm2,\dots$），$N$为周期。正弦序列$\sin(\beta k)$为周期序列的条件是$2\pi/\beta$为有理数，周期为使$N = M(2\pi/\beta)$（$M$为整数）的最小$N$。
    - **按能量功率划分**：
        - **能量信号**：能量$E<\infty$、功率$P = 0$，如时限非周期信号。连续信号能量$E=\int_{-\infty}^{\infty}|f(t)|^2dt$，离散信号能量$E=\sum_{k=-\infty}^{\infty}|f(k)|^2$。
        - **功率信号**：功率$P<\infty$、能量$E=\infty$，如周期信号。连续信号功率$P=\lim_{T\rightarrow\infty}\frac{1}{2T}\int_{-T}^{T}|f(t)|^2dt$，离散信号功率$P=\lim_{N\rightarrow\infty}\frac{1}{2N + 1}\sum_{k=-N}^{N}|f(k)|^2$。
        - **非能量非功率信号**：如$t\varepsilon(t)$、$e^t$。
    - **其他分类**：
        - **一维/多维信号**：一维信号仅含一个自变量（如语音信号），多维信号含多个自变量（如图像信号）。
        - **实/复信号**：实信号取值为实数，复信号取值为复数（如$e^{j\omega t}$）。
        - **因果/反因果信号**：因果信号$t<0$时为0（如$\varepsilon(t)$），反因果信号$t>0$时为0。
3. **典型确定性信号**
    - **指数信号**：$f(t)=Ke^{at}$，$a$为实常数。$a<0$时指数衰减，$a = 0$时为直流信号，$a>0$时指数增长。单边指数信号$f(t)=Ke^{at}\varepsilon(t)$，时间常数$\tau=-1/a$（$a<0$时），反映衰减速度。
    - **正弦信号**：$f(t)=K\sin(\omega t+\varphi)$，$K$为振幅，$\omega$为角频率（$\omega = 2\pi f$，$f$为频率），$\varphi$为初相，周期$T = 2\pi/\omega$。衰减正弦信号$f(t)=Ke^{at}\sin(\omega t+\varphi)\varepsilon(t)$（$a<0$）。
    - **复指数信号**：$f(t)=Ke^{st}$（$s=\sigma + j\omega$为复频率），可分解为$K e^{\sigma t}\cos(\omega t)+jK e^{\sigma t}\sin(\omega t)$，便于信号分析运算。
    - **抽样信号**：$Sa(t)=\frac{\sin t}{t}$，性质包括$Sa(0)=1$、$Sa(\pm n\pi)=0$（$n$为整数）、$\int_{-\infty}^{\infty}Sa(t)dt=\pi$等。
4. **信号基本运算**
    - **加减与相乘**：同一时刻信号值对应运算，如$f(t)=f_1(t)+f_2(t)$、$f(k)=f_1(k)f_2(k)$。
    - **时间变换**：
        - **反转**：$f(t)\rightarrow f(-t)$、$f(k)\rightarrow f(-k)$，图形以纵轴反转180°。
        - **平移**：$f(t)\rightarrow f(t - t_0)$（$t_0>0$右移，$t_0<0$左移）、$f(k)\rightarrow f(k - k_0)$（$k_0>0$右移，$k_0<0$左移）。
        - **尺度变换**：$f(t)\rightarrow f(at)$（$a>1$压缩，$0<a<1$扩展），离散信号因易丢失信息，一般不做尺度变换。
        - **混合运算**：需注意变换相对$t$（或$k$）进行，正向运算先平移后反转/展缩，逆运算反之，如$f(2 - t)$可先$t\rightarrow t + 2$左移，再$t\rightarrow -t$反转。
    - **微分与积分**：连续信号微分$f'(t)=\lim_{\Delta t\rightarrow0}\frac{f(t+\Delta t)-f(t)}{\Delta t}$，积分$\int_{-\infty}^{t}f(\tau)d\tau$；离散信号差分（类似微分）、求和（类似积分）。

### 二、奇异信号
1. **单位阶跃函数$\varepsilon(t)$**
    - **定义**：$\varepsilon(t)=\begin{cases}1, & t>0\\0, & t<0\end{cases}$，$t = 0$处未定义或取1/2。延迟阶跃信号$\varepsilon(t - t_0)=\begin{cases}1, & t>t_0\\0, & t<<t_0\end{cases}$。
    - **性质**：表示信号作用区间（如$f(t)=\varepsilon(t)-\varepsilon(t - T)$为矩形脉冲）；$\int_{-\infty}^{t}\varepsilon(\tau)d\tau=t\varepsilon(t)$。
2. **单位冲激函数$\delta(t)$**
    - **物理意义**：强度极大、作用时间极短的物理量理想化模型，如矩形脉冲$\frac{1}{\tau}[\varepsilon(t)-\varepsilon(t - \tau)]$当$\tau\rightarrow0$时的极限，面积（强度）为1。
    - **狄拉克定义**：$\int_{-\infty}^{\infty}\delta(t)dt = 1$；$t\neq0$时$\delta(t)=0$。
    - **与阶跃函数关系**：$\delta(t)=\frac{d\varepsilon(t)}{dt}$，$\varepsilon(t)=\int_{-\infty}^{t}\delta(\tau)d\tau$。
    - **性质**：
        - **取样性**：$f(t)\delta(t)=f(0)\delta(t)$，$\int_{-\infty}^{\infty}f(t)\delta(t)dt=f(0)$；$f(t)\delta(t - t_0)=f(t_0)\delta(t - t_0)$，$\int_{-\infty}^{\infty}f(t)\delta(t - t_0)dt=f(t_0)$。
        - **冲激偶$\delta'(t)$**：$\delta'(t)=\frac{d\delta(t)}{dt}$，性质包括$f(t)\delta'(t)=f(0)\delta'(t)-f'(0)\delta(t)$、$\int_{-\infty}^{\infty}f(t)\delta'(t)dt=-f'(0)$。
        - **尺度变换**：$\delta(at)=\frac{1}{|a|}\delta(t)$，$\delta(-t)=\delta(t)$（偶函数），$\delta'(-t)=-\delta'(t)$（奇函数）。
        - **复合函数形式**：若$f(t)=0$有$n$个互异实根$t_i$，则$\delta[f(t)]=\sum_{i=1}^{n}\frac{1}{|f'(t_i)|}\delta(t - t_i)$。
3. **离散序列$\delta(k)$与$\varepsilon(k)$**
    - **单位样值序列$\delta(k)$**：$\delta(k)=\begin{cases}1, & k = 0\\0, & k\neq0\end{cases}$，取样性质$f(k)\delta(k)=f(0)\delta(k)$，$\sum_{k=-\infty}^{\infty}f(k)\delta(k)=f(0)$。
    - **单位阶跃序列$\varepsilon(k)$**：$\varepsilon(k)=\begin{cases}1, & k\geq0\\0, & k<0\end{cases}$，与$\delta(k)$关系$\delta(k)=\varepsilon(k)-\varepsilon(k - 1)$，$\varepsilon(k)=\sum_{i=-\infty}^{k}\delta(i)$。

### 三、系统相关概念
1. **系统定义与作用**：若干相互关联事物组成的具有特定功能的整体，核心作用是传输和处理信号，如通信系统、控制系统等。
2. **系统分类**
    - **按时间特性**：
        - **连续系统**：激励和响应均为连续信号，用微分方程描述。
        - **离散系统**：激励和响应均为离散信号，用差分方程描述。
        - **混合系统**：连续与离散系统组合，如A/D、D/A变换系统。
    - **按记忆性**：
        - **动态系统（记忆系统）**：响应与当前及过去激励有关，含记忆元件（如电容、电感），用微分/差分方程描述。
        - **即时系统（无记忆系统）**：响应仅与当前激励有关，如电阻电路。
    - **按输入输出数量**：**单输入单输出系统**、**多输入多输出系统**。
    - **按线性与时不变性**：
        - **线性系统**：满足可分解性（总响应=零输入响应+零状态响应）、零输入线性（输入线性组合对应零输入响应线性组合）、零状态线性（输入线性组合对应零状态响应线性组合）。
        - **时不变系统**：参数不随时间变化，满足时不变性，即$f(t - t_0)\rightarrow y_{zs}(t - t_0)$（连续）、$f(k - k_0)\rightarrow y_{zs}(k - k_0)$（离散）。
        - **线性时不变（LTI）系统**：同时满足线性和时不变性，连续系统用常系数线性微分方程描述，离散系统用常系数线性差分方程描述，是课程重点。
    - **按因果性**：**因果系统**零状态响应不超前于激励，物理可实现系统多为因果系统；**非因果系统**零状态响应超前于激励，如$y_{zs}(t)=f(t + 1)$。
    - **按稳定性**：**稳定系统**（有界输入有界输出BIBO稳定），对有界激励产生有界响应；**不稳定系统**，对有界激励产生无界响应。
3. **系统数学模型**
    - **连续系统**：$n$阶常系数线性微分方程$\sum_{i=0}^{n}a_i y^{(i)}(t)=\sum_{j=0}^{m}b_j f^{(j)}(t)$，如RLC电路方程。
    - **离散系统**：$n$阶常系数线性差分方程$\sum_{i=0}^{n}a_i y(k - i)=\sum_{j=0}^{m}b_j f(k - j)$，如银行存款问题方程。
4. **系统框图描述**
    - **连续系统基本单元**：加法器（实现信号相加）、数乘器（实现信号数乘）、积分器（实现信号积分，代替微分器减少噪声）、乘法器（实现信号相乘）、延时器（实现信号延时）。
    - **离散系统基本单元**：加法器、数乘器、迟延单元（实现序列延时，如$x(k)\rightarrow x(k - 1)$）。
    - **系统模拟**：由微分/差分方程绘制框图，或由框图推导微分/差分方程，用于系统分析与设计。


## 第二章 连续系统的时域分析
### 一、LTI连续系统响应
1. **微分方程经典解**：完全解=齐次解+特解，即$y(t)=y_h(t)+y_p(t)$。
2. **齐次解$y_h(t)$**
    - **齐次方程**：$\sum_{i=0}^{n}a_i y^{(i)}(t)=0$。
    - **特征方程**：$\sum_{i=0}^{n}a_i \lambda^i=0$，根$\lambda$为特征根。
    - **齐次解形式**：
        - $n$个单实特征根$\lambda_1,\lambda_2,\dots,\lambda_n$：$y_h(t)=\sum_{i=1}^{n}C_i e^{\lambda_i t}$。
        - $r$重实特征根$\lambda$：$y_h(t)=\sum_{i=1}^{r}C_i t^{i - 1}e^{\lambda t}$。
        - 1对共轭复特征根$\lambda=\alpha\pm j\beta$：$y_h(t)=e^{\alpha t}(C_1\cos\beta t+C_2\sin\beta t)$。
        - $r$重共轭复特征根$\lambda=\alpha\pm j\beta$：$y_h(t)=\sum_{i=1}^{r}t^{i - 1}e^{\alpha t}(C_{1i}\cos\beta t+C_{2i}\sin\beta t)$。
    - **待定系数$C_i$**：由全解初始条件确定。
3. **特解$y_p(t)$**
    - **形式**：与激励$f(t)$形式相关，如下表（部分）：
| 激励$f(t)$ | 特解$y_p(t)$（特征根满足对应条件） |
| ---- | ---- |
| 常数$A$ | 常数$P$（特征根均不为0） |
| $e^{\alpha t}$ | $P e^{\alpha t}$（$\alpha\neq$特征根）；$P t e^{\alpha t}$（$\alpha=$单特征根）；$P t^r e^{\alpha t}$（$\alpha=r$重特征根） |
| $t^k$ | $P_k t^k+\dots+P_1 t+P_0$（特征根不为0）；$t^r(P_k t^k+\dots+P_1 t+P_0)$（$r$重特征根为0） |
| $\cos\beta t$或$\sin\beta t$ | $P\cos\beta t+Q\sin\beta t$（$\pm j\beta\neq$特征根） |
    - **待定系数**：将特解代入原非齐次微分方程，比较系数确定。
4. **全解与初始条件**
    - **全解**：$y(t)=y_h(t)+y_p(t)$，$y_h(t)$为自由响应（仅与系统特性有关），$y_p(t)$为强迫响应（由激励确定）。
    - **初始条件转换**：$t = 0_-$初始状态（与激励无关），$t = 0_+$初始值（由$0_-$状态和激励共同确定），通过**冲击函数匹配法**（分析微分方程两端$\delta(t)$及各阶导数平衡）实现转换，如含$\delta(t)$项时，响应或其导数可能在$t = 0$处跳变。

### 二、零输入响应与零状态响应
1. **定义**
    - **零输入响应$y_{zi}(t)$**：无外加激励，仅由起始状态产生的响应，满足齐次微分方程$\sum_{i=0}^{n}a_i y_{zi}^{(i)}(t)=0$，初始条件$y_{zi}^{(j)}(0_+)=y_{zi}^{(j)}(0_-)=y^{(j)}(0_-)$（$j = 0,1,\dots,n - 1$）。
    - **零状态响应$y_{zs}(t)$**：起始状态为0，仅由外加激励产生的响应，满足非齐次微分方程$\sum_{i=0}^{n}a_i y_{zs}^{(i)}(t)=\sum_{j=0}^{m}b_j f^{(j)}(t)$，初始条件$y_{zs}^{(j)}(0_-)=0$，$y_{zs}^{(j)}(0_+)$由冲击函数匹配法确定。
2. **全响应分解**：$y(t)=y_{zi}(t)+y_{zs}(t)$，且$y^{(j)}(0_+)=y_{zi}^{(j)}(0_+)+y_{zs}^{(j)}(0_+)$（$j = 0,1,\dots,n - 1$）。
3. **求解方法**：零输入响应通过齐次方程和起始状态求解；零状态响应通过经典法（齐次解+特解）或后续卷积积分法求解。

### 三、冲激响应与阶跃响应
1. **冲激响应$h(t)$**
    - **定义**：单位冲激函数$\delta(t)$引起的零状态响应，即$h(t)=T[\{0\},\delta(t)]$。
    - **求解**：
        - **数学模型**：LTI系统$n$阶微分方程，令$f(t)=\delta(t)$，则$y(t)=h(t)$，满足$\sum_{i=0}^{n}a_i h^{(i)}(t)=\sum_{j=0}^{m}b_j \delta^{(j)}(t)$。
        - **解的形式**：$t\geq0_+$时，$\delta(t)$及各阶导数为0，方程退化为齐次方程，故$h(t)$形式与齐次解相同，仅含$\delta(t)$及各阶导数（当$m\geq n$时）。
        - **待定系数**：通过冲击函数匹配法求$h^{(j)}(0_+)$（$j = 0,1,\dots,n - 1$），代入齐次解形式确定系数；或用奇异函数项平衡法、线性时不变性质法。
    - **基本单元冲激响应**：如电阻$R$的$h(t)=\frac{1}{R}\delta(t)$，电容$C$的$h(t)=\frac{1}{C}\varepsilon(t)$，电感$L$的$h(t)=\frac{1}{L}e^{-\frac{R}{L}t}\varepsilon(t)$（RL电路）。
2. **阶跃响应$g(t)$**
    - **定义**：单位阶跃函数$\varepsilon(t)$引起的零状态响应，即$g(t)=T[\{0\},\varepsilon(t)]$。
    - **与冲激响应关系**：$g(t)=\int_{-\infty}^{t}h(\tau)d\tau$，$h(t)=\frac{d g(t)}{dt}$（利用LTI系统微积分特性）。

### 四、卷积积分
1. **信号时域分解**：任意信号$f(t)$可分解为冲激函数叠加，$f(t)=\int_{-\infty}^{\infty}f(\tau)\delta(t - \tau)d\tau$。
2. **卷积积分定义**：$f_1(t)*f_2(t)=\int_{-\infty}^{\infty}f_1(\tau)f_2(t - \tau)d\tau$，$\tau$为积分变量，$t$为参变量，结果为$t$的函数。
3. **LTI系统零状态响应与卷积关系**：$y_{zs}(t)=f(t)*h(t)$，即激励与冲激响应的卷积为零状态响应，利用LTI系统齐次性、时不变性、叠加性推导。
4. **卷积图解法**：四步操作：
    - **换元**：$t$换为$\tau$，得$f_1(\tau)$、$f_2(\tau)$。
    - **反转平移**：$f_2(\tau)$反转得$f_2(-\tau)$，再沿$\tau$轴平移$t$得$f_2(t - \tau)$。
    - **重叠相乘**：求$f_1(\tau)$与$f_2(t - \tau)$的重叠区间，计算乘积$f_1(\tau)f_2(t - \tau)$。
    - **积分**：在重叠区间对乘积积分，得$t$对应的卷积值，需分区间讨论$t$的取值范围。
5. **卷积性质**
    - **代数运算**：
        - **交换律**：$f_1(t)*f_2(t)=f_2(t)*f_1(t)$。
        - **分配律**：$f_1(t)*(f_2(t)+f_3(t))=f_1(t)*f_2(t)+f_1(t)*f_3(t)$，对应系统并联（总冲激响应=子系统冲激响应之和）。
        - **结合律**：$(f_1(t)*f_2(t))*f_3(t)=f_1(t)*(f_2(t)*f_3(t))$，对应系统级联（总冲激响应=子系统冲激响应卷积）。
    - **与冲激/阶跃函数卷积**：
        - $f(t)*\delta(t)=f(t)$；$f(t)*\delta(t - t_0)=f(t - t_0)$；$f(t - t_1)*\delta(t - t_2)=f(t - t_1 - t_2)$。
        - $f(t)*\varepsilon(t)=\int_{-\infty}^{t}f(\tau)d\tau$；$\varepsilon(t)*\varepsilon(t)=t\varepsilon(t)$。
    - **时移特性**：若$f_1(t)*f_2(t)=f(t)$，则$f_1(t - t_1)*f_2(t - t_2)=f(t - t_1 - t_2)$。
    - **微分积分性质**：
        - 微分：$\frac{d}{dt}[f_1(t)*f_2(t)]=\frac{d f_1(t)}{dt}*f_2(t)=f_1(t)*\frac{d f_2(t)}{dt}$。
        - 积分：$\int_{-\infty}^{t}[f_1(\tau)*f_2(\tau)]d\tau=f_1(t)*\int_{-\infty}^{t}f_2(\tau)d\tau=\int_{-\infty}^{t}f_1(\tau)d\tau*f_2(t)$。
        - 混合：$f_1(t)*f_2(t)=\frac{d f_1(t)}{dt}*\int_{-\infty}^{t}f_2(\tau)d\tau$（满足$f_1(-\infty)=0$或$f_2^{(-1)}(\infty)=0$）。
6. **相关函数**
    - **定义**：
        - **互相关函数**：$R_{12}(\tau)=\int_{-\infty}^{\infty}f_1(t)f_2(t + \tau)dt$，$R_{12}(\tau)=R_{21}(-\tau)$。
        - **自相关函数**：$R(\tau)=\int_{-\infty}^{\infty}f(t)f(t + \tau)dt$，$R(-\tau)=R(\tau)$（偶函数），$R(0)$为最大值。
    - **与卷积关系**：$R_{12}(\tau)=f_1(\tau)*f_2(-\tau)$，$R_{21}(\tau)=f_1(-\tau)*f_2(\tau)$；实偶函数的卷积与相关相同。
    - **功率有限信号相关函数**：$R_{12}(\tau)=\lim_{T\rightarrow\infty}\frac{1}{2T}\int_{-T}^{T}f_1(t)f_2(t + \tau)dt$，自相关函数类似。


## 第四章 傅里叶变换和系统的频域分析
### 一、傅里叶级数（周期信号）
1. **正交函数分解**
    - **矢量正交**：矢量内积为0，如三维空间正交基$\vec{v}_x=(2,0,0)$、$\vec{v}_y=(0,2,0)$、$\vec{v}_z=(0,0,2)$。
    - **信号正交**：定义在$(t_1,t_2)$的$\varphi_1(t)$与$\varphi_2(t)$满足$\int_{t_1}^{t_2}\varphi_1(t)\varphi_2(t)dt=0$（实信号）。
    - **正交函数集**：$n$个函数$\{\varphi_i(t)\}$满足$\int_{t_1}^{t_2}\varphi_i(t)\varphi_j(t)dt=\begin{cases}0, & i\neq j\\K_i, & i = j\end{cases}$，完备正交函数集不存在非零函数与所有$\varphi_i(t)$正交。
    - **信号正交分解**：$f(t)\approx\sum_{i=1}^{n}C_i\varphi_i(t)$，最小均方误差准则下，系数$C_i=\frac{\int_{t_1}^{t_2}f(t)\varphi_i(t)dt}{\int_{t_1}^{t_2}\varphi_i^2(t)dt}$；完备集时$n\rightarrow\infty$，均方误差为0，满足帕塞瓦尔公式$\int_{t_1}^{t_2}f^2(t)dt=\sum_{i=1}^{\infty}C_i^2 K_i$。
2. **傅里叶级数三角形式**
    - **三角函数集**：$\{1,\cos(n\Omega t),\sin(n\Omega t)\}$（$n = 1,2,\dots$），在$(t_0,t_0 + T)$（$T = 2\pi/\Omega$）上完备正交。
    - **级数形式**：周期信号$f(t)=f(t + mT)$（满足狄里赫利条件），分解为$f(t)=\frac{a_0}{2}+\sum_{n=1}^{\infty}[a_n\cos(n\Omega t)+b_n\sin(n\Omega t)]$，其中：
        - $a_0=\frac{2}{T}\int_{t_0}^{t_0 + T}f(t)dt$（直流分量系数）。
        - $a_n=\frac{2}{T}\int_{t_0}^{t_0 + T}f(t)\cos(n\Omega t)dt$（余弦分量系数，$n$的偶函数）。
        - $b_n=\frac{2}{T}\int_{t_0}^{t_0 + T}f(t)\sin(n\Omega t)dt$（正弦分量系数，$n$的奇函数）。
    - **合并形式**：$f(t)=\frac{A_0}{2}+\sum_{n=1}^{\infty}A_n\cos(n\Omega t+\varphi_n)$，$A_0 = a_0$，$A_n=\sqrt{a_n^2 + b_n^2}$（$n$的偶函数），$\varphi_n=-\arctan(\frac{b_n}{a_n})$（$n$的奇函数），$a_n=A_n\cos\varphi_n$，$b_n=-A_n\sin\varphi_n$。
    - **波形对称性与谐波特性**：
        - **偶函数**（$f(t)=f(-t)$）：$b_n=0$，仅含直流和余弦分量。
        - **奇函数**（$f(t)=-f(-t)$）：$a_0=a_n=0$，仅含正弦分量。
        - **奇谐函数**（$f(t)=-f(t\pm T/2)$）：仅含奇次谐波。
        - **偶谐函数**（$f(t)=f(t\pm T/2)$）：仅含偶次谐波。
3. **傅里叶级数指数形式**
    - **虚指数函数集**：$\{e^{jn\Omega t}\}$（$n = 0,\pm1,\pm2,\dots$），在$(t_0,t_0 + T)$上完备正交。
    - **级数形式**：$f(t)=\sum_{n=-\infty}^{\infty}F_n e^{jn\Omega t}$，复傅里叶系数$F_n=\frac{1}{T}\int_{t_0}^{t_0 + T}f(t)e^{-jn\Omega t}dt$。
    - **与三角形式关系**：$F_0=\frac{a_0}{2}$，$F_n=\frac{1}{2}(a_n - jb_n)$，$F_{-n}=\frac{1}{2}(a_n + jb_n)$；$|F_n|=\frac{A_n}{2}$（$n$的偶函数），$\arg(F_n)=\varphi_n$（$n$的奇函数）。
4. **周期信号功率**：帕塞瓦尔等式$P=\frac{1}{T}\int_{t_0}^{t_0 + T}f^2(t)dt=\frac{A_0^2}{4}+\sum_{n=1}^{\infty}\frac{A_n^2}{2}=\sum_{n=-\infty}^{\infty}|F_n|^2$，即周期信号平均功率=各次谐波功率之和。

### 二、周期信号的频谱
1. **频谱概念**：描述周期信号各次谐波幅值$A_n$（或$|F_n|$）、相位$\varphi_n$（或$\arg(F_n)$）随频率$\omega=n\Omega$的变化关系。
    - **振幅频谱**：$A_n\sim\omega$（单边）或$|F_n|\sim\omega$（双边）。
    - **相位频谱**：$\varphi_n\sim\omega$（单边）或$\arg(F_n)\sim\omega$（双边）。
2. **周期信号频谱特点**
    - **离散性**：谱线仅出现在$\omega=n\Omega$（$n$为整数）处，间隔$\Omega=2\pi/T$。
    - **谐波性**：频率为基频$\Omega$的整数倍。
    - **收敛性**：幅值总趋势随$n$增大而减小。
3. **频谱带宽**：
    - **定义**：信号主要频率成分的范围，矩形脉冲周期信号一般取第一个零点频率$\omega_1=2\pi/\tau$（$\tau$为脉宽）为带宽，记为$B_{\omega}=\omega_1$或$B_f=f_1=1/\tau$。
    - **关系**：带宽与脉宽成反比（$\tau B_f\approx1$），如语音信号带宽300~3400Hz，音乐信号50~15000Hz。

### 三、傅里叶变换（非周期信号）
1. **傅里叶变换引出**：周期信号$T\rightarrow\infty$时，$\Omega\rightarrow0$，离散频谱过渡为连续频谱，$F_n\rightarrow0$，定义频谱密度函数$F(j\omega)=\lim_{T\rightarrow\infty}F_n T$。
2. **傅里叶变换对**
    - **正变换**：$F(j\omega)=\int_{-\infty}^{\infty}f(t)e^{-j\omega t}dt$，$F(j\omega)$为频谱密度函数，反映单位频率上的频谱值。
    - **逆变换**：$f(t)=\frac{1}{2\pi}\int_{-\infty}^{\infty}F(j\omega)e^{j\omega t}d\omega$。
    - **简记**：$f(t)\leftrightarrow F(j\omega)$，$F(j\omega)=\mathcal{F}[f(t)]$，$f(t)=\mathcal{F}^{-1}[F(j\omega)]$。
3. **傅里叶变换存在条件**：充分条件为$f(t)$绝对可积（$\int_{-\infty}^{\infty}|f(t)|dt<\infty$），不满足时可通过广义傅里叶变换（如冲激函数）处理。
4. **常用函数傅里叶变换**
| 函数$f(t)$ | 傅里叶变换$F(j\omega)$ |
| ---- | ---- |
| $\delta(t)$ | $1$ |
| $\delta'(t)$ | $j\omega$ |
| $\varepsilon(t)$ | $\pi\delta(\omega)+\frac{1}{j\omega}$ |
| $e^{-\alpha t}\varepsilon(t)$（$\alpha>0$） | $\frac{1}{\alpha + j\omega}$ |
| $e^{-\alpha|t|}$（$\alpha>0$） | $\frac{2\alpha}{\alpha^2 + \omega^2}$ |
| $g_{\tau}(t)$（矩形脉冲，脉宽$\tau$） | $\tau Sa(\frac{\omega\tau}{2})$ |
| $\cos\omega_0 t$ | $\pi[\delta(\omega - \omega_0)+\delta(\omega + \omega_0)]$ |
| $\sin\omega_0 t$ | $j\pi[\delta(\omega + \omega_0)-\delta(\omega - \omega_0)]$ |
| $1$（直流信号） | $2\pi\delta(\omega)$ |
| $\text{sgn}(t)$（符号函数） | $\frac{2}{j\omega}$ |
5. **傅里叶变换性质**
    - **线性**：$a f_1(t)+b f_2(t)\leftrightarrow a F_1(j\omega)+b F_2(j\omega)$。
    - **奇偶虚实性**：实函数$f(t)$的$F(j\omega)=R(\omega)+jX(\omega)$，$R(\omega)$（实部）偶、$X(\omega)$（虚部）奇；$|F(j\omega)|$偶、$\arg(F(j\omega))$奇；$f(-t)\leftrightarrow F(-j\omega)=F^*(j\omega)$；偶函数$f(t)\leftrightarrow R(\omega)$，奇函数$f(t)\leftrightarrow jX(\omega)$。
    - **对称性**：若$f(t)\leftrightarrow F(j\omega)$，则$F(t)\leftrightarrow 2\pi f(-\omega)$。
    - **尺度变换**：$f(at)\leftrightarrow\frac{1}{|a|}F(j\frac{\omega}{a})$（$a\neq0$），$a>1$时域压缩、频域扩展，$0<a<1$时域扩展、频域压缩。
    - **时移**：$f(t - t_0)\leftrightarrow e^{-j\omega t_0}F(j\omega)$，时域平移对应频域相位线性变化。
    - **频移（调制）**：$e^{j\omega_0 t}f(t)\leftrightarrow F(j(\omega - \omega_0))$，频域平移对应时域调制。
    - **卷积定理**：
        - **时域卷积**：$f_1(t)*f_2(t)\leftrightarrow F_1(j\omega)F_2(j\omega)$，LTI系统零状态响应$Y(j\omega)=F(j\omega)H(j\omega)$（$H(j\omega)$为系统频率响应）。
        - **频域卷积**：$f_1(t)f_2(t)\leftrightarrow\frac{1}{2\pi}F_1(j\omega)*F_2(j\omega)$。
    - **时域微分**：$f^{(n)}(t)\leftrightarrow (j\omega)^n F(j\omega)$，若$f^{(k)}(-\infty)=0$（$k = 0,1,\dots,n - 1$）。
    - **时域积分**：$\int_{-\infty}^{t}f(\tau)d\tau\leftrightarrow\frac{F(j\omega)}{j\omega}+\pi F(0)\delta(\omega)$。
    - **频域微分**：$(-jt)^n f(t)\leftrightarrow F^{(n)}(j\omega)$。
    - **频域积分**：$\pi f(0)\delta(t)+\frac{f(t)}{-jt}\leftrightarrow\int_{-\infty}^{\omega}F(j\eta)d\eta$（$t\neq0$）。
    - **相关定理**：$R_{12}(\tau)\leftrightarrow F_1(j\omega)F_2^*(j\omega)$，$R(\tau)\leftrightarrow|F(j\omega)|^2$（自相关函数）。

### 四、能量谱与功率谱
1. **帕塞瓦尔关系**
    - **能量信号**：$\int_{-\infty}^{\infty}f^2(t)dt=\frac{1}{2\pi}\int_{-\infty}^{\infty}|F(j\omega)|^2d\omega$，信号总能量=频域能量积分。
    - **功率信号**：$\lim_{T\rightarrow\infty}\frac{1}{2T}\int_{-T}^{T}f^2(t)dt=\frac{1}{2\pi}\int_{-\infty}^{\infty}\lim_{T\rightarrow\infty}\frac{1}{2T}|F_T(j\omega)|^2d\omega$（$F_T(j\omega)$为截断信号傅里叶变换）。
2. **能量谱密度$E(\omega)$**
    - **定义**：单位频率的能量，$E(\omega)=|F(j\omega)|^2$，总能量$E=\frac{1}{2\pi}\int_{-\infty}^{\infty}E(\omega)d\omega$。
    - **与自相关函数关系**：$R(\tau)\leftrightarrow E(\omega)$，傅里叶变换对。
3. **功率谱密度$P(\omega)$**
    - **定义**：单位频率的功率，$P(\omega)=\lim_{T\rightarrow\infty}\frac{1}{2T}|F_T(j\omega)|^2$，总功率$P=\frac{1}{2\pi}\int_{-\infty}^{\infty}P(\omega)d\omega$。
    - **维纳-欣钦关系**：$R(\tau)\leftrightarrow P(\omega)$，功率信号自相关函数与功率谱密度为傅里叶变换对，如白噪声$P(\omega)=N$（常数），$R(\tau)=\frac{N}{2}\delta(\tau)$。
4. **系统响应的能谱与功率谱**：LTI系统输入能量谱$E_f(\omega)$、功率谱$P_f(\omega)$，输出能谱$E_y(\omega)=|H(j\omega)|^2 E_f(\omega)$，输出功率谱$P_y(\omega)=|H(j\omega)|^2 P_f(\omega)$。

### 五、周期信号的傅里叶变换
1. **正余弦信号傅里叶变换**：$\cos\omega_0 t\leftrightarrow\pi[\delta(\omega - \omega_0)+\delta(\omega + \omega_0)]$，$\sin\omega_0 t\leftrightarrow j\pi[\delta(\omega + \omega_0)-\delta(\omega - \omega_0)]$。
2. **一般周期信号傅里叶变换**：周期信号$f_T(t)=\sum_{n=-\infty}^{\infty}F_n e^{jn\Omega t}$，其傅里叶变换$F_T(j\omega)=2\pi\sum_{n=-\infty}^{\infty}F_n \delta(\omega - n\Omega)$，由冲激序列组成，仅在谐波频率处存在，$F_n$为傅里叶级数系数。
3. **傅里叶系数与傅里叶变换关系**：截取周期信号一个周期得非周期信号$f_0(t)$（$f_0(t)=f_T(t)$，$t\in(t_0,t_0 + T)$；$f_0(t)=0$，其他$t$），则$F_n=\frac{1}{T}\mathcal{F}[f_0(t)]|_{\omega=n\Omega}$。

### 六、LTI系统的频域分析
1. **频率响应$H(j\omega)$**
    - **定义**：LTI系统零状态响应傅里叶变换与激励傅里叶变换之比，$H(j\omega)=\frac{Y_{zs}(j\omega)}{F(j\omega)}$，也是冲激响应的傅里叶变换$H(j\omega)=\mathcal{F}[h(t)]$。
    - **表示**：$H(j\omega)=|H(j\omega)|e^{j\theta(\omega)}$，$|H(j\omega)|$为幅频特性（响应与激励幅值比），$\theta(\omega)$为相频特性（响应与激励相位差），$|H(j\omega)|$偶、$\theta(\omega)$奇。
2. **LTI系统响应求解**：
    - 求激励傅里叶变换$F(j\omega)$。
    - 求系统频率响应$H(j\omega)$（由微分方程取傅里叶变换或电路频域模型求解）。
    - 求输出傅里叶变换$Y_{zs}(j\omega)=F(j\omega)H(j\omega)$。
    - 逆变换得零状态响应$y_{zs}(t)=\mathcal{F}^{-1}[Y_{zs}(j\omega)]$。
3. **无失真传输**
    - **定义**：输出$y(t)=K f(t - t_d)$，仅幅值缩放$K$和时延$t_d$，无波形失真。
    - **条件**：$H(j\omega)=K e^{-j\omega t_d}$，即$|H(j\omega)|=K$（幅频特性为常数），$\theta(\omega)=-\omega t_d$（相频特性线性，群时延$t_g=-\frac{d\theta(\omega)}{d\omega}=t_d$为常数）。
4. **理想滤波器**
    - **理想低通滤波器**：$|H(j\omega)|=\begin{cases}K, & |\omega|\leq\omega_c\\0, & |\omega|>\omega_c\end{cases}$，$\theta(\omega)=-\omega t_d$，$\omega_c$为截止角频率。
    - **冲激响应**：$h(t)=\frac{K\omega_c}{\pi}Sa[\omega_c(t - t_d)]$，非因果（$t<<t_d$时$h(t)\neq0$），物理不可实现。
    - **阶跃响应**：$g(t)=\frac{K}{2}\left[1 + Sa(\omega_c(t - t_d))\right]$，存在吉布斯现象（过冲约9%），上升时间$t_r=\frac{2\pi}{\omega_c}$（与带宽成反比）。
5. **物理可实现系统条件**：
    - **时域**：冲激响应$h(t)=0$（$t<0$），因果性。
    - **频域**：佩利-维纳准则，$\int_{-\infty}^{\infty}\frac{|\ln|H(j\omega)||}{1 + \omega^2}d\omega<\infty$，幅频特性可在孤立频率点为0，不可在有限频带内为0。

### 七、取样定理
1. **信号取样**：用取样脉冲序列$s(t)$从连续信号$f(t)$抽取离散样本，得取样信号$f_s(t)=f(t)s(t)$。
    - **理想取样（冲激取样）**：$s(t)=\sum_{n=-\infty}^{\infty}\delta(t - nT_s)$（$T_s$为取样间隔），$f_s(t)=\sum_{n=-\infty}^{\infty}f(nT_s)\delta(t - nT_s)$，取样角频率$\omega_s=2\pi/T_s$。
    - **取样信号频谱**：$F_s(j\omega)=\frac{1}{T_s}\sum_{n=-\infty}^{\infty}F(j(\omega - n\omega_s))$，原信号频谱$F(j\omega)$以$\omega_s$为间隔周期延拓。
2. **时域取样定理**：
    - **条件**：带限信号$f(t)$（$\omega>|\omega_m|$时$F(j\omega)=0$），取样频率$\omega_s\geq2\omega_m$（或取样间隔$T_s\leq\frac{1}{2f_m}$，$f_m=\omega_m/(2\pi)$）。
    - **结论**：$f(t)$可由取样值$f(nT_s)$唯一确定，恢复时通过理想低通滤波器（截止角频率$\omega_m\leq\omega_c\leq\omega_s - \omega_m$），$f(t)=\sum_{n=-\infty}^{\infty}f(nT_s)Sa[\omega_c(t - nT_s)]$。
    - **奈奎斯特频率/间隔**：最低取样频率$\omega_{s\text{min}}=2\omega_m$（$f_{s\text{min}}=2f_m$），最大取样间隔$T_{s\text{max}}=\frac{1}{2f_m}$。
3. **频域取样定理**：时域时限信号$f(t)$（$t>|\tau_m|$时$f(t)=0$），其频谱$F(j\omega)$可由频域取样值$F(jn\omega_s)$（$\omega_s\leq\frac{1}{2\tau_m}$）唯一确定。

### 八、序列的傅里叶分析
1. **周期序列的离散傅里叶级数（DFS）**
    - **定义**：周期$N$的序列$f_N(k)=\sum_{n=0}^{N - 1}F_N(n)e^{jn\Omega k}$（$\Omega=2\pi/N$），DFS系数$F_N(n)=\frac{1}{N}\sum_{k=0}^{N - 1}f_N(k)e^{-jn\Omega k}$，$F_N(n)$和$f_N(k)$均为周期$N$的序列。
2. **非周期序列的离散时间傅里叶变换（DTFT）**
    - **定义**：正变换$F(e^{j\theta})=\sum_{k=-\infty}^{\infty}f(k)e^{-jk\theta}$（$\theta$为数字角频率，单位rad），逆变换$f(k)=\frac{1}{2\pi}\int_{-\pi}^{\pi}F(e^{j\theta})e^{jk\theta}d\theta$。
    - **特点**：$F(e^{j\theta})$是$\theta$的连续周期函数（周期$2\pi$），存在条件为$f(k)$绝对可积（$\sum_{k=-\infty}^{\infty}|f(k)|<\infty$）。
3. **四种傅里叶变换关系**
| 变换类型 | 时域特点 | 频域特点 |
| ---- | ---- | ---- |
| 连续傅里叶级数（CFS） | 连续、周期 | 离散、非周期 |
| 连续时间傅里叶变换（CTFT） | 连续、非周期 | 连续、非周期 |
| 离散傅里叶级数（DFS） | 离散、周期 | 离散、周期 |
| 离散时间傅里叶变换（DTFT） | 离散、非周期 | 连续、周期 |

### 九、离散傅里叶变换（DFT）
1. **定义**：有限长序列$f(k)$（$0\leq k\leq N - 1$），DFT正变换$F(n)=\sum_{k=0}^{N - 1}f(k)W_N^{kn}$，逆变换$f(k)=\frac{1}{N}\sum_{n=0}^{N - 1}F(n)W_N^{-kn}$，其中$W_N=e^{-j2\pi/N}$。
2. **与DFS、DTFT关系**：
    - **与DFS**：$F(n)$是周期序列$f_N(k)$（$f(k)$周期延拓）DFS系数$F_N(n)$的主值序列（$0\leq n\leq N - 1$）。
    - **与DTFT**：$F(n)$是$F(e^{j\theta})$在$\theta=\frac{2\pi n}{N}$（$n = 0,1,\dots,N - 1$）处的取样值，即$F(n)=F(e^{j\frac{2\pi n}{N}})$。
3. **DFT性质**：线性、对称性、时移（圆周时移）、频移（圆周频移）、时域循环卷积（对应频域乘积）、频域循环卷积（对应时域乘积）、帕塞瓦尔定理（$\sum_{k=0}^{N - 1}|f(k)|^2=\frac{1}{N}\sum_{n=0}^{N - 1}|F(n)|^2$）。


## 第五章 连续系统的s域分析
### 一、拉普拉斯变换
1. **从傅里叶变换到拉普拉斯变换**：为解决非绝对可积信号傅里叶变换不存在问题，引入衰减因子$e^{-\sigma t}$（$\sigma$为实常数），使$f(t)e^{-\sigma t}$绝对可积，定义双边拉普拉斯变换：
    - **正变换**：$F_b(s)=\int_{-\infty}^{\infty}f(t)e^{-st}dt$（$s=\sigma + j\omega$为复频率）。
    - **逆变换**：$f(t)=\frac{1}{2\pi j}\int_{\sigma - j\infty}^{\sigma + j\infty}F_b(s)e^{st}ds$。
2. **收敛域（ROC）**：使$F_b(s)$存在的$\sigma$取值范围：
    - **因果信号**（$t<0$时$f(t)=0$）：$ROC$为$\text{Re}[s]>\sigma_0$（$\sigma_0$为收敛坐标）。
    - **反因果信号**（$t>0$时$f(t)=0$）：$ROC$为$\text{Re}[s]<\sigma_0$。
    - **双边信号**：$ROC$为$\sigma_1<\text{Re}[s]<\sigma_2$（$\sigma_1<\sigma_2$）。
3. **单边拉普拉斯变换**：实际信号多有初始时刻（设为$t = 0$），$t<0$时$f(t)=0$，定义单边拉普拉斯变换：
    - **正变换**：$F(s)=\int_{0_{-}}^{\infty}f(t)e^{-st}dt$（$0_{-}$为$t$趋近于0的左侧极限，含$\delta(t)$及其导数）。
    - **逆变换**：$f(t)=\frac{1}{2\pi j}\int_{\sigma - j\infty}^{\sigma + j\infty}F(s)e^{st}ds$（$t>0$）；$t<0$时$f(t)=0$。
    - **简记**：$f(t)\leftrightarrow F(s)$，$F(s)=\mathcal{L}[f(t)]$，$f(t)=\mathcal{L}^{-1}[F(s)]$，$ROC$为$\text{Re}[s]>\sigma_0$，可省略。
4. **常见函数的单边拉普拉斯变换**
| 函数$f(t)$ | 拉普拉斯变换$F(s)$ | $ROC$ |
| ---- | ---- | ---- |
| $\delta(t)$ | $1$ | $\text{Re}[s]>-\infty$ |
| $\delta'(t)$ | $s$ | $\text{Re}[s]>-\infty$ |
| $\varepsilon(t)$ | $\frac{1}{s}$ | $\text{Re}[s]>0$ |
| $e^{-at}\varepsilon(t)$（$a>0$） | $\frac{1}{s + a}$ | $\text{Re}[s]>-a$ |
| $t^n\varepsilon(t)$（$n$为正整数） | $\frac{n!}{s^{n + 1}}$ | $\text{Re}[s]>0$ |
| $\cos\omega_0 t\varepsilon(t)$ | $\frac{s}{s^2 + \omega_0^2}$ | $\text{Re}[s]>0$ |
| $\sin\omega_0 t\varepsilon(t)$ | $\frac{\omega_0}{s^2 + \omega_0^2}$ | $\text{Re}[s]>0$ |
| $e^{-at}\cos\omega_0 t\varepsilon(t)$（$a>0$） | $\frac{s + a}{(s + a)^2 + \omega_0^2}$ | $\text{Re}[s]>-a$ |
| $e^{-at}\sin\omega_0 t\varepsilon(t)$（$a>0$） | $\frac{\omega_0}{(s + a)^2 + \omega_0^2}$ | $\text{Re}[s]>-a$ |
| 周期信号$f_T(t)$（$f_1(t)$为一个周期） | $\frac{F_1(s)}{1 - e^{-sT}}$ | $\text{Re}[s]>\sigma_0$（$F_1(s)$的$ROC$） |
5. **单边拉普拉斯变换与傅里叶变换关系**：
    - 若$F(s)$的$ROC$含$j\omega$轴（$\sigma_0<0$），则$F(j\omega)=F(s)|_{s = j\omega}$。
    - 若$F(s)$的$ROC$边界为$j\omega$轴（$\sigma_0=0$），则$F(j\omega)=F(s)|_{s = j\omega}$需含冲激项（如$\varepsilon(t)\leftrightarrow\frac{1}{s}$，$F(j\omega)=\pi\delta(\omega)+\frac{1}{j\omega}$）。
    - 若$F(s)$的$ROC$不含$j\omega$轴（$\sigma_0>0$），则傅里叶变换不存在（如$e^{at}\varepsilon(t)$，$a>0$）。

### 二、拉普拉斯变换性质
1. **线性**：$a f_1(t)+b f_2(t)\leftrightarrow a F_1(s)+b F_2(s)$，$ROC$为$\text{Re}[s]>\max(\sigma_1,\sigma_2)$（$\sigma_1$、$\sigma_2$分别为$F_1(s)$、$F_2(s)$的收敛坐标）。
2. **尺度变换**：$f(at)\leftrightarrow\frac{1}{|a|}F(\frac{s}{a})$（$a>0$），$ROC$为$\text{Re}[s]>a\sigma_0$。
3. **时移**：$f(t - t_0)\varepsilon(t - t_0)\leftrightarrow e^{-s t_0}F(s)$（$t_0>0$），$ROC$不变；$f(t + t_0)\varepsilon(t)\leftrightarrow e^{s t_0}\left[F(s)+\int_{-t_0}^{0_{-}}f(t)e^{-s t}dt\right]$（$t_0>0$）。
4. **复频移（s域平移）**：$e^{s_a t}f(t)\leftrightarrow F(s - s_a)$（$s_a=\sigma_a + j\omega_a$），$ROC$为$\text{Re}[s]>\sigma_0+\sigma_a$。
5. **时域微分**：
    - 一阶：$f'(t)\leftrightarrow s F(s)-f(0_{-})$。
    - $n$阶：$f^{(n)}(t)\leftrightarrow s^n F(s)-\sum_{k=0}^{n - 1}s^{n - 1 - k}f^{(k)}(0_{-})$。
    - 因果信号（$f^{(k)}(0_{-})=0$）：$f^{(n)}(t)\leftrightarrow s^n F(s)$。
6. **时域积分**：$\int_{0_{-}}^{t}f(\tau)d\tau\leftrightarrow\frac{F(s)}{s}$；$\int_{-\infty}^{t}f(\tau)d\tau\leftrightarrow\frac{F(s)}{s}+\frac{1}{s}\int_{-\infty}^{0_{-}}f(\tau)d\tau$，$ROC$为$\text{Re}[s]>\max(\sigma_0,0)$。
7. **卷积定理**：
    - **时域卷积**：$f_1(t)*f_2(t)\leftrightarrow F_1(s)F_2(s)$，$ROC$为$\text{Re}[s]>\max(\sigma_1,\sigma_2)$，LTI系统零状态响应$Y_{zs}(s)=F(s)H(s)$（$H(s)$为系统函数）。
    - **s域卷积**：$f_1(t)f_2(t)\leftrightarrow\frac{1}{2\pi j}\int_{\sigma - j\infty}^{\sigma + j\infty}F_1(\eta)F_2(s - \eta)d\eta$，$ROC$含$\text{Re}[s]>\sigma_1+\sigma_2$。
8. **s域微分**：$t^n f(t)\leftrightarrow(-1)^n F^{(n)}(s)$，$ROC$不变。
9. **s域积分**：$\frac{f(t)}{t}\leftrightarrow\int_{s}^{\infty}F(\eta)d\eta$，$ROC$为$\text{Re}[s]>\sigma_0$，且$\lim_{t\rightarrow0_{+}}\frac{f(t)}{t}$存在。
10. **初值定理**：若$f(t)$和$f'(t)$拉普拉斯变换存在，且$\lim_{s\rightarrow\infty}s F(s)$存在，则$f(0_{+})=\lim_{s\rightarrow\infty}s F(s)$；若$F(s)$为假分式，需先化为多项式与真分式之和，多项式对应冲激函数及其导数，初值由真分式部分计算。
11. **终值定理**：若$f(t)$和$f'(t)$拉普拉斯变换存在，且$\lim_{t\rightarrow\infty}f(t)$存在，$\lim_{s\rightarrow0}s F(s)$存在，则$f(\infty)=\lim_{s\rightarrow0}s F(s)$；仅当$s F(s)$的$ROC$含$j\omega$轴（$\sigma_0<0$）时适用。

### 三、拉普拉斯逆变换
1. **部分分式展开法**：适用于$F(s)$为有理函数的情况，$F(s)=\frac{N(s)}{D(s)}$（$N(s)$、$D(s)$为多项式）。
    - **假分式（$m\geq n$）**：多项式除法分解为$F(s)=P(s)+\frac{N_1(s)}{D(s)}$（$P(s)$为多项式，$\deg(N_1)<\deg(D)$），$P(s)$逆变换为$\sum_{k=0}^{m - n}a_k \delta^{(k)}(t)$。
    - **真分式（$m<n$）**：
        - **单阶实极点**：$D(s)=\prod_{i=1}^{n}(s - p_i)$（$p_i$互异实根），$F(s)=\sum_{i=1}^{n}\frac{A_i}{s - p_i}$，$A_i=\lim_{s\rightarrow p_i}(s - p_i)F(s)$，逆变换$f(t)=\sum_{i=1}^{n}A_i e^{p_i t}\varepsilon(t)$。
        - **共轭复极点**：$D(s)=(s - \alpha)^2+\beta^2$（一对共轭复根$p_{1,2}=\alpha\pm j\beta$），$F(s)=\frac{K s + B}{(s - \alpha)^2+\beta^2}=\frac{A}{s - (\alpha + j\beta)}+\frac{A^*}{s - (\alpha - j\beta)}$（$A$为复常数，$A^*$为共轭），逆变换$f(t)=2|A|e^{\alpha t}\cos(\beta t+\arg(A))\varepsilon(t)$。
        - **重极点**：$D(s)=(s - p)^r \prod_{i=r + 1}^{n}(s - p_i)$（$p$为$r$重实根），$F(s)=\sum_{k=1}^{r}\frac{A_k}{(s - p)^k}+\sum_{i=r + 1}^{n}\frac{B_i}{s - p_i}$，$A_k=\frac{1}{(r - k)!}\lim_{s\rightarrow p}\frac{d^{r - k}}{ds^{r - k}}\left[(s - p)^r F(s)\right]$，逆变换$f(t)=\left[\sum_{k=1}^{r}\frac{A_k}{(k - 1)!}t^{k - 1}e^{p t}\right]\varepsilon(t)+\sum_{i=r + 1}^{n}B_i e^{p_i t}\varepsilon(t)$。
2. **查表法与性质结合**：利用常见函数拉普拉斯变换表和变换性质（如时移、复频移）求解逆变换。

### 四、复频域分析（s域分析）
1. **微分方程的s域求解**：
    - 对$n$阶LTI系统微分方程$\sum_{i=0}^{n}a_i y^{(i)}(t)=\sum_{j=0}^{m}b_j f^{(j)}(t)$取拉普拉斯变换，利用时域微分性质：
        - 左边：$\sum_{i=0}^{n}a_i\left[s^i Y(s)-\sum_{k=0}^{i - 1}s^{i - 1 - k}y^{(k)}(0_{-})\right]$。
        - 右边：$\sum_{j=0}^{m}b_j\left[s^j F(s)-\sum_{k=0}^{j - 1}s^{j - 1 - k}f^{(k)}(0_{-})\right]$（若$f(t)$在$t = 0$接入，$f^{(k)}(0_{-})=0$，右边为$\sum_{j=0}^{m}b_j s^j F(s)$）。
    - 整理得$s$域代数方程，解出$Y(s)=\frac{\sum_{j=0}^{m}b_j s^j F(s)+\sum_{i=0}^{n}a_i\sum_{k=0}^{i - 1}s^{i - 1 - k}y^{(k)}(0_{-})-\sum_{j=0}^{m}b_j\sum_{k=0}^{j - 1}s^{j - 1 - k}f^{(k)}(0_{-})}{\sum_{i=0}^{n}a_i s^i}=Y_{zi}(s)+Y_{zs}(s)$，其中$Y_{zi}(s)$（零输入响应象函数）由初始状态决定，$Y_{zs}(s)$（零状态响应象函数）由激励决定。
    - 逆变换得$y(t)=\mathcal{L}^{-1}[Y(s)]=y_{zi}(t)+y_{zs}(t)$。
2. **系统函数$H(s)$**
    - **定义**：零状态响应象函数与激励象函数之比，$H(s)=\frac{Y_{zs}(s)}{F(s)}=\frac{\sum_{j=0}^{m}b_j s^j}{\sum_{i=0}^{n}a_i s^i}$，仅与系统结构和参数有关，与激励、初始状态无关。
    - **与冲激响应关系**：$H(s)=\mathcal{L}[h(t)]$，$h(t)=\mathcal{L}^{-1}[H(s)]$。
    - **求解**：由微分方程取拉普拉斯变换（零状态）、电路s域模型或系统框图求解。
3. **系统s域框图**：
    - **基本单元**：加法器（$F_1(s)+F_2(s)\leftrightarrow$输出）、数乘器（$a F(s)\leftrightarrow$输出）、积分器（$\frac{F(s)}{s}\leftrightarrow$输出，对应时域积分）、迟延单元（$e^{-s t_0}F(s)\leftrightarrow$输出，对应时域时移）。
    - **框图绘制与方程推导**：由微分方程绘制s域框图，或由s域框图列写代数方程，推导微分方程。
4. **电路的s域分析**：
    - **元件s域模型**：
        - **电阻$R$**：$U(s)=R I(s)$，模型为电阻$R$。
        - **电感$L$**：$U(s)=s L I_L(s)-L i_L(0_{-})$，串联模型为$s L$与电压源$-L i_L(0_{-})$串联；或$I_L(s)=\frac{U(s)}{s L}+\frac{i_L(0_{-})}{s}$，并联模型为$\frac{1}{s L}$与电流源$\frac{i_L(0_{-})}{s}$并联。
        - **电容$C$**：$I(s)=s C U_C(s)-C u_C(0_{-})$，并联模型为$s C$与电流源$-C u_C(0_{-})$并联；或$U_C(s)=\frac{I(s)}{s C}+\frac{u_C(0_{-})}{s}$，串联模型为$\frac{1}{s C}$与电压源$\frac{u_C(0_{-})}{s}$串联。
    - **分析步骤**：
        - 求电路初始状态$i_L(0_{-})$、$u_C(0_{-})$（画$t = 0_{-}$等效电路）。
        - 画电路s域模型（含初始状态等效电源）。
        - 列s域代数方程（KVL、KCL）。
        - 求解响应象函数$U(s)$或$I(s)$。
        - 逆变换得时域响应$u(t)$或$i(t)$。