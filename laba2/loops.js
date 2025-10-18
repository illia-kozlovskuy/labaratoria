let range = (start, end) => {
    let array = []
    for (let i = start; i <=end; i++) array.push(i);
        return array;
}
console.log(range(15,30));
 
let Odd = (start, end) => {
    let array = [];
    for (let i = start; i <=end; i++) if (i % 2) array.push(i);
    return array;


}
console.log(Odd(15, 30));