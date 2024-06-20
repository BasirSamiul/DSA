const AddTwoNum = function(numbers){

    console.log("These are the numbers: ");
    numbers.forEach((number)=>{
        console.log(number);
    });

    console.log("\nAnd their sum is: ");
    numbers.forEach((first_number)=>{
        numbers.forEach((second_number)=>{
            console.log(first_number + second_number);
        });
    });
}
AddTwoNum([1,2,3,4,5]);