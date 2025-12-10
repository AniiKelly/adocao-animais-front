const cachorroContainer = document.getElementById('container-cachorro');

const baseUrl = 'http://localhost:3000'

async function getAnimals(){
    const response = await fetch(baseUrl+'/animal/all')

    const data = await response.json();

    return data;    
}

async function showAnimals(){
    const animals = await getAnimals();
    let htmlData = ''

/*<a href="informacoes-animal.html?id=${animal.id}">*/

    for (const animal of animals) {
      const htmlAnimal = `
       <div class="caixinhaFotoAnimal">
          <a href="informacoes-animal.html?id=${animal.id}">
            <img class="animalEditadoFoto" src="${animal.url}">
            <p class="nomeAnimal">${animal.nome}</p>
          </a>
        </div>
      `
      htmlData += htmlAnimal;
    }

    cachorroContainer.innerHTML = htmlData    
}

showAnimals();