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

checkStringLength('проверяемая строка', 20));
checkStringLength('проверяемая строка', 18));
checkStringLength('проверяемая строка', 10));


/**
 * Функция для проверки, является ли строка палиндромом.
 * Палиндром — это слово или фраза, которые одинаково
 * читаются и слева направо и справа налево.
 */

function isPalindrom(line) {
  const lineBuffer = line.replaceAll(' ', '').toLowerCase();
  const lineReversed = lineBuffer.split('').reverse().join('');

  return lineBuffer === lineReversed;
}

isPalindrom('топот'));
isPalindrom('ДовОд'));
isPalindrom('Кекс'));
isPalindrom('Лёша на полке клопа нашёл '));


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

  if (typeof line === 'number') {
    result = line;
  } else {
    for (let i = 0; i < line.length; i++) {
      buf = parseInt(line[i], 10);
      if (!Number.isNaN(buf)) {
        result += buf;
      }
    }
  }

  return Math.abs(parseInt(result, 10));
}

numberExtract('2023 год');            //2023
numberExtract('ECMAScript 2022');     //2022
numberExtract('1 кефир, 0.5 батона'); //105
numberExtract('агент 007');           //7
numberExtract('а я томат');           //NaN
numberExtract(2023);           //2023
numberExtract(-1);           //1
numberExtract(1.5);           //2023

