"use strict";
class Pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }
}
function attackPokemon(pokemon){
    if(this.isLucky()){
        let damage=this.attack-pokemon.defense
        pokemon.hp-=damage
        console.log(this.name+' a attaqué '+pokemon.name+' pour '+damage+' de degats, il lui reste '+pokemon.hp+" pv");
    }else {
        console.log(this.name+" a raté son attaque");
    }
}
function isLucky(){
    return this.luck>Math.random()
}
let pikachu=new Pokemon('Pikachu',15,5,50,0.5);
let mew=new Pokemon('Mew',10,15,70,0.9);

while(pikachu.hp >0 && mew.hp>0){
    pikachu.attackPokemon(mew)
    if(mew.hp<=0){
        console.log(mew.name+" est KO !");
        break;
    }
    mew.attackPokemon(pikachu)
    if(pikachu.hp<=0){
        console.log(pikachu.name+" est KO !");
        break
    }
}