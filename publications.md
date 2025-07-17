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
  You can also find my articles on my <u><a href="{{site.author.googlescholar}}">Google Scholar</a></u>.
{% endif %}