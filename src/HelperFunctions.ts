const bosnianArebicaLetters: string = "ابڄچݘدجڠەفغحئيقلڵمنۉپرسشتۆوزژ"

function isInNewLine(character: string) {
    return character === "\n"
}

function checkIfStartingVersionOfLetter(index: number, character: string){
    return index === 0 || (character && character === " ") || isInNewLine(character)
}

export function convertLatinToArebica(latinText: string): string {
    var arebicaText: string = ''
    var digraph: string = ''
    var letter: string = ''
    var i: number

    for (i=0; i<latinText.length; i++)
    {
        if (i < latinText.length - 1)
        {
            digraph = latinText.substr(i, 2)
        }
        else
        {
            digraph = latinText.substr(i, 1)
        }
        switch (digraph)
        {
            // lj
            case 'lj':
            case 'Lj':
            case 'LJ': 
            case 'lJ': arebicaText += 'ڵ'; i++; break;

            // nj
            case 'nj': 
            case 'Nj': 
            case 'NJ': 
            case 'nJ': {
                arebicaText += 'ٮٛ'; i++; break;
            }

            // dž
            case 'dž': 
            case 'Dž': 
            case 'DŽ': 
            case 'dŽ': arebicaText += 'ج'; i++; break;
            default:
                letter = digraph.substr(0,1);
                switch (letter)
                {
                    case 'a':
                    case 'A': { 
                        if(checkIfStartingVersionOfLetter(i, latinText[i - 1])){
                            arebicaText += 'آ'
                            break
                        }
                        arebicaText += 'ا'; break;
                    }
                    case 'b':
                    case 'B': arebicaText += 'ب'; break;
                    case 'c':
                    case 'C': arebicaText += 'ڄ'; break;
                    case 'č':
                    case 'Č': arebicaText += 'چ'; break;
                    case 'ć':
                    case 'Ć': arebicaText += 'ݘ'; break;
                    case 'd':
                    case 'D': arebicaText += 'د'; break;
                    case 'đ':
                    case 'Đ': arebicaText += 'ڠ'; break;
                    case 'e':
                    case 'E': { 
                        if(checkIfStartingVersionOfLetter(i, latinText[i - 1])){
                            arebicaText += 'ئە'
                            break
                        }
                        arebicaText += 'ە'; break;
                    }
                    case 'f':
                    case 'F': arebicaText += 'ف'; break;
                    case 'g': 
                    case 'G': arebicaText += 'غ'; break;
                    case 'h':
                    case 'H': arebicaText += 'ح'; break;
                    case 'i': 
                    case 'I': { 
                        if(checkIfStartingVersionOfLetter(i, latinText[i - 1])){
                            arebicaText += 'ائ'
                            break
                        }
                        arebicaText += 'ئ'; break;
                    }
                    case 'j':
                    case 'J': arebicaText += 'ي'; break;
                    case 'k': 
                    case 'K': arebicaText += 'ق'; break;
                    case 'l': 
                    case 'L': arebicaText += 'ل'; break;
                    case 'm':
                    case 'M': arebicaText += 'م'; break;
                    case 'n':
                    case 'N': arebicaText += 'ن'; break;
                    case 'o': 
                    case 'O': arebicaText += 'ۉ'; break;
                    case 'p':
                    case 'P': arebicaText += 'پ'; break;
                    case 'r': 
                    case 'R': arebicaText += 'ر'; break;
                    case 's':
                    case 'S': arebicaText += 'س'; break;
                    case 'š': 
                    case 'Š': arebicaText += 'ش'; break;
                    case 't': 
                    case 'T': arebicaText += 'ت'; break;
                    case 'u':
                    case 'U': arebicaText += 'ۆ'; break;
                    case 'v':
                    case 'V': arebicaText += 'و'; break;
                    case 'z': 
                    case 'Z': arebicaText += 'ز'; break;
                    case 'ž':
                    case 'Ž': arebicaText += 'ژ'; break;

                    case '0': arebicaText += '٠'; break;
                    case '1': arebicaText += '١'; break;
                    case '2': arebicaText += '٢'; break;
                    case '3': arebicaText += '٣'; break;
                    case '4': arebicaText += '٤'; break;
                    case '5': arebicaText += '٥'; break;
                    case '6': arebicaText += '٦'; break;
                    case '7': arebicaText += '٧'; break;
                    case '8': arebicaText += '٨'; break;
                    case '9': arebicaText += '٩'; break;

                    case ',': arebicaText += '،'; break;
                    case '?': arebicaText += '؟'; break;
                    default:
                        arebicaText += letter
                        break
                }
                break
        }
    }


    for (i=0; i < arebicaText.length; i++){
        if(arebicaText[i] === "ٮ" && (i === arebicaText.length - 2 || (arebicaText[i + 2] && !(bosnianArebicaLetters.includes(arebicaText[i + 2]))))){
            arebicaText = arebicaText.replace(arebicaText[i], 'ں')
        }
    }

    wordPool.forEach((pair: WordPair) => {
        arebicaText = arebicaText.replace(pair.wrong, pair.right)
    })

    return arebicaText
}

