const baseUrl = 'http://localhost:3000';

const params = new URLSearchParams(window.location.search);
const nomeAnimal = params.get("nome");

async function buscarDetalhes() {
    const response = await fetch(`${baseUrl}/animal/nome/${nomeAnimal}`);
    const data = await response.json();
    mostrarAnimal(data);
}

function mostrarAnimal(animal) {
    const div = document.getElementById("conteudoAnimal");

    div.innerHTML = `
        <h1>${animal.nome}</h1>
        <img src="${animal.url}" class="fotoAnimalDetalhe">
        <p><strong>Raça:</strong> ${animal.raca}</p>
        <p><strong>Gênero:</strong> ${animal.genero}</p>
        <p><strong>Idade:</strong> ${animal.idade} anos</p>
        <p><strong>Peso:</strong> ${animal.peso}kg</p>
        <p><strong>Descrição:</strong> ${animal.descricao}</p>
        <p><strong>Situação:</strong> ${animal.situacao}</p>
    `;
}

buscarDetalhes();