---
title: linux基础文件操作
cover: /assets/images/cover3.jpg
icon: pen-to-square
date: 2025-12-24
category:
  - linux
star: true
sticky: true
author: superxuan
---
以下是修改后的**实验三**详细实现步骤，以及实验一、二、四的原有内容（保持不变），所有命令均基于**Bash环境**和**Vim编辑器**编写，确保操作可复现。

---

# 实验一：Linux基础文件操作（无修改，保留原内容）
### （1）显示当前用户所在位置
```bash
pwd  # 打印当前工作目录
```

### （2）在当前目录下创建class1文件夹
```bash
mkdir class1
```

### （3）进入class1文件夹
```bash
cd class1
```

### （4）用vi创建abc.txt并写入10行内容
```bash
# 快捷方式：直接写入10行内容，无需手动vi
for i in {1..10}; do echo "line$i" >> abc.txt; done
# 或手动vi编辑：vi abc.txt，输入内容后:wq保存
```

### （5）创建abc.txt的副本：abc、test.txt、readme.txt
```bash
cp abc.txt abc
cp abc.txt test.txt
cp abc.txt readme.txt
```

### （6）查看abc.txt内容
```bash
cat abc.txt
```

### （7）显示abc.txt前5行
```bash
head -5 abc.txt
```

### （8）显示abc.txt后2行
```bash
tail -2 abc.txt
```

### （9）合并abc.txt和abc到all.txt
```bash
cat abc.txt abc > all.txt
```

### （10）显示class1下所有文件的权限
```bash
ls -l  # 长列表显示，包含权限列
```

### （11）分析readme.txt的权限
```bash
ls -l readme.txt
# 权限解析：例如-rw-r--r--，依次为：
# -：文件类型（普通文件）
# rw-：所有者权限（读、写）
# r--：所属组权限（读）
# r--：其他用户权限（读）
```

### （12）复制所有.txt文件到家目录
```bash
cp *.txt /home/user/  # 替换user为实际用户名
```

### （13）在家目录新建test文件夹
```bash
mkdir /home/user/test
```

### （14）拷贝abc.txt到test并切换目录
```bash
cp abc.txt /home/user/test/
cd /home/user/test/
```

### （15）修改abc.txt权限为rwxr-xr-x并查看
```bash
chmod 755 abc.txt  # 755对应rwxr-xr-x
ls -l abc.txt      # 验证权限
```

### （16）将abc.txt改名为cd.txt
```bash
mv abc.txt cd.txt
```

### （17）为test创建软链接test.link并放在家目录
```bash
ln -s /home/user/test /home/user/test.link
```

---

# 实验二：Linux进阶操作（无修改，保留原内容）
### 1. 切换到家目录
```bash
cd /home/user  # 替换user为实际用户名
```

### 2. 创建test2文件夹
```bash
mkdir test2
```

### 3. 在test2中创建record.txt，内容为2015年6月日历
```bash
cal 6 2015 > /home/user/test2/record.txt
```

### 4. 追加当前日期时间到record.txt
```bash
date >> /home/user/test2/record.txt
```

### 5. 保存含字母c的命令历史到commond.log并查看
```bash
history | grep 'c' > /home/user/test2/commond.log
cat /home/user/test2/commond.log
```

### 6. 保存最后10条命令到history.txt
```bash
history | tail -10 > /home/user/test2/history.txt
```

### 7. echo输出Linux到echo.txt
```bash
echo "Linux" > /home/user/test2/echo.txt
```

### 8. 追加$$到echo.txt（$$为当前Shell进程ID）
```bash
echo "$$" >> /home/user/test2/echo.txt
```

### 9. 复制echo.txt为copy.txt
```bash
cp /home/user/test2/echo.txt /home/user/test2/copy.txt
```

### 10. 下载并解压基因组序列
```bash
cd /home/user/test2
wget -c http://ftp.ensembl.org/pub/release-101/fasta/homo_sapiens/dna/Homo_sapiens.GRCh38.dna_sm.nonchromosomal.fa.gz
gzip -d Homo_sapiens.GRCh38.dna_sm.nonchromosomal.fa.gz  # 解压后生成.fa文件
```

### 11. 显示fa文件第100000行内容
```bash
sed -n '100000p' /home/user/test2/Homo_sapiens.GRCh38.dna_sm.nonchromosomal.fa
```

### 12. 合并.log和.fa文件到all.txt
```bash
cat /home/user/test2/*.log /home/user/test2/*.fa > /home/user/test2/all.txt
```

