---
layout: post
title: "Java课程学习进阶笔记 1"
date:   2025-04-01
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)中的进阶部分的学习笔记，主要包括用类产生对象等内容
<!-- more -->

## 1 用类制造对象

~~~Java
package shapes;

public class MyPicture {
    public static void main(String[] args) {
        Picture pic = new Picture(420, 250);
        Circle c1 = new Circle(320, 40, 40);
        Rectangle r1 = new Rectangle(100, 100, 100, 100);
        Triangle t1 = new Triangle(100, 100, 200, 100, 150, 50);
        Line l1 = new Line(0, 205, 400, 205);

        pic.add(c1);
        pic.add(r1);
        pic.add(t1);
        pic.add(l1);
        pic.draw();

    }
}

~~~

这里采用`new`的方式产生对象，例如用new Picture对象产生一个图对象，除此之外可以产生包括Circle类等等。只需要提前定义，那么后续我们就只需要调用这个类，就可以产生这个类相近的对象。

> 直接运行上面的代码是会报错的，因为直接运行的时候这些类都没有定义，原课件是在shapes 这个package里面定义了这些类，包括picture类、circle类等等

根据上述的例子，我们不难发现，对象是实体，需要被创建，可以为我们做事情

类是规范，我们根据类的定义来创建对象

![image-20250401162144294](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_1/image-20250401162144294.png)

对于每一个对象来说，其具有两种东西，一种是属性，一种是服务：

**对象=属性+服务**

![image-20250401162341341](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_1/image-20250401162341341.png)

对象的数据是被外部的操作紧密包围的，是由对象本身保护的，外部只能用对象进行操作，这也叫做分装

## 2 定义类

以自动售货机为例，从面向对象的角度来说，他有些什么东西，由哪些东西组成这个场景，这些场景里的东西能够提供什么服务：

![image-20250401162559530](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_1/image-20250401162559530.png)

那么根据上述的思想，我们可以抽象自助售货机有以下的属性变量和操作：

属性：`balance`、`price`、`total`

动作：`print balance`、`show prompt`、`insert money`、`get food`

~~~java
public class VendingMachine {
    int price=80;
    int balance;
    int total;

    void showPrompt(){
        System.out.println("Welcome! ");
    }

    void insertMoney(int amount){
        balance = balance + amount;
    }

    void showBalance(){
        System.out.println("Balance: " + balance);
    }

    void getFood(){
        if(balance>=price){
            System.out.println("Here is your food!");
            balance = balance - price;
            total = total+price;
        }
    }

    public static void main(String[] args) {
        VendingMachine vm = new VendingMachine();
        vm.showPrompt();
        vm.showBalance();
        vm.insertMoney(100);
        vm.getFood();
        vm.showBalance();
    }
}

~~~

自己基于刚刚创建的`vendingmachine`类创建了一个`vm`的`vending machine`的对象，

我们在类中设计了一些动作，比如`showprompt`等，我们需要用的时候只需要`vm.showBalance();`就可以调用这些我们定义的操作

当然，同一个类可以创建多个不同的对象，两个对象的内部变量彼此互不干扰（各自有一个不同的对象id）

## 3 成员变量和成员函数

类定义了对象中所具有的变量，这些变量乘坐成员变量

每个对象有自己的成员变量，和其他对象的成员变量是分开的

当我们使用`vm.showBalance`的时候，就使得java知道我们是要show的vm内的balance的值——可以将当前调用操作和操作所需成员变量之间产生联系

在类的函数中，可以直接写成员变量的名字来访问成员变量，具体访问哪个对象的成员变量或者成员操作可以通过`.`来调用。这时，通过`this`这一成员函数的特殊固有的本地变量来实现

![image-20250401165352800](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_1/image-20250401165352800.png)

![image-20250401165444778](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_1/image-20250401165444778.png)

在一个成员函数里调用另一个成员函数的时候，即便不带this也会自动调用

![image-20250401165650138](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_1/image-20250401165650138.png)

类里的成员函数也可以用到类内的这些成员变量

## 4 对象初始化

每次创建一个新的对象的时候，一个很重要的事情是要看对象刚创建出来的时候，所有的成员变量如果没有初始化，会自动给一个初始值`0`（Boolean的false，string的none），这是和全局变量不一样的（全局变量如果不初始化是会报错的）

![image-20250401170404646](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_1/image-20250401170404646.png)

构造函数是和类名一样的，创建这个类的每一个对象都会调用这个构造函数，且没有返回类型

~~~java
public class VendingMachine {
    int price=80;
    int balance;
    int total;
    VendingMachine() {
        total=0;
    }
    VendingMachine(int price) {
        this.price = price;
    }
    void showPrompt(){
        System.out.println("Welcome! ");
    }

    void insertMoney(int amount){
        balance = balance + amount;
    }

    void showBalance(){
        System.out.println("Balance: " + balance);
    }

    void getFood(){
        if(balance>=price){
            System.out.println("Here is your food!");
            balance = balance - price;
            total = total+price;
        }
    }

    public static void main(String[] args) {
        VendingMachine vm = new VendingMachine();
        vm.showPrompt();
        vm.showBalance();
        vm.insertMoney(100);
        vm.getFood();
        vm.showBalance();
    }
}

~~~

同名但是参数表不同，调用的时候根据给出什么参数来选择调用不同的构造函数

交作业的时候需要两个类放一个文件里，而idea则要求一个类就是一个文件，一定不要拷贝package的内容