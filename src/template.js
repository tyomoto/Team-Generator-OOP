const populateTeam = team => {
  // Manager html card
    const populateManager = manager => {
      return `
      <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-body card-body border border-dark rounded">
                      <h5 class="card-title">Manager</h5>
                      <ul class="card-text">
                          <li>Name: ${manager.getName()} </li>
                          <li>ID #: ${manager.getId()}</li>
                          <li>Email: <a href="mailto:${manager.getEmail}" class="card-link">${manager.getEmail()}</a></li>
                          <li>Office Number: ${manager.getOfficeNumber()} </li>
                      </ul> 
                    </div>
                </div>
            </div>
      `;
    };
  
  // Engineer html card
    const populateEngineer = engineer => {
      return `
      <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-body card-body border border-dark rounded">
                      <h5 class="card-title">Engineer</h5>
                      <ul class="card-text">
                        <li>Name: ${engineer.getName()} </li>
                        <li>ID #: ${engineer.getId()}</li>
                        <li>Email: <a href="mailto:${engineer.getEmail}" class="card-link">${engineer.getEmail()}</a></li>
                        <li>Github Username: <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="card-link">${engineer.getGithub()}</a></li>
                        
                    </ul>
                    </div>
                </div>
            </div>
      `;
    };
  // Intern html card
    const populateIntern = intern => {
      return `
      <div class="col ">
                <div class="card" style="width: 18rem;">
                    <div class="card-body border border-dark rounded">
                      <h5 class="card-title">Intern</h5>
                      <ul class="card-text">
                        <li>Name: ${intern.getName()}</li>
                        <li>ID #: ${intern.getId()}</li>
                        <li>Email: <a href="mailto:${intern.getEmail}" class="card-link">${intern.getEmail()}</a></li>
                        <li>School: ${intern.getSchool()}</li>
                    </ul>
                    </div>
                </div>
            </div>
      `;
    };

    const newHtml = [];

    newHtml.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => populateManager(manager))
    );
    newHtml.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => populateEngineer(engineer))
      .join("")
    );
    newHtml.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => populateIntern(intern))
      .join("")
    );
    return newHtml.join("");
}

module.exports = team => {
  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Your Team Profile!</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  </head>
  <body>
    <!-- HEADER/JUMBOTRON CONTAINER -->
    <div class="container-fluid">
        <div class="row">
            <div class="pb-3 bg-dark text-light text-center heightwebsite-header">
                <h1 class="">My Team Profile!</h1>
            </div>
        </div>
        <div class="row row-cols-auto ">
        <!-- Populates team cards here -->
            ${populateTeam(team)}
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
  </body>
</html>
`;
};
