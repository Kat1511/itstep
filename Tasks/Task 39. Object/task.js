// машина, марка, модель цвет

let car = {
 brand : "Жигуль",
 model : "2101", 
 color : "gray",
 full : "dizel"

}
let auto = {
    
    coutry:"USA",
    drive:"бла",
    __proto__: car
}
let plan ={
    kol :2,
    mover: "есть",
    fly : "я лечу",
    __proto__: car
}
let train ={
    
     cargo:"fgf",
     move: "я еду",
      __proto__: car,
}
train.model = function() {
  return "Большой Поезд";
};
train.brand = function() {
  console.log("Паровоз");
};
train.color = function() {
  console.log("Золотой");
};
train.full = function() {
  console.log("Уголь");
};
train.model();
train.brand();
train.color();
train.full();
plan.model = function() {
  console.log("Большой Самолет");
};
plan.brand = function() {
  console.log("Боинг");
};
plan.color = function() {
  console.log("blue");
};
plan.full = function() {
  console.log("Авиатопливо");
};
plan.model();
plan.brand();
plan.color();
plan.full();
console.log(train)