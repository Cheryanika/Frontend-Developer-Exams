import React from 'react';
import Data from './data.json';

export const Function = () => {
  const shop1 = Data.filter(order => order.shop === 1);

  const foodItems = new Map();

  shop1.forEach(order => {
    order.data.forEach(item => {
      const itemId = item.id;
      const totalamount = item.order.amount;

      if (foodItems.has(itemId)) {
        const outputItem = foodItems.get(itemId);
        outputItem.amount += totalamount;
      } else {
        foodItems.set(itemId, {
          id: itemId,
          name: item.name,
          price: item.price,
          amount: totalamount
        });
      }
    });
  });

  const ItemsArray = Array.from(foodItems.values());
  const jsonOutput = JSON.stringify(ItemsArray, null, 2);

  return (
<div className='json-form'>
      <pre>{jsonOutput}</pre>
    </div>
  );
};

export default Function;