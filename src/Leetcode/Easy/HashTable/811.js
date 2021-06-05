/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const domainMap = {};

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
      if (!domainMap[domain]) {
        domainMap[domain] = 0;
      }
      domainMap[domain] += parseInt(visited);
    });
  });
  const value = [];

  for (let key in domainMap) {
    value.push(`${domainMap[key]} ${key}`);
  }
  return value;
};

const cpdomains = [
  '900 google.mail.com',
  '50 yahoo.com',
  '1 intel.mail.com',
  '5 wiki.org',
];
console.log(subdomainVisits(cpdomains));
