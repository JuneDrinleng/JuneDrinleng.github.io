---
layout: post
title: "Advanced Notes on Java Course Learning 1"
date: 2025-04-01
tags: [cs_basic]
comments: true
author:junedrinleng
---

This note mainly records the study notes of the advanced part of Zhejiang University Weng Kai's [Java Introduction and Advanced Course] (https://www.bilibili.com/video/BV1wL411L7A3?p=3), which mainly includes the use of classes to generate objects, etc.
<!-- more -->

## 1 Create objects with classes

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

Here, the `new` method is used to generate objects, for example, the new Picture object is used to generate a picture object. In addition, the Circle class and so on can be generated. It only needs to be defined in advance, and then we only need to call this class later to generate objects similar to this class.

> If you run the above code directly, an error will be reported, because these classes are not defined when you run it directly. The original courseware defines these classes in the shapes package, including picture class, circle class, etc.

Based on the above examples, it is not difficult to find that objects are entities that need to be created and can do things for us.

Classes are specifications and we create objects based on the definition of classes

![image-20250401162144294](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401162144294.png)

For every object, it has two things, one is attributes and the other is services:

**Object=Property+Service**

![image-20250401162341341](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401162341341.png)

The object's data is closely surrounded by external operations and is protected by the object itself. External operations can only be performed using the object. This is also called packaging.

## 2 Define class

Take a vending machine as an example. From an object-oriented perspective, what things does it have, what things make up this scene, and what services can the things in these scenes provide:

![image-20250401162559530](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401162559530.png)

Then based on the above ideas, we can abstract the self-service vending machine to have the following attribute variables and operations:

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

I created a `vending machine` object of `vm` based on the `vendingmachine` class I just created.

We have designed some actions in the class, such as `showprompt`, etc. When we need to use it, we only need `vm.showBalance();` to call these operations we defined.

Of course, the same class can create multiple different objects, and the internal variables of the two objects do not interfere with each other (each has a different object ID)

## 3 Member variables and member functions

The class defines the variables contained in the object, and these variables are used as member variables

Each object has its own member variables, which are separate from the member variables of other objects.

When we use `vm.showBalance`, we let java know that we want to show the value of balance in the vm - we can make a connection between the current calling operation and the member variables required for the operation.

In the function of the class, you can directly write the name of the member variable to access the member variable. The member variable or member operation of the specific object to be accessed can be called through `.`. At this time, it is implemented through the special inherent local variable of the member function `this`

![image-20250401165352800](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401165352800.png)

![image-20250401165444778](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401165444778.png)

When calling another member function in a member function, it will be called automatically even without this.

![image-20250401165650138](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401165650138.png)

Member functions in the class can also use these member variables in the class

## 4 Object initialization

Every time you create a new object, a very important thing is to see that when the object is just created, if all member variables are not initialized, they will automatically be given an initial value of `0` (false for Boolean, none for string). This is different from global variables (global variables will report an error if they are not initialized)

![image-20250401170404646](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401170404646.png)

The constructor is the same as the class name. Every object created in this class will call this constructor and has no return type.

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
    }void insertMoney(int amount){
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

The same name but different parameter lists. When calling, choose to call different constructors based on what parameters are given.

When submitting the assignment, you need to put two classes in one file, but the idea requires that one class be one file, and you must not copy the contents of the package.