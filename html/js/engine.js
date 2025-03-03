function handleSearch(event) {
    event.preventDefault(); 

    let query = document.getElementById("searchQuery").value.trim().toLowerCase(); 
    let resultsDiv = document.getElementById("searchResults"); 

    let noticias = [
        { titulo: "Notícia 1", descricao: "Primeira notícia sobre esportes." },
        { titulo: "Notícia 2", descricao: "Segunda notícia sobre tecnologia." },
        { titulo: "Notícia 3", descricao: "Terceira notícia sobre política." },
        { titulo: "Notícia 4", descricao: "Quarta notícia sobre economia." },
        { titulo: "Notícia 5", descricao: "Quinta notícia sobre entretenimento." },
        { titulo: "Notícia 6", descricao: "Sexta notícia sobre saúde." },
        { titulo: "Notícia 7", descricao: "Sétima notícia sobre meio ambiente." },
        { titulo: "Notícia 8", descricao: "Oitava notícia sobre educação." },
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
