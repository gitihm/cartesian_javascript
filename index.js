const data = [
  [1, 2],
  [3,4],[5],
];
function cartesianProduct(arr) {
    return arr.reduce((a,b)=>{
        return a.map((x)=>{
            return b.map((y)=>{
                return x.concat([y]);
            })
        }).reduce((a,b)=>{ return a.concat(b) },[])
    }, [[]])
}

var a = cartesianProduct(data);
let choice = JSON.stringify(a)
console.log({choice, answer : 12});


