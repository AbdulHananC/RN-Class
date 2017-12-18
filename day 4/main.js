function generateNumber(){
    return Math.floor(Math.random()*5);
}
let input = 0;

function counter(){
    for(let i = 5; i>=0 ;i--){
        counter--
        if(counter===0){
            console.log("no trials");
        }
    }
    
}
function compare(counter,generateNumber){
    if(input === generateNumber){
    console.log("u won");}
}
compare();
// console.log(compare);
// console.log(generateNumber);