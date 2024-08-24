class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash =  (hash + key.charCodeAt(i) * i) % this.data.length; 
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
<<<<<<< HEAD
myHashTable.get('grapes');//function calling
=======
myHashTable.get('grapes');
//hello pc
>>>>>>> b7582cd664db93f9e81e389cd4d9f8690024ddee
