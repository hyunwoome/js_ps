/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const MONTH_ARRAY = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const splittedDate = date.split(' ');
  const removeAlphabet = splittedDate[0].replace(/[a-z]/g, '');
  const month = MONTH_ARRAY.indexOf(splittedDate[1]) + 1;
  return `${splittedDate[2]}-${String(month).padStart(
    2,
    '0',
  )}-${removeAlphabet.padStart(2, '0')}`;
};

const date = '20th Oct 2052';
console.log(reformatDate(date));
