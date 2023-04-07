export function getBirthYear(idNumber: string): number {
    const century = Number(idNumber[0]);
    const year = Number(idNumber.substring(1,3));
    if (century == 3 || century == 4) {
        return 1900 + year;
    } else {
        return 2000 + year;
    }
}