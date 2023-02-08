class Game {
   methodInfo(){
    return "I love game and sports";
   }
}

class Cricket extends Game{
    
    methodInfo(){
        return "I love Cricket";
    }
}

class Football extends Game{
   
    methodInfo(){
        return "I love Football";
    }
    
}
let game = new Game()
let cric = new Cricket()
let football = new Football()

console.log(game.methodInfo());
console.log(football.methodInfo());
console.log(cric.methodInfo());