const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?",
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else{
                        console.log("Please enter your name!!!!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is your GitHub username?",
                validate: usernameInput => {
                    if (usernameInput){
                        return true;
                    } else{
                        console.log("Please enter your GitHub Username!!!!");
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAbout',
                message: 'Would you like to enter some information about yourself for an "About" section?',
                default: true
            },
            {
                type: "input",
                name: "About",
                message: "Provide some information about yourself:",
                when: ({ confirmAbout }) => {
                    if (confirmAbout) {
                      return true;
                    } else {
                      return false;
                    }
                }
            },
        ])
        
}
const promptProject = portfolioData  => {
    console.log(`
        =================
        Add a New Project
        =================
    `);
  
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
    portfolioData.projects = [];
    }

    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
        validate: PnameInput => {
            if (PnameInput){
                return true;
            } else{
                console.log("Please enter the project name!!!!");
                return false;
            }
        }
        
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            } else{
                console.log("Please enter the project description!!!!");
                return false;
            }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: Plink => {
            if (Plink){
                return true;
            } else{
                console.log("Please enter the project link!!!!");
                return false;
            }
        }
        
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    })
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
//const fs = require('fs');
//const generatePage = require('./src/page-template.js');

//const pageHTML = generatePage(Name, gitHub);

//fs.writeFile("index.html", pageHTML, err => {
    //if (err)  throw new Error(err);

    //console.log('Portfolio complete! Check out index.html to see the output!');
//})




