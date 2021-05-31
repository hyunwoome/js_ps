/**
 * @param {string[]} emails
 * @return {number}
 */
// var numUniqueEmails = function (emails) {
//   const splittedMail = emails.map((email) => email.split('@'));
//   let pureLocal = new Set();
//   let pureDomain = new Set();
//   splittedMail.forEach((email) => {
//     let removePlus = email[0].replace(/[+].*/g, ''); // +이후 제거
//     pureLocal.add(removePlus.replace(/\./g, '')); // . 제거
//     pureDomain.add(email[1]);
//   });
//   console.log(pureLocal);
//   console.log(pureDomain);
//   return pureLocal.size > pureDomain.size
//     ? pureLocal.size + 1
//     : pureDomain.size + 1;
// };

// var numUniqueEmails = function (emails) {
//   return new Set(
//     emails.map((email) => {
//       const [local, domain] = email.split('@');
//       return local.split('+').shift().split('.').join('') + '@' + domain;
//     }),
//   );
// };

var numUniqueEmails = function (emails) {
  function normalizeEmail(email) {
    let [local, domain] = email.split('@');
    local = local.replace(/(\.)|(\+.*)/g, '');
    return local + '@' + domain;
  }

  const set = new Set();

  for (let email of emails) {
    const address = normalizeEmail(email);
    set.add(address);
  }

  return set.size;
};

const emails = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com',
  'b@leetcode.com',
  'c@leetcode.com',
];
console.log(numUniqueEmails(emails));
