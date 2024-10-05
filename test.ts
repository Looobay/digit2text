import digit2word from "./main.ts";

let i: number = 0;
while (i != 1000 + 1){
    console.log(digit2word(i));
    i = i + 1;
}


console.log(digit2word(100));