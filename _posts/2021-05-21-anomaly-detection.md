---
useMath: true
layout: post
title:  "Summary of Basic Anomaly Detections Methods"
date:   2021-05-27 07:20:17 -0700
categories: anomaly_detection
---

## 1 min abstract:
Anomaly, including errors, outliers, and noise can cause some troubles in the application of machine learning algorithms and statistical techniques. This article will introduce Four common anomaly detection methods, which are *Numeric Outlier*, *Z-Score*, *DBSCAN*, and *Isolation Forest*.

---

## Standard Deviation

In statistics, If a data distribution is approximately normal then about 68% of the data values lie within one standard deviation of the mean and about 95% are within two standard deviations, and about 99.7% lie within three standard deviations.

Therefore, if you have any data point that is more than 3 times the standard deviation, then those points are very likely to be anomalous or outliers.

{% highlight ruby %}
import numpy as np
import matplotlib.pyplot as plt
seed(1)


# multiply and add by random numbers to get some real values
data = np.random.randn(50000)  * 20 + 20

# Function to Detection Outlier on one-dimentional datasets.
def find_anomalies(data):
    #define a list to accumlate anomalies
    anomalies = []
    
    # Set upper and lower limit to 3 standard deviation
    random_data_std = std(random_data)
    random_data_mean = mean(random_data)
    anomaly_cut_off = random_data_std * 3
    
    lower_limit  = random_data_mean - anomaly_cut_off 
    upper_limit = random_data_mean + anomaly_cut_off
    print(lower_limit)
    # Generate outliers
    for outlier in random_data:
        if outlier > upper_limit or outlier < lower_limit:
            anomalies.append(outlier)
    return anomalies

find_anomalies(data)

{% endhighlight %}

---

## Numeric Outlier
Numeric Outlier is a simple and nonparametric method for detecting amolies in one-dimensional eigenspace. It treats the outliers for each of the selected columns individually by means of interquartile range ($$IQR$$). 

Let's recall the defination of $$IQR$$ - $$IQR$$ is a concept in statistics that is used to measure the statistical dispersion and data variability by dividing the dataset into quartiles. In simple words, any dataset or any set of observations is divided into four defined intervals based upon the values of the data and how they compare to the entire dataset. A quartile is what divides the data into three points and four intervals.

An observation is flagged an anomaly or outlier if it lies outside the range of the first and third quartile $$(Q_{1},Q_{3})$$. So, the outlier $$x_i$$ is:

$$ x_{i}>Q_{3}+k(IQR)\vee x_{i}<Q_{1}-k(IQR)$$

where $$IQR=Q_{3}-Q_{1}$$, and $$k>=0$$. Setting $$k=1.5$$ the smallest value in R corresponds, to the lower end of a boxplot's whisker and largest value to its upper end.

If an observation is flagged an outlier, one can either replace it by some other value or remove/retain the corresponding row.

Missing values contained in the data will be ignored, i.e., they will neither be used for the outlier computation nor will they be flagged as an outlier. 

The easier way to implement this method is using ***Boxplots***. Let's see the *Python* code below,

{% highlight ruby %}
import seaborn as sns
import matplotlib.pyplot as plt

sns.boxplot(data=random_data)
{% endhighlight %}

---

## Z-Score
Z-score is a parametric outlier detection method in a one or low dimensional feature space.

This technique assumes a Gaussian distribution of the data. The outliers are the data points that are in the tails of the distribution and therefore far from the mean. How far depends on a set threshold $$z_{thr}$$ for the normalized data points zi calculated with the formula:

$$ Z_{i}=\frac{x_{i}−\mu}{\sigma} $$

where where $$x_i$$ is a data point, $$\mu$$ is the mean of all $$x_i$$ and $$\sigma$$ is the standard deviation of all xi.

An outlier is then a normalized data point which has an absolute value greater than $$z_{thr}$$. That is:

$$ |Z_i|>z_{thr}$$

Commonly used $$z_{thr}$$ values are 2.5, 3.0 and 3.5.

---

## DBSCAN

This technique is based on the DBSCAN clustering method. DBSCAN is a nonparametric, density based outlier detection method in a one or multi dimensional feature space.

In the DBSCAN clustering technique, all data points are defined either as Core Points, Border Points or Noise Points.

* ***Core Points*** are data points that have at least MinPts neighboring data points within a distance ε.
* ***Border Points*** are neighbors of a Core Point within the distance ε but with less than MinPts neighbors within the distance ε.
* All other data points are ***Noise Points***, also identified as outliers.

Outlier detection thus depends on the required number of neighbors MinPts, the distance ε and the selected distance measure, like Euclidean or Manhattan.

{% highlight ruby %}

from sklearn.cluster import DBSCAN
seed(1)
random_data = np.random.randn(50000,2)  * 20 + 20

outlier_detection = DBSCAN(min_samples = 2, eps = 3)
clusters = outlier_detection.fit_predict(random_data)
list(clusters).count(-1)

{% endhighlight%}
---

## Isolation Forest

This is a nonparametric method for large datasets in a one or multi dimensional feature space.

An important concept in this method is the isolation number.

The isolation number is the number of splits needed to isolate a data point. This number of splits is ascertained by following these steps:

* A point $$a$$ to isolate is selected randomly.
* A random data point $$b$$ is selected that is between the minimum and maximum value and different from $$a$$.
* If the value of $$b$$ is lower than the value of $$a$$, the value of $$b$$ becomes the new lower limit.
* If the value of $$b$$ is greater than the value of $$a$$, the value of $$b$ becomes the new upper limit.
* This procedure is repeated as long as there are data points other than $$a$$ between the upper and the lower limit.

It requires fewer splits to isolate an outlier than it does to isolate a nonoutlier, i.e. an outlier has a lower isolation number in comparison to a nonoutlier point. A data point is therefore defined as an outlier if its isolation number is lower than the threshold.

The threshold is defined based on the estimated percentage of outliers in the data, which is the starting point of this outlier detection algorithm.

Let's take a look the *Python* implementation:

{% highlight ruby%}
from sklearn.ensemble import IsolationForest
import numpy as np
np.random.seed(1)
random_data = np.random.randn(50000,2)  * 20 + 20

clf = IsolationForest( behaviour = 'new', max_samples=100, random_state = 1, contamination= 'auto')
preds = clf.fit_predict(random_data)
preds
{% endhighlight%}


--- 

## Robust Random Cut Forest
Random Cut Forest (RCF) algorithm is Amazon’s unsupervised algorithm for detecting anomalies.
* GitHub:[http://proceedings.mlr.press/v48/guha16.pdf](http://proceedings.mlr.press/v48/guha16.pdf)
* Paper:[https://github.com/aws/amazon-sagemaker-examples/tree/master/introduction_to_amazon_algorithms/random_cut_forest](https://github.com/aws/amazon-sagemaker-examples/tree/master/introduction_to_amazon_algorithms/random_cut_forest)
* Video:[https://youtu.be/yx1vf3uapX8](https://youtu.be/yx1vf3uapX8)