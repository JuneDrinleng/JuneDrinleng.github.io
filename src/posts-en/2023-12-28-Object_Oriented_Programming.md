---
layout: post
title: "Object-Oriented Programming in Python"
date: 2023-12-28
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
post_id: 2023-12-28-Object_Oriented_Programming
source_lang: zh
source_title: "python中的面向对象编程"
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.110Z"
source_hash: 1c21d26f743639f4a844b311b8e3f5e7496a7bfec03bec9997086313e14d62eb
---

This note primarily focuses on learning object-oriented programming (OOP) in Python, including class creation, object creation, class improvements, defining object methods, and OOP inheritance. The learning material mainly comes from [3-hour Python Quick Start](https://www.bilibili.com/video/BV1944y1x7SW?p=29&vd_source=86b2402290f7b7dee927bba58a141a81), with some personal insights and summaries added during the learning process.

<!-- more -->

# Object-Oriented Programming

## 1 Principles and Concepts of Object-Oriented Programming

Procedural programming defines steps in the order of implementation to achieve a task, then programs by following these steps — as the complexity of problems solved by programs increases, code complexity decreases.

Object-oriented programming: focuses on attributes and functionalities.

**Focusing on attributes:**

For example, we can assume a class called `atm`.

![1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20231228153119085.png)

The `atm` class can contain many objects, such as `atm1` representing an ATM at the China Merchants Bank Nanyuan Branch, and `atm2` representing an ATM at the Bank of China Beiyuan Branch. This makes data flow clearer.

**Focusing on functionality:**

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241115181847.png)

After defining the functionality of a washing machine, you can directly call its functions.

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182037.png)

In addition to these, object-oriented programming offers benefits such as encapsulation, inheritance, and polymorphism.

Encapsulation is relatively easy to understand. For example, after defining a washing machine class, you only need to call its functions without needing to study how the class's functionality is implemented.

Inheritance arises when different classes have many repeated attributes. For instance, both the elementary school student class and the university student class are students, both needing to take exams and do homework. We can define a larger class "Student" with subclasses like elementary school students and university students.

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182100.png)

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182125.png) Polymorphism refers to the same interface possibly having different implementations. For example, defining a student class where all students need to do homework, but the method for doing homework may differ between university students and elementary school students. This means the "do homework" functionality has multiple implementation modes — elementary school student homework mode and university student homework mode. After defining these, you only need to determine whether the student is an elementary school student or a university student and directly call the homework method — at this point, different classes of students will automatically call different homework methods.

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182151.png)

## 2 Class Creation

### 2.1 Class Naming

Classes cannot contain underscores; the format is:
~~~
class ClassName:
# Class names are recommended to use camelCase, without any underscores or special characters
~~~

Example:

~~~
class CuteCat:
	# Code for defining the class follows
~~~

### 2.2 Class Creation

A special method for classes is the constructor, used to define instance attributes. It must be named `__init__`, like:

~~~python
class CuteCat
	def __init__(self)
    	# Code for the constructor follows
~~~

For `__init__`, the first parameter must be `self` — a convention indicating the parameter is occupied by the object itself. The `self` parameter's role is to bind attribute values to the instance object.

Example:

~~~python
class CuteCat
	def __init__(self)
    	self.name="大黄"
~~~

This indicates the cat's name attribute is "大黄" (the cat is named 大黄). Through `self.name="大黄"`, the name "大黄" is bound to this cat.

If written as `name="大黄"`, Python treats it as simply assigning a value to the variable `name`.

## 3 Object Creation

After creating the `CuteCat` class, we can create a cat object.

First, we review class creation:

~~~python
class CuteCat:
    def __init__(self):
        self.name="大黄"
~~~

After creating the class, we begin creating objects:

~~~python
cat1=CuteCat()
~~~

This creates a cat object named 大黄.

The format is:

~~~python
object = ClassName(parameters)
~~~

This calls the `__init__` method and returns an object. The `self` parameter does not need to be manually passed; it is automatically passed.

## 4 Improving Classes
The above-created class has all cats named "Da Huang," which is clearly inappropriate. Therefore, we can modify and improve this class.

```python
class CuteCat:
    def __init__(self, cat_name):
        self.name = cat_name
```

Now, when creating objects, we need to pass parameters in the parentheses.

For example, creating a cat object named "Xiao He":

```python
cat1 = CuteCat("Xiao He")
```

Adding more parameters is straightforward based on this foundation, for example:

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182228.png)

## 5 Defining Object Methods - Defining Functionalities

The above discussions focus on defining attributes of object classes. Now, let's explore how to define functionalities.

Defining functionalities is simple; it can be referenced from function definitions, but needs to be written within the class, with the first parameter occupied by `self`.

```python
class CuteCat:
    def __init__(self, cat_name, cat_age):  
        self.name = cat_name
        self.age = cat_age
    def speak(self):
        print("Meow" * self.age)
```

Class functionalities containing `self` can conveniently call class attributes, such as the age attribute mentioned above.

Calling functionalities is convenient:

```python
# Creating objects
cat1 = CuteCat('Xiao Hong', 18)
cat1.speak()
```

## 6 Inheritance in Object-Oriented Programming

For example, the following two classes have many repeated codes:

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182252.png)

Writing code should minimize repetition as much as possible. Therefore, we can create a parent class to describe commonalities.

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182315.png)

Generally, child classes prioritize calling their own methods first. If not found, they call the parent class methods.

However, this raises a problem: different child classes may have different attributes. Therefore, we need child class constructors to define their attributes. But using `def __init__` would prevent the parent class constructor from being called, making the commonalities in the parent class inaccessible.

How to solve this:

Use `super` in the child class.

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182348.png)

Use `super` to inherit parent class attributes.

## 7 Exercise Practice

### 7.1 Class Definition

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182412.png)

```python
class student:
    def __init__(self, name, id):
        self.name = name
        self.id = id
        self.grades = {"Chinese": 0, "Math": 0, "English": 0}
    def set_grade(self, course, grade):
        if course in self.grades:
            self.grades[course] = grade
    def print_grade(self):
        print(self.grades)
        
# Creating objects
xiaochen = student("Xiao Chen", "12")
xiaochen.set_grade("Math", 95)
```

### 7.2 Class Inheritance

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182435.png)

```python
class HumanResourcesSystem:
    def __init__(self, name, id):
        self.name = name
        self.id = id
    def print_info(self):
        print("Name:", self.name)
        print("ID:", self.id)
class FullTimeEmployee(HumanResourcesSystem):
    def __init__(self, name, id, salary):
        super().__init__(name, id)
        self.monthly_salary = salary
    def calculate_monthly_pay(self):    
        return self.monthly_salary
class PartTimeEmployee(HumanResourcesSystem):
    def __init__(self, name, id, salary, days):
        super().__init__(name, id)
        self.daily_salary = salary
        self.work_days = days
    def calculate_monthly_pay(self):    
        return self.work_days * self.daily_salary
```
1. [Design Patterns Catalog — 23 Design Patterns](https://refactoringguru.cn/design-patterns/catalog)
2. [3 Hours Quick Start to Python](https://www.bilibili.com/video/BV1944y1x7SW?p=29&vd_source=86b2402290f7b7dee927bba58a141a81)
3. [MATLAB Object-Oriented Programming]("D:\Lab\Books\MATLAB Object-Oriented Programming.pdf")
