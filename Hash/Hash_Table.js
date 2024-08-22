class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    _hash (key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i ) % this.data.length;
            console.log(hash);
        }
        return hash;
    }
}

const myHashTable = new HashTable(50);
// Just create a demo comment 
myHashTable._hash('grapes');
