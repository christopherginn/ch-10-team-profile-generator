function renderManagerCard(manager){
return `
  <div class="card employee-card">
  <div class="card-header">
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
    `;
}

function createEnigneerCards(engineer){
    `<div class="card employee-card">
          <div class="card-header">
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
      </div>`
}

function createInternCards(intern){
    const markup = interns.map((intern) => {
    return `
        <div class="card employee-card">
    <div class="card-header">
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
</div>`
    });
    return markup.join(",");
}

function createEmployeeCards(employees) {
    return ``
    renderManagerCard(employees.manager);
    for (i=0; i < employees.engineers.length; i++){
        createEnigneerCards(employees.engineers[i])
    };
    for (i=0; i < employees.interns.length; i++){
        createInternCards(employees.interns[i])
    };
}

function render(employees){
    return `${createEmployeeCards(employees)}`
}

module.exports = render;