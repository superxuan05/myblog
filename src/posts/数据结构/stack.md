---
title: 栈
icon: stack
category: 数据结构
tag:
  - 栈
  - 算法
  - 数据结构
  - 408
author: superxuan
date: 2025-12-23
cover: /assets/images/cover1.jpg
excerpt: 深入理解栈的基本概念、存储结构、基本操作和应用场景，掌握408考试中的重要考点。
---

## 🌟 栈的基本概念

栈是一种特殊的线性表，只允许在表的一端进行插入和删除操作，这一端被称为**栈顶**，另一端称为**栈底**。栈遵循**后进先出**（Last In, First Out, LIFO）的原则。

### 重要特性
- **卡特兰数**：当$n$个不同元素进栈时，出栈元素不同排列的个数为($\frac{C_{2n}^n}{n+1}$)，即卡特兰数。
- **栈的长度**：栈中元素的个数称为栈的长度。
- **空栈**：不含任何元素的栈称为空栈。

## 📚 存储结构

### 顺序存储
顺序栈通常借助数组来实现，通过定义一个固定大小的数组来容纳栈元素，并使用一个变量$(top)$来指示栈顶元素的位置。

**优点**：
- 访问元素速度快
- 实现简单

**缺点**：
- 存在栈溢出的风险
- 在栈元素频繁进出时，可能需要进行大量的数据移动操作

### 链式存储
链式栈通过链表来构建，每个节点包含数据域和指向下一个节点的指针域，栈顶即为链表的头节点。

**优点**：
- 不存在固定大小的限制
- 能够根据需要动态分配内存空间

**缺点**：
- 空间开销相对较大
- 访问栈中特定位置元素时时间复杂度相对较高

## 🔧 基本操作

| 操作 | 描述 | 时间复杂度 |
|------|------|------------|
| 初始化栈 | 构造一个空栈，分配内存空间 | O(1) |
| 入栈 | 若栈未满，则将元素加入使之成为新栈顶 | O(1) |
| 出栈 | 若栈非空，则弹出栈顶元素 | O(1) |
| 读栈顶元素 | 若栈非空，则返回栈顶元素，但不删除该元素 | O(1) |
| 判断栈空 | 判断一个栈是否为空，若为空，则返回 true，否则返回 false | O(1) |

## 💡 应用场景

### 括号匹配
读取一个字符串，依次扫描所有字符，遇到左括号入栈，遇到右括号则弹出栈顶元素检查是否匹配。若扫描结束后栈为空，则括号匹配；否则，括号不匹配。

### 表达式求值
在中缀表达式转换为后缀表达式和后缀表达式求值中，栈被广泛使用：

1. **中缀转后缀**：
   - 遇到操作数直接加入后缀表达式
   - 遇到运算符则根据其优先级与栈顶运算符比较
   - 依次弹出栈中优先级高于或等于当前运算符的所有运算符并加入后缀表达式
   - 最后将栈中剩余运算符依次弹出加入后缀表达式

2. **后缀表达式求值**：
   - 从左往右扫描元素
   - 若为操作数则压入栈
   - 若为运算符则弹出两个栈顶元素进行相应运算
   - 运算结果压回栈顶

### 递归的非递归实现
递归算法可以通过栈这一数据结构转换为非递归算法，借助栈来保存函数调用的返回地址和局部变量等信息，从而实现递归功能。

## 📝 代码示例

### 顺序栈的实现

```java
public class ArrayStack {
    private int[] stack;
    private int top;
    private int maxSize;

    // 初始化栈
    public ArrayStack(int maxSize) {
        this.maxSize = maxSize;
        stack = new int[maxSize];
        top = -1; // 栈空
    }

    // 判断栈满
    public boolean isFull() {
        return top == maxSize - 1;
    }

    // 判断栈空
    public boolean isEmpty() {
        return top == -1;
    }

    // 入栈
    public void push(int value) {
        if (isFull()) {
            System.out.println("栈满，无法入栈");
            return;
        }
        top++;
        stack[top] = value;
    }

    // 出栈
    public int pop() {
        if (isEmpty()) {
            throw new RuntimeException("栈空，无法出栈");
        }
        int value = stack[top];
        top--;
        return value;
    }

    // 查看栈顶元素
    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("栈空，无元素");
        }
        return stack[top];
    }

    // 遍历栈
    public void list() {
        if (isEmpty()) {
            System.out.println("栈空，无元素");
            return;
        }
        for (int i = top; i >= 0; i--) {
            System.out.println("stack[" + i + "] = " + stack[i]);
        }
    }
}
```

### 链式栈的实现

```java
public class LinkedStack {
    private Node top; // 栈顶指针

    // 初始化栈
    public LinkedStack() {
        top = null;
    }

    // 判断栈空
    public boolean isEmpty() {
        return top == null;
    }

    // 入栈
    public void push(int value) {
        Node newNode = new Node(value);
        newNode.next = top;
        top = newNode;
    }

    // 出栈
    public int pop() {
        if (isEmpty()) {
            throw new RuntimeException("栈空，无法出栈");
        }
        int value = top.data;
        top = top.next;
        return value;
    }

    // 查看栈顶元素
    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("栈空，无元素");
        }
        return top.data;
    }

    // 遍历栈
    public void list() {
        if (isEmpty()) {
            System.out.println("栈空，无元素");
            return;
        }
        Node current = top;
        while (current != null) {
            System.out.println("stack: " + current.data);
            current = current.next;
        }
    }

    // 节点类
    private class Node {
        public int data;
        public Node next;

        public Node(int data) {
            this.data = data;
        }
    }
}
```

## 🎯 408考试重点

1. **栈的基本概念和特性**：理解栈的定义、LIFO原则和卡特兰数。
2. **存储结构**：掌握顺序栈和链式栈的实现方式及其优缺点。
3. **基本操作**：熟悉栈的初始化、入栈、出栈、读栈顶元素和判断栈空等操作。
4. **应用场景**：重点掌握括号匹配、表达式求值和递归的非递归实现。
5. **时间复杂度分析**：理解栈操作的时间复杂度。

通过以上内容的学习，相信你能够在408考试中轻松应对栈相关的题目！
