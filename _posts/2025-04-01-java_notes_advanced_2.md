---
layout: post
title: "Java课程学习进阶笔记 2"
date:   2025-04-01
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)中的进阶部分的学习笔记，主要对象的识别、对象的交互、封闭的访问属性、开发的访问属性、类变量和类函数等内容
<!-- more -->

## 1 对象的识别

如何识别对象呢，比如说一个时钟：

![image-20250401181058703](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401181058703.png)

可以整只钟是一个对象，也可以是每一位数字是一个对象，还可以是：

![image-20250401181133673](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401181133673.png)

因为小时和分钟有一些相似的内容，例如数值现实、数值+1操作、数值加到某一个上限之后归零

~~~java
public class Display {
    private int value=0;
    private int limit=0;

    public Display(int limit) {
        this.limit=limit;
    }
    public void increase() {
        value++;
        if (value==limit) {
            value=0;
        }
    }

    public  int getValue() {
        return value;
    }
    public static void main(String[] args) {
        Display h = new Display(24);
        for(;;){
            h.increase();
            System.out.println(h.getValue());
        }
    }
}

~~~

这就解决了一个小时对象或者分钟对象（构建了display类，只需要设置不一样的初始化就行了）

那么问题在于，对于最后的对象clock，是有hour对象和min对象互动实现的。这种互动我们当然不希望是在display对象内部实现的，因为这就意味着类内会需要对不同的设置来适应不同的对象

那么我们要想实现这种对象，我们只能基于clock这个凌驾于hour和min的对象

~~~java
public class Clock {
    private Display hour=new Display(24);
    private Display minute= new Display(60);

    public void start(){
        while(true) {
            minute.increase();
            if (minute.getValue() == 0) {
                hour.increase();
            }
            System.out.printf("%02d:%02d\n", hour.getValue(), minute.getValue());
        }
    }
    public static void main(String[] args) {
        Clock clock=new Clock();
        clock.start();
    }
}

~~~



一个类的成员变量，是可以是其他对象的

## 2 封闭的访问属性

对于上述代码中，`private`意味着这个成员是私有的，也就是说只有在内部类内部才能访问，类外面的时候这些成员就不能直接使用了，被隐藏了

一个基本原则是，如果没有特殊的要求的话，我们都要使得成员变量是私有的，从而可以使得成员变量的使用能按照类设计者的想法来进行

![image-20250401184404599](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401184404599.png)

这是从代码层面来看的，不是从运行角度来看的，**私有是针对类而不是对象**哦

## 3 开放的访问属性

除开`private`以外，还有很多是`public`的，一旦定义成public了，那么你可以在所有的地方调用

对于一个成员的前面，如果没有声明是`public`还是`private`的时候，那么这个成员是`friendly`的，和他位于同一个包（package）的所有内容都可以访问

除此之外还有`protected`在继承部分进行介绍

需要注意的是，如果是一个`public`的类型必须定义在他自己的文件里，比如说一个class是public 的类 clock 那么这个类只能存储在clock.java里。

如果不是public类，那就可行：

![image-20250401185032918](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401185032918.png)

**一个编译单元只能存在一个public类**

## 4 包（package）

![image-20250401185202460](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401185202460.png)

对于clock项目，有一个包叫做`clock`，存于src文件夹内，这个`src/clock `下的`Clock.java`和`Display.java`就是`clock package`下的类

我们也可以新建`package`：

![image-20250401185352166](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401185352166.png)

例如现在我们创建了两个package分别是`Clock package`和`Display package`，其中是空的，另外两个是我们已经创建好的类 `Clock.java`和`Display.java`，如果我们要把不同的类放在不同的`package`下，只需拖入即可:

![image-20250401185656190](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401185656190.png)

此时`Display.java`也改变了`package`信息：

![image-20250401185744413](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401185744413.png)

属于`Display package`了

同理，我们把Clock.java拖入Clock package之后，呈现以下的报错：

![image-20250401185858744](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401185858744.png)

这是因为Clock.java和Display.java分属于两个package了，不能互相访问了

此时需要import另一个包才能使用了：

![image-20250401190017699](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401190017699.png)

这里的import用法如下：

~~~java
import package_name.class_in_package_name;
~~~

在这个目录下的所有文件都属于一个包，包的名字就是文件夹的名字

这里的`package_name.class_in_package_name`是类的全名

当然，如果要import这个package里的所有内容，那么可以通过：

~~~java
import package_name.*;
~~~

引入包里的所有的类

当然包也可以套娃：

![image-20250401190501852](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401190501852.png)

包的名字里是可以有点的，每一个点代表一个文件夹层次

## 5 类变量

`static`不是一般意义上的静态动态

某一个对象的static变量修改之后会通知其他对象的相关static变量？

`static`变量可以直接用类.变量名 直接访问

实际上，`static`变量不是成员变量，而叫做类变量，全类只此一份，其他对象改变这个类变量，另外的所有对象的这个类变量也因此改变

![image-20250401192250756](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_2/image-20250401192250756.png)

也就是，`d1`知道自己属于`display`类，`d2`亦然，所以当你要访问类变量`d1.step`的时候，`d1`会自动找到自己所属的类`Display`，然后再获取其类变量`Display.step`

## 6 类函数

我们的main函数里是有`static`的，这表示函数和对象没关系，是属于类的

`static`的函数只能访问`static`的函数和`static`的变量，通过对象访问的时候并不能获得其对象的信息

static的初始化和对象的创建没有关系

可以理解成以下过程：

创建类—>初始化类变量和类函数—>根据类创建对象—>对象内成员变量初始化
