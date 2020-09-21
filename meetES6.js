// Arrow function , Default Parameter, Rest operator (parameter), Template string
 
const add = (a, b) => a + b
const sum = add(5,10)
console.log(sum);
 
const mul = (a, b=1) => a * b
const mulRes = mul(5)
console.log(mulRes);
 
const greeting = (name = 'Guest') => `Hello ${name}`
const greetAuthor = greeting('shadin');
console.log(greetAuthor);
const greetGuest  = greeting();
console.log(greetGuest);
 
// Rest parameter
 
const phTeam = (...members) => members
const teamMembers = phTeam('shadin', 'manik', 'srikanta', 'mujahid', 'Kumu')
console.log(teamMembers);
 
// Object Destructuring 
 
const person = {
    name   : 'Solaiman Shadin',
    hobby  : ['Eating' , 'Sleeping'],
    skills : {
                WebDevelopment : ['HTML', 'CSS', 'JavaScript'],
                GraphicDesign  : ['PhotoShop', 'Illustrator', 'Light Room', 'XD', 'Figma']
            }
}
 
const {hobby: [hobby1, hobby2], name, skills: {WebDevelopment:[skill1, skill2],GraphicDesign } } = person;
console.log(name);
// console.log(hobby);
console.log(hobby1);
console.log(hobby2);
console.log(skill1);
console.log(skill2);
 
const product = {
    name: 'Kidniphone X',
    price: 999
}
 
const {name:productName, price } = product;
console.log(productName);
console.log(price);
 
// Array Destructuring, Default value on Destructuring, Rest Destructuring
 
// console.log(hobby);
// const [hobby1, hobby2, hobby3 = 'Not set'] = hobby;
 
// console.log(hobby3);
 
// const [ , , latestWebSkill] = WebDevelopment;
// console.log(latestWebSkill);
 
 
// const [firstGraphicSkill, ...othersGraphicSkills] = GraphicDesign;
// console.log(firstGraphicSkill);
// console.log(othersGraphicSkills);
 
// Destructuring function parameter
 
const hiAuthor = ({name}) => `Hi, ${name}`
const sayHiToAuthor = hiAuthor(person)
console.log(sayHiToAuthor);
 
// Spread operator
const midMarks = [33, 10, 80]
const highestMark = Math.max(...midMarks)
console.log(highestMark)
 
const midAll = [...midMarks, 70]
console.log(midAll)
 
const finalMarks = {OOP: 75, math: 10, eng: 50, phy: 20}
const finalMarksValues = Object.values(finalMarks)
console.log(finalMarksValues)
const totalMarksList = [...midAll, ...finalMarksValues]
 
console.log(totalMarksList)
 
// Promise 
 
const giveBorrow = (myBalance, askingAmount ) => {
    return new Promise((resolve, reject) => {
        if(askingAmount <= myBalance) {
            resolve("Here your money!");
        }else{
            reject("Sorry, haven't enough money!");
        }
    })
}
 
giveBorrow(3000, 2000)
.then((mgs) => console.log(mgs))
.catch((err) => console.log(err))
 