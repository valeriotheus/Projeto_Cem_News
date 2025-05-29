function handleSearch(event) {
    event.preventDefault(); 

    let query = document.getElementById("searchQuery").value.trim().toLowerCase(); 
    let resultsDiv = document.getElementById("searchResults"); 

    let noticias = [
        { titulo: "Cientistas encontram espécie marinha rara", descricao: "Primeira notícia sobre Vida Marinha." },
        { titulo: "Governo investe pesado em energia solar", descricao: "Segunda notícia sobre Energia Solar." },
        { titulo: "Time local conquista campeonato regional emocionante", descricao: "Terceira notícia sobre Futebol." },
        { titulo: "Novo smartphone dobrável revoluciona tecnologia", descricao: "Quarta notícia sobre Tecnologia." },
        { titulo: "Festival musical atrai milhares de turistas", descricao: "Quinta notícia sobre Entretenimento." },
        { titulo: "Café diário traz benefícios comprovados cientificamente", descricao: "Sexta notícia sobre Bem-Estar." },
        { titulo: "Escola cria programa inovador para crianças", descricao: "Sétima notícia sobre Educação." },
        { titulo: "Artista plástico expõe obras no museu", descricao: "Oitava notícia sobre Arte." },
    ];

    resultsDiv.innerHTML = "";

    if (query === "") {
        resultsDiv.innerHTML = `<div class="alert alert-danger">Por favor, digite um termo para buscar.</div>`;
        return;
    }

    let resultados = noticias.filter(noticia => 
        noticia.titulo.toLowerCase().includes(query) || 
        noticia.descricao.toLowerCase().includes(query)
    );

    if (resultados.length > 0) {
        resultados.forEach(noticia => {
            let resultadoHTML = `<div class="alert alert-info">
                                    <strong>${noticia.titulo}</strong><br>${noticia.descricao}
                                </div>`;
            resultsDiv.innerHTML += resultadoHTML;
        });
    } else {
        resultsDiv.innerHTML = `<div class="alert alert-warning">Nenhum resultado encontrado.</div>`;
    }
}
