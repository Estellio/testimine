export function count_vowels(sentence: string): number {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let num = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i].toUpperCase())) {
            num++;
        }
    }
    return num;
}