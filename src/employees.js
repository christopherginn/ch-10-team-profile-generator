function renderManagerCard(manager){
    return `
        
            <div class="card m-2">
                <div class="card-header bg-danger text-light">
                    <h2 class="card-title">${manager.name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                </div>
                
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office number: ${manager.officeNum}</li>
                    </ul>
                </div>
            </div>
        `
};

function createEnigneerCards(engineers){
    const markup = engineers.map((engineer) => {
        return `
            
                <div class="card m-2">
                    <div class="card-header bg-primary text-light">
                        <h2 class="card-title">${engineer.name}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                    </div>

                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                        </ul>
                     </div>
                </div>
            `
    });
    return markup.join("");
}

function createInternCards(interns){
    const markup = interns.map((intern) => {
        return `
            
                <div class="card m-2">
                    <div class="card-header bg-success text-light">
                        <h2 class="card-title">${intern.name}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                    </div>

                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
            `
    });
    return markup.join("");
};

function createEmployeeCards(employees) {
    return `
    ${renderManagerCard(employees.manager)}
    ${createEnigneerCards(employees.engineers)}
    ${createInternCards(employees.interns)}`
}

function render(employees){
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Employees</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>

        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 text-light bg-secondary">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-wrap justify-content-center">
                        ${createEmployeeCards(employees)}
                    </div>
                </div>
            </div>
        </body>
        </html>`
}

module.exports = render;