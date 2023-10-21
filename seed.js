require("dotenv").config();
require("./config/database");

const Category = require("./models/category");
const Item = require("./models/item");

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Computers", sortOrder: 10 },
    { name: "Monitors", sortOrder: 20 },
    { name: "Keyboards", sortOrder: 30 },
    { name: "Phones", sortOrder: 40 },
    { name: "Laptops", sortOrder: 50 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    { name: "Gaming", emoji: "🕹️", category: categories[0], price: 5.95 },
    { name: "Work", emoji: "💼", category: categories[0], price: 6.95 },
    { name: "Coding", emoji: "📟", category: categories[0], price: 3.95 },
    { name: "Curved", emoji: "🖥️", category: categories[1], price: 14.95 },
    { name: "Gaming", emoji: "🕹️", category: categories[1], price: 13.95 },
    { name: "50 Inch", emoji: "📼", category: categories[1], price: 25.95 },
    { name: "Gaming", emoji: "🕹️", category: categories[2], price: 1.95 },
    { name: "Coding", emoji: "⌨️", category: categories[2], price: 4.95 },
    { name: "Droid", emoji: "📞", category: categories[3], price: 3.95 },
    { name: "Not Droid", emoji: "📱", category: categories[3], price: 7.95 },
    { name: "Mac", emoji: "🍎", category: categories[4], price: 1.95 },
    { name: "Gaming", emoji: "🕹️", category: categories[4], price: 2.95 },
    { name: "Windows", emoji: "🪟", category: categories[4], price: 3.95 },
  ]);

  console.log(items);

  process.exit();
})();
