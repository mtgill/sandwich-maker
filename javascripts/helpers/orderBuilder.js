import bread from './bread.js';
import util from './util.js';
import meat from './meat.js';
import cheese from './cheese.js';
import veggies from './veggies.js';
import condiments from './condiments.js';

const orderButtonEvent = () => {
    const orderButton = document.getElementById('orderButton');
    orderButton.addEventListener('click', orderSandwich);
};

const orderSandwich = () => {
  const checkBoxes = document.getElementsByClassName('checkBox');
  const breadTypes = bread.getBread();
  const meatTypes = meat.getMeat();
  const veggieTypes = veggies.getVeggies();
  const cheeseTypes = cheese.getCheese();
  const condimentTypes = condiments.getCondiments();
  const order = [];
  let orderTotal = 0;
  let domString = "";
  
  const allIngredients = {
      ...breadTypes,
      ...meatTypes,
      ...veggieTypes,
      ...cheeseTypes,
      ...condimentTypes
  };

  for( let i = 0; i < checkBoxes.length; i++){
    if(checkBoxes[i].checked === true){
      console.log(checkBoxes[i].id);
      console.log(allIngredients[checkBoxes[i].id]);
      orderTotal += allIngredients[checkBoxes[i].id];
      domString += `Ingredient: ${checkBoxes[i].id} Price: $${allIngredients[checkBoxes[i].id]}</br>`;
      console.log(orderTotal);
    }
      
  };
  domString += `Order Total: $${orderTotal.toFixed(2)}`;
  util.printToDom('cart-container', domString);
}

export default { orderButtonEvent };