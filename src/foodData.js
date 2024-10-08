const FoodData = [
  {
    id: 1,
    img: "https://w7.pngwing.com/pngs/658/279/png-transparent-pizza-dish-hawaiian-pizza-ham-pepperoni-meat-pizza-food-beef-olive-thumbnail.png",
    name: "Onion Pizza",
    price: 130,
    desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
    category: "Pure Veg",
    rating: 4.5,
  },
  {
    id: 2,
    img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
    name: "Margherita Pizza",
    price: 150,
    desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
    category: "Pure Veg",
    rating: 4.2,
  },
  {
    id: 3,
    img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
    name: "Pepperoni Pizza",
    price: 160,
    desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
    category: "Pure Veg",
    rating: 4.6,
  },
  {
    id: 4,
    img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
    name: "Mushroom and Spinach Pizza",
    price: 140,
    desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
    category: "Pure Veg",
    rating: 4.2,
  },
  {
    id: 5,
    img: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
    name: "BBQ Chicken Pizza",
    price: 170,
    desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
    category: "Snacks",
    rating: 4.8,
  },
  {
    id: 6,
    img: "https://w7.pngwing.com/pngs/366/1001/png-transparent-veggie-burger-vegetarian-cuisine-hamburger-cheese-sandwich-kfc-burger-food-fast-food-restaurant-cheeseburger-thumbnail.png",
    name: "Cheese Burger",
    price: 110,
    desc: "A classic burger with a juicy patty, melted cheese, pickles, and a delicious sauce. A timeless favorite that's both indulgent and satisfying.",
    category: "Pure Veg",
    rating: 4.7,
  },
  {
    id: 7,
    img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
    name: "Crispy Chicken Wings",
    price: 130,
    desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
    category: "Snacks",
    rating: 4.4,
  },
  {
    id: 8,
    img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
    name: "Grilled Salmon",
    price: 120,
    desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
    category: "Pure Veg",
    rating: 4.5,
  },

  {
    id: 9,
    img: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
    name: "Avocado Toast",
    price: 120,
    desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
    category: "Pure Veg",
    rating: 4.6,
  },
  {
    id: 10,
    img: "https://w7.pngwing.com/pngs/960/168/png-transparent-pasta-salad-on-plate-penne-caesar-salad-pasta-salad-italian-cuisine-pizza-pasta-food-recipe-american-food-thumbnail.png",
    name: "Creamy Pasta",
    price: 150,
    desc: "Indulge in rich and velvety pasta coated in a creamy sauce with a blend of Parmesan and other cheeses. A comforting and flavorful dish that's perfect for a satisfying snack.",
    category: "Snacks",
    rating: 4.6,
  },
  {
    id: 11,
    img: "https://w7.pngwing.com/pngs/317/859/png-transparent-graphy-of-burger-with-tomato-and-vegetable-veggie-burger-hamburger-vegetarian-cuisine-chicken-sandwich-vada-pav-burger-food-cheese-recipe-thumbnail.png",
    name: "Veggie Burger",
    price: 90,
    desc: "A hearty burger made with a flavorful vegetable patty, topped with fresh lettuce, tomatoes, and your choice of sauces. A satisfying and wholesome option for veggie lovers.",
    category: "Pure Veg",
    rating: 4.5,
  },
  {
    id: 12,
    img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
    name: "Chicken Alfredo Pasta",
    price: 160,
    desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
    category: "Snacks",
    rating: 4.8,
  },
  {
    id: 13,
    img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
    name: "Vegetable Stir-Fry",
    price: 130,
    desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
    category: "Pure Veg",
    rating: 4.2,
  },
  {
    id: 14,
    img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
    name: "Grilled Chicken Burrito Bowl",
    price: 160,
    desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
    category: "Snacks",
    rating: 4.6,
  },
  {
    id: 15,
    img: "https://img.freepik.com/free-photo/risotto-rice-with-mushrooms-white-ceramic-plate_23-2147925971.jpg?uid=R157780619&ga=GA1.1.1465475739.1722683957&semt=ais_hybrid",
    name: "Mushroom Risotto",
    price: 175,
    desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
    category: "Snacks",
    rating: 4.5,
  },
  {
    id: 16,
    img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    name: "Cheese and Crackers Platter",
    price: 120,
    desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
    category: "Snacks",
    rating: 4.3,
  },
  {
    id: 17,
    img: "https://w7.pngwing.com/pngs/344/94/png-transparent-hamburger-cheese-sandwich-toast-sandwich-shawarma-grilled-food-food-recipe-cheese-thumbnail.png",
    name: "Grilled Cheese Sandwich",
    price: 100,
    desc: "Savor the comfort of a classic grilled cheese sandwich with golden, crispy bread and gooey melted cheese. Perfect for a quick snack or a light meal.",
    category: "Snacks",
    rating: 4.6,
  },
  {
    id: 18,
    img: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
    name: "Paneer Tikka Skewers",
    price: 130,
    desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
    category: "Snacks",
    rating: 4.9,
  },
  {
    id: 19,
    img: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
    name: "Hummus and Veggie Platter",
    price: 90,
    desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
    category: "Snacks",
    rating: 4.4,
  },
  {
    id: 20,
    img: "https://w7.pngwing.com/pngs/828/255/png-transparent-skewer-pincho-kebab-vegetable-fruit-vegetable-food-fruit-cuisine-thumbnail.png",
    name: "Fruit Skewers",
    price: 70,
    desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
    category: "Desserts",
    rating: 4.8,
  },
  {
    id: 21,
    img: "https://w7.pngwing.com/pngs/509/216/png-transparent-cappuccino-coffee-latte-cafe-milk-diner-cream-tea-ristretto-thumbnail.png",
    name: "Cappuccino",
    price: 100,
    desc: "A classic Italian coffee drink made with espresso and steamed milk, topped with a rich layer of foam. Enjoy the perfect balance of strong coffee and creamy milk, ideal for a morning pick-me-up.",
    category: "Beverages",
    rating: 4.8,
  },
  {
    id: 22,
    img: "https://w7.pngwing.com/pngs/255/190/png-transparent-mojito-cocktail-fizzy-drinks-light-rum-caipirinha-mojito-distilled-beverage-recipe-non-alcoholic-beverage-thumbnail.png",
    name: "Virgin Mojito",
    price: 120,
    desc: "A refreshing mocktail made with fresh mint leaves, lime juice, and sparkling water. This non-alcoholic drink is perfect for cooling off on a hot day and offers a delightful burst of citrusy freshness.",
    category: "Beverages",
    rating: 4.5,
  },
  {
    id: 23,
    img: "https://w7.pngwing.com/pngs/508/398/png-transparent-pink-smoothies-apple-juice-smoothie-lemonade-strawberry-juice-juices-natural-foods-frutti-di-bosco-food-thumbnail.png",
    name: "Mixed Berry Smoothie",
    price: 150,
    desc: "A delicious blend of strawberries, blueberries, raspberries, and yogurt, creating a thick and creamy smoothie. Packed with vitamins and antioxidants, this drink is a nutritious and tasty treat.",
    category: "Beverages",
    rating: 4.9,
  },
  {
    id: 24,
    img: "https://w7.pngwing.com/pngs/115/676/png-transparent-cafe-coffee-espresso-caffe-macchiato-cappuccino-coffee-cafe-food-breakfast-cafe-thumbnail.png",
    name: "Espresso",
    price: 70,
    desc: "A strong and bold coffee made by forcing hot water through finely-ground coffee beans. Perfect for coffee lovers who enjoy an intense, rich flavor.",
    category: "Beverages",
    rating: 4.8,
  },
  {
    id: 25,
    img: "https://w7.pngwing.com/pngs/446/620/png-transparent-coffee-cup-latte-matcha-cafe-coffee-drinks-food-plate-tea-thumbnail.png",
    name: "Matcha Latte",
    price: 120,
    desc: "A creamy and vibrant green drink made with high-quality matcha powder and steamed milk. This latte is both energizing and full of antioxidants.",
    category: "Beverages",
    rating: 4.7,
  },
  {
    id: 26,
    img: "https://w7.pngwing.com/pngs/123/343/png-transparent-iced-coffee-cafe-milkshake-cold-brew-coffee-food-recipe-flavored-milk-thumbnail.png",
    name: "Cold Brew Coffee",
    price: 90,
    desc: "A smooth and refreshing coffee made by steeping coarsely ground coffee beans in cold water for an extended period. Perfect for a cool and energizing drink.",
    category: "Beverages",
    rating: 4.6,
  },
  {
    id: 27,
    img: "https://w1.pngwing.com/pngs/318/956/png-transparent-chocolate-milk-milkshake-hot-chocolate-chocolate-cake-smoothie-chocolate-bar-drink-chocolate-chip-thumbnail.png",
    name: "Chocolate Milkshake",
    price: 80,
    desc: "A rich and creamy milkshake made with chocolate ice cream, milk, and topped with whipped cream. A delightful treat for chocolate lovers.",
    category: "Beverages",
    rating: 4.8,
  },
  {
    id: 28,
    img: "https://w7.pngwing.com/pngs/950/60/png-transparent-orange-smoothie-ice-cream-milkshake-smoothie-juice-mango-ginger-recipe-health-shake-non-alcoholic-beverage-thumbnail.png",
    name: "Mango Smoothie",
    price: 100,
    desc: "A tropical smoothie made with fresh mangoes, yogurt, and a touch of honey. This smoothie is both refreshing and packed with vitamins.",
    category: "Beverages",
    rating: 4.9,
  },
  {
    id: 29,
    img: "https://w7.pngwing.com/pngs/51/403/png-transparent-iced-coffee-frappe-coffee-latte-coffee-milk-coffee-iced-coffee-frappe-coffee-latte-thumbnail.png",
    name: "Iced Coffee",
    price: 80,
    desc: "A refreshing coffee drink served over ice, perfect for a hot day. Made with a shot of espresso, milk, and a touch of sweetness.",
    category: "Beverages",
    rating: 4.6,
  },
  {
    id: 30,
    img: "https://w7.pngwing.com/pngs/234/800/png-transparent-hot-chocolate-coffee-white-chocolate-cafe-cream-coffee-food-black-white-tea-thumbnail.png",
    name: "Hot Chocolate",
    price: 90,
    desc: "A rich and creamy hot chocolate made with premium cocoa powder and topped with whipped cream. Perfect for warming up on a chilly day.",
    category: "Beverages",
    rating: 4.9,
  },
  {
    id: 31,
    img: "https://w7.pngwing.com/pngs/853/98/png-transparent-chocolate-brownie-bakery-danish-pastry-chocolate-cake-chocolate-brownies-chocolate-brownie-bakery-danish-pastry-thumbnail.png",
    name: "Chocolate Brownie",
    price: 95,
    desc: "A rich and fudgy chocolate brownie, perfect for satisfying your sweet tooth. Enjoy the deep chocolate flavor with a soft, chewy texture.",
    category: "Desserts",
    rating: 4.9,
  },
  {
    id: 32,
    img: "https://w7.pngwing.com/pngs/731/168/png-transparent-pancake-with-blueberries-cupcake-drawing-fruit-blackberry-hand-painted-cartoon-blackberry-pie-watercolor-painting-cartoon-character-painted-thumbnail.png",
    name: "Blueberry Pancakes",
    price: 100,
    desc: "Fluffy pancakes filled with juicy blueberries, served with a drizzle of maple syrup. A delicious way to start your morning.",
    category: "Desserts",
    rating: 4.8,
  },

  {
    id: 33,
    img: "https://w7.pngwing.com/pngs/985/947/png-transparent-danish-pastry-pain-au-chocolat-croissant-viennoiserie-puff-pastry-danish-cookies-baked-goods-food-american-food-thumbnail.png",
    name: "Danish Pastry",
    price: 85,
    desc: "A sweet and flaky pastry filled with fruit or custard. This Danish pastry is a delightful treat for breakfast or dessert.",
    category: "Desserts",
    rating: 4.6,
  },
  {
    id: 34,
    img: "https://w7.pngwing.com/pngs/750/796/png-transparent-muffin-cupcake-chocolate-brownie-red-velvet-cake-chocolate-food-baking-cafe-thumbnail.png", // Chocolate Muffin
    name: "Chocolate Muffin",
    price: 70,
    desc: "A soft and moist muffin filled with rich chocolate chips. Perfect for satisfying your sweet tooth at any time of day.",
    category: "Desserts",
    rating: 4.5,
  },

  {
    id: 35,
    img: "https://w7.pngwing.com/pngs/768/176/png-transparent-pancake-crxeape-bretonne-blini-fruitcake-melaleuca-chocolate-cake-food-recipe-breakfast-thumbnail.png",
    name: "Chocolate Chip Pancakes",
    price: 110,
    desc: "Delight in these fluffy pancakes studded with melty chocolate chips, perfect for breakfast or dessert. Served with whipped cream and syrup.",
    category: "Desserts",
    rating: 4.9,
  },
  {
    id: 36,
    img: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
    name: "Classic Pancakes",
    price: 80,
    desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
    category: "Desserts",
    rating: 4.5,
  },
  {
    id: 37,
    img: "https://w7.pngwing.com/pngs/709/747/png-transparent-gulab-jamun-thumbnail.png",
    name: "Gulab Jamun",
    price: 60,
    desc: "Sweet and syrupy Indian dessert made from deep-fried dough balls soaked in fragrant rose water syrup. A beloved treat that's rich and satisfying.",
    category: "Desserts",
    rating: 4.8,
  },
  {
    id: 38,
    img: "https://w7.pngwing.com/pngs/640/131/png-transparent-rasgulla-ras-malai-milk-gulab-jamun-angoori-milk-food-recipe-sweetness-thumbnail.png",
    name: "Rasgulla",
    price: 70,
    desc: "Soft and spongy Indian sweet made from cottage cheese balls soaked in a light sugar syrup. A classic dessert that's light yet indulgent.",
    category: "Desserts",
    rating: 4.7,
  },
  {
    id: 39,
    img: "https://w7.pngwing.com/pngs/286/612/png-transparent-muesli-breakfast-cereal-milk-corn-flakes-breakfast-food-dried-fruit-recipe-thumbnail.png",
    name: "Fruit and Nut Oatmeal",
    price: 85,
    desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
    category: "Pure Veg",
    rating: 4.5,
  },
  {
    id: 40,
    img: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
    name: "Greek Yogurt Parfait",
    price: 95,
    desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
    category: "Desserts",
    rating: 4.1,
  },
];
export default FoodData;
