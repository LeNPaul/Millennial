---
layout: post
title: "Another gradeR Vignette"
author: "Christopher Kinson"
image: another-gradeR-vignette-img.png
---

<html>

<head>

<meta charset="utf-8" />
<meta name="generator" content="pandoc" />
<meta http-equiv="X-UA-Compatible" content="IE=EDGE" />


</head>

<body>


<div class="container-fluid main-container">




<div id="header">




</div>


<p><a href="https://statistics.as.virginia.edu/faculty-staff/profile/trb5me">Taylor
Brown</a> developed the <a href="https://cran.r-project.org/web/packages/gradeR/index.html"><strong>gradeR</strong>
package</a> for R. His <a href="https://cran.r-project.org/web/packages/gradeR/vignettes/gradeR.html">original
vignette</a> explains foundations of using the package. I am writing
this vignette to supplement aspects of the original because I had
questions. I explored answers for my questions and thought it might be
useful to others.</p>
<p>The big picture is that the <strong>gradeR</strong> package can be
thought of as a localized autograder (automatic grading of .R files on
one’s own computer). With some additional work and licenses, it can be
connected to online systems such as <a href="https://cran.r-project.org/web/packages/gradeR/vignettes/using_gradeR_with_Gradescope.html">Gradescope</a>
and GitHub. This can make it a versatile and powerful tool, especially
for large courses that incorporate computing or programming technology
with or without teaching assistants, course assistants, or hourly
employees.</p>
<p>Let’s take a look at some of the questions I had while learning about
this helpful package. If you want to follow along and try out these
ideas yourself, you can download the <a href="https://github.com/kinson2/kinson2.github.io/raw/gh-pages/another-gradeR-vignette.zip">another-gradeR-vignette.zip</a>,
extract it, and set your working directory in R or RStudio to
“another-gradeR-vignette”.</p>
<pre class="r"><code>setwd(&quot;~/another-gradeR-vignette&quot;)</code></pre>
<div id="can-students-submit-.rmd-files" class="section level2">
<h2>Can students submit .Rmd files?</h2>
<p>Yes. <strong>gradeR</strong> automatically grades R code within .R or
.r files. As someone who enjoys using notebooks and R markdown for
reproducibility and checking student answers to questions about data
wrangling and programming, I did not want to give up using .Rmd files
for my courses. After searching online for possibilities, there was one:
<code>knitr::purl()</code>. The <code>purl()</code> function within the
<strong>knitr</strong> package is <a href="https://bookdown.org/yihui/rmarkdown-cookbook/purl.html">interesting</a>
in that it can convert .Rmd documents to .R documents through extracting
the .R code from within that .Rmd file. It searches for R code chunks
and removes all the code chunk scripting to keep the raw R code. It’s
remarkable!</p>
<p>If you have created a main gradebook (see
<code>course-semester-gradebook.csv</code>) file for storing students’
grades in your course, then you can loop through those students in order
to extract the R code from their .Rmd files.</p>
<pre class="r"><code># import course-semester-gradebook.csv (official one for the course)
library(tidyverse)
netids &lt;- read_csv(&quot;course-staff-resources/course-semester-gradebook.csv&quot;) %&gt;%
  select(NetID)

