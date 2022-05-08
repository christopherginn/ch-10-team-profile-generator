const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')

const team = [];

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What is this employee\'s position?',
                name: 'position',
                choices: [
                    {name:'Manager', value:'manager'},
                    {name:'Engineer', value:'engineer'},
                    {name:'Intern', value:'intern'}
                ]
            },
            {
                type: 'input',
                message: 'Name?',
                name: 'name'
            },
            {
                type: 'input',
                message: 'ID?',
                name: 'id'
            },
            {
                type: 'input',
                message: 'email?',
                name: 'email'
            },
            {
                type: 'list',
                message: 'Do you have any more employees to add?',
                name: 'addMore',
                choices: [
                    {name: 'Yes', value: 'yes'},
                    {name: 'No', value: 'no'}
                ]
            }
        ])
        .then((response) => {
            team.push(new Employee(response.name, response.id, response.email))
            if (response.addMore === 'yes'){
                addEmployee();
            } else {
                console.log(team)
            }
        })
};

function init (){
    addEmployee();
}

init();
