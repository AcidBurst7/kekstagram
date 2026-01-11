/**
 *
 * Функция для проверки длины строки. Она принимает строку,
 * которую нужно проверить, и максимальную длину и возвращает true,
 * если строка меньше или равна указанной длине, и false,
 * если строка длиннее. Эта функция нам пригодится для валидации формы.
 */
function checkStringLength(line = '', maxLength = 0) {
  return line.length <= maxLength;
}

// console.log(checkStringLength('проверяемая строка', 20));
// console.log(checkStringLength('проверяемая строка', 18));
// console.log(checkStringLength('проверяемая строка', 10));


/**
 * Функция для проверки, является ли строка палиндромом.
 * Палиндром — это слово или фраза, которые одинаково
 * читаются и слева направо и справа налево.
 */

function isPalindrom(line) {
  let lineBuffer = line.replaceAll(' ', '').toLowerCase();
  let lineReversed = lineBuffer.split('').reverse().join('');

  return lineBuffer == lineReversed;
}

// console.log(isPalindrom('топот'));
// console.log(isPalindrom('ДовОд'));
// console.log(isPalindrom('Кекс'));
// console.log(isPalindrom('Лёша на полке клопа нашёл '));

// console.assert(isPalindrom ,'топот');
// console.assert(isPalindrom ,'ДовОд');
// console.assert(isPalindrom ,'Кекс');
// console.assert(isPalindrom ,'Лёша на полке клопа нашёл ');

/**
 * Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
 * и возвращает их в виде целого положительного числа.
 * Если в строке нет ни одной цифры, функция должна вернуть NaN.
 *
 * Если хотите усложнить задание, предусмотрите случай,
 * когда вместо строки приходит число. Обратите внимание,
 * что возвращать функция по-прежнему
 * должна только целые положительные числа
 */
function numberExtract(line) {
  let result = '';
  let buf = '';

  if (typeof line == 'number') {
    result = line;
  } else {
    for (let i = 0; i < line.length; i++) {
      buf = parseInt(line[i]);
      if (!Number.isNaN(buf)) {
        result += buf;
      }
    }
  }

  return Math.abs(parseInt(result));
}

console.log('2023 год = ' + numberExtract('2023 год'));            // 2023
console.log('ECMAScript 2022 = ' + numberExtract('ECMAScript 2022'));     // 2022
console.log('1 кефир, 0.5 батона = ' + numberExtract('1 кефир, 0.5 батона')); // 105
console.log('агент 007 = ' + numberExtract('агент 007'));           // 7
console.log('а я томат = ' + numberExtract('а я томат'));           // NaN

console.log('2023 = ' + numberExtract(2023));           // 2023
console.log('-1 = ' + numberExtract(-1));           // 1
console.log('1.5 = ' + numberExtract(1.5));           // 2023
