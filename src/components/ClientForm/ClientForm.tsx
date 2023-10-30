import React from 'react';
import {INGREDIENTS} from '../../constants/constants.ts';
import {Trash} from '@phosphor-icons/react';
import './ClientForm.css';

interface Props {
  onAdd: (ingredient: Ingredients) => void;
  onDelete: (ingredient: Ingredients) => void;
  counts: IngredientState[];
}

const ClientForm: React.FC<Props> = ({onAdd, counts, onDelete}) => {
  const commonIngredient = INGREDIENTS.reduce((acc: Ingredients[], item, index) => {
    acc.push({...item, count: counts[index].count});
    return acc;
  }, []);

  return (
    <div className="clientForm">
      {
        commonIngredient.map((ingredient, index) => {
          return (
            <div className='ingredientBlock'>
              <div key={index} className="formIngredient" onClick={() => onAdd(ingredient)}>
                <img src={ingredient.image} alt="ingredient"/>
                <p>{ingredient.name} ({ingredient.price} сом)</p>
                <p>{ingredient.count}</p>
              </div>
              <button onClick={() => onDelete(ingredient)}><Trash size={24}/></button>
            </div>
          );
        })
      }
    </div>
  );
};

export default ClientForm;