function unluckyDays(year) {
    return [[2, 1, 3, 1, 1, 2, 2], [1, 2, 2, 1, 1, 3, 2]]
    [+(year % 400 === 0 || year % 4 === 0 && year % 100 > 0)]
    [new Date(year, 0, 13).getDay()]
}

console.log(unluckyDays(1001));

// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.