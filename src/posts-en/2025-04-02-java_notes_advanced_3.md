---
layout: post
title: "Java Advanced Learning Notes 3"
date: 2025-04-02
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
post_id: 2025-04-02-java_notes_advanced_3
source_lang: zh
source_title: "Java课程学习进阶笔记 3"
title_key: course_note
generated_by: scripts/i18n-sync.mjs
generated_at: "2026-03-09T04:22:43.267Z"
source_hash: e442f20bf2af0570acaf0d22c924ab43a0635aca736445c21c4ae75e234661b8
---

This note mainly records the advanced part of the [Java beginner and advanced course](https://www.bilibili.com/video/BV1wL411L7A3?p=3) by Wang Kai from Zhejiang University, focusing on the NoteBook example, generic container types, ArrayList operations, object arrays, collection containers, and hash tables等内容
<!-- more -->

## 1 NoteBook Example

For a NoteBook, we need to satisfy the following requirements:

- Ability to store records
- No restriction on the number of stored records
- Knowing the number of stored records
- Ability to view each stored record
- Ability to delete each record
- Ability to list all records

> Note that for more advanced programming, implementing software construction, we need to separate human-computer interaction and business logic — frontend/backend separation

For a NoteBook, we need to design interfaces. Of course, for the backend, we don't need to consider how data input arrives; it can be command-line interaction, a client, or a webpage — these are frontend responsibilities. As the backend, we only need to implement the interface properly

Based on the above content, we first define classes and design interfaces:

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

We can temporarily ignore the specific content of the interface, but we need to first build the framework

## 2 Generic Container Class

To store many items, in the beginner course we learned about arrays, which can store many items

However, the problem is that arrays require setting an initial length, which doesn't meet our need for continuous addition. To solve this, we need to use containers

~~~java
private ArrayList<String> notes = new ArrayList<String>();
~~~

We create an ArrayList object using `ArrayList`, with the content in the angle brackets indicating the type of items stored in the ArrayList. Here, it's storing `String`, which is a generic class

![image-20250402162016289](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402162016289.png)

~~~java
Container Type<ElementType>
~~~

Here, the container type is `ArrayList`

The container itself has a `size` method to obtain the size of the contents

Through the above ArrayList approach, we can enrich the interface content:

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

Simple testing shows that it can correctly implement the add string and getSize functions

## 3 ArrayList Operations
ArrayList's addition is ordered, so we can use it to retrieve content by index:

~~~java
ArrayList.get(index)
~~~

If you try to access content outside the index range, it will throw an error

In addition, ArrayList has a remove method, which returns the deleted array if successful, or throws an error otherwise

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

However, we can actually use `ArrayList`'s `toArray` method to convert `ArrayList` to `Array`:

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

Note that for arrays, int array and string array are different:

This is because each int variable stores a number, while each String variable stores a pointer to the location where the string is stored. Therefore, arrays follow the same principle

![image-20250402172332278](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402172332278.png)

Thus, creating `String[] a=new string[10]` creates an array with all empty indices

**Each element in an object array is a manager of the object, not the object itself**

## 4 For-each Loop for Object Arrays
For a regular array:

~~~java
int[] ia = new int[10];
for(int i=0; i<ia.length(); i++) {
    ia[i] = i;
}
for(int k : ia) {
    System.out.println(k);
}
~~~

Here, `k` is a copy of the element from the array. Even if we perform `k++` in each iteration, it won't change the original array content.

For an object array:

~~~java
class Value {
    private int i;
    public void set(int i) {
        this.i = i;
    }
    public int get() {
        return i;
    }
}
public static void main(String[] args) {
    Value[] a = new Value[10];
    for(int i=0; i<a.length(); i++) {
        a[i] = new Value();
        a[i].set(i);
    }
    for (Value v : a) {
        System.out.println(v.get());
        v.set(0);
    }
    for (Value v : a) {
        System.out.println(v.get());
    }
}
~~~

We observe that after the second traversal, all values become 0 in the third loop.

![image-20250402174748083](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402174748083.png)

This is because the for-each loop updates the index.

For container classes, the for-each loop is also applicable:

![image-20250402175028420](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402175028420.png)

## 5 Set Collection Container

![image-20250402175503995](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402175503995.png)

For the same `add` content, we find that `HashSet` has only two elements compared to `ArrayList`, because `set` is a mathematical `set` where each element is unique. Thus, repeated `"first"` entries only retain the last one.

Printing container content can be directly achieved via `System.out.println`:

![image-20250402175750685](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402175750685.png)

This makes it clear that `set` internally stores unordered elements.

Why couldn't our previous `Value` class be directly printed via `System.out.println`?

This is because our class lacked the following method:

~~~java
public String toString() {
    return "" + i;
}
~~~

Once this method is set, our custom class can be printed via the `toString` function:

~~~java
class Value {
    private int i;
    public void set(int i) {
        this.i = i;
    }
    public int get() {
        return i;
    }
    public String toString() {
        return "" + i;
    }
}
~~~

## 6 Hash Table

For dollars, different denominations correspond to different words, e.g., 1 cent corresponds to "cent". How can we map dollar values to English words?

The simplest approach is using `switch case` statements:

![image-20250402180619741](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402180619741.png)

However, this is hard-coded and not elegant. Migrating to RMB would require rewriting everything, making it hard to maintain.

Thus, we need to introduce a new data structure—`HashMap`.

In a hash table, all data is stored as key-value pairs.

~~~java
private HashMap<Integer, String> coinname = new HashMap<Integer, String>();
~~~

**Note that the key type must be `Integer` object, not `int` primitive type**, because all containers are object-based.

~~~java
import java.util.HashMap;
import java.util.Scanner;

public class Coin {
    private HashMap<Integer, String> coinname = new HashMap<Integer, String>();
    public Coin() {
        coinname.put(1, "penny");
        coinname.put(10, "dime");
        coinname.put(25, "quarter");
        coinname.put(50, "half-dollar");
    }
    public String getName(int amount) {
        return coinname.get(amount);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int amount = sc.nextInt();
        Coin coin = new Coin();
        System.out.println(coin.getName(amount));
    }
}
~~~

This can retrieve values, returning the value if exists, or `null` if not. However, we often prefer returning a special string like "not found" when the key doesn't exist. To achieve this, we need to modify the `getName` function:

~~~java
import java.util.HashMap;
import java.util.Scanner;

public class Coin {
    private HashMap<Integer, String> coinname = new HashMap<Integer, String>();
    public Coin() {
        coinname.put(1, "penny");
        coinname.put(10, "dime");
        coinname.put(25, "quarter");
        coinname.put(50, "half-dollar");
    }
    public String getName(int amount) {
        if (coinname.containsKey(amount)) {
            return coinname.get(amount);
        } else {
            return "not found";
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int amount = sc.nextInt();
        Coin coin = new Coin();
        System.out.println(coin.getName(amount));
    }
}
~~~

Using `containsKey` to check for key existence. To print the size of the hash table, use `keySet().size()`. Directly printing the hash table is also possible:

![image-20250402182225128](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402182225128.png)

Note that keys in a hash table are unique; duplicate keys will overwrite existing entries.

To traverse a hash table, use for-each loops:

~~~java
for (Integer k : coinname.keySet()) {
    String s = coinname.get(k);
    System.out.println(s);
}
~~~

This effectively iterates through each key in `keySet`, then retrieves and prints all key-value pairs.
