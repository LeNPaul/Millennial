---
layout: post
title: "multiple regression - Q&A 2"
author: "szarki9"
categories: machinelearning
tags: [machinelearning]
image: bari10.jpg
---
<p>Hi there,</p><p align="justify">it’s me again! Another question
you might want to consider when performing multiple linear regression is…</p><p align="justify"><b>How to decide which variables are important and which are not?</b></p><p align="justify">So after checking that there are
some variables that are important and related to an outcome by using F-statistics
we would like to determine which one of those might be. The concept of choosing
what kind of variables is called <b>variable
selection. </b>In general, we want to compare models that have a different set of
variables and there are several criteria to conclude model fit, but I will come
back to that someday. But what I would like to bring on today is selecting
which models to verify, as all the possible models for p predictor is 2<sup>p</sup><sub> </sub>in total. We have three approaches to that:</p><p align="justify">1. <b>Forward selection </b>– at the beginning we
start with a null model, where are no predictors, just an intercept. Then we fit
p simple linear regressions and pick that that results in the lowest RSS. Then
we have our model with one selected variable and then we check p-1 two-variable
models and again we select the one that has the lowest RSS. We might continue
that until we will decide that the result is satisfactory.</p><p align="justify">2. <b>Backward selection </b>– here we start with
all the variables in the model and we remove the variable with the largest p-value
(as this variable is least statistically significant). Then we perform our model
for p-1 variables and then again, we remove variable with the largest p-value.
We continue until the results are satisfactory or e.g. all of the variables
have p-value at some point.</p><p align="justify">3. <b>Mixed selection </b>– a combination of both
listed before. We start with a model that has no variables and we add a variable
that provides the best fit. We add variables one by one and simultaneously we
check p-value for variables in our new models, and if p-value for the certain
variable will rise above some fixed level we remove that variable for the
model. We continue to execute these steps until all variables have p-value low
enough and all variables that are not included in the model have a large p-value
when they are in it.</p><p><br></p><p align="justify">Thank you for all the support!</p><p>xoxo,</p><p>szarki9</p>