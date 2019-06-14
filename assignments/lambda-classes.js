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
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(attrs) {
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
        this.grade = attrs.grade;
    }
    listsSubjects() {
        console.log(this.favSubjects.toString());
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


//test Objects

//Instructors

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

//Students

const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 97,
});

    const joscelyn = new Student({
    name: "Joscelyn",
    age: 29,
    location: "California",
    previousBackground: "English teacher",
    className: 'Web21',
    favSubjects: ["Computer Science", "Philosophy", "English"],
    grade: 95,
});

const neha = new Student({
    name: 'Neha',
    age: 31,
    location: 'California',
    previousBackground: 'Molecular biology grad student',
    className: 'WEB21',
    favSubjects: ['Virology', 'graduate napping', 'sewing'],
    grade: 99,
})

//Project Managers
const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});


console.log(dan.grade(nisa, 'HTML'));
console.log(dan.demo('cats'));
console.log(austin.speak());
console.log(neha.listsSubjects());
console.log(joscelyn.age);
console.log(joscelyn.PRAssignment('CSS'));
console.log(neha.sprintChallenge('procrastinating'));
console.log(marguel.debugsCode(nisa, 'JavaScript'));
console.log(austin.standUp('crying'));
console.log(marguel.favLanguage, marguel.specialty);