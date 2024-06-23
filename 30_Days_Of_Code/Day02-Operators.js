function main() {
    // declared to input the constants meal_cost,tip_percent,tax_percent
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);
    // function call
    solve(meal_cost, tip_percent, tax_percent);
}
// function to calculate total cost including tip and tax
function solve(meal_cost,tip_percent,tax_percent){
    let tip = tip_percent*(meal_cost/100);
    let tax = tax_percent*(meal_cost/100);
    let total_cost = meal_cost + tip + tax;
    console.log(Math.round(total_cost));
}