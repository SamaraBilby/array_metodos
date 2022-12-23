const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

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


//dobrando o valor do dinheiro de todos as person

function doubleMoney(){
    data = data.map(user => {
        return {
          ...user, 
          money: user.money * 2
        };
    });

    updateDOM();
};
//Ordenar usuários pelos mais ricos

  function sortByRichest(){
    data.sort((a,b)=> b.money - a.money)

    updateDOM();
  }

  //filtrar somente os milionários

  function showMillionaires(){
    data = data.filter(user => user.money > 1000000);

    updateDOM();
  }


  // calc total de riquieza

  

// add um novo obj nos dados de array

function addData(obj){
    data.push(obj);

    updateDOM();
}

function updateDOM(provideData = data){
    // limpa main div

    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

    provideData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;

        main.appendChild(element);
    });

}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string

function formatMoney(number) {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Event Listeners 

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);