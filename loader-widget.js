(function() {
  const user = "wg-library";
  const repo = "microsite-affiliate";
  const branch = "main";
  const baseUrl = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/`;
  const version = new Date().getTime();

  document.write(`<link rel="stylesheet" href="${baseUrl}wg-microsite-affiliate.min.css?v=${version}" type="text/css" />`);

  const script = document.createElement('script');
  script.src = `${baseUrl}vcore-free.min.js?v=${version}`;
  script.defer = true;
  document.body.appendChild(script);
})();
