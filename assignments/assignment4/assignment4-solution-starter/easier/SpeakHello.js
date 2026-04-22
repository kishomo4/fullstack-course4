(function (window) {

  // создаём объект
  var helloSpeaker = {};

  // приватная переменная
  var speakWord = "Hello";

  // метод speak внутри объекта
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // экспорт в глобальную область
  window.helloSpeaker = helloSpeaker;

})(window);
