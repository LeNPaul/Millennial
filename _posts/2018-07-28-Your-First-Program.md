---
layout: post
title: "Write Your First Program in Any Language"
author: "Abigail Cliche"
categories: tutorial
tags: [tutorial]
image: cuba-1.jpg
---
I would argue that the most difficult part of learning to program is not the programming itself. It’s getting all the tools set up for your environment and understanding how they contribute to your final product. If you’re a beginner, it can feel like every third word you read is new. This makes it difficult to really grasp what’s happening while you’re working through a tutorial. 
That’s why this isn’t your typical hello world how-to. 
If you simply try to mimic the steps in a wiki-how to write your first program in a given language, you may find yourself more confused than if you hadn’t read the tutorial at all because when you inevitably make a mistake, you won’t understand what’s happening well enough to troubleshoot. 
To really focus on the concepts behind a Hello World program, I will be writing this tutorial with the intent that you, dear reader, will be following along in another language. Hopefully this will give you the confidence to jump into any new language at any time, should the need arise.

## Pick a Language and Download
Pick whichever language you would like. I think Java and Python are great places to start, but it really doesn’t matter. Here is an article on the most employable languages in 2018: https://medium.freecodecamp.org/best-programming-languages-to-learn-in-2018-ultimate-guide-bfc93e615b35

I chose C++. Why? Because I’ve never written any C++ on Windows, so I will working through this for the first time along with you, and it is probably not the language you will be using for this tutorial.
You can download the Java compiler [here](https://www.java.com/en/download/faq/develop.xml), or the [Python here] (https://www.python.org/downloads/release/python-370/).  
If you ever want to check whether you already have the language or language’s compiler on your computer, you can do so from the command line by typing “compilername –version” on Linux or “compilername -version” on Windows. You may want to check out this post about command lines if you’ve never worked with one before.
For anything else, you can simply google, “where to download [language name],” and you should be able to find it in about thirty seconds.
Work through the installer’s instructions. They are usually pretty self explanatory, but if you get stuck, there are plenty of language specific installation tutorials out there. I found [this video](https://www.youtube.com/watch?v=k3w0igwp-FM) to be pretty helpful for getting the proper environment variables set on my machine.

## What exactly did I just install?
Before your computer can understand a language, it must be translated. You just downloaded the means to translate the language you are using into the language of your machine. This process can happen in a couple of different ways depending on whether you are using a compiled language (Java), or an interpreted language (python). 
Using a compiled language is like writing a letter to a Spanish speaker in English, then passing it through Google Translate. Your friend can read it as many times and as quickly as they would like once it’s been translated, but the disadvantage is that google translate can only translate text, much like a compiled language can only be compiled using a compiler for a particular environment. 
Using an interpreted language, on the other hand, is like hiring an interpreter to help you speak to your friend. Statements are being translated into a form your friend can understand as they are being said. It’s slower, but you can use your translator in different environments like the movies or a hipster slam poetry night.  
[Here](https://www.lifewire.com/compiled-language-2184210) is an excellent article explaining this more in depth.

## Writing Your Program
Open up any text editor. Even the default Notepad program on Windows is fine. Save a file as “hello.[the file extension for your language]”. For python and Java, the file extensions are “.py” and “.java” respectively. The file extensions tell your computer what kind of file it is reading. 
My first file will be “hello.cpp”. 
The next steps are going to be very different from language to language. You may have to write a main function. A function is simply a set of instructions for your computer to follow, and the main function is the set that gets executed whenever your run the program. You should google “[your language name] hello world program,” and make your file look like what you see. The differences between hello world programs are important and often reveal much about the architectures of the languages the programs are written in, but they are beyond the scope of this tutorial, so this is the one place where copying and pasting some code is okay. 
Once you’ve got the code in place, you should see some sort of print statement. 
In C++ this is the line that says, “std::cout << "Hello World!";”.
Python’s looks like “print("Hello, World!")”, and Java’s is “System.out.prinln(“Hello, world!”);”. 
This is the line responsible for producing the output you will see when you run your code. The string of text, “Hello, world!”, is called a parameter. This is the input value for the function responsible for printing. You can change this string to say whatever you’d like. “Hello, world!” is customary, but what’s the harm in shaking things up a bit? I’ll change mine to say “Hello, Abigail!”. 
Make sure you save your file.

## Running Your Program
Open up a command prompt window and navigate to the directory where you saved your program. Once again, if you have never used the command line, learning the basics would be helpful. 
If you are using a language that must be compiled, you will need to compile your program file before you can run it.  The compilation commands vary from language to language, but they can easily be found online.
If you run into an error akin to “g++ is not a recognized command”, there is probably an issue with your Path variable in your Environment Variables. I’ve run into lots of trouble with this in the past using windows. It’s a pain, but working through the issue will be a great exercise in patience and getting to know your computer. 
If your compilation command executes but returns errors, there is an error in what you typed in your program. Double check your file and try again. A successful compilation will result in the production of an executable file which will appear in the directory alongside your original file. 
Now execute the command to run your file, and you should see your message printed out in the window. 
Congratulations! You have just written your first program.

