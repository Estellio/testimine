export function count_letter(sentence: string): number {
    const letter = 'A';
    let num = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (letter.includes(sentence[i].toUpperCase())) {
            num++;
        }
    }
    return num;
}