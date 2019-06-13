// CODE here for your Lambda Classes
class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attrs) {
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
        this.subject = attrs.subject;
    }
    demo() {
        console.log(`Today we are learning about ${this.subject}`);
    }
    grade() {
        console.log(`${Student.name} receives a perfect score on ${this.subject}`)
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects() {
        console.log()
    }
    PRAssignment() {
        console.log()
    }
    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }

}