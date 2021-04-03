const { expect, test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");
  test("get gitHub",()=>{
      const testGithub= "test";
      const obj = new Engineer("test", 10, "test@test", testGithub);
      expect(obj.gitHub).toBe(testGithub)
  })
  test("getRole should return Engineer",()=>{
      const testRole = "Engineer";
      const obj = new Engineer("test",10, "test@test", "test")
      expect(obj.getRole()).toBe(testRole)
  })
  test("get GitHub from getGitHub",()=>{
      const testGetGitHub ="test";
      const obj = new Engineer("test",10, "test@test", testGetGitHub)
      expect(obj.getGitHub()).toBe(testGetGitHub)
  })