let a;
let value=a || 10
console.log(value); // 10, because a is undefined
let b=0;
let value2=b || 20
console.log(value2); // 20, because b is falsy (0 is falsy in JavaScript)
let c=5;
let value3=c || 30
console.log(value3); // 5, because c is truthy (5 is truthy in JavaScript)
let d=0;
let value4=d && 40
console.log(value4); // 0, because d is falsy (0 is falsy
// in JavaScript), so the expression evaluates to 0
let e=10;
let value5=e && 50
console.log(value5); // 50, because e is truthy (10 is truthy
// in JavaScript), so the expression evaluates to 50
let f=0;
let value6=f ?? 60
console.log(value6); // 0, because f is nullish (0 is not null or undefined), so the expression evaluates to 0
let g=null;
let value7=g ?? 70
console.log(value7); // 70, because g is nullish (null is null),
// so the expression evaluates to 70
let h=undefined;
let value8=h ?? 80
console.log(value8); // 80, because h is nullish (undefined is null),
// so the expression evaluates to 80
let i=5;
let value9=i ?? 90
console.log(value9); // 5, because i is not null or undefined,
// so the expression evaluates to 5
let j=0;
let value10=j ?? 100
console.log(value10); // 0, because j is not null or undefined,
// so the expression evaluates to 0
let k=10;
let value11=k ?? 110
console.log(value11); // 10, because k is not null or undefined,
// so the expression evaluates to 10
let l=null;
let value12=l ?? 120
console.log(value12); // 120, because l is null,
// so the expression evaluates to 120
let m=undefined;
let value13=m ?? 130
console.log(value13); // 130, because m is undefined,
// so the expression evaluates to 130
let n=5;
let value14=n ?? 140
console.log(value14); // 5, because n is not null or undefined,