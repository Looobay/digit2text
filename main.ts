/**
 * @module
 * This module provide to you a cool function that transform you're digit to text :)
 *
 * @example
 * ```ts
 * import {digit2text} from "@lby/digit2text";
 *
 * console.log(digit2text(2)); // output "two"
 * ```
 */

const solo:string[] = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "zero",
];

const dozen:string[] = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

const tens:string[] = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
    "hundred"
];

/**
 * This function just take a number and transform it in plain text (example: 1 -> "one").
 *
 * @param digit This is you're number.
 */
export function digit2word(digit: number): string {
    const last: string = String(digit % 10); // keep the last digit (ex: 9 in 29)
    const first: string = String(keepNum(digit, 0)); // keep the first digit (ex: 2 in 29)
    const sec: string = String(keepNum(digit, 1)); // keep the second digit

    if (digit < 10){
        if (digit == 0) {
            return solo[9];
        } else {
            return solo[digit - 1];
        }
    }

    if (digit >= 10 && digit < 100){
        if (first.includes("1")){
            switch (digit){
                case 10:
                    return dozen[0];
                case 11:
                    return dozen[1];
                case 12:
                    return dozen[2];
                case 13:
                    return dozen[3];
                case 14:
                    return dozen[4];
                case 15:
                    return dozen[5];
                case 16:
                    return dozen[6];
                case 17:
                    return dozen[7];
                case 18:
                    return dozen[8];
                case 19:
                    return dozen[9];
            }
        } else {
            return tens[Number(first) - 2] + " " + LastCheck(last);
        }
    }

    if (digit >= 100 && digit < 1000 + 1) { // between 100 and 1000
        if (Number(last) != 0 || Number(sec) != 0){ // if 102 for example
            if (Number(sec) != 0) { // if 116 for example
                if (Number(sec) == 1){
                    if (Number(last) != 0){
                        return solo[Number(first) - 1] + " " + tens[8] + " and " + dozen[Number(sec + last) - 10];
                    }
                    return solo[Number(first) - 1] + " " + tens[8] + " and " + dozen[Number(sec) - 1];
                } else {
                    if (Number(last) != 0){
                        return solo[Number(first) - 1] + " " + tens[8] + " and " + tens[Number(sec) - 2] + " " + solo[Number(last) - 1];
                    }
                    return solo[Number(first) - 1] + " " + tens[8] + " and " + tens[Number(sec) - 2];
                }
            } else { // if 106 for example
                return solo[Number(first) - 1] + " " + tens[8] + " and " + solo[Number(last) - 1];
            }
        }else {
            return solo[Number(first) - 1] + " " + tens[8];
        }
    }

    return "sorry bro :("
}

/**
 * Check which number is the last in the string and return it to a string.
 *
 * @param last just a string lol
 */
function LastCheck(last: string): string{
    let i = 0;
    while (i < 10) {
        if (last.includes(String(i))){
            return solo[i];
        }
        i += 1;
    }
    return last; // if we fail
}

/**
 * This function is very basic but useful because you can take only one character of you're choice from a string.
 *
 * @param candidate It is the number you want to transform
 * @param num Indicate the position inside the string of the number of the character you want to take.
 */
function keepNum(candidate: number, num: number): number {
    return Number(candidate.toString()[num]);
}