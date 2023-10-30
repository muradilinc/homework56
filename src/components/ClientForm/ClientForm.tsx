import React from 'react';
import {INGREDIENTS} from '../../constants/constants.ts';
import {Trash} from '@phosphor-icons/react';
import './ClientForm.css';

interface Props {
  onAdd: (ingredient: Ingredients) => void;
  onDelete: (ingredient: Ingredients) => void;
  onAllDelete: () => void;
  counts: IngredientState[];
}

const ClientForm: React.FC<Props> = ({onAdd, counts, onDelete, onAllDelete}) => {
  const commonIngredient: Ingredients[] = INGREDIENTS.map((item, index) => {
    return  {...item, count: counts[index].count};
  });

  return (
    <div className="clientForm">
      {
        commonIngredient.map((ingredient, index) => {
          return (
            <div className='ingredientBlock'>
              <div key={index} className="formIngredient" onClick={() => onAdd(ingredient)}>
                <img src={ingredient.image} alt="ingredient"/>
                <p>{ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)} ({ingredient.price} сом)</p>
                <p>x{ingredient.count}</p>
              </div>
              <button onClick={() => onDelete(ingredient)}><Trash size={24}/></button>
            </div>
          );
        })
      }
      <button className='removeButton' onClick={onAllDelete}>All delete</button>
    </div>
  );
};

export default ClientForm;