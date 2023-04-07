import {count_letter} from "../count_A";
test("count the letter in the sentence", ()=>{
    expect(count_letter('Bad bitch')).toBe(1);
    expect(count_letter('Aaaaa')).toBe(5);
});