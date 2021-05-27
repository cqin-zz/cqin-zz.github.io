---
layout: page
title: Publications
permalink: /publications/
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

<ol>
{% for post in site.publication reversed %}
  <li>{% include archive-single.html %}</li>
{% endfor %}
</ol>