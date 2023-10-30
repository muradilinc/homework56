import React, {useState} from 'react';
import Burger from '../components/Burger/Burger.tsx';
import './App.css';
import ClientForm from '../components/ClientForm/ClientForm.tsx';


const App = () => {
  const [ingredients, setIngredients] = useState<IngredientState[]>([
    {name: 'meat', count: 0},
    {name: 'cheese', count: 0},
    {name: 'salad', count: 0},
    {name: 'beacon', count: 0},
  ]);

  const addIngredient = (ingredient: Ingredients) => {
    setIngredients(prevState => {
      return prevState.map(ingredientItem =>{
        const copyIngredient = {...ingredientItem};
        if (copyIngredient.name === ingredient.name) {
          copyIngredient.count = copyIngredient.count + 1;
        }

        return copyIngredient;
      });
    });
  };



  return (
    <div className="clientInterface">
      <ClientForm onAdd={addIngredient} counts={ingredients}/>
      <Burger/>
    </div>
  );
};

export default App;