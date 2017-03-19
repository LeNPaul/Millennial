---
layout: page
title: Mathematics
---
{% for post in site.categories.mathematics %}
  <div class="featured-posts" {% if post.image.teaser %}style="background-image:url({{ site.github.url }}/images/{{ post.image.teaser }})"{% endif %}>
    <h2><span><a href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a></span></h2>
  </div>
{% endfor %}
