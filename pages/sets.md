---
layout: page
title: Mixes
---

<div class = "misc-gl">
  <img src="{{ site.github.url }}/assets/img/dj.jpeg" width="1000" height="370">
</div>

## Mixes
Occasionally I DJ! Embedded below are some of my mixes!

{% if site.data.content.episodes %}
<section id="episodes" class="section" name="podcast">
	<div class="container">
		<h2>Episodes</h2>
		{% for episode in site.data.content.episodes %}

<!-- {% if episode.transcript_file %}
{% assign transcript_path = 'transcripts/'| append: episode.transcript_file | append: '.md' %}
{% capture transcript_content %}{% include_relative {{transcript_path}} %}{% endcapture %}
<div class="modal" id="transcript-{{ forloop.index }}">
	<div class="modal-background"></div>
	<div class="modal-content">
		<div class="box">
			<div class="content">
	  			{{ transcript_content | markdownify }}
	  		</div>
		</div>
	</div>
	<button class="modal-close is-large" aria-label="close"></button>
</div>
{% endif %} -->

		<div class="box">
			<div class="columns is-vcentered">
			<div class="column">

			<div class="columns is-vcentered is-mobile">
				<div class="column is-narrow">
					<span class="count">
						{{ forloop.index }}
					</span>
				</div>
				<div class="column">
					<h3>{{ episode.name }}</h3>
					<a href="{{ episode.download_link }}">Download episode</a>
					<p>{{ episode.summary }}</p>
				</div>
			</div>

			</div>
			<div class="column is-narrow">
					<a href="{{ episode.download_link }}" data-embed-link="{{ episode.embed_link }}" class="button is-primary is-large player-button" target="_blank">
						<span class="icon">
						  <i class="fas fa-play"></i>
						</span>&nbsp;
						Play
					</a>
			</div>
			</div>
		</div>
		{% endfor %}

		<a class="button is-primary is-small" data-modal="#subscribe" href="#">
			<span class="icon">
			  <i class="fas fa-rss"></i>
			</span>&nbsp;
			Subscribe
		</a>

	</div>
	<div id="player-container"></div>
</section>
{% endif %}
