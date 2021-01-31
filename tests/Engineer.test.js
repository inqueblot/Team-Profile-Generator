const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GithubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.githubUser).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("foo", 1, "testa@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithubUser()", () => {
  const testValue = "githubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithubUser()).toBe(testValue);
});
