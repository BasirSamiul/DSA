function firstReccurringCharacter(input){
    for(let i = 0; i < input.length; i++){
        for(let j = i + 1 ; j < input.length; j++){
            if(input[i] === input[j]){
                return input[i];
            }
        }
        return undefined;
    }
}

let ma_arr = [2,5,1,2,3,5,1,2,4];

const result = firstReccurringCharacter2(ma_arr);

console.log(result);

function firstReccurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
           if(map[input[i]] !== undefined){
             return input[i];
           }
           else{
             map[input[i]] = i;
           }
           console.log(map[input[i]]);
        }
        
    }
    return undefined;
}