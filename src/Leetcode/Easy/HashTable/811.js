/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const obj = {};

  cpdomains.forEach((cpdomain) => {
    let [visited, domain] = cpdomain.split(' ');
    const domains = [];
    let dot = domain.indexOf('.');

    while (dot > -1) {
      domains.push(domain);
      domain = domain.slice(dot + 1, domain.length);
      dot = domain.indexOf('.');
    }
    domains.push(domain);

    domains.forEach((domain) => {
      if (!obj[domain]) {
        obj[domain] = 0;
      }
      obj[domain] += Number(visited);
    });
  });

  const value = [];
  for (let key in obj) {
    value.push(`${obj[key]} ${key}`);
  }
  return value;
};
