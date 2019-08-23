document.addEventListener('DOMContentLoaded', () => {

  /**
   * Присвоение класса - desktop / touchpad тэгу "html"
   * для решения проблемы с ховером в мобильных устройствах
   */

  if (('ontouchstart' in window) || window.DocumentTouch /*&& document instanceof DocumentTouch*/) {
    document.querySelector('html').classList.add('touch');
  } else {
    document.querySelector('html').classList.add('no-touch');
  }

  /**
   * Проверка браузера и подключения стилей
   */

  function get_name_browser() {
    // получаем данные userAgent
    let ua = navigator.userAgent;
    // с помощью регулярного выражения
    // ищем упоминание названия браузера
    if (ua.search(/Chrome/) > 0) return 'Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'IE';
    return false;
  }


// сравниваем название и подключаем нужный css
  if (get_name_browser() == "Chrome") {
    //document.write('<link rel="stylesheet" href="css/Chrome.css">');
  }
  if (get_name_browser() == "Firefox") {
    //document.write('<link rel="stylesheet" href="css/Firefox.css">');
  }
  if (get_name_browser() == "Opera") {
    //document.write('<link rel="stylesheet" href="css/Opera.css">');
  }
  if (get_name_browser() == "Safari") {
    document.getElementsByTagName('html')[0].style.cursor = 'pointer';
  }
  if (get_name_browser() == "IE") {
    //document.write('<link rel="stylesheet" href="css/IE.css">');
  }

});

