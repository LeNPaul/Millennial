---
layout: post
title: "multiple regression - Q&A 1"
author: "szarki9"
categories: machinelearning
tags: [machinelearning]
image: bari9.jpg
---
<p>Hi again on these first days of
December!</p><p align="justify">As promised last time, there are
several questions needed to be answered regarding multiple linear regression
described in my previous post. Let me start with:</p><p align="justify"><b>How to determine whether there is a relationship between the response
and the predictors?</b></p><p align="justify">In order to verify that, we will
use F-statistic with the null hypothesis: H<sub>0</sub>: β<sub>1</sub> = β<sub>2</sub>
= … = β<sub>n</sub>
= 0 and the alternative hypothesis will be: at least one of coefficients is non-zero.</p><p align="justify">Hope you remember TSS used in R­­²
statistics, so the formula for F is as follows: F=[(TSS-RSS)/p]/[RSS/(n-p-1)],
where (!) p – number of predictors and n – number of observations in our
sample. When to reject the null hypothesis and when not? When n is large, F-statistics
that is just a little larger than 1 might still provide evidence to reject the null
hypothesis. In contrast, a larger F-statistics is needed to reject H<sub>0 </sub>if
n is small. As in the previously described statistic, we might also look into p-value for that
one and then decide what to do with hypothesis. </p><p align="justify">In general, F-tests are used for comparing
two samples and their variances, as in our case, for a sample of predicted values and
sample of given data. When errors have normal distribution, the F-statistics
follows F-distribution.</p><p align="justify">Okay, but we <b>might want to check whether just set of coefficients equals zero and
whether just set is important in our model</b>. In that case we will consider
null hypothesis for a subset of q coefficients, where variables chosen for
exclusion are at the end: H<sub>0</sub>: β<sub>n-q+1</sub> = β<sub>n-q+2</sub>
= … = β<sub>n</sub>
= 0</p><p>Then we will be considering a model
that uses all the variables except those last q. RRS for that model will be
assigned to RRS<sub>0</sub>, and F-statistics will be given by: F=[(RSS<sub>0</sub>-RSS)/q]/[RSS/(n-p-1)].</p><p><br></p><p>Todo, wait for more!</p><p>hugs&amp;kisses,</p><p>szarki9</p>