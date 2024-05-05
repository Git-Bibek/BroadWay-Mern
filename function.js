function addNumber(x,y){
    return x+y;
}

console.log(addNumber(10,20));
const a=10;
const b=2000;
console.log(addNumber(a,b))


const x=10;
const y="Bibek";    
console.log(addNumber(x," "+y))

const sumNumber=(x,y)=>{
    return x + y
}


// arrow function
const arrowAdd = (x,y) => x+y;


const obj={
    addNumber:function(x,y){
        return x+y
    },
    subtractNumber:(x,y)=>x-y,
    multiplyNumber:(x,y)=>{
        return x*y
    }

}

obj.addNumber(10,200000);
console.log(obj.addNumber(10,200000))
console.log(obj.subtractNumber(10,200000))


function allFunction(x,y,action){
    if(action=="add"){
        return x+y
    }
    else if(action=="subtract"){
        return x-y
    }
    else if(action=="multiply"){
        return x*y
    }
    else if(action=="divide"){
        return x/y
    }
    else{
        return "invalid action"
    }
}
console.log(allFunction(10,20,"add"))