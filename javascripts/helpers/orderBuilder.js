import bread from './bread.js';
import util from './util.js';
import meat from './meat.js';

const orderButtonEvent = () => {
    const orderButton = document.getElementById('orderButton');
    orderButton.addEventListener('click', orderSandwich);
};

const orderSandwich = () => {
  const breadType = document.getElementsByClassName('bread');
  const meatType = document.getElementsByClassName('meat');

  const order = [];
  let orderTotal = 0;
  let domString = "";
  for( let i = 0; i < breadType.length; i++){
      if(breadType[i].checked === true){
      console.log('type of bread: ' + breadType[i].id);
      console.log('price: ' + bread.getBread()[breadType[i].id]);
      order.push(breadType[i].id, bread.getBread()[breadType[i].id]);
      orderTotal += bread.getBread()[breadType[i].id];
      domString += `Bread Type: ${breadType[i].id} Price: ${bread.getBread()[breadType[i].id]}</br>`;
  }
  };
  for( let i = 0; i < meatType.length; i++){
    if(meatType[i].checked === true){
    console.log('type of meat: ' + meatType[i].id);
    console.log('price: ' + meat.getMeat()[meatType[i].id]);
    order.push(meatType[i].id, meat.getMeat()[meatType[i].id]);
    orderTotal += meat.getMeat()[meatType[i].id];
    domString += `Meat Type: ${meatType[i].id} Price: ${meat.getMeat()[meatType[i].id]}</br>`;
}
};
  util.printToDom('cart-container', domString);
//   util.printToDom('cart-container', order);


}

export default { orderButtonEvent };