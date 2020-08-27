import {Employee} from "../src/employee";

const test = require('ava');

test('should return teddy (engineer) when toString given name teddy, type engineer',t=>{
    let name = 'teddy';
    let type = 'engineer';

    let employee = new Employee(name,type);

    t.is(employee.toString(),'teddy (engineer)')
});
