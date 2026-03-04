---
layout: post
title: "Java Course Learning Advanced Notes 2"
date:   2025-04-01
tags: [cs_basic]
comments: true
author: junedrinleng
---

This note mainly records the advanced part of the [Java beginner and advanced course](https://www.bilibili.com/video/BV1wL411L7A3?p=3) by Wang Kai from Zhejiang University, focusing on object recognition, object interaction, encapsulated access attributes, open access attributes, class variables and class functions, etc.
<!-- more -->

## 1 Object Recognition

How to recognize objects? For example, a clock:

![image-20250401181058703](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401181058703.png)

The entire clock can be an object, or each digit can be an object, or:

![image-20250401181133673](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401181133673.png)

Since hours and minutes share some similarities, such as numerical display, numerical increment operation, and resetting to zero after reaching a maximum value:

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

This solves the problem of an hour object or minute object (constructing the Display class, only different initialization settings are needed)

The issue lies in the final clock object, which is implemented through interaction between hour and minute objects. Obviously, we don't want this interaction to be implemented internally in the Display object, as it would mean the class needs to handle different settings for different objects

Therefore, to implement such an object, we can only base it on the clock object that transcends hour and minute objects:

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

A class's member variable can be another object

## 2 Encapsulated Access Attributes

In the above code, `private` means the member is private, i.e., only accessible within the class, and cannot be directly used outside the class, thus being hidden

A fundamental principle is that, unless there are special requirements, we should make member variables private so that their usage can follow the designer's intentions

![image-20250401184404599](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401184404599.png)

This is viewed from the code level, not the runtime perspective, **privateness is targeted at the class rather than the object**哦

## 3 Open Access Attributes /think
Except for `private`, there are many that are `public`. Once defined as `public`, you can call them from anywhere.

For a member, if there is no declaration of `public` or `private` before it, this member is `friendly`, and all contents in the same package (package) can access it.

In addition, there is `protected` which will be introduced in the inheritance section.

Note that if a type is `public`, it must be defined in its own file. For example, a `public` class named `clock` can only be stored in `clock.java`.

If it is not a `public` class, then it is possible:

![image-20250401185032918](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185032918.png)

**A compilation unit can only contain one `public` class**

## 4 Packages (package)

![image-20250401185202460](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185202460.png)

For the `clock` project, there is a package named `clock` located in the `src` folder. The `Clock.java` and `Display.java` under `src/clock` are classes in the `clock package`.

We can also create new `packages`:

![image-20250401185352166](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185352166.png)

For example, we have created two packages named `Clock package` and `Display package`, which are empty. The other two are the already created classes `Clock.java` and `Display.java`. If we want to place different classes in different `packages`, we can simply drag them into the respective folders:

![image-20250401185656190](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185656190.png)

At this point, the `Display.java` also changes its `package` information:

![image-20250401185744413](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185744413.png)

Now belongs to the `Display package`

Similarly, after dragging `Clock.java` into the `Clock package`, the following error occurs:

![image-20250401185858744](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185858744.png)

This is because `Clock.java` and `Display.java` now belong to two different packages and cannot access each other anymore.

At this point, we need to import another package to use it:

![image-20250401190017699](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401190017699.png)

The import syntax here is as follows:

~~~java
import package_name.class_in_package_name;
~~~

All files in this directory belong to a package, and the package name is the name of the folder.

Here, `package_name.class_in_package_name` is the full name of the class.

Of course, if you want to import all contents in this package, you can use:

~~~java
import package_name.*;
~~~

To import all classes in the package.

Packages can also be nested:

![image-20250401190501852](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401190501852.png)

The package name can contain dots. Each dot represents a folder level.

## 5 Class Variables
`static` is not a general static dynamic

When a static variable of a particular object is modified, will it notify other objects' related static variables?

Static variables can be directly accessed via `Class.variableName`

In reality, static variables are not member variables but called class variables. The entire class shares one instance, and when other objects modify this class variable, all other objects' instances of this class variable will also change

![image-20250401192250756](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401192250756.png)

That is, `d1` knows it belongs to the `display` class, `d2` also does. Therefore, when accessing the class variable `d1.step`, `d1` will automatically find its belonging class `Display`, then retrieve its class variable `Display.step`

## 6 Class Functions

Our main function has `static`, indicating the function has no relation with objects, it belongs to the class

Static functions can only access static functions and static variables. When accessed through objects, they cannot obtain information about the object

Static initialization has no relation with object creation

It can be understood as the following process:

Create class --> Initialize class variables and class functions --> Create objects based on the class --> Initialize member variables within the object