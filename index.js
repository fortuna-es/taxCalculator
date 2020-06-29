function incomeTaxCalculator(salary) {

    if (salary <= 600) {
        return "None taxable."
    } else if (salary >= 601 && salary <= 1650) {
        return "Your Income Tax Is: " + (salary * 0.1).toFixed(2);
    } else if (salary >= 1651 && salary <= 3200) {
        return "Your Income Tax Is: " + (salary * 0.15).toFixed(2);
    } else if (salary >= 3201 && salary <= 5250) {
        return "Your Income Tax Is: " + (salary * 0.2).toFixed(2);
    } else if (salary >= 5251 && salary <= 7800) {
        return "Your Income Tax Is:" + (salary * 0.25).toFixed(2);
    } else if (salary >= 7801 && salary <= 10900) {
        return "Your Income Tax Is:" + (salary * 0.3).toFixed(2);
    } else if (salary > 10900) {
        return "Your Income Tax Is:" + (salary * 0.35).toFixed(2);
    }

}

module.exports.incomeTaxCalculator=incomeTaxCalculator;