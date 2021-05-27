---
layout: page
title: Publications
permalink: /publications/
---

<ol>
{% for post in site.publication reversed %}
  <li>{% include archive-single.html %}</li>
{% endfor %}
</ol>

{% if site.author.googlescholar %}
  You can also find my articles on <u><a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}