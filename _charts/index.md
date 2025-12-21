---
layout: default
title: Helm Charts
permalink: /charts/
---

# Helm Charts

This page lists Helm charts published by **Kagiso**.

The chart repository is available at:

👉 https://kagiso-me.github.io/helm-charts

---

## Available Charts

{% raw %}
{% if site.static_files %}
  <ul>
  {% for file in site.static_files %}
    {% if file.path == "/_charts/index.yaml" %}
      <li>Helm chart index.yaml synced successfully.</li>
    {% endif %}
  {% endfor %}
  </ul>
{% else %}
  <p>No charts found yet.</p>
{% endif %}
{% endraw %}
