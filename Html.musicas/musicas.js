document.addEventListener("DOMContentLoaded", () => {
    // Exibir músicas ao carregar a página
    displayMusic();

    // Adicionar evento de submissão ao formulário
    document.getElementById("musicForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impedir o envio do formulário
        addMusic();
    });
});

function addMusic() {
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const genre = document.getElementById("genre").value;
    const duration = parseFloat(document.getElementById("duration").value);

    const music = { title, artist, genre, duration };

    // Obter a lista de músicas do localStorage
    const musicList = JSON.parse(localStorage.getItem("musicList")) || [];
    musicList.push(music); // Adicionar nova música
    localStorage.setItem("musicList", JSON.stringify(musicList)); // Atualizar o localStorage

    // Limpar o formulário
    document.getElementById("musicForm").reset();

    // Atualizar a lista exibida
    displayMusic();
}

function displayMusic() {
    const musicList = JSON.parse(localStorage.getItem("musicList")) || [];
    const musicListElement = document.getElementById("musicList");
    musicListElement.innerHTML = ""; // Limpar a lista antes de exibir

    musicList.forEach(music => {
        const listItem = document.createElement("li");
        listItem.textContent = `${music.title} - ${music.artist} (${music.genre}, ${music.duration} min)`;
        musicListElement.appendChild(listItem);
    });
}
