export function areAllDigitsEven(num: number){
    while(num >= 10) {
        if(num%2 ===1 ) return false;
        num = Math.floor(num/10);
    }
    return num%2 === 0;
}