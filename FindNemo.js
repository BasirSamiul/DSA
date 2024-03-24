const nemo = ["nemo"]

const everyone = ["barko", "jaro", "Sharko", "Drinko", "Boltu", "nemo", "kungfu"]

const large = new Array(100).fill("nemo")

function findNemo(array){

     let t_0 = performance.now()

    for(let i = 0; i < array.length; i++){

        if(array[i] === 'nemo'){
            console.log("Hooray!, we found nemo!")
        }
        // else{
        //     console.log("Sorry, we cannot find nemo!")
        // }
    }
    let t_1 = performance.now()

    console.log(`Finding nemo takes time ` + (t_1 - t_0 ) + ` milliseconds` )
}

findNemo(large)