function generateSeries(x) {
    let result = [];
    for (let i = 0; i < x; i++) {
        result.push(2 * i + 1);
    }
    return result.join(",");
}

console.log(generateSeries(1));
console.log(generateSeries(2));
console.log(generateSeries(3));
console.log(generateSeries(4));
console.log(generateSeries(5));
console.log(generateSeries(6));
