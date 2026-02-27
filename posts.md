---
layout: page
title: Blog
permalink: /blog/
---

<div id="blog">
  <ol class="posts">
    {% for post in site.posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> &raquo; <i><span>{{ post.date | date: '%b %d, %Y' }}</span></i></li>
    {% endfor %}
  </ol>
</div><!-- end #blog -->