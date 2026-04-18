module ${{ values.name }}

go 1.22

require (
{% if values.enableObservability %}
	github.com/prometheus/client_golang v1.19.0
{% endif %}
)
