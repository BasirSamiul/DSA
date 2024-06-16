// Big O(n) = Linear time

const compressAllBoxes = boxes => {
    boxes.forEach(box => console.log(box));
}

// By using ES5
// function compressAllBoxes(boxes){
//     boxes.forEach(function(items){
//         console.log(items);
//     })
// }
const items = ['fish', 'fruits', 'grocery'];
compressAllBoxes(items);