const main = document.querySelector('main')
const ul = document.querySelector('.containerItens')


function criarCard (){
    for (let i = 0 ; i < data.length; i++){

        const li = document.createElement('li') //LI
        const img = document.createElement('img') //IMAGEMM

        const caixaItem = document.createElement('div') // DIV

        const categoria = document.createElement('p')  //CATEGORIA
        const h3 = document.createElement('h3') //NOME PRODUTO
        const descricao = document.createElement('p') //DESCRICAO
        const preco = document.createElement('p') //PRECO
        const adicionarAoCarrinho = document.createElement('a') //link adicionar ao carrinho

        li.classList.add('listaItens')
        img.src = data[i].img
        
        caixaItem.classList.add('caixaItem')

    
        categoria.classList.add('categoria')
        categoria.innerText = data[i].tag
        h3.innerText = data[i].nameItem
        
        descricao.classList.add('descricao')
        descricao.innerText = data[i].description

        
        preco.classList.add('preco')
        preco.innerText = `R$ ` +data[i].value+ `,00` 

        adicionarAoCarrinho.innerText = data[i].addCart
        adicionarAoCarrinho.classList.add('link')
        adicionarAoCarrinho.id = data[i].id

        caixaItem.append(categoria,h3,descricao,preco,adicionarAoCarrinho)
        li.append(img,caixaItem)

        ul.appendChild(li)
        main.appendChild(ul) 
    } 
}
criarCard()


let linkVitrine = document.querySelectorAll('.link')
linkVitrine.forEach(element => {
    element.addEventListener('click',captandoCard)
    
});

let count = 1
let soma = 0

const ulCarrinho = document.querySelector('.ulCaixaCarrinho')   
function captandoCard (event) {
    
    
    const idAtual = event.target.id
    let produtoAtual = {}

    for (let i = 0 ; i < data.length; i++){
        if (data[i].id == idAtual){
            produtoAtual = data[i]
        }
    }


    const imgCarrinho = document.createElement('img')
    imgCarrinho.src = produtoAtual.img

    const tituloCarrinho = document.createElement('h3')
    tituloCarrinho.innerText = produtoAtual.nameItem

    const precoCarrinho = document.createElement('p')
    soma = precoCarrinho.innerText = produtoAtual.value+soma

    

    const removerCarrinho = document.createElement('button')
    removerCarrinho.innerText = 'Remover Produto'
    removerCarrinho.id = produtoAtual.id


    removerCarrinho.addEventListener('click',removendoProduto)
    function removendoProduto(){
        
    }

    const liCarrinho = document.createElement('li')
    liCarrinho.classList.add('liCarrinho')
    liCarrinho.append(tituloCarrinho,imgCarrinho,precoCarrinho,removerCarrinho)



    ulCarrinho.appendChild(liCarrinho)
    const caixaCarrinho = document.querySelector('.caixaCarrinho')
    caixaCarrinho.appendChild(ulCarrinho)
    
    
    const quantidade = document.getElementById('quantidade')
    quantidade.innerText = count

    const total = document.getElementById('total')
    total.innerText =`R$ `+ soma + `,00`
    count++
    
}


