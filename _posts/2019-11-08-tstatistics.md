---
layout: post
title: "t-statistics and how to find some relationship?"
author: "szarki9"
categories: machinelearning
tags: [machinelearning]
image: bari6.jpg
---
<p align="justify">But how to check whether we can apply
linear regression and whether there is a relationship between X and Y or not? This
is the reason I did mention hypothesis testing in one of the posts before. So we will
test the existence of the relationship using hypothesis testing.</p><p align="justify">Let’s take the<b> null hypothesis H: There
is no relationship between X and Y</b>, and the <b>alternative hypothesis K: There is
some relationship between X and Y</b>. This will lead to test <b>H: β = 0 </b>and <b>K: β
!= 0</b>. We need to compute t-statistics here, which measures the number of standard
deviations that β is away from 0. In order to measure that we need to divide
our estimated parameter β by its standard error*. Then we compare the results
with t-student distribution for n-2 degrees of freedom and then we have basics
to reject or not the null hypothesis. Rather an easy one right? </p><p align="justify">*standard error (SE) - tells us the average amount that this estimated parameter differs from the actual value of the parameter.</p><p>Others interesting facts about
<b>t-student distribution</b>:</p><p align="justify">So, t-student distribution, from what
I have found out, is used for hypothesis testing or for estimation of uncertainty
of measurement (&lt;- that is our case guys).</p><p align="justify">Other crucial to know fact is that
when we have <b>more than 30 degrees of freedom, t-distribution is very close to
normal distribution</b> so we can use normal distribution in our work instead of t.
Look at the picture below to see how t-student looks like for different degrees
of freedom.</p><figure data-orig-width="360" data-orig-height="192" class="tmblr-full"><img src="https://66.media.tumblr.com/262190d331b4af530defb4ddca07aff2/10fcface822154b5-02/s540x810/665516a5521a38df281cc9bc1e8706bd49db213b.gif" data-orig-width="360" data-orig-height="192"></figure><p>Photo borrowed from: <b><a href="http://ci.columbia.edu/ci/premba_test/c0331/s7/s7_4.html">link</a>.</b></p><p><br></p><p align="justify">thanks again, see you soon!</p><p>xoxo,</p><p>szarki9</p>
