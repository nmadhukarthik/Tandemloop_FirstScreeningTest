let arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
let divBy1 = arr.length;
let divBy2 = 0;
let divBy3 = 0;
let divBy4 = 0;
let divBy5 = 0;
let divBy6 = 0;
let divBy7 = 0;
let divBy8 = 0;
let divBy9 = 0;
function solve(arr) {
    for (let num of arr) {
        if (num % 2 === 0) divBy2++;
        if (num % 3 === 0) divBy3++;
        if (num % 4 === 0) divBy4++;
        if (num % 5 === 0) divBy5++;
        if (num % 6 === 0) divBy6++;
        if (num % 7 === 0) divBy7++;
        if (num % 8 === 0) divBy8++;
        if (num % 9 === 0) divBy9++;
    }
}
solve(arr);
console.log(
    `{1:${divBy1},2:${divBy2},3:${divBy3},4:${divBy4},5:${divBy5},6:${divBy6},7:${divBy7},8:${divBy8},9:${divBy9}}`
);
