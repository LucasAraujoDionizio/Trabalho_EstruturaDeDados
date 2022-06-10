function renderizar(){
    let tabela = document.getElementById("tabela")
    result = JSON.parse(sessionStorage.getItem("Alunos"))
    console.log(result)
    for(let i=0;i<result.itens.length;i++){
        tabela.innerHTML += `
        <tr>
            <td>
                ${result.itens[i].nome}
            </td>
            <td>
                ${result.itens[i].genero}
            </td>
            <td>
                ${result.itens[i].RA}
            </td>
            <td>
                ${result.itens[i].media}
            </td>
            <td>
                ${result.itens[i].resultado}
            </td>
        </tr>
    `     
    }
    console.log(tabela.innerHTML)
}
renderizar()