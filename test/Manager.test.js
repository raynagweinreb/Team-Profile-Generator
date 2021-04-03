const { expect, test } = require("@jest/globals");
const Manager = require("../lib/Manager");
  test("get officeNumber",()=>{
      const testOfficeNumber= "test";
      const obj = new Manager("test", 10, "test@test", testOfficeNumber);
      expect(obj.officeNumber).toBe(testOfficeNumber)
  })
  test("getRole should return Manager",()=>{
      const testRole = "Manager";
      const obj = new Manager("test",10, "test@test", "test")
      expect(obj.getRole()).toBe(testRole)
  })
  test("get office number from getOfficeNumber",()=>{
      const testGetOfficeNumber ="test";
      const obj = new Manager("test",10, "test@test", testGetOfficeNumber)
      expect(obj.getOfficeNumber()).toBe(testGetOfficeNumber)
  })