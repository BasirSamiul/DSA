function firstRecurringCharacter(input){
    for (let i = 0; i < input.length; i++){
        for (let j = 1; j < input.length; j++){
            if (input[i] === input[j]){
                return input[i];
            }
        }
    }
    return undefined;
}

let ma_arr = [2,5,1,2,3,5,1,2,4];

const result = firstRecurringCharacter(ma_arr);

console.log(result);

// Start another recurring character
function nextRecurringCharacter(input){
    let map = {};
    for (let i = 0; i < input.length; i++){
        if(map[input[i]]){
            return input[i];
        } else {
            map[input[i]] = i;
        }
        console.log(map[input[i]]);
        return undefined;
    }
}
nextRecurringCharacter(ma_arr);