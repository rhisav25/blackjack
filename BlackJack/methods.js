//methods is basically function inside an object

let player = {
    name: "Per",
    chips: 200,
    sayHello : function(){
        console.log("Hello")
    }
}

let person = {
    name: "Rhisav",
    age: 21,
    country:"Canada"
}

function logData(){
    console.log(person.name+"is"+" "+person.age+" "+"years old lives in"+" "+person.country)
}
/*
let countries = ["USA","CANADA","INDIA","PAK","UK"]
countries.pop()
countries.push("Ireland")
//learn the use of shift and unshift

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
    
}*/
let hands = ["rock","paper","scissor"]
let num = Math.random()*3
let Num = Math.floor(num)
console.log(hands[Num])

