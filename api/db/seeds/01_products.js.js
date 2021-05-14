exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products").insert([
    {
      product_name: "Chocolate Sandwich Cookies",
      aisle: "cookies cakes",
      department: "snacks",
      price: 31.06,
    },
    {
      product_name: "All-Seasons Salt",
      aisle: "spices seasonings",
      department: "pantry",
      price: 40.98,
    },
    {
      product_name: "Robust Golden Unsweetened Oolong Tea",
      aisle: "tea",
      department: "beverages",
      price: 47.32,
    },
    {
      product_name:
        "Smart Ones Classic Favorites Mini Rigatoni With Vodka Cream Sauce",
      aisle: "frozen meals",
      department: "frozen",
      price: 2.69,
    },
    {
      product_name: "Green Chile Anytime Sauce",
      aisle: "marinades meat preparation",
      department: "pantry",
      price: 30.88,
    },
    {
      product_name: "Dry Nose Oil",
      aisle: "cold flu allergy",
      department: "personal care",
      price: 27.35,
    },
    {
      product_name: "Pure Coconut Water With Orange",
      aisle: "juice nectars",
      department: "beverages",
      price: 42.91,
    },
    {
      product_name: "Cut Russet Potatoes Steam N' Mash",
      aisle: "frozen produce",
      department: "frozen",
      price: 31.37,
    },
    {
      product_name: "Light Strawberry Blueberry Yogurt",
      aisle: "yogurt",
      department: "dairy eggs",
      price: 38.54,
    },
    {
      product_name: "Sparkling Orange Juice & Prickly Pear Beverage",
      aisle: "water seltzer sparkling water",
      department: "beverages",
      price: 38.56,
    },
    {
      product_name: "Peach Mango Juice",
      aisle: "refrigerated",
      department: "beverages",
      price: 11.7,
    },
    {
      product_name: "Chocolate Fudge Layer Cake",
      aisle: "frozen dessert",
      department: "frozen",
      price: 4.7,
    },
    {
      product_name: "Saline Nasal Mist",
      aisle: "cold flu allergy",
      department: "personal care",
      price: 5.65,
    },
    {
      product_name: "Fresh Scent Dishwasher Cleaner",
      aisle: "dish detergents",
      department: "household",
      price: 18.17,
    },
    {
      product_name: "Overnight Diapers Size 6",
      aisle: "diapers wipes",
      department: "babies",
      price: 22.3,
    },
    {
      product_name: "Mint Chocolate Flavored Syrup",
      aisle: "ice cream toppings",
      department: "snacks",
      price: 45.39,
    },
    {
      product_name: "Rendered Duck Fat",
      aisle: "poultry counter",
      department: "meat seafood",
      price: 35.09,
    },
    {
      product_name: "Pizza for One Suprema Frozen Pizza",
      aisle: "frozen pizza",
      department: "frozen",
      price: 10.47,
    },
    {
      product_name: "Gluten Free Quinoa Three Cheese & Mushroom Blend",
      aisle: "grains rice dried goods",
      department: "dry goods pasta",
      price: 18.07,
    },
    {
      product_name: "Pomegranate Cranberry & Aloe Vera Enrich Drink",
      aisle: "juice nectars",
      department: "beverages",
      price: 45.43,
    },
    {
      product_name: "Small & Medium Dental Dog Treats",
      aisle: "dog food care",
      department: "pets",
      price: 3.19,
    },
  ]);
};
