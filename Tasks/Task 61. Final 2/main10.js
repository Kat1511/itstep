// 10. Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
// а) Класс Student содержит переменные: String firstName, lastName, group. А также, averageMark, содержащую среднюю оценку.
// б) Добавить конструктор в оба класса. 
// в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100$, иначе 80$. Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200$, иначе 180$.
// г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.

class Student {
    firstName;
    lastName;
    group;
    averageMark;
    constructor(firstName,lastName,group,averageMark){
        this.firstName=firstName;
        this.lastName=lastName;
        this.group=group;
        this.averageMark=averageMark;
    }

    getSholarship(){
    if(this.averageMark==5){
        return "100$";
    }else{
        return "80$";
    }
    }
}
class Aspirant extends Student{
    studWork;
    constructor(firstName,lastName,group,averageMark,studWork){
        super(firstName,lastName,group,averageMark);
        this.studWork=studWork;
    }

    getScholarship(){
        if(this.averageMark==5){
            return "200$";
        }else{
            return "180$";
        }
    }
}
let stud=[];
let Student1 = new Student ("Илон", "Маск", 14 , 5);
stud.push(Student1);
let Aspirant1 = new Aspirant ("Билл", "Гейтс", 88 , 8, "Работа имеется");

stud.push(Aspirant1);
stud.forEach(function(item){
    console.log(item.getSholarship());
});