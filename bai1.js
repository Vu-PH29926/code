# code
const gameEvents =  new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substitutiom'],
    [64, 'Yellow Card'],
    [69, 'Red card'],
    [70, 'Substistution'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow Cảd'],  

]);
//1
const events = new Set(gameEvents.values());
console.log(events);

//2
gameEvents.delete(64);

//3
console.log(`An event happened , on average , event ${90 / gameEvents.size} minutes`);
const time  = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened , on average , event ${time / gameEvents.size} minutes`);

//4
for (const [min,event] of gameEvents){
    const half  = min <= 45 ? 'first' : 'second';
    console.log(`[${half} half] ${min} : ${event}`);
}