# extract R code from .Rmd files
for (i in 1:nrow(netids)){
  knitr::purl(input = paste0(&quot;student-homework/student-homework00/homework00-&quot;, netids[i,], &quot;.Rmd&quot;),
            output = paste0(&quot;student-homework/student-homework00/homework00-&quot;, netids[i,], &quot;.R&quot;), 
            documentation = 0)
} </code></pre>
<p>Above, I am repeating the extraction of R code chunks for each
student in my roster. The <code>netids</code> object is a vector of
student IDs for students in your roster; only these students’ files
exist in your submission directory. The <code>input=</code> and
<code>output=</code> arguments refer to file locations, while the
<code>documentation=</code> argument controls what to do with the text
and markdown syntax that is not R code. See the <a href="https://www.rdocumentation.org/packages/knitr/versions/1.39/topics/knit">help
documentation</a> for details on these <code>purl()</code>
arguments.</p>
</div>
<div id="can-the-instructor-compute-the-total-score-per-student" class="section level2">
<h2>Can the instructor compute the total score per student?</h2>
<p>Yes! While the original vignette describes using gradeR
interactively, I know that it will be difficult to remember the flow of
code each time I need to compute grades for all students per assignment.
Thus, I will suggest a separate R file (see
<code>homework00-gradeR-script.R</code>) that contains all the code
mentioned in the original’s interactive section. One thing Brown didn’t
mention was what to do now that the <code>grades</code> object has been
created. Are we done after that?</p>
<p>The <code>grades</code> object (created within
<code>homework00-gradeR-script.R</code>) is structured as <span class="math inline">\(n\)</span> rows and <span class="math inline">\(p\)</span> columns, where <span class="math inline">\(n\)</span> represents the number of .R files
within the submission directory, and <span class="math inline">\(p\)</span> represents the number of
<code>test_that()</code> functions used in the
<code>homework00-instructor-solutions.R</code> file. The values in those
<span class="math inline">\(p\)</span> columns are either 1 (correct) or
0 (incorrect). In a typical assignment, I would likely setup the
<code>test_that()</code> functions to correspond to a unique
problem/question in the assignment with names that make sense. In this
way, we know exactly which column is referring to which problem/question
in the assignment and its point value. Then after all problem/questions
are automatically graded, we can run a row sum on that
<code>grades</code> object. Since I do teach about coding in the
tidyverse, I’ll use tidyverse code in this row sum example.</p>
<pre class="r"><code>library(tidyverse)
# to add specific columns for easier grade distribution
grades2 &lt;- as_tibble(grades) %&gt;%
  rowwise() %&gt;%
  mutate(TotalPoints =  sum(c_across(problem01:problem06)))

