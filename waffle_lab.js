let wallet;
let syrup;
let waffles;
//Start the Waffles maker
const start = () => {
  wallet = 10;
  syrup = 0;
  waffles = 0;
  checkRefrigerator();
};
//Check Items status - UPDATING to Users
const itemsUpdate = () => {
  alert(
    `Now, you have Waffles: ${waffles} and Syrup: ${syrup}, and you still have $ ${wallet} left`
  );
};
const checkRefrigerator = () => {
  itemsUpdate();
  const isItemAvailable = prompt(
    "Do you have Waffles and/or Syrup in your Refrigerator",
    "Yes or No"
  );
  if (isItemAvailable === "Yes" || isItemAvailable === "yes") {
    //Call a function to make waffle
    wafflesMaker();
  } else if (isItemAvailable === "No" || isItemAvailable === "no") {
    //Calling the CheckRefrigerator at the bottom of buySyrup
    goToStore();
  }
};
const goToStore = () => {
  const buyingItem = prompt(
    "Welcome to Walmart - Do you need a Syrup or Frozen Waffles",
    "Type: Syrup or Waffles"
  );

  if (buyingItem === "Syrup" || buyingItem === "syrup") {
    buySyrup();
  } else if (buyingItem === "Waffles" || buyingItem === "waffles") {
    buyWaffles();
  }
};
const buySyrup = () => {
  syrup++;
  wallet -= 1;
  checkRefrigerator();
};
const buyWaffles = () => {
  waffles++;
  wallet -= 1;
  checkRefrigerator();
};
// Make waffles
const wafflesMaker = () => {
  const toaster = prompt(
    "How do you like your Waffles? ",
    "1 or Well done |  2 or Median | 3 or Median rare | 4 or Frozen out of the box"
  );
  if (toaster === "Well done" || toaster === "1") {
    alert("Your Waffles will be ready in 5 minute ");
  } else if (toaster === "Median" || toaster === "2") {
    alert("Your Waffles will be ready in 3 minute ");
  } else if (toaster === "Median rare" || toaster === "3") {
    alert("Crispy and warm,  Your Waffles will be ready in 2 minute ");
  } else if (toaster === "Frozen out of the box" || toaster === "4") {
    alert(
      "Ain't Nobody Got Time For That, I have homework to do Give my waffles"
    );
  }
  readyToEat();
};
const readyToEat = () => {
  alert("Your Waffle is ready! Don't forget to add some Syrup, Bon Appetit! ");
  start();
};
// start(); ///
