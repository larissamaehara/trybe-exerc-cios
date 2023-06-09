//1-Altere a cor de fundo do header para rgb(0, 176, 105);
const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

//2-Altere a cor de fundo da div das tarefas que são Urgentes e Importantes para rgb(255, 159, 132);
const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

//3-Altere a cor de fundo do título das das tarefas que são Urgentes e Importantes para rgb(165, 0, 243);
const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  const currentTaskHeader = emergencyTasksHeaders[index];
  currentTaskHeader.style.backgroundColor = 'rgb(165, 0, 243)';
};

//4-Altere a cor de fundo da div das tarefas que não são Urgentes e Importantes para rgb(249, 219, 94);
const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

//5-Altere a cor de fundo do título das das tarefas que não são Urgentes e Importantes para rgb(35, 37, 37);
const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

//6-Altere a cor de fundo do footer para rgb(0, 53, 51).
const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';