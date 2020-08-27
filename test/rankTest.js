import {rating} from "../src/rank";

const rankTest = require('ava');

// rankTest('foo', t => {
//   t.pass();
// });
//
// rankTest('bar', async t => {
//   const bar = Promise.resolve('bar');
//   t.is(await bar, 'bar');
// });
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];

rankTest('voyage:zone:west-indies,length:10 \n',t =>{
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };

  const result = rating(voyage,history);

  t.is(result,'B')
});

rankTest('voyage:zone:west-indies,length:8 \n',t =>{
  const voyage = {
    zone: 'west-indies',
    length: 8,
  };

  const result = rating(voyage,history);

  t.is(result,'B')
});

rankTest('voyage:zone:west-indies,length:15 \n',t =>{
  const voyage = {
    zone: 'west-indies',
    length: 15,
  };

  const result = rating(voyage,history);

  t.is(result,'B')
});

rankTest('voyage:zone:west-indies,length:4 \n',t =>{
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };

  const result = rating(voyage,history);

  t.is(result,'B')
});
