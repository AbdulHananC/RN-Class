var counter = 3;
var random;

//functions of all colors
function purple(){
    return "this is purple";
}        
function green(){
    return "this is green";
    
}
function orange(){
    return "this is orange";
}
function blue(){
    return "this is blue";
}        
function voilet(){
    return "this is voilet";
}        
function red(){
    return "this is red";
}
function yellow(){
    return "this is yellow";
}

    for (var i = 0; i < 100; i++) {                           // infinite loop
        random = Math.floor((Math.random() * 7));           // to generate a randome number
        let number = prompt(random);                        //it will show dialogue box
        console.log(random);                                // to show the number which is generated
        
//function to choose a color by comparing generated number
        function numberGenerator(color){
            color = [purple(),green(),orange(),blue(),voilet(),red(),yellow()];
            console.log(color[random]);    
        }
        numberGenerator();

//to minimize the count
        if(random == 6){
        counter--;
        }

//to recognize limit of a play
    if(counter == 0){
       console.log("u lost");
        break;
    }
        }