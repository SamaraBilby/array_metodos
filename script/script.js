const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const shortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser()
getRandomUser()
getRandomUser()

//random user and money

async function getRandomUser() {

    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

   // console.log(data) o que iremos usar é o results;

   const user = data.results[0];
    //console.log(user);

   const newUser = {
     name: `${user.name.first} ${user.name.last}`,
     money: Math.floor(Math.random() * 1000000)
   };
   addData(newUser);
}

// add um novo obj nos dados de array

function addData(obj){
    data.push(obj);
}
