let meals = [];

const fetchRandomMeal = async () => {
    
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await response.json();
  return data.meals[0];
};

const fetchAllRandomMeals = async () => {
  const mealPromises = [];
  for (let i = 0; i < 8; i++) {
    mealPromises.push(fetchRandomMeal());
  }
  const mealData = await Promise.all(mealPromises);
  meals = mealData; 
};


fetchAllRandomMeals()
  .then(() => {
    localStorage.setItem('meals', JSON.stringify(meals))
    console.log(meals); 
  })
  .catch((error) => {
    console.error(error);
  });

console.log(meals , 'asdopijas-9d')
// function getProductData(){
//     let productData = meals.find(product=>product.id = id);
//     return productData
// }

export{meals}