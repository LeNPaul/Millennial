---
layout: post
title: "inferential statistics vol 2"
author: "szarki9"
categories: statistics
tags: [statistics]
image: netherlands3.JPG
---
<p><p>Hello there,</p><p align="justify">Before we will go with linear
regression I would like to bring in a couple of definitions. Remember the post
about inferential statistics? I have written that using inferential statistics
we can estimate values of particular parameters etc. And we can estimate
either point values or interval ones. So let us start with the first question:</p><p align="justify"><b>What confidence interval is and why it is important?</b></p><p align="justify">By <b>confidence interval (CI) </b>we mean an interval when the probability of
achieving the value of the parameter will be greater than or equal to a given number (which we call the level of confidence). </p><p align="justify"><b>The confidence level </b>represents the proportion of possible confidence
intervals that contain true value of the unknown parameter. In order to appoint
CI for a population we use data from a specific sample so the level of confidence
gives us a level of certainty that we apply to the population, the higher the confidence level the more certain you are that results are accurate. </p>
<p align="justify">For example (to point the general idea) after taking sample of kids in the age of 10, with 95% confidence level (means when we will repeat the survey or study the 95% of the results will be also in that interval) we might say they are 128-153 tall (and this interval is CI). </p>
<p align="justify">Let’s consider another example (imaginary data). We want to measure the average time spend on playing board games in Poland. We have a sample of 1000 random people and weekly time they spend on games. We count a mean for that sample and this is 1:56 hours. Then thanks to statistical calculations with a 95% level of confidence we might say that true time spend on board games in Poland belongs between 1:43 and 2:20 hrs per week. So here we need to use a level of confidence in order to emphasize that we cannot be sure for 100% with a given sample of 1000 out of 38 mln people in Poland that average time belongs between these two exact numbers. Statistics is knowledge about estimating values so this is why confidence interval and confidence level are so important. </p><p align="justify"><b>Statistical tests, what, how and why?</b></p><p align="justify">Thanks to statistics we may <b>test or verify the hypothesis</b> and we might
do that using statistical tests. We always consider two hypotheses, null hypothesis
and alternate hypothesis. The <b>null hypothesis</b>
is a commonly accepted fact and it proposes that no statistical significance
exists in a set of given observations and the opposite to it is the <b>alternate hypothesis</b>. </p><p align="justify">By <b>statistical test</b> we define a function that has two return values,
one is 1 when we reject the null hypothesis and 0 when we do not have the basis
to reject it. When we decide whether the value of the function is 1 or 0? In
general, we count particular statistic* for particular test and we check whether
the value of that statistic belongs to critical region** or not. If it belongs
then we take 1 as a value of a statistical test and 0 when not.</p><p align="justify">*By statistic (singular) we
define a measurable function of a sample that does not depend on the measured parameter.
I.e. mean or median is a statistic.</p><p align="justify">**By critical region we define the
region of values that corresponds to the rejection of the null hypothesis at some
chosen probability level.</p><p align="justify">But there is another way of testing
a hypothesis. We can count the <b>p-value</b>. P-value is a probability of obtaining statistic at least as extreme as the one that we have just observed in a world when the null hypothesis is true. For me, that becomes quite understandable but here is a good video explaining it in terms of puppies: <a href="https://www.youtube.com/watch?time_continue=2&amp;v=9jW9G8MO4PQ">https://www.youtube.com/watch?time_continue=2&amp;v=9jW9G8MO4PQ</a>.</p><p align="justify">Let us consider a null hypothesis: people spend on average about 1:30 hrs per week on playing board games, an alternate hypothesis will be that this time is lower. P-value will answer a question: if an average time spend on board games in Poland is 1:30 per week or more, how surprising will it be in real life to spend it less? How ridiculous is our null hypothesis? If it is highly ridiculous we should reject it. </p><p align="justify">I recommend reading the post I have drawn my inspiration from:<b> <a href="https://towardsdatascience.com/p-values-explained-by-data-scientist-f40a746cfc8">post</a>.</b></p><p align="justify">Btw, I would like to highlight it
one more time that I am not an expert so with my posts I simply explain how I
see these things and how I do interpret them :D. So if there is something that
you do not agree with feel free to share it!</p><p> </p><p>Thanks,</p><p>xoxo,</p><p>szarki9</p><figure class="tmblr-embed tmblr-full" data-provider="youtube" data-orig-width="459" data-orig-height="344" data-url="https%3A%2F%2Fwww.youtube.com%2Fwatch%3Ftime_continue%3D2%26v%3D9jW9G8MO4PQ"><iframe width="540" height="405" id="youtube_iframe" src="https://www.youtube.com/embed/9jW9G8MO4PQ?feature=oembed&amp;enablejsapi=1&amp;origin=https://safe.txmblr.com&amp;wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></figure></p>