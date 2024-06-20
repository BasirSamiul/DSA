const boxes = ['a', 'b', 'c', 'd', 'e'];

const set = function (array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            console.log(array[i], array[j]);
        }
    }
}
set(boxes);