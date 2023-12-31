import {useState} from 'react';
import Burger from '../components/Burger/Burger.tsx';
import ClientForm from '../components/ClientForm/ClientForm.tsx';
import './App.css';


const App = () => {
  const [ingredients, setIngredients] = useState<IngredientState[]>([
    {name: 'meat', count: 0},
    {name: 'cheese', count: 0},
    {name: 'salad', count: 0},
    {name: 'bacon', count: 0},
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

  const deleteIngredient = (ingredient: Ingredients) => {
    setIngredients(prevState => {
      return prevState.map(item => {
        const copyItem = {...item};
        if (ingredient.name === copyItem.name) {
          if (copyItem.count <= 0){
            copyItem.count = 0;
          } else {
            copyItem.count = copyItem.count - 1;
          }
        }
        return copyItem;
      });
    });
  };

  const allDelete = () => {
    setIngredients((prevState) => {
      return prevState.map(item => ({...item, count: 0}));
    });
  };

  return (
    <div className='container'>
      <div className="clientInterface">
        <ClientForm
          onAdd={addIngredient}
          onDelete={deleteIngredient}
          counts={ingredients}
          onAllDelete={allDelete}
        />
        <Burger stuff={ingredients}/>
      </div>
    </div>
  );
};

export default App;