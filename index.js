const inquirer = require("inquirer");
const fs = require("fs");

// js modules 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees=[];
let newEmployee;
//questions for employee
function addEmployee(){
    inquirer
    .prompt([
    {
        type:"list",
        message: "Please select the type of employee you would like to add:",
        choices:[
            "Engineer",
            "Intern",
        ],
        name:"type"
    },    
    {
       type: "input",
       message:"Please enter your your name",
       name: "name"
    },
    {
        type: "input",
        message:"Please enter their email address",
        name: "email"
     },
    {
        type:"input",
        message:"Please enter their ID number",
        name:"id"
    },

])
.then(function({name, id, email, type}) {
    let uniqueInfo="";
    if (type ==="Engineer") {
        uniqueInfo="GitHub Username";
    } else if(type === "Intern") {
        uniqueInfo="School Name"

    }
    inquirer
    .prompt([
        {
            type: "input",
            message: `Please enter their ${uniqueInfo}`,
            name: "uniqueInfo"
        },

    ])

.then(function(response){
    const uniqueInfo= response.uniqueInfo
        if ( type === "Engineer") {
            newEmployee = new Engineer(name,id,email,uniqueInfo);
            engineerHTML = ` 
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><a href="mailto:${email}" >Email: ${email}</a></li>
          <li class="list-group-item">Id: ${id}</li>
          <li class="list-group-item"><a href="https://github.com/${uniqueInfo}">GitHub: ${uniqueInfo}</a></li>
        </ul>
      </div>
      </div>`
      fs.appendFile("profile.html",engineerHTML,(err)=>
      err ? console.error(err) : console.log("your engineer has been appended"));

        }
        else if ( type === "Intern") {
            newEmployee = new Intern(name,id,email,uniqueInfo)
            internHTML = `   
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><a href="mailto:${email}" >Email: ${email}</a></li>
          <li class="list-group-item">Id: ${id}</li>
          <li class="list-group-item">school: ${uniqueInfo}</a></li>
        </ul>
      </div>
      </div>`
      fs.appendFile("profile.html",internHTML,(err)=>
      err ? console.error(err) : console.log("your intern has been appended"));

        }
        employees.push(newEmployee);
        askAdd()

    }



    )}
)}

// function to add employee or finish html
function askAdd(){
    inquirer
    .prompt([

    {
        type:"confirm",
        message:"Would you like to add more employees?",
        name:"addMoreEmployees"
    }
])
.then((response)=>{
if(response.addMoreEmployees===true){
    addEmployee()
}
else{
    endHTML= `
    </body>
    </html>`
    fs.appendFile("profile.html",endHTML,(err)=>
    err ? console.error(err) : console.log("your profile.html is done!"));
}

})
}
//starting function to add manager 
function getManager() {
    type = "Manager"
    inquirer
    .prompt([
    {
       type: "input",
       message:"Please enter your Managers Name",
       name: "name"
    },
    {
        type: "input",
        message:"Please enter their email address",
        name: "email"
    },
    {
        type:"input",
        message:"Please enter their ID number",
        name:"id"
    },
    {
        type: "input",
        message: "Please enter their phone number",
        name: "phone"
    },

    ])
    .then(function(response,){
        const name =response.name
        const id = response.id
        const email = response.email
        const officeNumber = response.phone
        newEmployee = new Manager(name,id,email,officeNumber)
        employees.push(newEmployee)
        startHtml= `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Employee Profiles</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        </head>
        <body>
            <div class="container">
                <div class="text-center page-header">
                  <h1>Team Profiles</h1>      
                </div>
                <div class="card-columns">
                <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><a href="mailto:${email}" >Email: ${email}</a></li>
      <li class="list-group-item">Id: ${id}</li>
      <li class="list-group-item"><a href="tel:${officeNumber}">Office Number:${officeNumber}</a></li>
    </ul>
  </div>
  </div>   `
  fs.writeFile('profile.html',startHtml, (err)=>{
  err ? console.error(err) : console.log("Your html has started");
  })
  askAdd()


})
}


function startQuestions(){
    getManager()
}
startQuestions()
