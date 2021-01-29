// console.log(isFinite(Number.MAX_VALUE + 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000));

// console.log(parseInt('-1111xa'));

// console.log(parseFloat());

// console.log("alsejf\"");

// console.log(null);

// console.log(`heng
//     what`);

// let a = 6;
// let b = 9;
// function simpleTag(string, a, b, sum) {
//   console.log(string);
//   console.log(a);
//   console.log(b);
//   console.log(sum);
//   return 'foobar'
// }
// let unTaggedResult = `${a} + ${b} = ${a + b}`;
// let tagResult = simpleTag`${a} + ${b} = ${a + b}`;
// console.log(unTaggedResult);
// console.log(tagResult);

// console.log(`\u00A9`);
// console.log(String.raw`\u00A9`);
// console.log(String.raw`what\nheng`);
// console.log(Symbol('foo'));
// const a = Symbol.for("foo")
// const b = Symbol.for("foo")
// const c = Symbol('foo')
// console.log(a === c);
// console.log(a === b);
// console.log(Symbol.keyFor(123));
// let o = {
//   [a]: 'heng'
// }
// console.log(a.toString());

// class Foo {
//   async *[Symbol.asyncIterator]() {}
// }
// let f = new Foo();
// console.log(f[Symbol.asyncIterator]());

// var asyncIterable = {
//   [Symbol.asyncIterator]() {
//     return {
//       i: 0,
//       next() {
//         if (this.i < 3) {
//           return Promise.resolve({ value: this.i++, done: false });
//         }
//         return Promise.resolve({ done: true });
//       }
//     };
//   }
// };
// (async function () {                        // 0
//   for await (num of asyncIterable) {        // 1
//     console.log(num);                       // 2
//   }
// })();

// console.log(Number[Symbol.hasInstance](new Number));

// console.log((new Object()).valueOf());
// console.log((new Object()).toString());
// console.log((new Function()).toString());

// console.log(Number.prototype.isPrototypeOf(new Number()));

// console.log((-18).toString(2));

console.log();