/* const foo=(a,b)=>{
    console.log(a+b)
    return"I am from foo"
    
}
const bar =(data)=>{
    console.log("From Args",data);
    return"I am from bar"
}
const result=foo();
const result1=bar(result)
console.log(result1) */

const foo = (a, b=0) => {
    const doubleValue =(x)=>
        {
            return x*2
        }
    return doubleValue(a+b)
}
const result = foo(10);
console.log(result)