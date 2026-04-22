// STEP 1: Создаём массив имён
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 2: Создаём два объекта (библиотеки) для приветствия и прощания
(function(window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    console.log("Hello " + name);
  };
  window.helloSpeaker = helloSpeaker;
})(window);

(function(window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function(name) {
    console.log("Goodbye " + name);
  };
  window.byeSpeaker = byeSpeaker;
})(window);

// STEP 3: Основной цикл
for (var i = 0; i < names.length; i++) {
  var name = names[i];
  var firstLetter = name.charAt(0).toLowerCase();

  if (firstLetter === "j") {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}
