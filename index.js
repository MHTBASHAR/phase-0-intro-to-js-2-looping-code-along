// Code your solutions in this file
function writeCards(name, event){
    let arr = [];
    for(let i = 0; i < name.length; i++){
       arr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return arr;
}

function countDown(n){
    while(n >= 0){
        console.log(n);
        n--;
    }

};