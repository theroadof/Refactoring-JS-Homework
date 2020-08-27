import {printOwing} from "../src/print";

const test = require('ava');

test('should return name: teddy\n' +
    'amount: 6\n' +
    'amount: 9/26/2020\n'+
    'when printOwig ',t=>{
    const invoice = {
        customer: 'teddy',
        borderSpacing: [{
            amount: 1
        },{
            amount: 2
        },{
            amount: 3
        }],
        dueDate: ''
    };
    const today = new Date();

    let result = printOwing(invoice);

    t.is(result.invoice.customer,'teddy');
    t.is(result.outstanding,6);
    t.is(result.invoice.dueDate.toLocaleDateString(),new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30).toLocaleDateString());
});
