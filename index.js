const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./src/employees.js')

// const employees = [];

const employees = {
    manager: null,
    engineers: [],
    interns: [],
};

// function addEmployees() {
//     inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 message: 'What is this employee\'s position?',
//                 name: 'role',
//                 choices: [
//                     {name:'Manager', value:'manager'},
//                     {name:'Engineer', value:'engineer'},
//                     {name:'Intern', value:'intern'}
//                 ]
//             },
//             {
//                 type: 'input',
//                 message: 'Name?',
//                 name: 'name'
//             },
//             {
//                 type: 'input',
//                 message: 'ID?',
//                 name: 'id'
//             },
//             {
//                 type: 'input',
//                 message: 'email?',
//                 name: 'email'
//             },
//             {
//                 type: 'list',
//                 message: 'Do you have any more employees to add?',
//                 name: 'addMore',
//                 choices: [
//                     {name: 'Yes', value: 'yes'},
//                     {name: 'No', value: 'no'}
//                 ]
//             }
//         ])
//         .then((response) => {
//             const employee = new Employee(response.name, response.id, response.email)
//             console.log(employee.id)
//             employee.role = response.role;
//             team.push(employee)
//             if (response.addMore === 'yes'){
//                 addEmployee();
//             } else {
//                 console.log(team)
//             }
//         })
// };

const idArray = [];

function createManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message:"What is the manager's name?",
                validate: (answer) => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please enter a name."
                }
            },
                {
                    type: "input",
                    name: "managerId",
                    message: "What is the Manager's ID?",
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/)
                        if (pass) {
                            return true
                        }
                        return 'Please enter a positive number greater than 0'
                    }
                },

                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is the Manager's email?",
                    validate: (answer) => {
                        const pass = answer.match(/\S+@\S+\.\S+/)
                        if (pass) {
                            return true
                        }
                        return 'Please enter a positive number greater than 0'
                    }
                },

                {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "What is the Manager's office number?",
                    validate: (answer) => {
                        const pass = answer.match(/^[1-9]\d*$/)
                        if (pass) {
                            return true
                        }
                        return 'Please enter a positive number greater than 0'
                    }
                }
        ])
        .then((response) => {
            const manager = new Manager(
                response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOfficeNumber
            );
            employees.manager = manager;
            idArray.push
            createEmployees();

        })
        
}

function createEmployees() {
    inquirer
        .prompt([
            {
                name: 'role',
                type: 'list',
                message: 'What is this employee\s role?',
                choices: [
                    {name: 'Engineer', value: 'engineer'},
                    {name:'Intern', value: 'intern'},
                    {name:'I don\'t want to add any more employees.', value: 'none'}
                ]
            },
        ])
        .then((response) => {
            // if (response.role === 'engineer'){
            //     makeEngineer();
            // } else if (response.role === 'intern'){
            //     makeIntern();
            // } else {
            //     return employees
            // }
            switch (response.role){
                case "engineer":
                    makeEngineer();
                    break;
                case "intern":
                    makeIntern();
                    break;
                case "none":
                    console.log(employees)
                    buildHtml();
                    break;
            }
        })
}

function makeEngineer(){
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message:'What is this Engineer\'s name?'
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is this Enigneer\'s employee ID number?'
            },
            {
                name: 'email',
                type: 'input',
                message: 'What is this Engineer\'s Email?'
            },
            {
                name: 'github',
                type: 'input',
                message: 'What is this Enigneer\'s GitHub username?'
            },
            // {
            //     name: 'addmore',
            //     type: 'list',
            //     message: 'Are there any other employees you\'d like to add to your team?',
            //     choices: [
            //         {name: 'Yes', value: 'yes'},
            //         {name: 'No', value: 'no'}
            //     ]
            // }

        ])
        .then((response) => {
            const engineer = new Engineer(
                response.name,
                response.id,
                response.email,
                response.github
            )
            // employees.push(enigneer);
            employees.engineers.push(engineer)

            // console.log(employees)
            
            createEmployees();

            // if (response.addmore === 'yes'){
            //     createEmployees()
            // } else {
            //     return employees
            // }
        });
}

function makeIntern(){
    inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message:'What is this Intern\'s name?'
        },
        {
            name: 'id',
            type: 'input',
            message: 'What is this Intern\'s employee ID number?'
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is this Intern\'s Email?'
        },
        {
            name: 'school',
            type: 'input',
            message: 'What is this Intern\'s school?'
        },
        // {
        //     name: 'addmore',
        //     type: 'list',
        //     message: 'Are there any other employees you\'d like to add to your team?',
        //     choices: [
        //         {name: 'Yes', value: 'yes'},
        //         {name: 'No', value: 'no'}
        //     ]
        // }

    ])
    .then((response) => {
        const intern = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
        )
        // employees.push(intern);
        employees.interns.push(intern)
        createEmployees();
        // if (response.addmore === 'yes'){
        //     createEmployees()
        // } else {
        //     return employees
        // }
    })
}

function buildHtml(){
    fs.writeFileSync("./dist/employees.html", render(employees), (err) => {
        err ? console.log(err) : console.log("Success");
    })
}

// function render(employees){
//     return `mark up`
// }

function init (){
    // buildHtml()
    // addEmployees();
    createManager();
    
}



init();
