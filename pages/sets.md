---
layout: page
title: 
---

<div class = "misc-gl">
  <img src="{{ site.github.url }}/assets/img/dj.jpg" width="750" height="400">
</div>

{% if site.data.content.sets %}
<section id="sets" class="section" name="podcast">
	<div class="container">
		<h2>Mixes</h2>
		{% for set in site.data.content.sets %}

		<div class="box">
			<div class="columns is-vcentered">
			<div class="column">

			</div>
			<div class="column is-narrow">
				<h3>{{ set.name }}</h3>
				<a href="{{ set.download_link }}">
				Listen Here
				</a>
				

				<!-- <div class="embed-set">
				<iframe sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups" scrolling=no width="100%" height="500" frameborder="0" src="{{ set.embed_link }}"></iframe>
				</div> -->

				
				<p>{{ set.summary }}</p>
			</div>

			</div>
		</div>
		{% endfor %}

	</div>
	<div id="player-container"></div>
</section>
{% endif %}
