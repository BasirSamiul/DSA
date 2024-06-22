const array_1 = ['a', 'b','c'];
const array_2 = ['x', 'y', 'a'];

function containsCommonItem(array_one, array_two){
// Loop through first array and create object where properties === items in the array

    let map = {};
    for (let i = 0; i < array_one.length; i++){
        if(!map[array_1[i]]){
            const item  = array_1[i];
            map[item] = true;
        }
    }

//Loop through second array and check if item in second array exists on created object.
    for(let j = 0; j < array_two.length; j++){
        if(map[array_2[j]]){
            return true;
        }
    }
    return false;

}

const result = containsCommonItem(array_1, array_2);
console.log(result);

//this code big o is: Big O(n)