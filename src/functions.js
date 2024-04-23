function colour_mix(rgb_colour1, rgb_colour2) {
    const validColours = ["red", "green", "blue"];

    if (!validColours.includes(rgb_colour1) || !validColours.includes(rgb_colour2)) {
        return "Error";
    }

    if ((rgb_colour1 === "red" && rgb_colour2 === "blue") || (rgb_colour1 === "blue" && rgb_colour2 === "red")) {
        return "fuchsia";
    } else if ((rgb_colour1 === "red" && rgb_colour2 === "green") || (rgb_colour1 === "green" && rgb_colour2 === "red")) {
        return "yellow";
    } else if ((rgb_colour1 === "green" && rgb_colour2 === "blue") || (rgb_colour1 === "blue" && rgb_colour2 === "green")) {
        return "aqua";
    } else if (rgb_colour1 === "red" && rgb_colour2 === "red") {
        return "red";
    } else if (rgb_colour1 === "blue" && rgb_colour2 === "blue") {
        return "blue";
    } else if (rgb_colour1 === "green" && rgb_colour2 === "green") {
        return "green";
    }
}

function largest_product(val1, val2, val3) {
    const sortedValues = [val1, val2, val3].sort((a, b) => b - a);
    return sortedValues[0] * sortedValues[1];
}

function day_of_the_week(day_num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (day_num >= 1 && day_num <= 7) {
        return days[day_num - 1];
    } else {
        return "Error";
    }
}

function pay_raise(status, years, salary) {
    let raisePercentage;
    if (status === 'F') {
        if (years >= 10) {
            raisePercentage = 0.05;
        } else if (years < 4) {
            raisePercentage = 0.015;
        } else {
            raisePercentage = 0.02;
        }
    } else if (status === 'P') {
        if (years >= 10) {
            raisePercentage = 0.03;
        } else if (years < 4) {
            raisePercentage = 0.01;
        } else {
            raisePercentage = 0.02;
        }
    } else {
        return "Error";
    }

    return salary * (1 + raisePercentage);
}

function is_leap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

export {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap};
