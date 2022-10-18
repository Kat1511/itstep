var user = "Вася";
const lastName = "Пупкин";

var userHeight = 180; userWeight = 0.89;
var userWeightKg = userWeight * 100;

console.log("Меня зовут" + user + " " + lastName + ". Я вешу " + userWeight + "ц. Мой рост " + userWeightKg + "см.");

userWeightKg = userWeightKg + 10;

userHeight = userHeight - 2;

console.log(user + " " + lastName + " потолстел и стоптался.");

user = "Петя";
userWeightbig = userWeightKg * 2;

console.log("Теперь я " + user +  " " + lastName + " и вешу в " + (userWeightbig/userWeightKg) + " больше, чем в молодости.");


var side = 2;

var perimetr = 4 * side;
console.log(perimetr);


var a = 2;
var sqr = Math.PI * a *2;
console.log(sqr);


var p = 3, o = 5;
var t = (p**2 + o**2)**0.5;
console.log(t);


var m = 3, l = 4; z;

var z = m, m = l; l = z;

console.log(m,l);


var q = 123;
q2 = q % 10;
q3 = (q - q2)/10 % 10;
q4 = (q - 10 * q3 - q2) / 100;
console.log(q2, q3, q4);


true + false //1
12 / "6" //2
"number" + 15 + 3
"foo" + + "bar"
++"9" + 1
"" + 2 + 1
2 - "" + 4
2 / ""
5 + + "4"
5 - + "4"
5 + - "4"
undefined + null + ""
"" / true
null / false
