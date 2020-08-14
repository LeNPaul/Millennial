---
layout: project
title: "Intestinal Organoid Segmentation"
author: "Greg Lee"
categories: documentation
tags: [documentation]
image: organoid.jpg
---
Organoids are small, self-organized tissues grown from stem-cell progenitors. These *ex vivo* cultures help bridge the gap between animal models and cell culture experiments as they recapitulate the cellular heterogeneity without high cost. Organoids can be viewed via confocal microscopy and counted as a measure of stem-cell viability. This project aims to recognize and quantify intestinal organoids with YOLOv3. 

## Background
Organoids are a system to grow and study small "mini-organs". When seeded into a gelatinous, three-dimensional extracellular matrix, freshly harvested mammalian intestinal stem cells form organoids. Once plated in gel, these cells self-assemble into a epithelial monolayer surrounded by a central lumen reminiscent of the origin tissue architecture. All cell types of the intestinal niche are present. The robust nature of stem cells allows growth to occur quickly, with mature organoids showing by day seven. Organoid systems enable careful study of the healing response and stem-cell differentiation. Furthermore, they represent a hybrid between traditional animal studies and cell culture studies, enabling high through-put experiments to better study biology.
<img src="{{ site.github.url }}/assets/img/organoid_imgs/organoids_growth.png" width="600">

Organoid assays are often quantified by taking representative images of the gel "domes" which contain between 0-200 growing organoids. Images are taken by a researcher with a 2D confocal microscope. Following, images are processed to extract the number and area of each organoid. These data are then used to describe healing, differentiation, etc.

## Architecture

There are many types of algorithms capable of image detection including YOLO, Region-based Convolutional Neural Networks (R-CNNs), Single Shot Multibox Detectors (SSD) and Histograms of Oriented Gradients (HOGs). Each algorithm excels under certain conditions:

1. YOLO
    - Fast
    - Works by breaking down the image into smaller segments, analyzing what is within, and drawing bounding boxes, all in one go of the algorithm. [1-3]
2. R-CNNs
    - Accurate
    - Use a pre-trained deep CNN to examine the feature map and produce multiple region proposals and class predictions. Region proposals are based on anchor-boxes. [4]
3. Single Shot Multibox Detector
    - Alternative Method: Best on Large Objects, worse on small objects
    - Leverages the depth of CNNs to isolate small and large objects with relation to depth in network. [5]
4. Histogram of Oriented Gradients
    - Use combination of HOG and SCale Invariant Feature transformation to identify interest points within images based on normalized local histograms of image gradients. [6]

## Goal
An implementation of R-CNNs to quantify organoids was performed by a group at MIT [7]. While this methodology may result in the highest accuracy classification of organoids, it is not fast enough to do real-time detection on a microsope. This project aims to explore if YOLO can achieve roughly equal accuracy on organoid classification, at times fast enough to perform on video. As a researcher, having a tool to quickly quantify organoid images would save many painstaking hours of data collection and processing enabling increased efficiency and assay turn-around.

## Data Collection
These images come directly from experiments performed by Greg Lee under the direction of Dr. Helong Zhao at the University of Utah. The following protocol was used to grow intestinal organoids from mice:

C57BL/6J (wildtype) were purchased from Jackson Laboratories. All male and female mice used for intestinal crypt isolation were adults (8–10 weeks old). The isolation procedure was modified from an established protocol [7]. The jejunal sections of the mouse’s small intestine was harvested, opened longitudinally and washed with ice cold 1x phosphate buffer saline (PBS) (Sigma-Aldrich). Mucus and villi were removed using a thin glass coverslip and tissue was cut into 1 cm sections. The tissue pieces were washed in cold PBS and incubated in 30 mM ethylenediaminetetraacetic acid (EDTA) (Sigma-Aldrich), dissolved in PBS, for 8 minutes on ice. Under harsh stripping conditions, dithiothreitol (DTT) (Thermo-Fisher) was added to this solution at a concentration of 1.5 mM. Tissue pieces were transferred to PBS and incubated for 15 minutes on ice. Crypts were liberated by vigorously shaking for 3 minutes and isolated by passage through a 70 mm cell strainer. Purified crypts were pelleted by centrifugation (300 g for 5 minutes at 23 degrees C) and washed twice with PBS to remove any remaining contaminants. All animal studies were approved by University of Utah Institutional Animal Care and Use Committee under protocol number 16-05012 and 18-02010. All animal experiments were conducted in accordance with National Institute of Health Guide for the Care and Use of Laboratory Animals.

Isolated crypts were counted then pelleted by centrifugation (300 g for 5 minutes at 23 degrees C). 1000 crypts were suspended in 80 mL of 50% growth-factor-reduced phenol-red-free Matrigel (Corning) diluted in conditioned LWRN culture medium containing WNT3a, R-spondin, and Noggin. This suspension was pipetted onto the center of a 24 well plate to create a dome. Each gel polymerized at 37°C for 20 minutes. 750 mL of media containing a treatment (singularly including b-estradiol (Sigma-Aldrich), 4-hydroxytamoxifen (Cayman), and G15 (Tocris)) was added to fully submerge the gel. Media was changed every 3 to 4 days, with treatment maintenance throughout. Organoids were counted under 4x magnification with images captured on the EVOSTM Auto Imaging System 4 and 7 days after plating. The number of organoids was normalized per each experiment.

The images used for this project  organoids, seven days after seeding. The organoid image collection is too large to upload to github. This folder represents a small subsample of images. If you have an interest in utilizing these data, please shoot me an email: greglee1905@icloud.com.

## Data Labeling: 
YOLO follows a very specific labeling method utilizing bounding boxes. In order to create labels for all images, [labelImg](https://github.com/tzutalin/labelImg) was utilized. If labeling more images, make sure to select 'YOLO' as the label format, not 'PASCAL/VOC'. All images were hand labeled by Ryan Boekholder and Greg Lee.

## 