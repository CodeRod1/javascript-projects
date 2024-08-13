window.addEventListener('load', function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayAstronauts(data);
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
});

function displayAstronauts(astronautsList) {
    const div = document.getElementById("container");
    
    astronautsList.sort(function(a, b) {
        return b.hoursInSpace - a.hoursInSpace;
    });

    const countElement = document.createElement('p');
    countElement.textContent = 'Total Astronauts: ' + astronautsList.length;
    div.appendChild(countElement);

    for (let x = 0; x < astronautsList.length; x++) {
        const person = document.createElement("div");
        person.classList.add("astronaut"); 

        const h3 = document.createElement("h3");
        h3.innerHTML = `${astronautsList[x].firstName} ${astronautsList[x].lastName}`;
        person.appendChild(h3);

        const ul = document.createElement("ul");

        const liHours = document.createElement("li");
        liHours.innerHTML = `Hours in Space: ${astronautsList[x].hoursInSpace}`;
        ul.appendChild(liHours);

        const liActive = document.createElement("li");
        liActive.innerHTML = `Active: ${astronautsList[x].active}`;
        if (astronautsList[x].active) {
            liActive.style.color = 'green'; 
        }
        ul.appendChild(liActive);

        const liSkills = document.createElement("li");
        liSkills.innerHTML = `Skills: ${astronautsList[x].skills.join(', ')}`; 
        ul.appendChild(liSkills);

        person.appendChild(ul);

        const img = document.createElement('img');
        img.src = astronautsList[x].picture; 
        img.classList.add("avatar"); 
        person.appendChild(img);

        div.appendChild(person);
    }
}
