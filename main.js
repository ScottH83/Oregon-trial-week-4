console.clear();
"use strict";



class Person {
    constructor(name) {
        this.name = name;
        this.food = Math.floor((Math.random() * 50) + 10);
        this.sick = Math.random() >= 0.5;
        this.eat();
        this.hunt();
    }
    // Person Methods
    eat() {
        if (this.food > 0) {
            this.food -= 10;
            console.log(`you have ${this.food}pieces of food.`)
        }
    }
    hunt() {

        let huntNum = Math.floor(Math.random() * 20) + 0;
        this.food += huntNum;
        console.log(`Your hunt yielded ${huntNum} pieces of food.`)

    }
}
class Wagon {
    constructor() {
        this.travelers = [];
        this.checkFood();
        this.checkHealth();
        this.allFoods = 0;
        this.drunk = 0;
    }
    add(name) {
        if (this.travelers.length < 5) {
            this.travelers.push(name);
            console.log(this.travelers);
        }
    }
    checkFood() {
        for (let i = 0; i < this.travelers.length; i++) {
            this.allFoods = this.allFoods + this.travelers[i].food;
            console.log(`Total food =` + this.allFoods);
        }
    }
    checkHealth() {
        for (let i = 0; i < this.travelers.length; i++) {
            if (this.travelers[i].sick === true) {
                this.drunk += 1;
            }
        }
        console.log(`Drunk people =` + this.drunk);
    }
}



const walter = new Person("Walter");
const aimee = new Person("Aimee");
const shane = new Person("Shane");
const drew = new Person("Drew");
const val = new Person("Val");
const carter = new Person("Carter");
const nick = new Person("Nick");
const kathryn = new Person("Kathryn");
const scott = new Person("Scott");
const wagon = new Wagon();

wagon.add(walter);
