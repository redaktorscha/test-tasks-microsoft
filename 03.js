//You are given a string S consisting of N letters ‘a’ and/or ‘b’. In one move, you can swap one letter for the other (‘a’ for ‘b’ or ‘b’ for ‘a’).
//Write a function solution that, given such a string S, returns the minimum number of moves required to obtain a string containing no instances of three //identical consecutive letters

const solution = (str) => {


    let movesNum = 0;
    let arrA = str.split('a'),    
        arrB = str.split('b');
        
    if (arrA.length > 0) {
        arrA.forEach(el => {
            if (el.length >= 3) {
                movesNum += Math.floor(el.length / 3);
            } 
        });
    };

    if (arrB.length > 0) {
        arrB.forEach(el => {
            if (el.length >= 3) {
                movesNum += Math.floor(el.length / 3);
            } 
        });
    };

    return movesNum;
};

console.log(solution('baabab'));