export function convertCyrillicToArebica(cyrillicText: string): string {
    var arebicaText: string = ''
    var letter: string = ''
    var i: number

    for (i=0; i<cyrillicText.length; i++)
    {
        letter = cyrillicText.substr(i, 1)

        switch (letter)
            {
                case 'а':
                case 'А': { 
                    if(checkIfStartingVersionOfLetter(i, cyrillicText[i - 1])){
                        arebicaText += 'آ'
                        break
                    }
                        arebicaText += 'ا'; break;
                    }
                case 'б':
                case 'Б': arebicaText += 'ب'; break;
                case 'ц':
                case 'Ц': arebicaText += 'ڄ'; break;
                case 'ч':
                case 'Ч': arebicaText += 'چ'; break;
                case 'ћ':
                case 'Ћ': arebicaText += 'ݘ'; break;
                case 'д':
                case 'Д': arebicaText += 'د'; break;
                case 'џ':
                case 'Џ': arebicaText += 'ج'; break;
                case 'ђ':
                case 'Ђ': arebicaText += 'ڠ'; break;
                case 'е':
                case 'Е': { 
                    if(checkIfStartingVersionOfLetter(i, cyrillicText[i - 1])){
                        arebicaText += 'ئە'
                        break
                        }
                    arebicaText += 'ە'; break;
                }
                case 'ф':
                case 'Ф': arebicaText += 'ف'; break;
                case 'г': 
                case 'Г': arebicaText += 'غ'; break;
                case 'х':
                case 'Х': arebicaText += 'ح'; break;
                case 'и': 
                case 'И': { 
                    if(checkIfStartingVersionOfLetter(i, cyrillicText[i - 1])){
                        arebicaText += 'ائ'
                        break
                    }
                    arebicaText += 'ئ'; break;
                }
                case 'ј':
                case 'Ј': arebicaText += 'ي'; break;
                case 'к': 
                case 'К': arebicaText += 'ق'; break;
                case 'л': 
                case 'Л': arebicaText += 'ل'; break;
                case 'љ': 
                case 'Љ': arebicaText += 'ڵ'; break;
                case 'м':
                case 'М': arebicaText += 'م'; break;
                case 'н':
                case 'Н': arebicaText += 'ن'; break;
                case 'њ':
                case 'Њ': arebicaText += 'ٮٛ'; break;
                case 'о': 
                case 'О': arebicaText += 'ۉ'; break;
                case 'п':
                case 'П': arebicaText += 'پ'; break;
                case 'р': 
                case 'Р': arebicaText += 'ر'; break;
                case 'с':
                case 'С': arebicaText += 'س'; break;
                case 'ш': 
                case 'Ш': arebicaText += 'ش'; break;
                case 'т': 
                case 'Т': arebicaText += 'ت'; break;
                case 'у':
                case 'У': arebicaText += 'ۆ'; break;
                case 'в':
                case 'В': arebicaText += 'و'; break;
                case 'з': 
                case 'З': arebicaText += 'ز'; break;
                case 'ж':
                case 'Ж': arebicaText += 'ژ'; break;

                case '0': arebicaText += '٠'; break;
                case '1': arebicaText += '١'; break;
                case '2': arebicaText += '٢'; break;
                case '3': arebicaText += '٣'; break;
                case '4': arebicaText += '٤'; break;
                case '5': arebicaText += '٥'; break;
                case '6': arebicaText += '٦'; break;
                case '7': arebicaText += '٧'; break;
                case '8': arebicaText += '٨'; break;
                case '9': arebicaText += '٩'; break;

                case ',': arebicaText += '،'; break;
                case '?': arebicaText += '؟'; break;
                default:
                    arebicaText += letter;
                    break;
                }
        }

    for (i=0; i < arebicaText.length; i++){
        if(arebicaText[i] === "ٮ" && (i === arebicaText.length - 2 || (arebicaText[i + 2] && !(bosnianArebicaLetters.includes(arebicaText[i + 2]))))){
            arebicaText = arebicaText.replace(arebicaText[i], 'ں')
        }
    }

    wordPool.forEach((pair: WordPair) => {
        arebicaText = arebicaText.replace(pair.wrong, pair.right)
    })

    return arebicaText;
}

interface WordPair {
    wrong: string
    right: string
}


const wordPool: WordPair[] = [
    {
        wrong: "اللاح",
        right: "ﷲ"
    },
    {
        wrong: "آللاح",
        right: "ﷲ"
    },
    {
        wrong: "ئٮٛەقڄئيا",
        right: "ئنيەقڄئيا"
    },
    {
        wrong: "ناجئو",
        right: "نادژئو"
    },
    {
        wrong: "جەننەت",
        right: "جەنّەت"
    },
    {
        wrong: "جەحەننەم",
        right: "جەحەنّەم"
    },
    {
        wrong: "مۆحاممەد",
        right: "مۆحامّەد"
    },
    {
        wrong: "حاننا",
        right: "حانّا"
    },
    {
        wrong: "قۆر'ان",
        right: "قرآن"
    },
]