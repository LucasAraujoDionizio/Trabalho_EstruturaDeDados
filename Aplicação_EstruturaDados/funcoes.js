//array que armazena os alunos cadastrados e aprovados
var alunos = []
var alunosaprovados = []
//Esta função organiza todos os dados recebidos nos inputs do html os passando para uma listagem em objetos
// na função também já há uma organização para 2 arrays: alunos (todos) e alunos aprovados
function cadastro(){
        let objeto_aluno = {
            nome : document.getElementById("nome").value,
            genero : document.querySelector('input[name=genero]:checked').value,
            RA : Number(document.getElementById("ra").value),
            media : Number(document.getElementById("media").value),
          }
        objeto_aluno.resultado = (objeto_aluno.media >= 6 ? `Aprovado` : `Reprovado`)
        //adiciona as informações do objeto para o array alunos
        if (objeto_aluno.resultado === `Aprovado`){
            alunosaprovados.push(objeto_aluno);
          }
          alunos.push(objeto_aluno);  
}
//Há três botões que chamam a função selectionsort
//além de chamar, cada um dos botões determina o item(alunos ou alunosaprovados), ordem(crescrente/decrescente) e a propriedade (RA/nome)
//apos isso a função realiza o selection sort com as informações dos parametros
function selectionSort(itens,ordem,propriedade){
    for (let i = 0; i < itens.length; i++){
        let min = i 
        for(let j = i + 1; j < itens.length; j++){
            if(ordem === "crescente"){
                if(itens[j][propriedade] < itens[min][propriedade]){
                    min = j
                }
            }
            else if(ordem === "decrescente"){
                if(itens[j][propriedade] > itens[min][propriedade]){
                    min = j
                }
            }    
        }
        if(i !== min){
            let temp = itens[i]
            itens[i] = itens[min]
            itens[min] = temp
        }
    }
     sessionStorage.setItem("Alunos", JSON.stringify({itens,props:[itens,ordem,propriedade]}));
     window.location.href = `tabelamento.html`;
}
//session storage passa a armazenar os dados, tornando possivel mante-los mesmo indo para relatorios e/ou voltando para home page

//Limpa todos os arrays, reiniciando completamente o processo de cadastro
function encerrar(){
    alert("Programa encerrado - cadastros deletados")
    alunos = []
    alunosaprovados = [] 
}

//função usada desde o começo para checar a atual organização dos dados nos arrays
function checar(){
    console.log(alunos)
    console.log(alunosaprovados)
}