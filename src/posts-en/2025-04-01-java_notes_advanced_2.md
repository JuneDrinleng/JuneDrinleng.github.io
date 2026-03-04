---
layout: post
title: "Advanced Notes on Java Course Learning 2"
date: 2025-04-01
tags: [cs_basic]
comments: true
author:junedrinleng
---

This note mainly records the study notes of the advanced part of Zhejiang University Weng Kai's [Java Introduction and Advanced Course] (https://www.bilibili.com/video/BV1wL411L7A3?p=3), including the identification of main objects, interaction of objects, closed access attributes, developed access attributes, class variables and class functions, etc.
<!-- more -->

## 1 Object identification

How to identify an object, such as a clock:

![image-20250401181058703](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401181058703.png)

The whole clock can be an object, or each digit can be an object, or it can be:

![image-20250401181133673](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401181133673.png)

Because hours and minutes have some similar contents, such as numerical reality, numerical +1 operation, and numerical values returning to zero after reaching a certain upper limit.

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

    public int getValue() {
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

This solves the problem of an hour object or a minute object (the display class is built, and only different initialization needs to be set)

So the problem is that for the last object clock, there is an interaction between the hour object and the min object. Of course we don't want this interaction to be implemented inside the display object, because this means that different settings will need to be set within the class to adapt to different objects.

So if we want to implement this kind of object, we can only use clock, an object that overrides hour and min.

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



Member variables of a class can be other objects

## 2 Closed access attributes

For the above code, `private` means that this member is private, which means that it can only be accessed inside the inner class. When outside the class, these members cannot be used directly and are hidden.

A basic principle is that if there are no special requirements, we must make member variables private so that the use of member variables can be carried out according to the ideas of the class designer.

![image-20250401184404599](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401184404599.png)

This is from the code level, not from the running perspective. **Private is for classes, not objects**

## 3 Open access attributes

In addition to `private`, there are many `public` ones. Once defined as public, you can call them everywhere

For a member, if there is no declaration of `public` or `private`, then the member is `friendly` and all content in the same package can be accessed.

In addition, there is also `protected` which is introduced in the inheritance section.

It should be noted that if it is a `public` type, it must be defined in its own file. For example, if a class is public class clock, then this class can only be stored in clock.java.

If it's not a public class, it works:

![image-20250401185032918](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185032918.png)

**Only one public class can exist in a compilation unit**

## 4 package

![image-20250401185202460](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185202460.png)

For the clock project, there is a package called `clock`, which is stored in the src folder. `Clock.java` and `Display.java` under this `src/clock` are the classes under the `clock package`

We can also create a new `package`:

![image-20250401185352166](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185352166.png)

For example, now we have created two packages, namely `Clock package` and `Display package`, which are empty, and the other two are the classes we have created, `Clock.java` and `Display.java`. If we want to put different classes under different `packages`, just drag them in:

![image-20250401185656190](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185656190.png)

At this time `Display.java` also changed the `package` information:

![image-20250401185744413](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185744413.png)

Belongs to `Display package`

In the same way, after we drag Clock.java into the Clock package, the following error message appears:

![image-20250401185858744](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185858744.png)

This is because Clock.java and Display.java belong to two packages and cannot access each other.

At this time, you need to import another package to use it:

![image-20250401190017699](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401190017699.png)

The import usage here is as follows:~~~java
import package_name.class_in_package_name;
~~~

All files in this directory belong to a package, and the name of the package is the name of the folder.

Here `package_name.class_in_package_name` is the full name of the class

Of course, if you want to import all the content in this package, you can pass:

~~~java
import package_name.*;
~~~

Import all classes in the package

Of course, the bag can also be used as a nesting doll:

![image-20250401190501852](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401190501852.png)

There can be dots in the name of the package. Each dot represents a folder level.

## 5 Class variables

`static` is not static or dynamic in the general sense

After the static variable of a certain object is modified, will the related static variables of other objects be notified?

`static` variables can be accessed directly using class.variable name.

In fact, `static` variables are not member variables, but are called class variables. There is only one copy of this class variable in the whole class. If other objects change this class variable, the class variables of all other objects will also change accordingly.

![image-20250401192250756](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401192250756.png)

That is, `d1` knows that it belongs to the `display` class, and `d2` does the same, so when you want to access the class variable `d1.step`, `d1` will automatically find the class `Display` to which it belongs, and then obtain its class variable `Display.step`

## 6 Class functions

There is `static` in our main function, which means that the function has nothing to do with the object and belongs to the class.

`static` functions can only access `static` functions and `static` variables. When accessing through objects, they cannot obtain the information of their objects.

Static initialization has nothing to do with object creation

It can be understood as the following process:

Create a class—>Initialize class variables and class functions—>Create an object based on the class—>Initialize member variables within the object