grades2</code></pre>
<pre><code>## # A tibble: 3 × 8
## # Rowwise: 
##   id     problem01 problem02 problem03 problem04 problem05 problem06 TotalPoints
##   &lt;chr&gt;      &lt;dbl&gt;     &lt;dbl&gt;     &lt;dbl&gt;     &lt;dbl&gt;     &lt;dbl&gt;     &lt;dbl&gt;       &lt;dbl&gt;
## 1 stude…         1         1         0         0         1         1           4
## 2 stude…         1         1         1         1         1         1           6
## 3 stude…         1         0         1         0         1         1           4</code></pre>
<p>Recently, I learned that the <code>rowwise()</code> function operates
like the <code>group_by()</code> function in that it doesn’t do anything
explicitly. It works behind-the-scenes storing how the process for the
next data wrangling steps will affect the tibble currently in the
pipeline.</p>
</div>
<div id="what-kinds-of-problemsquestions-can-i-write" class="section level2">
<h2>What kinds of problems/questions can I write?</h2>
<p>Given that <code>test_that()</code> requires R code for the automatic
grading, it might seem limiting in the kinds of questions we as
instructors may want to ask students in assignments. But maybe this just
means we need to be more creative. Seems to me that any type or style of
question can be written and automatically graded.</p>
<div id="multiple-choice-and-truefalse" class="section level3">
<h3>Multiple choice and True/False</h3>
<p>An example of a multiple choice problem/question is Problem
<strong>#6</strong> in the
<code>homework00-instructor-solutions.R</code>. An example of a
True/False problem/question is Problem <strong>#2</strong>.</p>
<blockquote>
<p><strong>Problem:</strong> Choose a single letter that represents the
most correct choice, then create an R vector named
<strong>prob06</strong> with the lower case letter chosen in quotes. For
example, <code>prob06 &lt;- &quot;e&quot;</code>. This R code should be written in
the code chunk of the <strong>Answer</strong> section below. This code
chunk should be executable and able to be evaluated.</p>
<ul>
<li>Question: In which of the following cases is the file name in bold
<strong>Homework01Kinson2</strong> written?</li>
</ul>
<ol style="list-style-type: lower-alpha">
<li><p>pascal case</p></li>
<li><p>snake case</p></li>
<li><p>camel case</p></li>
<li><p>kebab case</p></li>
<li><p>none of these</p></li>
</ol>
</blockquote>
</div>
<div id="multiple-answer" class="section level3">
<h3>Multiple answer</h3>
<p>An example of a multiple answer problem/question is Problem
<strong>#4</strong> in the
<code>homework00-instructor-solutions.R</code></p>
<blockquote>
<p><strong>Problem:</strong> Choose all letters that represent the
correct choice(s), then create an R vector named <strong>prob04</strong>
with the lower case letter(s) chosen in quotes. If choosing more than
one lower case letter, the elements in the vector
<strong>prob04</strong> need to be separated by a comma. For example,
<code>prob04 &lt;- c(&quot;e&quot;,&quot;f&quot;)</code>. This R code should be written in
the code chunk of the <strong>Answer</strong> section below. This code
chunk should be executable and able to be evaluated.</p>
<ul>
<li>Question: Which of the following cases are discussed in this
course?</li>
</ul>
<ol style="list-style-type: lower-alpha">
<li><p>pascal case</p></li>
<li><p>snake case</p></li>
<li><p>camel case</p></li>
<li><p>kebab case</p></li>
<li><p>none of these</p></li>
</ol>
</blockquote>
</div>
<div id="fill-in-the-blank-and-exact-answer" class="section level3">
<h3>Fill-in-the-blank and Exact answer</h3>
<p>I omit a specific fill-in-the-blank problem/question, but I recognize
this style as an exact answer problem/question. Examples of exact answer
problems/questions include: Problems <strong>#1</strong> and
<strong>#3</strong>.</p>
<blockquote>
<p><strong>Problem:</strong> Create an R vector named
<strong>prob01</strong> that contains the following 3 elements (in this
order): first name, last name, and netID with each element enclosed in
quotes. For example,
<code>prob01 &lt;- c(&quot;Chris&quot;,&quot;Kinson&quot;, &quot;kinson2&quot;)</code>. This R code
should be written in the code chunk of the <strong>Answer</strong>
section below.</p>
</blockquote>
</div>
<div id="short-answer-1-complete-sentence-and-long-answer-3-or-more-complete-sentences" class="section level3">
<h3>Short answer (1 complete sentence) and Long answer (3 or more
complete sentences)</h3>
<p>I omit a specific short answer problem/question, but I recognize this
style as a version of a long answer problem/question. An example of a
long answer problem/question is Problem <strong>#5</strong>.</p>
<blockquote>
<p><strong>Problem:</strong> Create a character-type vector of length 1
in R named <strong>prob05</strong> with at least two complete sentences
that answer the following question(s). This R code should be written in
the code chunk of the <strong>Answer</strong> section below. This code
chunk should be executable and able to be evaluated.</p>
<ul>
<li>Question: In your own words, describe the best way(s) for you to
learn new things. What specific things do you require for you to retain
information? How frequently do you refer back to notes or textbooks when
learning new information?</li>
</ul>
</blockquote>
</div>
</div>
<div id="can-we-connect-this-to-github" class="section level2">
<h2>Can we connect this to GitHub?</h2>
<p>Yes, especially if you are the owner of a GitHub organization (org
for short), where your students are members of that org. In this sense,
GitHub can be considered as your Learning Management System (LMS). All
that’s needed is to connect your local machine to your GitHub account
such that it is authorized for your account. Then run code from the
command line.</p>
<p>We can even use R script to run git operations such as:</p>
<pre class="r"><code>for (i in 1:nrow(netids)){
url &lt;- paste0(&quot;git clone &quot;, &quot;https://github.com/course-semester/&quot;, netids[i], &quot;.git&quot;,
               &quot; &quot;, netids[i])
  shell(url)
}</code></pre>
<p>I hope to share more on GitHub as an LMS at a later date.</p>
</div>




</div>

<script>

// add bootstrap table styles to pandoc tables
function bootstrapStylePandocTables() {
  $('tr.odd').parent('tbody').parent('table').addClass('table table-condensed');
}
$(document).ready(function () {
  bootstrapStylePandocTables();
});


</script>

<!-- tabsets -->

<script>
$(document).ready(function () {
  window.buildTabsets("TOC");
});

$(document).ready(function () {
  $('.tabset-dropdown > .nav-tabs > li').click(function () {
    $(this).parent().toggleClass('nav-tabs-open');
  });
});
</script>

<!-- code folding -->


<!-- dynamically load mathjax for compatibility with self-contained -->
<script>
  (function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src  = "https://mathjax.rstudio.com/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
    document.getElementsByTagName("head")[0].appendChild(script);
  })();
</script>

</body>
</html>
