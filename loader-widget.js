(function() {
  const user = "wg-library";
  const repo = "microsite-affiliate";
  const branch = "main";
  const baseUrl = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/`;
  const version = new Date().getTime();

  const pre = document.createElement('link');
  pre.rel = 'preload';
  pre.as = 'style';
  pre.href = `${baseUrl}wg-microsite-affiliate.min.css?v=${version}`;
  document.head.appendChild(pre);

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `${baseUrl}wg-microsite-affiliate.min.css?v=${version}`;
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = `${baseUrl}vcore-free.min.js?v=${version}`;
  script.defer = true;
  document.body.appendChild(script);
})();
