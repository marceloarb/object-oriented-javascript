
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated.
Find a way to prevent this class from being instantiated with an instance.
In the Creature class, include two abstract methods.  move(), and act().
These methods are NOT allowed to be invoked from the Abstract class,
 so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(),
which are found on the abstract Creature class. In addition to the 2 abstract methods,
implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.
    Example property fields are:
    -name
    -weight
    -food
    -age

*/

    class Creature {
        constructor(){
            if(this.constructor == Creature){
                throw new Error("Unable to instantiate Abstract Class Creature")
            }
        }
        act(){
            throw new Error("This is my abstract method");
        }
        move(){
            throw new Error("You cannot use this method outside the class");
        }
    }


    class Human extends Creature {
        constructor(name,age){
            super()
            this.name = name;
            this.age = age;
        }
        act(){
            return console.log("I am overrinding this method");
        }

        move(){
            return console.log("I am overrinding this method");
        }
        getHuman(){
            return console.log(`My name is ${this.name} and I am ${this.age} years old`);
        }
    }
    class Dinosaur extends Creature{
        constructor(age,weight){
            this.age = age;
            this.weight = weight;
        }

        act(){
            return console.log("I am overrinding this method");
        }
        move(){
            return console.log("I am overrinding this method");
        }
        getDinosaur(){
            console.log(`I am ${this.age} years old and I weight ${this.weight} pounds`)
        }
    }

    class Fish extends Creature{
        constructor(food,size){
            this.food = food;
            this.size = size;
        }
        act(){
            return console.log("I am overrinding this method");
        }
        move(){
            return console.log("I am overrinding this method");
        }
        getFish(){
            console.log(`I am a fish that eats ${this.food} and that is my size: ${this.size}`)
        }
    }




/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.
For the Teacher method, a set of methods have already been set up.  For the Student class,
it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;

    eat() {
        console.log(this.name + " is eating");
    }

    sleep() {
        console.log(this.name + " is sleeping");
    }

    code = function() {
        console.log(this.name + " is coding");
    }

    repeat() {
        console.log(this.name + " is repeating the above steps, yet another time");
    }

    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work,
        // and the reasoning behind what you did.
        console.log("To override the methods on the super class I had to change the methods on my super class to be prototype, since fields and prototype child come first in polymorphism.");
    }

}


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat() {
        console.log(this.name + " loves to teach before eating");
    }

    sleep() {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code = () => {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat() {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}


class Student extends Person {
    constructor(name){
        super(name);
        this.name = name;
    }
    
    //set up your methods in this student class, so all of these methods will override the methods from the super class.

    //eat method should print out - <stduent name> studies, then eats
    eat = () =>{
        console.log(this.name + " studies, then eats.");
    }

    //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
    sleep = () =>{
            console.log(this.name + " studies coding so much, that they dream about it in their sleep");
        }
    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
    code = () =>{
        console.log(this.name + " was first overwhelmed by coding, but kept at it, and now has become a coding guru!");
    }
    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.  
    repeat = () =>{
        console.log(this.name + " keeps on studying, coding, eating, and sleeping, and puts it all on repeat.")
    }
}


const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();




//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    prepare = function(food1,food2,food3) {
        console.log("The cook is cooking " + food1, food2, food3);
    }

    prepare() {
        console.log('The cook is cooking');
    }

    explain = () => {
        console.log("All I had to do here were switch the methods and the reason is the field comes first and the prototype comes second, so if I set an = on my second method it will be a field too, so it will override the first one.");
    }

}

const cook = new Cook();

cook.prepare("turkey","salami","pizza");
cook.explain();

