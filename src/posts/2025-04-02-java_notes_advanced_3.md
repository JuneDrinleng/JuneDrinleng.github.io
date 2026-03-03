---
layout: post
title: "Java课程学习进阶笔记 3"
date:   2025-04-02
tags: [cs_basic]
comments: true
author: junedrinleng
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)中的进阶部分的学习笔记，主要记事本实例，泛型容器类型，arraylist操作，对象数组，集合容器和hash表等内容
<!-- more -->

## 1 记事本实例

对于记事本，我们需要满足以下的要求：

- 能存储记录
- 不能限制存储记录的梳理
- 能知道已经存储的记录的数量
- 能查看存进去的每一条记录
- 能删除每一条记录
- 能列出所有的记录

> 需要注意，对于较为高级的编写程序，实现软件构造，我们需要将人机交互和业务逻辑进行分离——前后端分离

对于记事本来说，我们需要设计接口。当然对于后端来说，我们不需要考虑数据的输入到底是怎么来到，可以是命令行交互，可以是客户端也可以是网页，这些是前端的事情，我们不需要去管，作为后端我们只需要做好接口就行

根据上述内容，我们先定义类，并设计接口：

~~~java
public class NoteBook {
    public void add(String s){

    }
    public int getSize(){
        return 0;
    }
    public String getNote(int index){
        return "";
    }
    public boolean removeNote(int index){
        return true;
    }

    public String[] list(){
        return new String[10];
    }

    public static void main(String[] args) {

    }
}

~~~

接口的具体内容我们暂时可以先不管，但是我们需要先把这些框架给搭建起来

## 2 泛型容器类

要存放很多东西，在入门课程里我们学习了数组，可以存放很多东西

但问题在于，数组是需要设定一开始的长度，因此并不满足这里我们要一直添加的目的，因此为了解决这个问题我们需要使用容器

~~~java
private ArrayList<String> notes = new ArrayList<String>();
~~~

我们通过`ArrayList`的方式创建一个`ArrayList`对象，后面的尖括号内容表示是存放什么的`ArrayList`，这里是存放`String`的，这种类型是泛型类

![image-20250402162016289](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_3/image-20250402162016289.png)

~~~java
容器类型<元素类型>
~~~

这里的容器类型是`ArrayList`

容器本身是有`size`方法来获得容器里的内容`size`的

那么通过上述的ArrayList的方式，我们可以把之前的接口内容进行丰富：

~~~java
import java.util.ArrayList;

public class NoteBook {
    private ArrayList<String> notes = new ArrayList<String>();
    public void add(String s){
        notes.add(s);
    }
    public int getSize(){
        return notes.size();
    }
    public String getNote(int index){
        return "";
    }
    public boolean removeNote(int index){
        return true;
    }

    public String[] list(){
        return new String[10];
    }

    public static void main(String[] args) {
        NoteBook nb = new NoteBook();
        nb.add("Java");
        nb.add("Python");
        System.out.println(nb.getSize());
    }
}

~~~

简单测试一下，发现可以正确的实现加string和getSize两个功能

## 3 ArrayList的操作

ArrayList的添加是有顺序的，所以我们可以使用他来根据index获得对应的内容：

~~~java
ArrayList对象.get(index)
~~~

如果要拿到索引范围外的内容，会报错

除此之外，ArrayList还有remove方法，结果是如果出错则报错，否准就给的是删除后的数组

~~~
import java.util.ArrayList;

public class NoteBook {
    private ArrayList<String> notes = new ArrayList<String>();
    public void add(String s){
        notes.add(s);
    }
    public void addLocation(String s, int index){
        notes.add(index,s);
    }
    public int getSize(){
        return notes.size();
    }
    public String getNote(int index){
        return notes.get(index);
    }
    public void removeNote(int index){
        notes.remove(index);
    }

    public String[] list(){
        String[] a=new String[notes.size()];
        for(int i=0;i<notes.size();i++){
            a[i]=notes.get(i);
        }
        return a;
    }

    public static void main(String[] args) {
        NoteBook nb = new NoteBook();
        nb.add("Python");
        nb.addLocation("Java",0);
        System.out.println(nb.getSize());
        System.out.println(nb.getNote(0));
    }
}

~~~

但其实我们可以用`ArrayList`的`toArrary`来把`ArrayList`转化成`Array`:

~~~java
import java.util.ArrayList;

public class NoteBook {
    private ArrayList<String> notes = new ArrayList<String>();
    public void add(String s){
        notes.add(s);
    }
    public void addLocation(String s, int index){
        notes.add(index,s);
    }
    public int getSize(){
        return notes.size();
    }
    public String getNote(int index){
        return notes.get(index);
    }
    public void removeNote(int index){
        notes.remove(index);
    }

    public String[] list(){
        String[] a=new String[notes.size()];
        notes.toArray(a);
        return a;
    }

    public static void main(String[] args) {
        NoteBook nb = new NoteBook();
        nb.add("Python");
        nb.addLocation("Java",0);
        System.out.println(nb.getSize());
        System.out.println(nb.getNote(0));
    }
}

~~~

需要注意的是，对于array而言，int array和string array是不一样的：

