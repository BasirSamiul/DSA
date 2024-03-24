const nemo = ['Nemo']

// Create a function that find the Nemo
function findNemo(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === "Nemo"){
            console.log("Hey, we found Nemo!!!")
        }
        else{
            console.log("Sorry, please try again later!")
        }
    }
}

findNemo(nemo)