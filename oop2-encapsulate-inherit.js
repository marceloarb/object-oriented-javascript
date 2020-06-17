// /* 
// 1. Create the following classes:
//     - Book class. It should have an author and publisher property.
//     - Author class. It should have a name and books property.
//     - Publisher class.  It should have an authors and books property.
//     - Review class.  It should have a rating and user property.
//     -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".
//     Create methods that return the values of these private variables in case other pieces of the code need to access the
//     data of the 4 classes.
//     Also create methods that allow outside code to "set" new values for the properties on the classes,
//     without directly manipulating the values themselves. 


// class Book{
//     #author;
//     #publisher;
//     constructor(){
//         this.#author = "Yuval Noah Harari";
//         this.#publisher = "L&PM";
//     }
//     setProperty(author,publisher){
//         this.#author = author;
//         this.#publisher = publisher;
//         return console.log(`New Author:${this.#author}, New Publisher:${this.#publisher}`);
//     };
//     getProperty(){
//         return console.log(`Author:${this.#author}, Publisher:${this.#publisher}`);
//     }
// }
// const book = new Book();
// book.getProperty();
// book.setProperty("Marcelo","N");
// console.log("***************************************************************************************************");

// class Author{
//     #name;
//     #books;
//     constructor(){
//         this.#name = "Yuval Noah Harari"
//         this.#books = ["A brief history of humankind","Homo Deus"];
//     }
//     setProperty(name,books){
//         this.#name = name;
//         this.#books = books;
//         return console.log(`New name:${this.#name}, New books:${this.#books}`);
//     };
//     getProperty(){
//         return console.log(`name:${this.#name}, books:${this.#books}`);
//     }
// }
// const author = new Author();
// author.getProperty();
// author.setProperty("Marcelo","N");
// console.log("***************************************************************************************************");
// class Publisher{
//     #authors;
//     #books;
//     constructor(){
//         this.#authors = ["Yuval Noah Harari","Marcelo"];
//         this.#books = ["A brief history of humankind","Homo Deus"];
//     }
//     setProperty(authors,books){
//         this.#authors = authors;
//         this.#books = books;
//         return console.log(`New authors:${this.#authors}, New books:${this.#books}`);
//     };
//     getProperty(){
//         return console.log(`authors:${this.#authors}, books:${this.#books}`);
//     }
// }
// const publisher = new Publisher();
// publisher.getProperty();
// publisher.setProperty("Marcelo","N");
// console.log("***************************************************************************************************");
// class Review{
//     #rating;
//     #user;
//     constructor(){
//         this.#rating = [2,5,6];
//         this.#user = ["Marcelo","Julian"];
//     }
//     setProperty(rating,user){
//         this.#rating = rating;
//         this.#user = user;
//         return console.log(`New rating:${this.#rating}, New user:${this.#user}`);
//     };
//     getProperty(){
//         return console.log(`rating:${this.#rating}, user:${this.#user}`);
//     }
    
// }
// const review = new Review();
// review.getProperty();
// review.setProperty("Marcelo","N");
// console.log("***************************************************************************************************");
    




// 2. Create the following classes:
//     - Umbrella class.  It should have a an organization name.  It should only have a single instance.
//     Umbrella is the "Parent Organization" e.g. Allegis Group
//     - Company class. It should have a compnay name and # of employees.
//     Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
//     - Site class. It should have the name of the company, and the location of the site.
//     It is a child class that inherits from the Company class.  Create 3 sites for each company.
//     - Employee class. It should have a employee name, job title, and salary properties. 
//     Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer,
//     1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
//     - For each class, add 2 properties and 2 methods to each.
//     The properties and methods should make sense, considering what the classes are supposed to be representing.



// class Umbrella{
//     #name
//     constructor(){
//         this.#name = "Allegis";
//     }
//     getName(){
//         return this.#name;
//     }
//     setName(name){
//         this.#name = name;
//         return this.#name;
//     }
// }
// const Allegis = new Umbrella();
// class Company extends Umbrella{
//     constructor(name,companyName,employees=100){
//         super(name);
//         this.companyName = companyName;
//         this.employees = employees;
//     }
//     getOrganizationName(){
//         return console.log(this.getName());
//     }
//     aboutTheCompany(){
//         console.log("Allegis Group has more than 500 locations around the world. Choose your company, and then identify the office closest to you to start exploring how our global talent, staffing, and recruitment services connect great people to great opportunities")
//     }
//     getCompanyName(){
//         return this.companyName;
//     }
    

// }
// const TEKsystems = new Company("Allegis","TEKsystems",200);
// TEKsystems.getOrganizationName();
// const Aerotek = new Company("Allegis","Aerotek",400);
// const AllegisGroup = new Company("Allegis","Allegis Group",1000);


// class Site extends Company{
//     constructor(companyName,location){
//         super(companyName);
//         this.companyName = companyName;
//         this.location = location;
//     }
//     sayCompanyName(){
//         console.log(this.getCompanyName());
//     }
//     companyLocation(){
//         return console.log(this.location);
//     }


