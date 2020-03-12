---
layout: post
title: "multiple linear regression ahoi!"
author: "szarki9"
categories: machinelearning
tags: [machinelearning]
image: bari8.jpg
---
<p>Hola chicos, </p><p align="justify">Last time I was preparing myself for
a job interview, so that's why I focused mostly on R, but I am back with statistical
learning material! </p><p align="justify">So we have discussed linear
regression models for simple regression, then t-statistics which serves to
determine whether there is a relationship between variables and after that we
went through the measurement of model quality. So all of that was designed for one
variable regression and today I would like to discuss <b>multiple linear
regression </b>.</p><p align="justify">First of all, what is the point
of having multiple regression? Let’s consider an example, where we want to
predict how variables such as lecture attendance, number of the book read,
exercises done and IQ are predicting the result which is exam score at e.g.
Statistics. Having described by me in previous post tools – simple linear
regression, we can try to predict the impact of each of the variables for the score.
But as all of us students know, success on the exam consists of diverse
approaches and combination of mentioned above factors. So here comes multiple
linear regression, which will be given by the equation:</p><p>Y = β<sub>0</sub> + β<sub>1</sub>X<sub>1</sub>
+ β<sub>2</sub>X<sub>2</sub>
+ … + β<sub>n</sub>X<sub>n</sub>
+ ε,
where X<sub>p </sub>is a single predictor variable. </p><p align="justify"><b>How to estimate coefficients?</b></p><p align="justify">As in linear regression, we will
estimate parameters using the least-squares approach and we minimize the sum of
squared residuals. RSS formula below:</p><figure class="tmblr-full" data-orig-height="73" data-orig-width="477"><img src="https://66.media.tumblr.com/18724f8b60b8f960273d94e477ab4091/fd84a26d7be01bbe-c0/s540x810/b87803b0d4ee86949e71598ac9daabcf4382b3d6.png" data-orig-height="73" data-orig-width="477"></figure><p align="justify">Okay, todo for today. In the next post we will ponder about questions that are needed to be answered for multiple regression such as model fit and determination whether there is a relationship between response and predictors. So see you soon!</p><p><br></p><p>xoxo,</p><p>szarki9</p>