function boo(n){
    for (let i = 0; i < n.length; i++){
        console.log('booooo!');
    }
}

boo([1,2,3,4,5,6,7,8,9,10])

function arrayOfHiNtimes(n){
    let hiArray = [];
    for (let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }
    return hiArray;
}
console.log(arrayOfHiNtimes(6));