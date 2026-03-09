---
layout: post
title: "Java Course Study Advanced Notes 1"
date: 2025-04-01
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
post_id: 2025-04-01-java_notes_advanced_1
source_lang: zh
source_title: "Java课程学习进阶笔记 1"
title_key: course_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.256Z"
source_hash: df87bebd127c2e213f921097f41f143dbd13af3a513d06928c09b4b112f871c7
---

This note mainly records the advanced part of the [Java beginner and advanced course](https://www.bilibili.com/video/BV1wL411L7A3?p=3) by Wang Kai from Zhejiang University, including content on creating objects using classes
<!-- more -->

## 1 Creating Objects with Classes

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

Here, objects are created using the `new` keyword, for example, using `new Picture` to create a picture object. Other classes like `Circle` can also be instantiated in this way. As long as these classes are defined in advance, we can simply call them to create objects of the same class.

> Directly running the above code will result in errors because these classes are not defined. The original course materials define these classes in the `shapes` package, including `Picture`, `Circle`, etc.

From the above example, we can see that objects are entities that need to be created and can perform actions for us.

Classes are specifications; we create objects based on the class definition.

![image-20250401162144294](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401162144294.png)

Each object has two components: attributes and services:

**Object = Attributes + Services**

![image-20250401162341341](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401162341341.png)

An object's data is tightly enclosed by external operations and is protected by the object itself. External access can only be done through the object, which is called encapsulation.

## 2 Defining Classes

Taking an automatic vending machine as an example, from an object-oriented perspective, what does it have, what components make up this scenario, and what services can these elements provide:

![image-20250401162559530](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401162559530.png)

Based on the above ideas, we can abstract the vending machine to have the following attributes and operations:

Attributes: `balance`, `price`, `total`

Actions: `print balance`, `show prompt`, `insert money`, `get food`

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

Based on the previously created `VendingMachine` class, we created an object `vm` of the `VendingMachine` class.

We designed some actions in the class, such as `showPrompt`, and we can call these defined operations by using `vm.showBalance();` when needed.

Of course, the same class can create multiple different objects, and the internal variables of two objects do not interfere with each other (each object has its own unique object ID).

## 3 Member Variables and Member Functions
A class defines variables that an object possesses, which are referred to as member variables.

Each object has its own member variables, which are separate from those of other objects.

When using `vm.showBalance`, Java understands that we are referring to the `balance` value within the `vm` object—this establishes a connection between the current operation and the required member variable.

Within a class's function, you can directly write the name of a member variable to access it. The specific object's member variable or operation to be accessed can be determined using the `.` operator. This is achieved through `this`, a special inherent local variable of the member function.

![image-20250401165352800](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401165352800.png)

![image-20250401165444778](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401165444778.png)

When a member function calls another member function, it automatically identifies the target without explicitly using `this`.

![image-20250401165650138](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401165650138.png)

Member functions within a class can also access these member variables defined in the class.

## 4 Object Initialization

When creating a new object, it is crucial to check the initial values of all member variables. If not explicitly initialized, they are automatically set to `0` (Boolean `false`, string `none`), which differs from global variables (which will throw an error if not initialized).

![image-20250401170404646](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401170404646.png)

A constructor has the same name as the class. Every time an object of this class is created, the constructor is automatically called, and it has no return type.

```java
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
```

When the method names are the same but the parameter lists differ, the system selects the appropriate constructor based on the provided parameters.

When submitting assignments, two classes must be placed in a single file. However, the IDE requires that each class be in its own file, so do not copy package content.
