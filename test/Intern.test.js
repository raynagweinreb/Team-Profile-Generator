  const { expect, test } = require("@jest/globals");
const Intern = require("../lib/Intern");
  test("get school",()=>{
      const testSchool= "test";
      const obj = new Intern("test", 10, "test@test", testSchool);
      expect(obj.school).toBe(testSchool)
  })
  test("getRole should return intern",()=>{
      const testRole = "Intern";
      const obj = new Intern("test",10, "test@test", "test")
      expect(obj.getRole()).toBe(testRole)
  })
  test("get school from getSchool",()=>{
      const testGetSchool ="test";
      const obj = new Intern("test",10, "test@test", testGetSchool)
      expect(obj.getSchool()).toBe(testGetSchool)
  })