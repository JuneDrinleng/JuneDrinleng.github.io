---
layout: post
title: "Advanced Notes on Java Course Learning 3"
date: 2025-04-02
tags: [cs_basic]
comments: true
author:junedrinleng
---

This note mainly records the study notes of the advanced part of Zhejiang University Weng Kai's [Java Introduction and Advanced Course] (https://www.bilibili.com/video/BV1wL411L7A3?p=3), main notepad instances, generic container types, arraylist operations, object arrays, collection containers and hash tables, etc.
<!-- more -->

## 1 Notepad example

For notepad, we need to meet the following requirements:

- Can store records
- Unable to restrict sorting of stored records
- Ability to know the number of records that have been stored
- Ability to view every record saved
- Can delete every record
- Can list all records

> It should be noted that for more advanced programming and software construction, we need to separate human-computer interaction and business logic - separation of front-end and back-end

For Notepad, we need to design an interface. Of course, for the backend, we don't need to consider how the data is input. It can be command line interaction, the client or the web page. These are front-end things and we don't need to worry about them. As the backend, we only need to make good interfaces.

Based on the above content, we first define the class and design the interface:

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

We can ignore the specific content of the interface for now, but we need to set up these frameworks first.

## 2 Generic container class

We need to store a lot of things. In the introductory course we learned about arrays, which can store a lot of things.

But the problem is that the initial length of the array needs to be set, so it does not meet the purpose of adding all the time here, so in order to solve this problem we need to use a container

~~~java
private ArrayList<String> notes = new ArrayList<String>();
~~~

We create an `ArrayList` object through `ArrayList`. The content of the angle brackets after it indicates what `ArrayList` is stored in. Here it stores `String`. This type is a generic class.

![image-20250402162016289](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402162016289.png)

~~~java
container type <element type>
~~~

The container type here is `ArrayList`

The container itself has a `size` method to obtain the `size` of the content in the container.

Then through the above ArrayList method, we can enrich the previous interface content:

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

After a simple test, I found that the two functions of adding string and getSize can be correctly implemented.

## 3 ArrayList operations

ArrayList is added in order, so we can use it to get the corresponding content based on index:

~~~java
ArrayList object.get(index)
~~~

If you want to get content outside the index range, an error will be reported.

In addition, ArrayList also has a remove method. The result is that if an error occurs, an error will be reported. If not, the deleted array will be given.

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

But in fact, we can use `toArrary` of `ArrayList` to convert `ArrayList` into `Array`:

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
    }public static void main(String[] args) {
        NoteBook nb = new NoteBook();
        nb.add("Python");
        nb.addLocation("Java",0);
        System.out.println(nb.getSize());
        System.out.println(nb.getNote(0));
    }
}

~~~

It should be noted that for arrays, int array and string array are different:

This is because each int variable stores a number, and each String variable stores a pointer pointing to the location where the string is stored. Then the same is true for arrays.

![image-20250402172332278](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402172332278.png)

So creating `String[] a=new string[10]` creates an array with all empty indexes.

**Each element in the object array is the manager of the object, not the object itself**

## 4 for each loop of object array

For ordinary arrays:

~~~java
int[] ia =new int[10];
for(int i=0;i<ia.length();i++){
	ia[i]=i;
}
for(int k:ia){
	System.out.println(k);
}
~~~

The `k` here is a copy of the element taken from the array. Even if `k++` is executed each time the loop is performed, the contents of the original array will not be changed.

So for an array of objects:

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

We found that after the second traversal, the third loop traversal found that all values were 0.

![image-20250402174748083](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402174748083.png)

This is because the for-each at this time will update the index.

For container classes, the for-each loop can also be used:

![image-20250402175028420](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402175028420.png)

## 5 set collection container

![image-20250402175503995](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402175503995.png)

For the same `add` content, we find that `hashset` has only two contents compared to `arraylist`. This is because set is a `set` in mathematics. For mathematical sets, each element is different from each other, so the `"first"` that is repeated twice will only take effect the last time.

Displaying container content can be achieved directly through `System.out.println`:

![image-20250402175750685](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402175750685.png)

In this way, it is not difficult to find that for `set`, the elements inside `set` are not sorted.

So why can’t the `value` class we set up before pass directly?

What about `System.out.println` printing?

This is because our previous class did not set the following functions:

~~~java
public String toString() {
	return ""+i;
}
~~~

Once this function is set, our own defined classes can also directly access `System.out.println` through the `toString` function.

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

## 6 Hash table

For the U.S. dollar, different dollars have different word correspondences. For example, 1 cent corresponds to cent. So how do we realize the correspondence between dollar values and English words?

The simplest, `switch case` statement:

![image-20250402180619741](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402180619741.png)

But this is hard coding, not very elegant, and if you migrate to RMB, you have to rewrite everything, which is not easy to maintain.

So we need to introduce some new data structures - `HashMap`

In the hash table, all data is put in pairs, and each pair contains a key and a value.

~~~java
private HashMap<Integer,String> coinname=new HashMap<Integer,String>();
~~~

**It should be noted that the type of k must be an `Integer` object and not the basic type `int`**. This is because whether it is a hashmap or anything else, it is a container, which is full of objects.

~~~java
import java.util.HashMap;
import java.util.Scanner;

public class Coin {
    private HashMap<Integer,String> coinname=new HashMap<Integer,String>();
    publicCoin(){
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

Search can be implemented, returning value if it exists, and null if it does not exist, but sometimes we prefer to return a special string such as "not found" when it does not exist, so what we need to modify at this time is the getName function.

~~~java
import java.util.HashMap;
import java.util.Scanner;public class Coin {
    private HashMap<Integer,String> coinname=new HashMap<Integer,String>();
    publicCoin(){
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

Use the `containsKey` function to determine whether the key is included. If you want to print the size of the hash table, you can print the size of the hash table through keySet().size(), or you can directly print the hash table output:

![image-20250402182225128](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402182225128.png)

It should be noted that the keys in the hash table are all unique. If there are duplicate keys, they will be overwritten.

Traversing the hash table can only be achieved through a for each loop:

~~~java
for (Integer k :coinnames.keySet()){
	String s= coinnames.get(k);
	System.out.println(s);
}
~~~

It is equivalent to traversing each key in the keySet, and then traversing the entire content through key-value.