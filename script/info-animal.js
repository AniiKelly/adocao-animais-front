const baseUrl = 'http://localhost:3000';

async function carregarAnimal() {
    // pegar o id passado pela URL
    const params = new URLSearchParams(window.location.search);
    const idAnimal = params.get('id');

    if (!idAnimal) return;

    // buscar animal pelo id no backend
    const response = await fetch(`${baseUrl}/animal/${idAnimal}`);
    const animal = await response.json();

    preencherPagina(animal);
}

function preencherPagina(animal) {
    document.querySelector('.image-container img').src = animal.url;
    document.querySelector('.name').textContent = animal.nome;

    document.querySelector('.subtitle').textContent =
        `${animal.raca} · ${animal.genero} · ${animal.idade} anos · ${animal.peso}kg`;

    document.querySelector('.info').innerHTML = `
        <p>📍 Situação: ${animal.situacao}</p>
        <p>📌 Descrição: ${animal.descricao}</p>
    `;

    // tags opcionais
    if (animal.tags) {
        const tagsDiv = document.querySelector('.tags');
        tagsDiv.innerHTML = '';
        animal.tags.forEach(t => {
            tagsDiv.innerHTML += `<span>${t}</span>`;
        });
    }
}

carregarAnimal();
