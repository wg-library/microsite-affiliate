(function() {
  const user = "wg-library";
  const repo = "microsite-affiliate";
  const branch = "main";
  const baseUrl = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/`;
  const version = new Date().getTime();

  const cssUrl = `${baseUrl}wg-microsite-affiliate.css?v=${version}`;

  const pre = document.createElement('link');
  pre.rel = 'preload';
  pre.as = 'style';
  pre.href = cssUrl;
  document.head.appendChild(pre);

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cssUrl;
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.src = `${baseUrl}vcore-free.js?v=${version}`;
  script.defer = true;
  document.body.appendChild(script);
})();
