// let x : string = "Some Value";

// console.log(typeof x);      // string

// x = true;

// console.log(typeof x);      // boolean


// TypeScript -----> JavaScript ------> Node / Browser
// TypeScript Compiler -> npm install typeScript

// JavaScript types - String, Number, Boolean, Date, Functions, Object, 
// TypeScript - Void, Any, Enum

// Contructor Injection

// class Student{
//     // private firstName : string;
//     private lastName : string;
//     constructor(private firstName : string, lastName : string){
//         // this.firstName = firstName
//         this.lastName = lastName
//     }
//     getFullName(): string{
//         return `Hello from ${this.firstName} ${this.lastName}`
//     }
// }

// let foo = new Student("Foo", "Bar");
// console.log(foo.getFullName())




// Complex Type
interface MyType{
    firstName : string;
    lastName : string;
    email : string;
    age : number;
}   

let user : MyType = {
    firstName: "Foo",
    lastName :"Bar",
    email : "test@test.com",
    age : 23
}


// Decorators - are simple functions; prefixed with '@'; supply meta-info as arguments

// Angular Building Blocks - 
// - Components - Class with @Component()
// - Directives - Class with @Directive()
// - Pipes - class with @Pipe()
// - Services - class with @Injectable()
// - Modules - class with @NgModule()