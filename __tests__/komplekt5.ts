import {count_vowels} from "../count_vowels";
test("count the vowels in the sentence", ()=>{
    expect(count_vowels('The fox swam in tomato sauce')).toBe(10);
    expect(count_vowels('Suns out, guns out')).toBe(6);
});