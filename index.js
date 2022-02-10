const inquirer = require('inquirer');
const express = require('express');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site')

let manager = [];
let engineer = [];
let intern = [];
let employeeArr = {manager, engineer, intern};

function Prompt() {
    
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message:'Please provide employee role',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type:'text',
            name: 'employee',
            message: 'Please provide employee name'
        },
        {
            type:'text',
            name: 'id',
            message: 'Please provide employee ID'
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please provide employee email'
        }])
        .then(({employee, id, email, role}) => {
            if (role === "Manager") {
                return inquirer
                    .prompt([{
                        type:'text',
                        name: 'office',
                        message: 'Please provide manager office number'
                    },
                    {
                        type:'confirm',
                        name:'employeePlus',
                        message: 'Would you like to add another employee?',
                        default: false
                    }])
                    .then(({office, employeePlus}) => {
                        manager.push(new Manager(employee, id, email, office))
                        // console.log(employeeArr)
                        if (employeePlus) {
                            return Prompt();
                        }
                    })
            } else if (role === "Engineer") {
                return inquirer
                    .prompt([{
                        type: 'text',
                        name: 'github',
                        message: 'Please provide engineer GitHub'
                    },
                    {
                        type:'confirm',
                        name:'employeePlus',
                        message: 'Would you like to add another employee?',
                        default: false
                    }])
                    .then(({github, employeePlus}) => {
                        engineer.push(new Engineer(employee, id, email, github))
                        // console.log(employeeArr)
                        if (employeePlus) {
                            return Prompt();
                        }
                    })
            } else if (role === 'Intern') {
                 return inquirer
                    .prompt([{
                        type:'text',
                        name:'school',
                        message: 'Please provide intern school'
                    },
                    {
                        type:'confirm',
                        name:'employeePlus',
                        message: 'Would you like to add another employee?',
                        default: false
                    }])
                    .then(({school, employeePlus}) => {
                        intern.push(new Intern(employee, id, email, school))
                        // console.log(employeeArr)
                        if (employeePlus) {
                            return Prompt();
                        }
                    })
            }
        })
};



Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })