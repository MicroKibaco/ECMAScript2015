/**
 * 对象的认识
 */

console.log(Object.is({}, {}), {} === {});

console.log(Object.is(NaN, NaN), NaN === NaN);

console.log(Object.is(+0, -0), +0 === -0);
