import {getBirthYear} from "../birth_year";
test("get a birthyear from the id number", ()=>{
    expect(getBirthYear('3851115334')).toBe(1985);
    expect(getBirthYear('60510045673')).toBe(2005);
});