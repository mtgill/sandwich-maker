import bread from './bread.js';
import util from './util.js';
import meat from './meat.js';
import cheese from './cheese.js';
import veggies from './veggies.js';

const orderButtonEvent = () => {
    const orderButton = document.getElementById('orderButton');
    orderButton.addEventListener('click', orderSandwich);
};

const orderSandwich = () => {
  const breadType = document.getElementsByClassName('bread');
  const meatType = document.getElementsByClassName('meat');
  const cheeseType = document.getElementsByClassName('cheese');
  const veggieType = document.getElementsByClassName('veggies');

  const order = [];
  let orderTotal = 0;
  let domString = "";
  for( let i = 0; i < breadType.length; i++){
      if(breadType[i].checked === true){
      console.log('type of bread: ' + breadType[i].id);
      console.log('price: ' + bread.getBread()[breadType[i].id]);
      order.push(breadType[i].id, bread.getBread()[breadType[i].id]);
      orderTotal += bread.getBread()[breadType[i].id];
      domString += `Bread Type: ${breadType[i].id} Price: $${bread.getBread()[breadType[i].id]}</br>`;
  }
  };
  for( let i = 0; i < meatType.length; i++){
    if(meatType[i].checked === true){
    console.log('type of meat: ' + meatType[i].id);
    console.log('price: ' + meat.getMeat()[meatType[i].id]);
    order.push(meatType[i].id, meat.getMeat()[meatType[i].id]);
    orderTotal += meat.getMeat()[meatType[i].id];
    domString += `Meat Type: ${meatType[i].id} Price: $${meat.getMeat()[meatType[i].id]}</br>`;
}
};

for( let i = 0; i < cheeseType.length; i++){
    if(cheeseType[i].checked === true){
    console.log('type of Cheese: ' + cheeseType[i].id);
    console.log('price: ' + cheese.getCheese()[cheeseType[i].id]);
    order.push(cheeseType[i].id, cheese.getCheese()[cheeseType[i].id]);
    orderTotal += cheese.getCheese()[cheeseType[i].id];
    domString += `Cheese Type: ${cheeseType[i].id} Price: $${cheese.getCheese()[cheeseType[i].id]}</br>`;
    
}
};

for( let i = 0; i < veggieType.length; i++){
    if(veggieType[i].checked === true){
    console.log('type of Cheese: ' + veggieType[i].id);
    console.log('price: ' + veggies.getVeggies()[veggieType[i].id]);
    order.push(veggieType[i].id, veggies.getVeggies()[veggieType[i].id]);
    orderTotal += veggies.getVeggies()[veggieType[i].id];
    domString += `Cheese Type: ${veggieType[i].id} Price: $${veggies.getVeggies()[veggieType[i].id]}</br>`;
    
}
};
  domString += `Order Total: $${orderTotal.toFixed(2)}`;
  util.printToDom('cart-container', domString);
//   util.printToDom('cart-container', order);


}

export default { orderButtonEvent };