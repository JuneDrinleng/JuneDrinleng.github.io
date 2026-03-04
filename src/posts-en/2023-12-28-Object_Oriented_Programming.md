---
layout: post
title: "Object Oriented Programming in python"
date: 2023-12-28
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

This note mainly learns object-oriented programming in python, mainly including the creation of classes, the creation of objects, the improvement of classes, the method of defining objects, object-oriented inheritance, and so on.
The learning source is mainly [3-hour Quick Start Python] (https://www.bilibili.com/video/BV1944y1x7SW?p=29&vd_source=86b2402290f7b7dee927bba58a141a81), and some understanding and summary have been added to the learning process.

<!-- more -->

# Object-Oriented Programming

# 1 Object-Oriented Principles and Concepts

Process oriented is about defining the steps in order of implementation and then programming the steps - as the complexity of the program needs to be addressed, the complexity of the code decreasesObject Oriented Programming: Focus on Attributes and Features

Define Classes--Instances in Classes

- - Attribute of Interest: \* \*

For example, you can assume that a class called atm

! [1] (https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20231228153119085.png)

Then there can be many objects in the atme class, such as atm1 is the atm of the South Park sub-branch of China Merchants Bank, and atm2 is the North Park sub-branch of Bank of China.This makes the flow of data clearer

- - Follow features: \* \*

! [] (https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241115181847.png)

After defining the function of the washing machine, you can directly call the function of the washing machine.

! [] (./2024-11-15-Object_Oriented_Programming.assets/20241115182037.png)

In addition to this, there are benefits such as object-oriented encapsulation inheritance polymorphism

The packaging is relatively easy to understand. For example, after defining the washing machine class, you only need to call the functions in it. There is no need to study how the specific functions of the washing machine class are realized.

Inheritance is due to the fact that there are a large number of repetitive attributes in different classes. For example, elementary school students and college students are all students, and they have to take exams and do homework. Then we may wish to define a large class of "students". There are elementary students and university students under the large class of students.

! [] (./2024-11-15-Object_Oriented_Programming.assets/20241115182100.png)

! [] (./2024-11-15-Object_Oriented_Programming.assets/20241115182125.png) Polymorphism means that the same interface may be implemented in different ways, such as defining student classes, and homework is required, but the homework writing method for college students and elementary school students may be different, that is, there are multiple implementation modes for the homework function - elementary school students' homework mode, college students' homework mode. After we have defined it, as long as we determine whether my student is an elementary school student or a college student and then directlyCalling the homework is fine - at this time, due to the different classes that the students belong to, they will call different homework methods themselves

! [] (./2024-11-15-Object_Oriented_Programming.assets/20241115182151.png)

# # 2 Class Creation

# # # 2.1 Naming of classes

Classes cannot contain underscores in the following format:

```
class Class Name:
# It is recommended to use hump nomenclature without any special characters such as underscores
```

For example:

```
class CuteCat:
	# Next is the code that defines the class
```

# # # 2.2 Creation of classes

A special method for classes is the constructor, which defines the properties of the instance object, which must be named\ ** init **, for example:

~ ~ ~ python
class CuteCat
def ** init ** (self) # Next is the code of the constructor

```

For\ __ init __, the first parameter must be self - conventionally colloquial, indicating that the first parameter is taken, indicating the object itself. The role of self is to bind the value of the property to the instance object

Example

~~~ python
class CuteCat
	def __ init __ (self)
    	self.name = "Rhubarb"
```

This means that the cat's name attribute is rhubarb (that is, this cat is called rhubarb), so the cat's name rhubarb is tied to this cat through `self.name = "rhubarb"'.

If you write `name = "rhubarb"`, python thinks it's just assigning a value to the variable name

# # 3 Creating an object

After creating the cat class, we can create a cat object

First, let's review the creation of classes

~ ~ ~ python
class CuteCat:
def ** init ** (self):
self.name = "Rhubarb"

```

Once we've created the class, we start to create the object

~ ~ ~ python
cat1 = CuteCat ()
```

At this point, a cat object called rhubarb was created.

The format is:

~ ~ ~ python
Object = Class Name (Parameter)

```

The init method is called and an object is returned. The self parameter does not need to be passed in manually, and the incoming can be run automatically

# # Category 4Improvement

All cats in the above created class are called rhubarb, which is obviously inappropriate, so we can make some changes and improvements to this class

~ ~ ~ python
class CuteCat:
	def __ init __ (self, cat_name):
        self.name = cat_name
```

This way, when we create the object, we need to pass in the parameters in parentheses

For example, create a cat named Little Black.

~ ~ ~ python
cat1 = CuteCat ("Little Black")

```

It's easy to add more parameters on top of this, such as:

! [] (./2024-11-15-Object_Oriented_Programming.assets/20241115182228.png)

# # 5 Method of defining objects - that is, defining functions

What we just mentioned is defining the properties of the object class, so let's now look at how to implement the definition of the function

For the definition of the function, it is actually very simple, you can refer to the definition of the function, but it needs to be written in the class, and the first parameter is occupied by self

~ ~ ~ python
class CuteCat:
	def __ init __ (self, cat_name, cat_age):        
    	self.name = cat_name
        self.age = cat_age
	def speak (self):
        print ("meow" * self.age)
```

The function of the class includes the attributes of the class that self can conveniently call, such as the age attribute of the class called above.

Then the calling function is very convenient:

~ ~ ~ python

# Create Object

cat1 = CuteCat ('Little Red', 18)
cat1.speak ()

```



# # 6 Object-Oriented Inheritance

For example, for the following two categories, it is not difficult to find a lot of duplication

! [] (./2024-11-15-Object_Oriented_Programming.assets/20241115182252.png)

Write code with as little repetition as possible, so we can create a parent class to describe commonalities

! [] (./2024-11-15-Object_Oriented_Programming.assets/20241115182315.png)

Generally speaking, subclasses call their own methods first if they call a method, and if they don't call a parent class

But this time, there is a problem that different subclasses may have different attributes, so we need the constructor of the subclass to define the attributes of the subclass, but if we use the method of `def __ init __`, then because the subclass has a constructor, the constructor of the parent class will not be called, and the commonality written in the parent class will not be called.

How to resolve:

Use super under subcategory

! [] (./2024-11-15-Object_Oriented_Programming.assets/20241115182348.png)

Use super to inherit the attributes of the parent class

# # 7 Exercise training

# # # 7.1 Definition of classes

! [] (./2024-11-15-Object_Oriented_Programming.assets/20241115182412.png)

~ ~ ~ python
class student:
    def __ init __ (self, name, id):
    	self.name = nameself.id = id
        self.grades = {"Language" ,0; "Mathematics" ,0; "English" ,0}
	def set_grade (self, course, grade)
    	if coures in self.grades:
            self.grades [course] = grade
    def print_grade (self)
    	print (self.grades)

# Create Object
xiaochen = student ("Xiao Chen", "12")
xiaochen.set_grade ("Mathematics", 95)
```

# # # Inheritance of Class 7.2

! [] (./2024-11-15-Object_Oriented_Programming.assets/20241115182435.png)~~~python
class HumanResourcesSystem:
def **init**(self,name,id):
self.name=name
self.id=id
def print_info(self):
print("name is",self.name)
print("id is",self.id)
class FullTimeEmployee(HumanResourcesSystem):
def **init**(self,name,id,salary):
super().**init**(name,id)
self.monthly_salary=salary
def calculate_monthly_pay(self):
#print("Monthly salary is",self.salary)
return self.salary
class PartTimeEmployee(HumanResourcesSystem):
def **init**(self,name,id,salary,days):
super().**init**(name,id)
self.daily_salary=salary
self.work_days=days
def calculate_monthly_pay(self):
#print("monthly salary",self.work_days*self.daily_salary)
return self.work_days*self.daily_salary

```



## Others:

1. [Design pattern catalog - 23 design patterns](https://refactoringguru.cn/design-patterns/catalog)
2. [Get started with Python quickly in 3 hours](https://www.bilibili.com/video/BV1944y1x7SW?p=29&vd_source=86b2402290f7b7dee927bba58a141a81)
3. [matlab object-oriented programming]("D:\Lab\Books\matlab object-oriented.pdf")
```
