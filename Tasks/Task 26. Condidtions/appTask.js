// №1 четное или нечетное
var num = 6;
if (num % 2 == 0) {
    console.log("even")
} else {
    console.log("odd")
}

//№2 вывести нечетное число

var value1 = 2, value2 = 4;

if (value1 % 2 == 0){
    console.log(value1)
    
} else {
   
}
if (value2 % 2 == 0){
    console.log(value2)
    
} else {
   
}

// №3 вывести максимальное число

var a = 100, b = 200;

if (a>b){
    console.log(a)
} else {
     console.log(b)
}

//№4 максимальное из 3 чисел

var c = 300;

if (a>b){
    console.log(a)
}
if (b>c){
    console.log(b)
}
else{
     console.log(c)
}


// №5 вывести среднее значение

console.log((a+b+c)/3);


// №6 треугольник

if (a+b>=c){
    if (b+c>=a)
        if (a+c>=b)
        console.log("true")
} else{
     console.log("false")
}
// №7 координаты

var dot=50, radius=100, center=20;

if (dot+center<=radius){
    console.log("Треугольник существует")
} else{
      console.log("Треугольник не существует")
}

// № 8 високосный год

var year=2022;
if(year % 400 == 0 || year % 4 == 0 && year % 100 !=0){
    console.log("Високосный");
} else{
    console.log("Невисокосный")
}



// №9 рабочие дни

var day=3, hour =16;

if(day>=1 && day<=5 && hour>=8 && hour<=17){
    console.log("Рабочее время")
} else{
    console.log("Не рабочее время")
}

// №10 грибы

var mushrooms = 25;

if( mushrooms % 100 > 10 && mushrooms % 100 < 20 || 
    mushrooms % 10 > 4 && mushrooms % 10 < 10 || 
    mushrooms % 10 == 0)
    console.log(mushrooms + " грибов");
else if (mushrooms % 10 == 1)
    console.log(mushrooms + " гриб");
else
    console.log(mushrooms + " гриба");


// №11 коэфицианты квардратного уравнения

var cor = 9, cor1 = 5;

console.log(Math.sqrt(cor));

console.log(Math.sqrt(cor1));
