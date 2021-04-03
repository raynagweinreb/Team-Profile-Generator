const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

  describe(Employee, ()=>{
      it("Can instantiate Employee instance",()=>{
          const obj = new Employee();
          expect(typeof(obj)).toBe("object")
      });

      it("Can set name", ()=>{
          const name ="test";
          const obj = new Employee(name);
          expect(obj.name).toBe(name)
      });
      it("Can set id", ()=>{
          const idTest = 10;
          const obj = new Employee("test",idTest);
          expect(obj.id).toBe(idTest);
      })
      it("can set email ", ()=>{
          const emailTest = "test@test";
          const obj = new Employee("test",10,emailTest)
          expect(obj.email).toBe(emailTest)
      })
      describe("GetName",()=>{
          it("Can get name from GetName()",()=>{
              const testName = "test";
              const obj = new Employee(testName);
              expect(obj.getName()).toBe(testName);
          })
      })
      describe("GetId",()=>{
        it("Can get Id from getId",()=>{
            const testId = 10;
            const obj = new Employee("test",testId);
            expect(obj.getId()).toBe(testId);
        })
    })
    describe("GetEmail",()=>{
        it("Can get name from GetName()",()=>{
            const testEmail = "test@test";
            const obj = new Employee("test",10,testEmail);
            expect(obj.getEmail()).toBe(testEmail);
        })
    })
    describe("GetRole",()=>{
        it("Can get role from GetRole()",()=>{
            const testRole = "Employee";
            const obj = new Employee("test",10,"test@test");
            expect(obj.getRole()).toBe(testRole);
        })
    })
      
  })
