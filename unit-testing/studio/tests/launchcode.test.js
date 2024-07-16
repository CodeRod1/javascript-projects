// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
test("Should have a property called origanization", function () {
  expect(launchcode.organization).toBe("nonprofit");
});

test("Should have a property called executiveDirector", function () {
  expect(launchcode.executiveDirector).toBe("Jeff");
});

test("Should have a property called percentageCoolEmployees", function () {
  expect(launchcode.percentageCoolEmployees).toEqual(100);
}); 

test("Should have a property called programsOffered with 3 programs", function () {
  expect(launchcode.programsOffered[0]).toBe("Web Development");
  expect(launchcode.programsOffered[1]).toBe("Data Analysis");
  expect(launchcode.programsOffered[2]).toBe("Liftoff");
  expect(launchcode.programsOffered.length).toEqual(3);
});  

describe("Should have a method called launchOutput, which", function () {

  test("Should return 'Launch!' for numbers evenly divisible by 2", function () {
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  });

  test("Should return 'Code!' for numbers evenly divisible by 3", function () {
    expect(launchcode.launchOutput(3)).toBe("Code!");
  });

  test("Should return 'Rocks!' for numbers evenly divisible by 5", function () {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  });

  test("Should return 'LaunchCode!' for numbers evenly divisible by 2 and 3", function () {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  });

  test("Should return 'Code Rocks!' for numbers evenly divisible by 3 and 5", function () {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  });

  test("Should return 'Launch Rocks! (CRASH!!!!)' for numbers evenly divisible by 2 and 5", function () {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  });

  test("Should return 'LaunchCode Rocks!' for numbers evenly divisible by 2, 3, and 5", function () {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("Should return 'Rutabagas! That doesn't work.' for numbers evenly divisible by 2, 3, and 5", function () {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });

});

});