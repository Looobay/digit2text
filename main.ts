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
    const sec: string = String(keepNum(digit, 1));

    if (digit < 10){
        switch (digit){
            case 1:
                return solo[0]
            case 2:
                return solo[1]
            case 3:
                return solo[2]
            case 4:
                return solo[3]
            case 5:
                return solo[4]
            case 6:
                return solo[5]
            case 7:
                return solo[6]
            case 8:
                return solo[7]
            case 9:
                return solo[8]
            case 0:
                return solo[9]
        }
    }

    if (digit >= 10 && digit < 100){
        switch(true){
            case first.includes("1"):
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
               break;
            case first.includes("2"):
                return tens[0] + " " + LastCheck(last)
            case first.includes("3"):
                return tens[1] + " " + LastCheck(last)
            case first.includes("4"):
                return tens[2] + " " + LastCheck(last)
            case first.includes("5"):
                return tens[3] + " " + LastCheck(last)
            case first.includes("6"):
                return tens[4] + " " + LastCheck(last)
            case first.includes("7"):
                return tens[5] + " " + LastCheck(last)
            case first.includes("8"):
                return tens[6] + " " + LastCheck(last)
            case first.includes("9"):
                return tens[7] + " " + LastCheck(last)
        }
    }

    if (digit >= 100 && digit < 1000) {
        switch(true){
            // deno-lint-ignore no-case-declarations
            case first.includes("1"):
                let i = 2;
                let k = 0;
                while (i != 10) {
                    if (sec.includes(String(i))) {
                        while (k != 10){
                            if (last.includes(String(k))) {
                                return solo[0] + " " + tens[8] + " and " + returnDozen(sec) + " and " + solo[k - 1];
                            }
                            k += 1;
                        }
                        return solo[0] + " " + tens[8] + " and " + returnDozen(sec);
                    }
                    i += 1;
                }
                if (sec.includes("1")) {
                    let k = 0;
                    while (k != 10) {
                        if (last.includes(String(k))) {
                            return solo[0] + " " + tens[8] + " and " + returnDozen(sec);
                        }
                        k += 1;
                    }
                }
                return solo[0] + " " + tens[8];
        }
    }

    return "sorry bro :("
}

function LastCheck(last: string): string{
    switch(true){
        case last.includes("0"):
            return solo[9];
        case last.includes("1"):
            return solo[0];
        case last.includes("2"):
            return solo[1];
        case last.includes("3"):
            return solo[2];
        case last.includes("4"):
            return solo[3];
        case last.includes("5"):
            return solo[4];
        case last.includes("6"):
            return solo[5];
        case last.includes("7"):
            return solo[6];
        case last.includes("8"):
            return solo[7];
        case last.includes("9"):
            return solo[8];
    }
    return last; // if we fail
}

function returnDozen(yo: string): string{
    switch(true){
        case yo.includes("0"):
            return dozen[0]
        case yo.includes("1"):
            return dozen[1]
        case yo.includes("2"):
            return dozen[2]
        case yo.includes("3"):
            return dozen[3]
        case yo.includes("4"):
            return dozen[4]
        case yo.includes("5"):
            return dozen[5]
        case yo.includes("6"):
            return dozen[6]
        case yo.includes("7"):
            return dozen[7]
        case yo.includes("8"):
            return dozen[8]
        case yo.includes("9"):
            return dozen[9]
    }

    return yo;
}

// I think I will upload this as a package lol
function keepNum(candidate: number, num: number): number {
    return Number(candidate.toString()[num]);
}