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

    for (const animal of animals) {
      const htmlAnimal = `
       <div class = "caixinhaFotoAnimal">
            <img class = "animalEditadoFoto" src ="../IMAGENS/CachorraLilica.png">
        </div>
      `
      htmlData = htmlData + htmlAnimal;
    }

    cachorroContainer.innerHTML = htmlData    

}


showAnimals();