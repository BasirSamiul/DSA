class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name} ,and I am a ${this.type}.`);
    }
}
const player_one = new Player("Samiul", "Student");
player_one.introduce();