class Calculator {
    constructor(a, b, operation) {
        this.a = Number(a);
        this.b = Number(b);
        this.operation = String(operation).toLowerCase();
    }

    calculate() {
        switch (this.operation) {
            case "add":
                return this.a + this.b;
            case "sub":
                return this.a - this.b;
            case "multiply":
                return this.a * this.b;
            case "divide":
                if (this.b === 0) {
                    return "Cannot divide by Zero";
                }
                return this.a / this.b;
            default:
                throw new Error("Error in the input");
        }
    }
}

try {
    console.log(
        "Add 10.8 + 6.2:",
        new Calculator(10.8, 6.2, "add").calculate()
    );
    console.log(
        "Subtract 98.5 - 3.5:",
        new Calculator(98.5, 3.5, "sub").calculate()
    );
    console.log(
        "Multiply 12 * 9:",
        new Calculator(12, 9, "multiply").calculate()
    );
    console.log("Divide 49 / 7:", new Calculator(49, 7, "divide").calculate());
} catch (error) {
    console.error(error.message);
}
