---
layout: post
title: "STAT 385 Instructions for Completing Assignments"
author: "Christopher Kinson"
categories: teaching
tags: [teaching, about, ds]
image: stat385-cover-art2.png
---

# STAT 385 Instructions for Completing Assignments

In this course, we will use Git from the command line. A command-line interface is an interface on your computer that gives you direct access to your system and its files with easy-to-use commands. Depending on your computer and its operating system (OS), you can access the command line interface using the Terminal, Git Bash, or RStudio (via RStudio's internal Terminal). The following are tasks needed to start and finish any assignment that is posted in the sp24_assignments_s1 repo. First, you join the course via the repo creator link https://edu.cs.illinois.edu/create-gh-repo/sp24_stat385. Second, you authenticate your individual student repo. Third, you clone your individual student repo. Fourth, you retrieve an assignment file from the assignments_s1 repo. Fifth, you edit assignment file until you are satisfied enough to want to submit the assignment. Then submit the assignment file.

1. [Joining the course and creating your individual student repo](#joining)
2. [Authenticating your individual student repo](#authenticating)
3. [Cloning your individual student repo](#cloning)
4. [Retrieving an assignment](#retrieving)
5. [Submitting an assignment](#submitting)

## <a name="joining"></a>Joining the course and creating your individual student repo
From the unofficial syllabus which is published at https://chriskinson.com/stat385Sp24, students enrolled in STAT 385 should officially join the course via the repo creator link https://edu.cs.illinois.edu/create-gh-repo/sp24_stat385. After clicking the link, there will be several prompts and pages to click through. Below are the details.

1. Click on the "Log in to GitHub.com" button to continue.
2. After confirming that you have logged in, click on the "I've logged in!" button.
3. Click on the "Join org: illinois-cs-coursework" button to continue.
4. After confirming that you have joined the illinois-cs-coursework organization, click on "I've joined the org!".
5. Click on the "Join org: illinois-stat385" button to continue.
6. After confirming that you have joined the illinois-stat385 organization, click on "I've joined the org!". **Only click this button once. Clicking it multiple times will kick you out of the process, resulting in a full restart of step 1 above.**
7. Wait patiently as the system creates your repo. Do not click any buttons until you see a screen that says that your repo has been created with its own URL https://github.com/illinois-stat385/sp24_stat385_netID, where your netID replaces `netid`.

## <a name="authenticating"></a>Authenticating your individual student repo
Now that you have successfully joined the course and created your individual student repo, we need to ensure you have consistent and permanent access to Git from your computer, which means we need to authenticate your account via personal access tokens (PATs). Click on the link https://github.com/settings/tokens. **Beware, you may have created PATs for a previous course. If so, then you shouldn't have to make any new PAT, but you will need to authorize the Single Sign-On for this course illinois-stat385. See step 9 in this section below.** If you don't have any PATs, then follow all the details in this section below. 

  1. Go to https://github.com/settings/tokens/new.
  2. In the Note textbox, write "KCS".
  3. In the Expiration box, click on "No expiration".
  4. In the Select Scopes section, click on the check box for "repo (Full control of private repositories)".
  5. Scroll to the bottom of the page and click on "Generate token".
  6. Open a text file editor such as Notepad, Sticky Notes, Notepad++, MS Word, etc.
  7. In GitHub, copy the hashed token value (ghp_...) that appears on the tokens page and paste it into a new text file. **We will need this hashed value or PAT later.**
  8. Save this text file to your desktop.
  9. In GitHub, click on the "Configure SSO" button.
  10. Click on the "Authorize" button for illinois-stat385.
  11. Click on "Continue" button on your screen. There may be more than one screen with the "Continue" button. Click on all screens that say "Continue" until you see that your credential was authorized.

If at some point your computer asks you for your Git password, then use the hashed value (PAT) that was copied in step 7. It replaces your Git password. In GitHub, your password remains whatever your password was before. Your computer password remains whatever your password was before.

## <a name="cloning"></a>Cloning your individual student repo
Now that you have authorized your account for Git, you can clone your repo, which makes a copy of your repo at the time of cloning. This cloned repo is unique and will live on your computer's Desktop location. All of your assignment files associated with this course will need to be located in this cloned repo. This cloned repo may also be considered a **remote** for your repo. Again, if at some point your computer asks you for your Git password, then use the hashed value (PAT) that was copied above. If you have never cloned your individual student repo, then follow all the details in this section below. You should only have to clone your individual student repo once. **Beware any future Git issues might require deleting your remote and cloning your individual student repo over again.**

  1. Go to the course website and click on your individual student repo, which will be named as 'sp24_stat385_netID', where your netID replaces `netid`. Alternatively, click on https://github.com/illinois-stat385/sp24_stat385_netID, where your netID replaces `netid`.
  2. Click on the green Code button and copy the URL in the HTTPS textbox.
  3. Open your computer's command-line interface (either Terminal, Git Bash, or RStudio) and type the following commands, executing each line individually, where your netID replaces `netid`. You may be prompted to authenticate your GitHub account. **The `cd` command means to "change directory". If you are not sure of your current location in your computer's system, type `pwd`, which means "print working directory" and execute. If you ever navigate into a directory that you want to navigate out of, type `cd ..` to move out of that directory.**
  ```
  pwd
  cd Desktop
  cd ..
  cd Desktop
  git clone https://github.com/illinois-stat385/sp24_stat385_netID.git
  ```
  4. You may be prompted to authenticate in order to complete the cloning successfully.
  5. To know whether your cloning was successful, type the following commands, where your netID replaces `netid`.
  ```
  cd sp24_stat385_netID
  ls
  ```
  6. If you see a README.md, then your cloning was successful.

## <a name="retrieving"></a>Retrieving an assignment
Now that you have cloned your individual student repo, you can retrieve an assignment which means connecting to the sp24_assignments_s1 repo as a remote and fetch and merge specific files and directories into your cloned repo. If you have never retrieved an assignment before, then follow all the details in this section below. **Connecting to a remote should only need to happen once per computer. If you ever delete your cloned repo (from [Cloning your individual student repo](#cloning) above), then you must reconnect to the sp24_assignments_s1 repo.**

  1. Go to course website and click on the sp24_assignments_s1 repo. Alternatively, click on https://github.com/illinois-stat385/sp24_assignments_s1.
  2. Click on the green Code button and copy the URL in that HTTPS textbox.
  3. Open your computer's command-line interface (either Terminal, Git Bash, or RStudio) and type the following commands, executing each line individually, where your netID replaces `netid`. **Depending on your current working directory, you may need to navigate to the Desktop differently or with additional or fewer `cd` commands.**
  ```
  pwd
  cd Desktop
  cd sp24_stat385_netID
  ```
  4. Create a remote of your section's assignments repo for the course by typing the following command. 
  ```
  git remote add assignments https://github.com/illinois-stat385/sp24_assignments_s1.git
  ```
  5. Retrieve the most recent assignments by typing the following command.
  ```
  git fetch assignments
  ```
  6. Merge the specific assignment (and its directory) into your cloned repo by typing the following command (below in the chunk). ASSIGNMENTDIRECTORY is the name of the directory for the assignment you need to retrieve and eventually submit upon completion. For reading review assignments, the ASSIGNMENTDIRECTORY is "reading-reviews". For exam assignments, the ASSIGNMENTDIRECTORY is "exams". For pair lab assignments, the ASSIGNMENTDIRECTORY is "pair-labs". For solo lab assignments, the ASSIGNMENTDIRECTORY is "solo-labs".
  ```
  git merge assignments/ASSIGNMENTDIRECTORY -m "merging current assignments into my repo" --allow-unrelated-histories
  ```
  7. To know whether your retrieval was successful, type the following command such that you list all files and directories in your individual student repo. If you see the ASSIGNMENTDIRECTORY within your individual student repo, then this is a good sign. 
  ```
  ls
  ```
  8. Navigate into the ASSIGNMENTDIRECTORY that you just merged by typing the following command and execute. If you see the latest assignment file in this directory, then your assignment was retrieved successfully.
```
cd ASSIGNMENTDIRECTORY
ls
```

## <a name="submitting"></a>Submitting an assignment
Now that you have retrieved an assignment, you can open it in RStudio (or your preferred platform). Since it is an assignment with a deadline, you should attempt all problems and complete them by writing your code in the code chunks within the .Rmd file. Save the file a bunch of times. Remember that your file submission should have your netID in the file name (e.g. rr01-netID.Rmd). What you may fail to realize is that the file you are saving is local to your computer. Meaning, those saves do not appear in GitHub. If you want the local saves to appear in your individual student repo in GitHub, then you need to stage, commit, and push the file(s), which means submitting the assignment. You can submit an assignment as many times as you want in GitHub. And thanks to version control, each submission is an update to the original version. Meaning that each submission is dated and tagged if ever needed for the future. The course staff will grade the most recent version that is pushed by that assignment's deadline. If you have never submitted an assignment to your GitHub repo, then follow all the details in this section below.

  1. Open your computer's command-line interface (either Terminal, Git Bash, or RStudio) and type the following commands, executing each line individually, where your netID replaces `netid`. **Depending on your current working directory, you may need to navigate to the Desktop differently or with additional or fewer `cd` commands.**
  ```
  pwd
  cd Desktop/sp24_stat385_netID
  ```
  3. Stage all the newly saved files in your repo by typing the following command and executing. **Alternatively, instead of staging all recently saved files in your repo, you may want to stage a specific file. To do this for rr01, the command would be `git add reading-reviews/rr01-netID.Rmd`. Follow this naming structure for other ASSIGNMENTDIRECTORY/FILENAME.EXTENSION.**
  ```
  git add --all
  ```
  4. Commit and push the staged files to your individual student repo in GitHub by typing the following commands, executing at the end of each line.
  ```
  git commit -m "Added assignment files from local computer"
  git push origin main
  ```
  5. To know whether your submission was successful, go to your individual student repo in GitHub at https://github.com/illinois-stat385/sp24_stat385_netID, where your netID replaces `netid`. Look at the commit history. Look at the ASSIGNMENTDIRECTORY and the most recent file within. Open the file in your browser and check if your code was saved in the code chunks of that .Rmd file. If you see your code in the code chunks in that .Rmd file, then your submission is successful.
  6. Double-check the official syllabus Autograder section https://github.com/illinois-stat385/course_content/blob/main/syllabus/stat385-sp24-syllabus.md#autograder and verify that you have avoided mistakes that the autograder will penalize.