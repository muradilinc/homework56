import React from 'react';
import {INGREDIENTS} from '../../constants/constants.ts';
import './ClientForm.css';

interface Props {
  onAdd: (ingredient: Ingredients) => void;
  counts: IngredientState[];
}

const ClientForm: React.FC<Props> = ({onAdd, counts}) => {
  // const commonIngredient = INGREDIENTS.map((item) => {
  //   const countItem = counts.find(count => count.name === item.name);
  //   return {...item, count: countItem ? countItem.count : 0};
  // });

  const commonIngredient = INGREDIENTS.reduce((acc: Ingredients[], item, index) => {
    acc.push({...item, count: counts[index].count});
    return acc;
  }, []);

  return (
    <div className="clientForm">
      {
        commonIngredient.map((ingredient, index) => {
          return (
            <div key={index} className="formIngredient" onClick={() => onAdd(ingredient)}>
              <img src={ingredient.image} alt="ingredient"/>
              <p>{ingredient.name} ({ingredient.price} сом)</p>
              <p>{ingredient.count}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default ClientForm;