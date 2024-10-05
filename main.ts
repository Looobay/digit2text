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
]

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
]

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
]

export default function digit2word(digit: number): string {
    const last: string = String(digit % 10); // keep the last digit (ex: 9 in 29)
    const first: string = String(keepNum(digit, 0)); // keep the first digit (ex: 2 in 29)
    const sec: string = String(keepNum(digit, 1)); // keep the second digit

    if (digit < 10){
        if (digit == 0) {
            return solo[9]
        } else {
            return solo[digit - 1]
        }
    }

    if (digit >= 10 && digit < 100){
        if (first.includes("1")){
            switch (digit){
                case 10:
                    return dozen[0]
                case 11:
                    return dozen[1]
                case 12:
                    return dozen[2]
                case 13:
                    return dozen[3]
                case 14:
                    return dozen[4]
                case 15:
                    return dozen[5]
                case 16:
                    return dozen[6]
                case 17:
                    return dozen[7]
                case 18:
                    return dozen[8]
                case 19:
                    return dozen[9]
            }
        } else {
            return tens[Number(first) - 2] + " " + LastCheck(last)
        }
    }

    if (digit >= 100){
        console.warn("WARNING - Digit2Text: This library is limited to 100 sry :(")
    }

    /*
    This section is closed because it is too buggy...
    if (digit >= 100 && digit < 1000) {
        let i = 1;
        let k = 0;
        while (i < 10){
            if (first.includes(String(i))){
                while (k < 10){
                    if ((Number(sec) + Number(last)) == 10) { // I just surrendered right here
                        return solo[i - 1] + " " + tens[8] + " and " + "10";
                    }
                    if (sec.includes(String(k)) && digit >= 110 && digit < 120 && Number(last) != 0) { // Ex: 111
                        return solo[i - 1] + " " + tens[8] + " and " + dozen[k];
                    }
                    else if (sec.includes(String(k)) && last.includes("0")) { // Ex: 110, 120
                        return solo[i - 1] + " " + tens[8] + " and " + tens[k - 2];
                    }
                    else if (sec.includes(String(k)) && digit < 110) {
                        return solo[i - 1] + " " + tens[8] + " and " + LastCheck(String(Number(last) - 1));
                    }

                    k += 1;
                }
                return solo[i - 1] + " " + tens[8];
            }
            i += 1;
        }
    }
     */

    return "sorry bro :("
}

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

// I think I will upload this as a package lol
function keepNum(candidate: number, num: number): number {
    return Number(candidate.toString()[num]);
}