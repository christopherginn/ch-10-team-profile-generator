const inquirer = require('inquirer');
const Employee = require('./lib/Employee')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Name?',
            name: 'confirm'
        }
    ])
    .then((response) => {
        if (response.confirm === 'yes'){
            console.log("Yay!")
        } else {
            console.log("Seems like it does...")
        }
    })
