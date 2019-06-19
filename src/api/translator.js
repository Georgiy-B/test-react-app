const token = 'trnsl.1.1.20190618T192334Z.58db0512947c0e39.07cfa72e1b15bd8bb57693449c6f8871a1fe522d';
const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${token}&format=plain`;

export function fetchTranslation({text, fromLang, toLang="en"}) {
  return fetch(`${url}&text=${text}&lang=${fromLang}-${toLang}`)
    .then(res => res.json())
    .then(res => res.text);
}