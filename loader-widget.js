(function() {
  const user = "wg-library";
  const repo = "wg-library";
  const branch = "main"; 
  const baseUrl = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/`;

  const version = new Date().getTime();

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `${baseUrl}wg-microsite-affiliate.min.css?v=${version}`;
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = `${baseUrl}vcore-free.min.js?v=${version}`;
  script.defer = true;
  document.body.appendChild(script);
})();