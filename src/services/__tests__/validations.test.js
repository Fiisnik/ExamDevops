const { isEmpty } = require('../validations')
const { checkGamerTag } = require('../validations')

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function
describe("test lenght > 8", () => {
    test("should return true as the gamertag is more than 8 char", () => {
        var gamerTagValue = 'Salutatoi'
        const result = checkGamerTag(gamerTagValue);
        expect(result).toBe(true);
    });
});

describe("test lenght > 8", () => {
    test("should return true as the gamertag is more than 8 char with special char and number", () => {
        var gamerTagValue = 'Salutatoi8*'
        const result = checkGamerTag(gamerTagValue);
        expect(result).toBe(true);
    });
});
