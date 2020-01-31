
//Write a function 'solution' that, given a string S of N lowercase English letters
//returns a string with no instances of three identical consecutive letters,
//obtained from S by deleting the minimum possible number of letters.


const solution = (str) => {

    for(let c of str) {
        let char = c, index;
        let pattern = new RegExp(`${char}{3,}`, 'i');
        let matched = str.match(pattern);

        if (matched) {
            index = matched.index;
            str = str.split('').filter((el,i,ar) => i !== index).join('');
        };
       
    };
    return str;     
}

