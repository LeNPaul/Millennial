---
layout: post
title: "data science - tips"
author: "szarki9"
categories: machinelearning
tags: [machinelearning, datasciece, datacleansing]
image: bari3.JPG
---
<p align = "justify"> Hey All! </p>
<p align = "justify">
Nice to see you all, to start with, I have just moved to Amsterdam to start my Master in Data Science at UvA. I am suuuuuper excited, that was honestly one of my dreams to study abroad someday and it is so great that I managed to achieve it. As far we have different assignments and projects so I will update you with the things that I learn :)! Today I would like to start with some brief sum-up of the things from the first week of lectures. </p>

### How should we use split data set for building a model?
<p align = "justify">
Training set - 80%, Validation - 10% and Test - 10% or 90/5/5 </p>
<p align = "justify">
<b>The training set</b> is as simple as it sounds - set that is used to tune the model, <b>the validation set</b> is used for checking how good is the performance of our model and is typically used for "hyperparameter" tuning. <b>The test set</b> on the other hand is held separately to the test and validation data and should be completely unseen until the end of the entire analysis. 
With <b>cross-validation</b> train and validation sets are randomly re-splited but the test set stays the same.
With <b>time-ordered data</b> split between sets is due to the order of the data. </p>

### Types of Machine Learning
<p align = "justify"> <b>supervised</b> - here we train our model using labeled data, so for example we might want to predict some time-series, </p>
<p align = "justify">
<b>unsupervised</b> - here we have data without labels and for example, we want to classify some dataset without prior knowledge about it, </p>
<p align = "justify">
<b>reinforcement</b> - one of three basic machine learning techniques, along with supervised and unsupervised learning, reinforcement learning enables software-defined agents to learn the best possible actions in a virtual environment (for example Deepmind's algorithm AlphaGo), when agents learn from rewards that are encountering,</p>
<p align = "justify">
<b>zero / few-shot </b> - learning model with a very small amount of data, mostly used in computer vision, for example when we want to categorize bird species from photos and some of the rarest might not have enough photos,</p>
<p align = "justify"> 
<b>weakly-supervised</b> - it is used when we do not have labeled data, and we make use of functions that label data. There are three typical types of weak supervision: incomplete supervision when only a subset of training data is labeled; inexact supervision when the training data are given with labels but not as exact as desired and inaccurate supervision when in the training data there are some labels with mistakes. </p>
<p align = "justify">
<b>self-supervised</b> - a means for training computers to do tasks without humans providing labeled data, outputs or goals are derived by machines that label, categorize, and analyze information on their own then draw conclusions based on connections and correlations. </p>

### Error types
<p align = "justify">
We might occur two types of errors: <b>statistical error</b> (or statistical variance, the random systematic noise from repeated measurements, generally they represent minimum error on model's results) and <b>systematic error</b> (or statistical bias, the error in measurement caused by anything not random, no matter how many measurements, the mean diverges from expectation). </p>

### Gaussian approximation
<p align = "justify">
Binomial distribution approximation using normal distribution, where $$ \mu = np, \sigma^2 =  np(1-p).$$ Thanks to that we can have approximately statistical error. </p>

### Final remarks
<p align = "justify">
Taken your dataset, cleaned it, modeled and made measurements, then quoted statistical errors and maybe even have an idea of systematics, worth it is to ask yourself whether is it still accurate! </p>
<br>
<br>
Thankssssssss, <br>
szarki9
