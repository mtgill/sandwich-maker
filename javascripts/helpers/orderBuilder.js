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

//function calls imported methods to create ingredient objects
//use spread operator to combine all ingredient objects into one object - allIngredients
const orderSandwich = () => {
  const checkBoxes = document.getElementsByClassName('checkBox');
  const breadTypes = bread.getBread();
  const meatTypes = meat.getMeat();
  const veggieTypes = veggies.getVeggies();
  const cheeseTypes = cheese.getCheese();
  const condimentTypes = condiments.getCondiments();
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
      orderTotal += allIngredients[checkBoxes[i].id];
      domString += `Ingredient: <b>${checkBoxes[i].id}</b> Price: <b>$${allIngredients[checkBoxes[i].id]}</b></br>`;

    }
  };
  domString += `Order Total: <b>$${orderTotal.toFixed(2)}</b>`;
  util.printToDom('cart-container', domString);
}

export default { orderButtonEvent };