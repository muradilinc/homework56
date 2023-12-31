import React from 'react';
import './Burger.css';
import {INGREDIENTS} from '../../constants/constants.ts';

interface Props {
  stuff: IngredientState[];
}

const Burger: React.FC<Props> = ({stuff}) => {
  const ingredients: React.ReactElement[] = [];

  stuff.forEach(stuff => {
    const stuffName = stuff.name.charAt(0).toUpperCase() + stuff.name.slice(1);
    switch (stuffName) {
      case 'Salad':
        for (let i = 0; i < stuff.count; i++) {
          ingredients.push(<div className="Salad"></div>);
        }
        return null;
      case 'Cheese':
        for (let i = 0; i < stuff.count; i++) {
          ingredients.push(<div className="Cheese"></div>);
        }
        return null;
      case 'Meat':
        for (let i = 0; i < stuff.count; i++) {
          ingredients.push(<div className="Meat"></div>);
        }
        return null;
      case 'Bacon':
        for (let i = 0; i < stuff.count; i++) {
          ingredients.push(<div className="Bacon"></div>);
        }
        return null;
      default:
        return null;
    }
  });

  const commonIngredient: Ingredients[] = INGREDIENTS.map((item, index) => {
    return  {...item, count: stuff[index].count};
  });

  const commonPrice = commonIngredient.reduce((acc, item) => {
      return acc + (item.price * (item.count || 0));
  }, 30);

  return (
    <div className="BurgerBlock">
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {
          ingredients.map(item => item)
        }
        <div className="BreadBottom"></div>
      </div>
      <h4>Price: {commonPrice} сом</h4>
    </div>

  );
};

export default Burger;