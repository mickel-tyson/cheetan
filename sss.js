// ax^2 + bx + c = 0

function solveQuadratic(a, b, c) {
    if (a === 0) {
        console.log("This is not a quadratic equation.");
        return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`The roots are real and different: ${root1}, ${root2}`);
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        console.log(`The roots are real and the same: ${root}`);
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        console.log(`The roots are complex: ${realPart} ± ${imaginaryPart}i`);
    }
}