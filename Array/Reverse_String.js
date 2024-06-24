function reverse(str){
    if (!str || str.length < 2 || typeof(str) !== 'string'){
        return "Sorry, I reverse without a string.";
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }
   // console.log(backwards);
    console.log(backwards.join(""));
}

reverse("I love you");