// }
// const Dallas = new Site("TEKsystems","Dallas");
// console.log(Dallas)
// const Austin = new Site("TEKsystems","Austin");
// const Boston = new Site("TEKsystems","Boston");
// const SanFrancisco = new Site("Aerotek","San Francisco");
// const NewYork = new Site("Aerotek","New York");
// const Minneapolis = new Site("Aerotek","Minneapolis");
// const NewHampshire = new Site("Allegis Group","New Hampshire");
// const Dorshester = new Site("Allegis Group","Dorshester");
// const SanDiego = new Site("Allegis Group","San Diego");
// class Employee{
//     constructor(name,title,salary){
//         this.name = name;
//         this.title = title;
//         this.salary = salary;
//     }
//     getSalary(){
//         return console.log(`My name is ${this.name} and as a/an ${this.title} I am making ${this.salary}`)
//     }
//     bonusSalary(bonus){
//         return console.log(`I have had an incredible year and received a ${bonus} bonus`);
//     }
    
// };
// const CEO = new Employee("Mariza","CEO","1.100.00000");
// CEO.getSalary();
// CEO.bonusSalary("20 thousand dollars");
// const Manager = new Employee("Anledi","Manager","800.000,00");
// const Secretary = new Employee("Maria","Secretary","10.000,00");
// const Engineer1 = new Employee("Marcelo","Engineer","200.000,00");
// const Engineer2 = new Employee("Barbosa","Engineer","200.000,00");
// const Finalcial = new Employee("Joselita","Finalcial","120.000,00");
// const Janitor = new Employee("Joselito","Janitor","10.000,00");
// const Marketer = new Employee("Jusara","Marketer","10.000,00");
// const HR = new Employee("Juanito","HR","80.000,00");
// const Lawyer = new Employee("Barbosa","Lawyer","150.000,00");

/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.
This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/




class Author{
    #name;
    #books;
    constructor(){
        this.#name = "Yuval Noah Harari"
        this.#books = ["A brief history of humankind","Homo Deus"];
    }
    setProperty(name,books){
        this.#name = name;
        this.#books = books;
        return console.log(`New name:${this.#name}, New books:${this.#books}`);
    };
    getProperty(){
        return console.log(`name:${this.#name}, books:${this.#books}`);
    }
}
const author1 = new Author();
author1.setProperty("Mark Twain","Barbosa");
const author2 = new Author();
author2.setProperty("Stephen King","");
const author3 = new Author();
author3.setProperty("Jane Austen","");
console.log("***************************************************************************************************");
class Publisher{
    #authors;
    #books;
    constructor(){
        this.#authors = ["Yuval Noah Harari","Marcelo"];
        this.#books = ["A brief history of humankind","Homo Deus"];
    }
    setProperty(authors,books){
        this.#authors = authors;
        this.#books = books;
        return console.log(`New authors:${this.#authors}, New books:${this.#books}`);
    };
    getProperty(){
        return console.log(`authors:${this.#authors}, books:${this.#books}`);
    }
}
const publisher1 = new Publisher();
publisher1.setProperty("author1","");
const publisher2 = new Publisher();
publisher2.setProperty("author2","");
const publisher3 = new Publisher();
publisher3.setProperty("author3","");
console.log("***************************************************************************************************");


class Review{
    #rating;
    #user;
    constructor(){
        this.#rating = [2,5,6];
        this.#user = ["Marcelo","Julian"];
    }
    setProperty(rating,user){
        this.#rating = rating;
        this.#user = user;
        return console.log(`New rating:${this.#rating}, New user:${this.#user}`);
    };
    getProperty(){
        return console.log(`rating:${this.#rating}, user:${this.#user}`);
    }
    
}
const review1 = new Review();
review1.setProperty(5,"user1");
const review2 = new Review();
review2.setProperty(5,"user2");
const review3 = new Review();
review3.setProperty(5,"user3");
console.log("***************************************************************************************************");


class Book {
    #author;
    #publisher;
    #reviews;
    #title;
    constructor(){
        this.#author = "";
        this.#publisher = "";
        this.#reviews = "";
        this.#title = "";
    }
    setProperty(author,publisher,review,title){
        this.#author = author;
        this.#publisher = publisher;
        this.#reviews = review;
        this.#title = title;
        return console.log(`New Author:${this.#author}, New Publisher:${this.#publisher}, Review:${this.#reviews}, Title:${this.#title}`);
    };
    getProperty(){
        return console.log(`Author:${this.#author}, Publisher:${this.#publisher},  Publisher:${this.#publisher}, Review:${this.#reviews}, Title:${this.#title}`);
    }
}
const book1 = new Book();
book1.setProperty("author1","publisher1","review1","Mark Twain");
const book2 = new Book();
book2.setProperty("author2","publisher2","review2","Stephen King");
const book3 = new Book();
book3.setProperty("author3","publisher3","review3","Jane Austen");
console.log("***************************************************************************************************");

class Bookstore{
    #infoBook
    constructor(infoBook){
        this.#infoBook = infoBook
    }
    setInfoBook(book){
        this.#infoBook.push(book);
    }
    getInfoBook(){
        return console.log(this.#infoBook)
    }
}
const bookStore1 = new Bookstore(["book1","book2","book3"]);
bookStore1.setInfoBook("book4");
bookStore1.getInfoBook();

