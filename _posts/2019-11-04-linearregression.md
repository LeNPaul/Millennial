---
layout: post
title: "Linear Regression and que te pasa"
author: "szarki9"
categories: machinelearning
tags: [machinelearning]
image: bari5.jpg
---
<p align="justify">So one of the many algorithms used
in statistical learning is <b>linear
regression</b>. It is uncomplicated, the concept is rather understandable and linear
regression might be useful in many prediction problems. We might either try to
estimate some wanted value out of one variable or out of more variables. And
here we have two types of linear regression – <b>simple linear regression</b> and <b>multiple
linear regression</b>. Let me go for you with simple linear regression firstly.<br></p><p align="justify">As I have mentioned, in simple
linear regression we are looking for a linear relationship (as the name
suggested) between variable and measured output, and that relationship supposed
to approximate the output. Like in the linear function, we assume that our
output Y, might be represented using X variable in the following pattern: Y = βx
+ α
(1), where α, β will be named coefficients or parameters of that function. The
problem itself concludes to find those coefficients that will produce the line
as close as it might be to the provided data. How to do it? </p><p align="justify">Minimizing<b> least squares </b>criterion is a popular way to do so. In general, it
comes to find the minimum of residual sum of squares (RSS), which is like the
name indicate the sum of squared residuals. Residual is the difference between the output from our linear function (the one that we assume is approximately
correct for our data) and the actual data gathered. If you would like to look
into actual formulas I highly recommend the book: „An Introduction to
Statistical Learning”. </p><p align="justify">But in general, we assume that true
relationship between variables and the output is given with the formula Y =
f(X) + ε, and for a linear regression it will take the form of: Y = βx
+ α
+ ε (2), where ε is an error term with zero-mean. The model given by (2)
characterizes population regression line, which is the best approximation for
the relationship between Y and X, and model given by (1) characterizes least
squares line. <b>What is the difference between these two lines?</b></p><p align="justify">So the first one, least squares line
depends on the data set that is given, which means that it might be slightly
different for different random samples we are working with. The second one, the population regression line is the actual line that represents the relationship
that we are looking for and it is rarely known. But like when estimating
parameters in statistics, an average of least squares line should be the best
approximation of population regression line.</p><p align="justify">Addition clarification question:<b>
what is the difference between residual and error term? </b></p><p align="justify">As above described, residual for a point
is the difference between model value and observed data value, whereas error
term of the observed value is a deviation of the observed value from
(unobserved) true value.</p><p align="justify">It is long enough so far, so in the next
post I will go with other interesting questions regarding this subject.</p><p><br></p><p>xoxo,</p><p>szarki9</p>