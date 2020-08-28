function calculateDeliveryTimeWithRush(anOrder) {
  let deliveryTime = 0;
  if ([
    'MA',
    'CT',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  } else if ([
    'NY',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }
  return deliveryTime;
}

function calculateDeliveryTimeWithoutRush(anOrder) {
  let deliveryTime = 0;
  if ([
    'MA',
    'CT',
    'NY',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else if ([
    'ME',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }
  return deliveryTime;
}

function getDeliveryDate(isRush, anOrder) {
  return (isRush) ? anOrder.placedOn.plusDays(1 + calculateDeliveryTimeWithRush(anOrder)) : anOrder.placedOn.plusDays(2 + calculateDeliveryTimeWithoutRush(anOrder));
}

function deliveryDate (anOrder, isRush) {
  return getDeliveryDate(isRush, anOrder);
}

module.exports = {
  deliveryDate
};
