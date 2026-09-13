{{/* Project shadow of
     mod-google-analytics/assets/js/modules/googleanalytics/googleanalytics.js

     Identical to upstream except that its leading // comment is gone.

     With no Google Analytics ID configured the template body renders nothing,
     so upstream leaves a file containing just that comment. Hinode computes
     the fingerprint and the integrity attribute from the minified bundle,
     where the comment is stripped and the content is empty, but publishes the
     unminified one - so the integrity attribute is the SHA-256 of an empty
     string while the served file is 113 bytes, and every page load fails the
     subresource integrity check and the browser blocks the script.

     Dropping the comment makes the published bundle genuinely empty, which
     matches the hash. The conditional below is untouched, so configuring
     services.googleAnalytics.ID still emits the real snippet. */}}
{{- if or site.Params.modules.GoogleAnalytics.force (and (not hugo.IsServer) (not site.Config.Privacy.GoogleAnalytics.Disable)) -}}
  {{- with site.Config.Services.GoogleAnalytics.ID -}}
    {{- if site.Params.modules.GoogleAnalytics.gcm }}

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied", 
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 2000,
});
gtag("set", "ads_data_redaction", true);
gtag("set", "url_passthrough", true);

(function(w, d, s, l, i) {
  w[l] = w[l] || []
  w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
  })
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : ''
  j.async = true
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
  {{ if site.Params.modules.GoogleAnalytics.nonce }}
  var n = d.querySelector('[nonce]')
  n && j.setAttribute('nonce', n.nonce || n.getAttribute('nonce'))
  {{ end }}
  f.parentNode.insertBefore(j, f)
})(window, document, 'script', 'dataLayer', '{{ upper (. | urlize) }}')
{{ else }}
var doNotTrack = false;
if ({{ site.Config.Privacy.GoogleAnalytics.RespectDoNotTrack }}) {
  var dnt = (navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack);
  var doNotTrack = (dnt == "1" || dnt == "yes");
}
if (!doNotTrack) {
  const script = document.createElement("script");
  script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id={{ upper (. | urlize) }}");
  document.body.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ upper . }}');
}
{{- end -}}
{{- end -}}
{{- end -}}