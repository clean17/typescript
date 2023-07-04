type Player = {
    readonly name: string,
    age?: number
};

const person1: Player = {
    name: "John"
};

const person2: Player = {
    name: "Jane",
    age: 25
};

const playerMaker = (name: string): Player => ({ name })

if (person2.age && person2.age > 20) {
    const answer = playerMaker(person1.name);
    const returnAge = ageReturn(person2.age);
    answer.age = 30;
    // console.log(`${answer.name} -> ${answer.age}, ${person2.name} -> ${returnAge}`)
}


function ageReturn(age: number) {
    return age
}

const address = person2.address?.city; // undefined 반환
if (address === undefined) {
    // console.log("Result is undefined.");
}
const answer = playerMaker(person1.name);
// answer.name = "Kane";

const numberArr: readonly number[] = [1, 2, 3, 4]
numberArr.push(5); // Property 'push' does not exist on type 'readonly number[]'.

function createException(): never {
    throw new Error("xx")
}

type Add = (x: number, y: number) => number;

const add: Add = (a, b) => a + b

type Config = {
  	path: string,
  	state: object
}

type Push = {
  	(path: string):void
  	(config: Config):void
}

const push: Push = (config) => {
  if(typeof config === 'string') console.log(config)
  else console.log(config.path) 
}

const test = "/home"
const configTest = {
    path: "/join",
    state: {}
}
// push(configTest)

type Add2 = {
  (a: number, b: number): number,
  (a: number, b: number, c:number): number
}
const add2: Add2 = (a, b, c?: number) => {
    if(c) return a + b + c
 	return a + b 
}

// console.log(add2( 1,2,4))

type SuperPrint = {
  <T>(arr: T[]): void
}
const superPrint: SuperPrint = (arr) => {
 	arr.forEach(i => console.log(i)) 
}
// superPrint([1,2,3,4])
// superPrint([true, false, "happy"]) // "Amiah Miller" 

function superPrint2<T>(a: T[]){
  return a[0]
}
const b = superPrint2([true, false, false])
// console.log(b)

type Player22<T> = {
  name: string,
  extra: T
}
const doe: Player22<{food: string}> = {
 	name: "doe",
  	extra: {
     	food: "Hamberger" 
    }
}





abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickName: string
    ){}
    getFullName(){
       // return this.firstName +"   "+ this.lastName  // "Amiah   Miller"
       return `${this.firstName} ${this.lastName}`  
    }
    abstract getNickName(): string
}
class MyPlayer extends User{
    getNickName(){
        return this.nickName
    }

}
const nicol = new MyPlayer("Amiah", "Miller", "22")
// console.log(nicol.getFullName())  // "Amiah Miller" 
// console.log(nicol.getNickName())






type Words = {
    [key: string]: number  // key - value
}
class Dict {
    private words: Words
    constructor(){
        this.words = {}  // 빈 객체로 초기화
    }
    add(word: Word){
        if(this.words[word.term] === undefined)
            this.words[word.term] = 1
    }
    count(term: string){
        return this.words[term]
    }
}
class Word {
    constructor(
        public term: string,
        public count: number
    ){}
}
const tomato = new Word("토마토", 1)
const dict = new Dict()  // dict.words -> 빈 객체
dict.add(tomato)
console.log(dict.count("토마토")) // 1







type Team = "red" | "blue" | "yellow"

type OnePlayer = {
    nickname: string,
    team: Team
}
const jack: OnePlayer = {
    nickname: "jack",
    team: "blue"
}







interface Person {
  name: string;
  age: number;
  greet(): void;  // abstract
}

class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const student = new Student("Alice", 20);
console.log(student.name); // 출력: "Alice"
console.log(student.age); // 출력: 20
student.greet(); // 출력: "Hello, my name is Alice."






interface MyStorage<T> {
    [key: string]: T
}
class LocalStorage<T> {
    private storage: MyStorage<T> = {
    }
    public set(str: string, value: T){
        this.storage[str] = value        
    }
    public clear(){
        this.storage = {}
    }
    public get(str: string) {
        return this.storage[str]
    }
}

const homeStorage = new LocalStorage<number>();
homeStorage.set("서랍", 1203)
console.log(homeStorage.get("서랍"))  // 1203
homeStorage.clear()
console.log(homeStorage.get("서랍"))  // undefined