这是因为，每一个int变量 都存储一个数，而每一个String变量则都存储的是一个指针，指向了字符串所存储的位置。那么对于array自然也就同理了

![image-20250402172332278](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_3/image-20250402172332278.png)

所以创建`String[] a=new string[10]`创建的是一个全是空索引的array

**对象数组中的每个元素都是对象的管理者，而非对象本身**

## 4 对象数组的for each循环

对于普通数组：

~~~java
int[] ia =new int[10];
for(int i=0;i<ia.length();i++){
	ia[i]=i;
}
for(int k:ia){
	System.out.println(k);
}
~~~

这里的`k`是从数组中拿出元素的复制品，即便每次循环进行`k++`也不会改变原先数组的内容

那么对于对象数组：

~~~java
class value{
    private int i;
    public void set(int i){
        this.i=i;
    }
    public int get(){
        return i;
    }
}
public static void main(String[] args) {
    Value[] a=new Value[10];
    for(int i=0;i<a.length();i++){
        a[i]=new Value();
        a[i].set(i);
	}
    for (Value v:a){
        System.out,println(v.get());
        v.set(0);
    }
    for (Value v:a){
        System.out,println(v.get());
    }
}
~~~

我们发现第二遍遍历之后，第三次循环遍历发现所有值都是0了

![image-20250402174748083](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_3/image-20250402174748083.png)

这是因为此时的for-each是会更新索引的

对于容器类来说，for-each循环也是可以使用的：

![image-20250402175028420](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_3/image-20250402175028420.png)

## 5 set集合容器

![image-20250402175503995](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_3/image-20250402175503995.png)

对于同样的`add`内容，我们发现`hashset`相较于`arraylist`而言只有两个内容，这是因为set是数学中的`set`，对于数学集合来说每个元素互不相同，所以放了两次也重复的`"first"`也就只有最后一次生效

展示容器内容可以直接通过`System.out.println`实现：

![image-20250402175750685](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_3/image-20250402175750685.png)

这样就不难发现，对于`set`而言，`set`内部的元素是不排序的

那么为什么我们之前设置的`value` 类并不能直接通过

`System.out.println`打印呢？

这是因为我们之前的类没有设置以下函数：

~~~java
public String toString() {
	return ""+i;
}
~~~

一旦设置了这个函数，那么我们自己定义的类也可以通过`toString`函数来直接`System.out.println`

~~~java
class value{
    private int i;
    public void set(int i){
        this.i=i;
    }
    public int get(){
        return i;
    }
    public String toString() {
	return ""+i;
	}
}
~~~

## 6 Hash表

对于美元，不同的美元有不同的单词对应，比如1美分对应cent，那么我们怎么实现美元数值和英文单词的对应呢？

最简单的，`switch case`语句：

![image-20250402180619741](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_3/image-20250402180619741.png)

但这是硬编码，不是很优雅，且迁移到人民币上就得重新全部写，不便于维护

所以我们需要引入一些新的数据结构——`HashMap`

在hash表中，所有数据都是成对放入，每一对内容包含一个键和一个值。

~~~java
private HashMap<Integer,String> coinname=new HashMap<Integer,String>();
~~~

**需要注意，k的类型必须是`Integer`对象而不能是`int`这一基本类型**，这是因为不管hashmap还是什么都是容器，里面全是对象

~~~java
import java.util.HashMap;
import java.util.Scanner;

public class Coin {
    private HashMap<Integer,String> coinname=new HashMap<Integer,String>();
    public Coin(){
        coinname.put(1, "penny");
        coinname.put(10, "dime");
        coinname.put(25, "quarter");
        coinname.put(50, "half-dollar");
    }
    public String getName(int amount) {
        return coinname.get(amount);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int amount=sc.nextInt();
        Coin coin=new Coin();
        System.out.println(coin.getName(amount));
    }
}

~~~

可以实现查找，存在的话返回value，不存在则返回null，但我们有时候更希望在不存在的时候返回特殊的string比如"not found"，那么此时我们需要修改的是getName 函数

~~~java
import java.util.HashMap;
import java.util.Scanner;

public class Coin {
    private HashMap<Integer,String> coinname=new HashMap<Integer,String>();
    public Coin(){
        coinname.put(1, "penny");
        coinname.put(10, "dime");
        coinname.put(25, "quarter");
        coinname.put(50, "half-dollar");
    }
    public String getName(int amount) {
        if (coinname.containsKey(amount)) {
            return coinname.get(amount);
        }
        else {
            return "not found";
        }
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int amount=sc.nextInt();
        Coin coin=new Coin();
        System.out.println(coin.getName(amount));
    }
}

~~~

通过`containsKey`函数判断是否包含key，如果要print哈希表大小则可以通过keySet().size()来print哈希表的大小，也可以直接通过print实现哈希表输出：

![image-20250402182225128](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/img/2025-04-01-java_notes_advanced_3/image-20250402182225128.png)

需要注意的是，哈希表里面的键都是唯一的，如果出现重复的键就会覆盖

要遍历哈希表只能通过for each循环实现：

~~~java
for (Integer k :coinnames.keySet()){
	String s= coinnames.get(k);
	System.out.println(s);
}
~~~

相当于通过遍历keySet里的每一个key，再通过key-value实现全部内容的遍历
