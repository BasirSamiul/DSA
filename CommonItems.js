const array_1 = ['a', 'b','c'];
const array_2 = ['x', 'y', 'w'];
function containsCommonItem(arr_one, arr_two){
    for(let i = 0; i < arr_one.length; i++){
        for (let j = 0; j < arr_two.length; j++){
            if(arr_one[i] === arr_two[j]){
                return true;
            }
        }
    }
    return false;
}
const result = containsCommonItem(array_1, array_2);
console.log(result);