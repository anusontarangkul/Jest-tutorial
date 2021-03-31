const functionsT = require("./function")

// beforeEach(() => initDatabase());
// afterEach(() => closedDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closedDatabase());

// const initDatabase = () => console.log("Data Initialized...")
// const closedDatabase = () => console.log("Database Closed...")
const nameCheck = () => console.log("Checking Name...")

describe("Checking Names", () => {
    beforeEach(() => nameCheck());

    test("User is Jeff", () => {
        const user = "Jeff";
        expect(user).toBe("Jeff")
    });
    test("User is Karen", () => {
        const user = "Karen";
        expect(user).toBe("Karen")
    });
})

test("Adds 2 + 2 to equal 4", () => {
    expect(functionsT.add(2, 2)).toBe(4)
})

test("Should be null", () => {
    expect(functionsT.isNull()).toBeNull()
})

test("Should be falsy", () => {
    expect(functionsT.checkValue(undefined)).toBeFalsy()
})

test("User should be Brad Traversy object", () => {
    expect(functionsT.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy"
    })
})

test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// Regex
test("There is no I in team", () => {
    expect("team").not.toMatch(/I/);
});

// Arrays
test("Admin should be in usernames", () => {
    usernames = ["john", "karen", "admin"];
    expect(usernames).toContain("admin")
})

// promise
// test("User fetched name should be Leanne Graham", () => {
//     expect.assertions(1);
//     return functionsT.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual("Leanne Graham")
//         })
// })

// async await
test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functionsT.fetchUser()
    expect(data.name).toEqual("Leanne Graham")

})
