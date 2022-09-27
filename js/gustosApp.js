const gustosCatalogo = document.getElementById('gustos-catalogo')

function cargarGustos(){
    fetch('./gustos.json')
        .then(resp => resp.json())
        .then(gustos => {
            gustos.forEach(gusto => {
                const row = document.createElement('tr');
                row.innerHTML += `
                <td class="tds">${gusto.Categoria}</td>
                <td class="tds">${gusto.Nombre}</td>
                <td class="tds">${gusto.Intensidad}</td>
                <td class="tds">${gusto.Rinde}</td>
                `;
                gustosCatalogo.appendChild(row);
            });
        })
}

cargarGustos()