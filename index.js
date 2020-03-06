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

var choice = JSON.stringify(cartesianProduct(data))
console.log({choice, answer : 12});
//{ choice: '[[1,3,5],[1,4,5],[2,3,5],[2,4,5]]', answer: 12 }