### 13. 为ls -l设置别名并测试
```bash
alias ll='ls -l'  # 设置别名ll
ll  # 测试别名（等价于ls -l）
```

### 14. 统计test2下文件个数
```bash
ls -l /home/user/test2 | grep -c '^-'  # 统计普通文件
```

### 15. 跳转/创建test1（一步完成）
```bash
mkdir -p /home/user/test1 && cd /home/user/test1
```

### 16. 创建并跳转test3（一步完成）
```bash
mkdir -p /home/user/test3 && cd /home/user/test3
```

### 17. 移动.txt文件到家目录，并重命名test2为class2
```bash
mv /home/user/test2/*.txt /home/user/
mv /home/user/test2 /home/user/class2
```

### 18. 删除test1、test2、test3
```bash
rm -rf /home/user/test1 /home/user/test2 /home/user/test3
```

---

# 实验三：Vim高级操作与文件管理（修改后）
### （1）在家目录创建tmp3并进入
```bash
mkdir -p /home/user/tmp3 && cd /home/user/tmp3  # 替换user为实际用户名
```

### （2）创建test.txt文件
```bash
touch test.txt
```

### （3）用Vim编辑test.txt，写入6行内容并复制粘贴到末尾
```bash
vim test.txt
```
**Vim操作步骤**：
1. 按`i`进入**插入模式**，依次输入以下6行：
   ```
   good morning
   hello python
   12345
   Linux
   a good tool
   vim
   ```
2. 按`Esc`回到**普通模式**，输入`gg`跳转到首行，输入`V6j`选中前6行（可视行模式）。
3. 按`y`复制选中内容，输入`G`跳转到文件末尾，按`p`粘贴内容（此时文件共12行）。
4. 输入`:w`保存文件（不退出）。

### （4）将文件最后两行合并为一行
在Vim**普通模式**下操作：
1. 输入`G`跳转到最后一行，按`k`上移到倒数第二行。
2. 输入`J`（大写J）将当前行与下一行合并（合并后倒数两行变为一行，文件共11行）。
3. 输入`:w`保存。

### （5）在文件首行插入学号
在Vim**普通模式**下操作：
1. 输入`gg`跳转到首行。
2. 按`i`进入**插入模式**，输入你的学号（如`20241234`），按`Esc`回到普通模式。
3. 输入`:w`保存。

### （6）将首行（学号）复制并粘贴到文件末尾
在Vim**普通模式**下操作：
1. 输入`gg`跳转到首行，按`yy`复制当前行。
2. 输入`G`跳转到文件末尾，按`p`粘贴内容。
3. 输入`:w`保存。

### （7）用Vim块选择模式删除第3-5行的前3个字符
在Vim**普通模式**下操作：
1. 输入`3G`跳转到第3行，按`Ctrl + V`进入**块选择模式**（可视块）。
2. 按`2j`选中第3-5行，按`3l`选中每行前3个字符（光标向右移动3次）。
3. 按`d`删除选中的块内容，输入`:w`保存。

### （9）将文件另存为学号命名的文件并退出Vim
> 注：原步骤无（8），序号顺延
在Vim**普通模式**下输入：
```vim
:w 20241234.txt  # 替换为你的学号，如20241234.txt
:q  # 退出Vim
```

### （10）从PDB数据库下载2ffu.pdb到当前目录
```bash
wget -c https://files.rcsb.org/download/2ffu.pdb
```

### （11）重命名为c.txt，用Vim搜索以"C"开头的行并高亮
```bash
mv 2ffu.pdb c.txt
vim c.txt
```
**Vim操作步骤**：
1. 输入`:set hlsearch`启用搜索高亮。
2. 输入`/^C`（正则表达式，匹配以C开头的行），按`Enter`开始搜索。
3. 按`Esc`，输入`:q`退出Vim。

### （12）再次打开c.txt，执行系列修改并另存为pdb-modified.txt
```bash
vim c.txt
```
**Vim操作步骤**：
1. 输入`:set nu`开启行号显示。
2. 输入`:20,30s/C/D/g`（将20-30行的所有C替换为D）。
3. 输入`892G`跳转到892行，按`dd`删除该行。
4. 输入`:%s/^/pdb/`（在每行开头插入"pdb"）。
5. 输入`:w pdb-modified.txt`另存为新文件。
6. 输入`:q`退出Vim。

### （13）为pdb-modified.txt创建副本pdb-bak.txt
```bash
cp pdb-modified.txt pdb-bak.txt
```

### （14）将学号命名的文件内容追加到pdb-modified.txt末尾
```bash
cat 20241234.txt >> pdb-modified.txt  # 替换为你的学号文件
```

