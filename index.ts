#! /usr/bin/env node

import inquirer from "inquirer"

const currency:any={
    USD: 1, //Base Currency
    PKR: 277.54,
    INR: 83.30,
    EUR: 0.92,
    AUD: 1.52,
    CAD: 1.36,
    NPR: 133.08,
    GBP: 0.79,

}
let usr_answer= await inquirer.prompt(
    [
        {
            name:"from",
            type:"list",
            choices:['USD','PKR','INR','EUR','AUD','CAD','NPR','GBP'],
            message:"Enter the Currency you want to convert."
        },

        {
            name:"to",
            type:"list",
            choices:['USD','PKR','INR','EUR','AUD','CAD','NPR','GBP'],
            message:"Enter the Currency in which you want to convert."
        },

        {
            name:"amount",
            type: "number",
            message: "Enter the amount you wanna convert"
        }
    ]
)

let fromAmount= currency[usr_answer.from];
let toAmount= currency[usr_answer.to];
let amount= usr_answer.amount;
let baseAmount = amount/fromAmount; //Amount Converted to US Dollars
let convertedAmount= baseAmount*toAmount; 

console.log(usr_answer)
console.log(`The Converted Amount is ${convertedAmount}`)