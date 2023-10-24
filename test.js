const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("1 euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(3.75);
})
test("30 euros should be 32.1 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(30);
    const expected = 30 * 1.07; 
    expect(fromEuroToDollar(30)).toBe(32.1);
})
test("55.5 euros should be 37.985 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(55.5);
    const expected = 55.5 * 1.07; 
    expect(fromEuroToDollar(55.5)).toBe(59.39);
})
test("157.99 euros should be 37.985 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(157.99);
    const expected = 157.99 * 1.07; 
    expect(fromEuroToDollar(157.99)).toBe(169.05);
})

test("3.5 dollar should be 511.92 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(3.5);
    const expected = (3.5 / 1.07) * 156.5; 
    expect(fromDollarToYen(3.5)).toBe(511.92);
})
test("90.5 dollars should be 13236.68 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(90.5);
    const expected = (90.5 / 1.07) * 156.5; 
    expect(fromDollarToYen(90.5)).toBe(13236.68);
})
test("200 dollars should be 29252.34 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(200);
    const expected = (200 / 1.07) * 156.5; 
    expect(fromDollarToYen(200)).toBe(29252.34);
})
test("5.82 dollars should be 851.24 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(5.82);
    const expected = (5.82 / 1.07) * 156.5; 
    expect(fromDollarToYen(5.82)).toBe(851.24);
})

test("1 yen should be 0.01 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87; 
    expect(fromYenToPound(1)).toBe(0.01);
})
test("160 yen should be 0.89 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(160);
    const expected = (160 / 156.5) * 0.87; 
    expect(fromYenToPound(160)).toBe(0.89);
})
test("5750.5 yen should be 31.97 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(5750.5);
    const expected = (5750.5 / 156.5) * 0.87; 
    expect(fromYenToPound(5750.5)).toBe(31.97);
})
test("12468.97 yen should be 69.32 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(12468.97);
    const expected = (12468.97 / 156.5) * 0.87; 
    expect(fromYenToPound(12468.97)).toBe(69.32);
})