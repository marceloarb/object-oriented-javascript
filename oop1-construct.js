//1. Create a Class called WhyClass.  This class should have one property, and two methods.
//  THe property is called "purpose", and stores a string. 
// This string should clearly explain why classes are used in Object Oriented Programming. 
// The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.
//  The second method is called pieces(). 
// This 2nd method should print out the various parts that are essential to building a class.
//  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

class WhyClass{
    constructor(purpose){
        this.purpose = purpose;
    }
    explain(){
        console.log(this.purpose);
    }
    pieces(first,second,third){
        console.log(`${first} ${second} ${third}`)
    }
}
const useClass = new WhyClass("OOP use classes to make a blueprint for creating objects");
useClass.explain();
useClass.pieces("constructor","methods","instance");


/*2. You are exploring the rainforests of the Amazon. 
You have observed many different types of wildlife on your excursion.
To jog your memory, some different types of wildlife that you observed are found in the following URL :
https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.
Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.
Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


class Amazon {
    constructor(name,size,weight){
        this.name = name;
        this.size = size;
        this.weight = weight;
    }

    perfil(){
        console.log(`I am ${this.name}, my size is ${this.size} and my weight is ${this.weight}`);
    }

    action(action1,action2){
        console.log(`Here is two unique things I can do: ${action1} and ${action2}`);
    }

}

const animal1 = new Amazon("Capybara","Large","140 pounds");
animal1.perfil();
animal1.action("eat 8 punds of grass per day","I really like water");
const animal2 = new Amazon("Giant Armadillo","Medium","120 pounds");
animal2.perfil();
animal2.action("The Armadillo’s casing can be used for offense as well as defense, and they also possess long front claws and between 80 and 100 teeth (more than any other mammal)","hey’re nocturnal animals and live in a complex system of burrows.");
const animal3 = new Amazon("Giant River Otter","Large","160 pounds");
animal3.perfil();
animal3.action("It is often seen feasting of fish and other small prey in oxbow lakes","Hunting, water pollution and habitat loss are the main causes of their decreasing population numbers.");
const animal4 = new Amazon("Jaguar","Large","130 pounds");
animal4.perfil();
animal4.action("These big cats are excellent at climbing, swimming, and hunting in the trees","It’s estimated that only around 6000 individuals survive in the Peruvian Amazon.");
const animal5 = new Amazon("Jaguarundi","Small", "20 pounds");
animal5.perfil();
animal5.action("Jaguarundis are mainly solitary and active during the day, unlike most felines","Their diet includes small felines, reptiles and ground-feeding birds, as Jaguarundis hunt more on the ground than in trees.");
const animal6 = new Amazon("Lophostoma Yasuni Bat","Large", "120 pounds");
animal6.perfil();
animal6.action("Like most other Bats, it eats insects. ","t’s named after Yasuni National Park");




/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape {
    name="triangle";
    sides=[4,7,7];
    base=null;
    height=null;
    constructor(name="triangle",sides=[4,7,7],base,height){
        this.name = name;
        this.sides = sides;
        this.base = base;
        this.height = height;
    }

    calcHeight(){
        this.height = (Math.sqrt(-(this.sides[0]/2*this.sides[0]/2)+(this.sides[1]*this.sides[1])));
        console.log(`${this.name}'s height is calculated to be: ${this.height}` )
    }

    calcArea() {
        this.base = this.sides[0]
        console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
    }

    calcPerimeter() {
        this.base = this.sides[0]
        console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2]) }`)
    }

    calcAreaOfRectangle(length,width) {
        console.log(`${this.name}'s area is calculated to be : ${length * width}`);
    }
    calcPerimeterOfRectangle(length,width) {
        console.log(`${this.name}'s perimeter is calculated to be : ${(2 * length) + (2 * width) }`)
    }
    calcAreaOfCircle(radius) {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * radius**2).toFixed(2)}`);
    }
    calcCircumferenceOfCircle(radius) {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * radius).toFixed(2)}`)
    }
}
const triangle = new Shape();
console.log(Shape);
triangle.calcHeight();
triangle.calcArea();
triangle.calcPerimeter();
console.log("*******************************************************************************************************************************************");
    
const rectangle = new Shape("rectangle",4);
rectangle.calcAreaOfRectangle(2,5);
rectangle.calcPerimeterOfRectangle(2,5);
console.log("*******************************************************************************************************************************************");

const circle = new Shape("Circle",1);
circle.calcAreaOfCircle(5);
circle.calcCircumferenceOfCircle(5);



/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.
Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.
Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it,
you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.
Because there is only 1 known earth, we don't want multiple instances of earth.
Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
    name;
    planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

    constructor(name,num) {
        this.name = name;
        this.planetNum = num;
    }

}

const earth = new Earth('earth',3);
console.log(earth);