### （15）保存包含cd命令的历史记录到commond.txt
```bash
history | grep 'cd' > commond.txt
```

### （16）查找当前目录及子目录下所有.txt文件
```bash
find . -name "*.txt"  # .表示当前目录，-name匹配文件名
```

### （17）统计当前目录下.txt文件总数
```bash
ls -l *.txt | grep -c '^-'  # 仅统计当前目录的普通.txt文件
# 若包含子目录：find . -name "*.txt" | wc -l
```

### （18）输出"hello world"
```bash
echo "hello world"
```

### （19）Vim三种主要模式及转换关系
| 模式         | 功能描述                     | 进入方式                          | 退出/转换方式                     |
|--------------|------------------------------|-----------------------------------|-----------------------------------|
| **普通模式** | 执行编辑、复制、粘贴等命令   | Vim启动默认进入；其他模式按`Esc`  | 按`i/a/o`进入插入模式；按`:`进入命令行模式 |
| **插入模式** | 输入文本内容                 | 普通模式下按`i`（光标前）/`a`（光标后）/`o`（新行） | 按`Esc`回到普通模式               |
| **命令行模式** | 执行保存、退出、替换等高级操作 | 普通模式下按`:`/`/`（搜索）/`?`（反向搜索） | 执行命令后自动回到普通模式；按`Esc`可取消命令 |

---

# 实验四：Shell脚本编程（无修改，保留原内容）
### （1）创建tmp4并跳转
```bash
mkdir -p /home/user/tmp4 && cd /home/user/tmp4
```

### （2）新建hello.sh
```bash
touch hello.sh
```

### （3）用vi编辑hello.sh
```bash
vim hello.sh
```
写入内容：
```bash
#!/bin/bash
echo "Hello Word"
```
按`Esc`，输入`:wq`保存退出。

### （4）执行hello.sh
```bash
chmod +x hello.sh  # 添加执行权限
./hello.sh         # 执行脚本
```

### （5）脚本：纵向打印1到100
创建`print_1_100.sh`：
```bash
vim print_1_100.sh
```
写入内容：
```bash
#!/bin/bash
for i in {1..100}; do
    echo $i
done
```
执行：
```bash
chmod +x print_1_100.sh
./print_1_100.sh
```

### （6）脚本：比较两个字符串
创建`compare_str.sh`：
```bash
vim compare_str.sh
```
写入内容：
```bash
#!/bin/bash
str1="happy"
str2="happen"
if [ "$str1" = "$str2" ]; then
    echo "happy=happen"
else
    echo "happy!=happen"
fi
```
执行：
```bash
chmod +x compare_str.sh
./compare_str.sh
```

### （7）创建99个文件（跳过test63.txt）
```bash
# 方法1：循环创建
for i in {1..100}; do
    if [ $i -ne 63 ]; then
        touch test$i.txt
    fi
done

# 方法2：批量创建后删除
touch test{1..100}.txt
rm test63.txt
```

### （8）脚本：计算0-10奇数的乘积（带注释）
创建`odd_product.sh`：
```bash
vim odd_product.sh
```
写入内容：
```bash
#!/bin/bash
# 初始化乘积变量为1
product=1
# 循环0到10的数字
for ((i=0; i<=10; i++)); do
    # 判断是否为奇数
    if ((i % 2 != 0)); then
        # 乘积累积
        product=$((product * i))
    fi
done
# 输出结果
echo "0-10奇数的乘积：$product"
```
执行：
```bash
chmod +x odd_product.sh
./odd_product.sh
```

### （9）脚本：打印1-100能被7整除且非5倍数的数到11.txt
创建`div7_not5.sh`：
```bash
vim div7_not5.sh
```
写入内容：
```bash
#!/bin/bash
> 11.txt  # 清空文件
for ((i=1; i<=100; i++)); do
    if ((i % 7 == 0 && i % 5 != 0)); then
        echo $i >> 11.txt
    fi
done
echo "结果已保存到11.txt"
```
执行：
```bash
chmod +x div7_not5.sh
./div7_not5.sh
cat 11.txt
```

---

# 注意事项
1. 所有`/home/user`需替换为实际用户名（如`/home/ubuntu`、`/home/root`）。
2. Vim操作中，若误操作可按`Esc`回到普通模式，输入`:q!`强制退出（不保存）。
3. 下载PDB文件时，若网络失败可重新执行`wget -c`断点续传。
4. 脚本执行前需添加执行权限（`chmod +x 脚本名.sh`）。