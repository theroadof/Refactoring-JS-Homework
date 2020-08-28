import {deliveryDate} from "../src/delivery";

const test = require('ava');

test('should return 2 when deliveryDate given anOrder.deliveryState: MA, isRush: true',t=>{
    const anOrder = {
        deliveryState: 'MA',
        placedOn: {
            plusDays: (day)=>{
                return day;
            }
        }
    };
    const isRush = true;

    const result = deliveryDate(anOrder,isRush);

    t.is(result,2);
});

test('should return 3 when deliveryDate given anOrder.deliveryState: NH, isRush: true',t=>{
    const anOrder = {
        deliveryState: 'NH',
        placedOn: {
            plusDays: (day)=>{
                return day;
            }
        }
    };
    const isRush = true;

    const result = deliveryDate(anOrder,isRush);

    t.is(result,3);
});

test('should return 4 when deliveryDate given anOrder.deliveryState: CH, isRush: true',t=>{
    const anOrder = {
        deliveryState: 'CH',
        placedOn: {
            plusDays: (day)=>{
                return day;
            }
        }
    };
    const isRush = true;

    const result = deliveryDate(anOrder,isRush);

    t.is(result,4);
});
