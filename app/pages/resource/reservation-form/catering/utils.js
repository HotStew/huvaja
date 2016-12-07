import sortBy from 'lodash/sortBy';

function getOrderItems(cateringMenuItems, order) {
  const orderItems = Object.keys(order).map(itemId => ({
    ...cateringMenuItems[itemId],
    quantity: order[itemId],
  }));
  return sortBy(
    orderItems.filter(item => item.quantity),
    'name'
  );
}

export default {
  getOrderItems,
};
