// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// Function to display menu items by category
function displayMenuItems(menu) {
  // Get the menu container element from the HTML
  const menuContainer = document.getElementById("menu-container");

  // Loop through each category and its items in the menu object
  for (const category in menu) {
    if (menu.hasOwnProperty(category)) {
      // Create an element to represent the category
      const categoryElement = document.createElement("div");

      // Set the text content of the category element to the category name
      categoryElement.textContent = category;

      // Append the category element to the menu container
      menuContainer.appendChild(categoryElement);

      // Create an element to represent a list of items
      const itemListElement = document.createElement("ul");

      // Append a list of items element to the menu container
      menuContainer.appendChild(itemListElement);

      // Loop through the items in the category and create list items
      menu[category].forEach((itemName) => {
        // Create a list item element
        const listItemElement = document.createElement("li");

        // Set the text content of the list item element to the item name
        listItemElement.textContent = itemName;

        // Attach a click event listener to the list item to add it to the order
        listItemElement.addEventListener("click", () => addToOrder(itemName));

        // Append the list item to the list of items
        itemListElement.appendChild(listItemElement);
      });
    }
  }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
  // Get the order items list and the order total element from the HTML
  const orderItemsList = document.getElementById("order-items");
  const orderTotalElement = document.getElementById("order-total");

  // Create a list item for the order
  const orderListItem = document.createElement("li");

  // Set the text content of the list item to the item name
  orderListItem.textContent = itemName;

  // Append the list item to the order items list
  orderItemsList.appendChild(orderListItem);

  // Calculate and update the total price
  const totalPrice = calculateTotalPrice();
  // Update the text content of the order total element with the new total
  orderTotalElement.textContent = totalPrice;
}

// Function to calculate the total price
function calculateTotalPrice() {
  // Sample implementation, replace with your logic to calculate the total price
  return 0;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  // Call the function to display menu items
  displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
