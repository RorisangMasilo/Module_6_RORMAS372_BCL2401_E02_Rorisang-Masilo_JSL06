// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// Function to display menu items by category
function displayMenuItems(menu) {
  // QUESTION: What do you need to get from the HTML to display the menu? Find a way to reference it.
  const menuContainer = document.getElementById("menu-container");

  // QUESTION: How can you loop through each category and its items in the menu object?
  for (const [category, items] of Object.entries(menu)) {
    // QUESTION: What HTML element represents a category? Create it here.
    const categoryElement = document.createElement("div");

    // QUESTION: How can you set the text content of the category element to the category name?
    categoryElement.textContent = category;

    // QUESTION: How can you append the category element to the menu container in the HTML?
    menuContainer.appendChild(categoryElement);

    // QUESTION: What HTML element represents a list of items? Create it here.
    const itemListElement = document.createElement("ul");

    // QUESTION: Loop through the items in the category and create list items for each one.
    items.forEach((item) => {
      // QUESTION: Create a list item element here.
      const listItemElement = document.createElement("li");

      // QUESTION: How can you set the text content of the list item element to the item name?
      listItemElement.textContent = item;

      // QUESTION: Attach a click event listener to the list item to add it to the order.
      listItemElement.addEventListener("click", () => addToOrder(item));

      // QUESTION: How can you append the list item to the list of items for this category?
      itemListElement.appendChild(listItemElement);
    });

    // Append the list of items element to the menu container
    menuContainer.appendChild(itemListElement);
  }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
  // QUESTION: What HTML elements represent the order items list and the order total?
  const orderItemsList = document.getElementById("order-items");
  const orderTotalElement = document.getElementById("order-total");

  // Create a list item for the order here.
  const orderListItem = document.createElement("li");

  // Set the text content of the list item to the item name.
  orderListItem.textContent = itemName;

  // Append the list item to the order items list.
  orderItemsList.appendChild(orderListItem);

  // Calculate and update the total price. How can you access the current total and item price?
  const totalPrice = calculateTotalPrice();

  // Update the text content of the order total element with the new total.
  orderTotalElement.textContent = totalPrice;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  // Call the function to display the menu.
  displayMenuItems(menu);
}

// Call the init function to start the menu system.
initMenuSystem(menu);
