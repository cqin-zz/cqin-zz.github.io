---
layout: page
title: Notes
permalink: /notes/
---

<div id="notes">
  <ol class="posts">
    {% for post in site.posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> &raquo; <i><span>{{ post.date | date_to_string }}</span></i></li>
    {% endfor %}
  </ol>
</div><!-- end #notes -->