const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getFruitData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data);
    displayFruitOptions(data);
}



const displayFruitOptions = (data) => {
    const options = document.querySelector('div.fruitoptions');
    data.forEach((fruit) => {
        let label = document.createElement('label');
        let input = document.createElement('input');
        

        //Adding data to the elements that we created above.

        let fruitName = fruit.name;
        

        label.textContent = fruitName;

        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', 'fruit');
        input.setAttribute('value', fruitName);
        input.setAttribute('id', fruitName);

        //Make the input  children of label

        label.appendChild(input);
        

        options.appendChild(label);
    });
}

getFruitData();

//Displaying Summary of Order//

const firstname = document.querySelector('#fname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const info = document.querySelector('#extrainfo');
const button = document.querySelector('#formbtn');
const container = document.querySelector('.ordersummary');


let numOrders = Number(window.localStorage.getItem("orders-ls"));
 

button.addEventListener('click', () => {
    const typedName = firstname.value;
    firstname.value = '';

    const typedEmail = email.value;
    email.value = '';

    const typedPhone = phone.value;
    phone.value = '';

    const extrainfoTyped = info.value;
    info.value = '';


    const listItem1 = document.createElement('li');
    const listItem2 = document.createElement('li');
    const listItem3 = document.createElement('li');
    const listItem4 = document.createElement('li');
    const listItem5 = document.createElement('li');
    const listItem6 = document.createElement('li');

    listItem1.textContent = `Name: ${typedName}`;
    listItem2.textContent = `Email: ${typedEmail}`;
    listItem3.textContent = `Phone number: ${typedPhone}`;
    listItem4.textContent = 'Fruits selected: '
    listItem5.textContent = `Special Instruction (if any): ${extrainfoTyped}`;
    
    const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
listItem6.textContent = `Order Date: ${fulldateUK}`;
    
    container.appendChild(listItem1);
    container.appendChild(listItem2);
    container.appendChild(listItem3);
    container.appendChild(listItem4);

    var markedCheckbox = document.getElementsByName('fruit');  
    for (var checkbox of markedCheckbox) {  
      if (checkbox.checked)  
        listItem4.append( checkbox.value + ' ' );
    }
    container.appendChild(listItem4);

    container.appendChild(listItem5);
   container.appendChild(listItem6);
      
   numOrders++;

    localStorage.setItem("orders-ls", numOrders);

   
})

