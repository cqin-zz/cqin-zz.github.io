---
useMath: true
layout: post
title:  "Four Common Methods for Anomaly Detections"
date:   2021-05-27 07:20:17 -0700
categories: anomaly_detection
---

## 1 min abstract:
Anomaly, including errors, outliers, and noise can cause some troubles in the application of machine learning algorithms and statistical techniques. This article will introduce Four common anomaly detection methods, which are *Numeric Outlier*, *Z-Score*, *DBSCAN*, and *Isolation Forest*.

---


## Numeric Outlier
Numeric Outlier is a simple and nonparametric method for detecting amolies in one-dimensional eigenspace. It treats the outliers for each of the selected columns individually by means of interquartile range (![eqn](https://latex.codecogs.com/svg.image?IQR)).

An observation is flagged an anomaly or outlier if it lies outside the range of the first and third quartile ![equation](https://latex.codecogs.com/svg.image?(Q_{1},&space;Q_{3})). So, the outlier ![eqn](https://latex.codecogs.com/svg.image?x_i) is:

<p align="center"> <img src="https://latex.codecogs.com/svg.image?x_{i}&space;>Q_{3}&plus;k(IQR)\vee&space;x_{i}<Q_{1}-k(IQR)&space;"></p>
where ![eqn](https://latex.codecogs.com/svg.image?IQR=Q_{3}-Q{1}), and ![eqn](https://latex.codecogs.com/svg.image?k>=0). Setting ![eqn](https://latex.codecogs.com/svg.image?k=1.5) the smallest value in R corresponds, to the lower end of a boxplot's whisker and largest value to its upper end. This technique is implemented using the *Numeric Outliers* nodes built into *KNIME Analytics Platform*.

If an observation is flagged an outlier, one can either replace it by some other value or remove/retain the corresponding row.

Missing values contained in the data will be ignored, i.e., they will neither be used for the outlier computation nor will they be flagged as an outlier.

---

## Z-Score

---

## DBSCAN

---

## Isolation Forest