import bread from './bread.js';
import util from './util.js';

const orderButtonEvent = () => {
    const orderButton = document.getElementById('orderButton');
    orderButton.addEventListener('click', orderSandwich);
};

const orderSandwich = () => {
  const breadBoxes = document.getElementsByClassName('breadCheckBox');

  const order = [];
  let orderTotal = 0;
  for( let i = 0; i < breadBoxes.length; i++){
      if(breadBoxes[i].checked === true){
      console.log('type of bread: ' + breadBoxes[i].id);
      console.log('price: ' + bread.getBread()[breadBoxes[i].id]);
      order.push(breadBoxes[i].id, bread.getBread()[breadBoxes[i].id]);
      console.log(order);
      orderTotal += bread.getBread()[breadBoxes[i].id];
      console.log(orderTotal);
  }

  util.printToDom('cart-container', order);
};

}

export default { orderButtonEvent };