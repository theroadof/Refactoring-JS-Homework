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
