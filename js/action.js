const itensCart = [];
let valorInicial = 0;
const $resume = document.querySelector(".resume");
const $btnFinishBuy = document.querySelector(".btnFinishBuy");

function handleClick(button) {
    const $count = document.querySelector(".count");
    const $card = button.target.parentNode;
    const cardName = $card.children[1].textContent;
    const cardPrice =  $card.children[0].textContent;
    $count.textContent = `Carrinho (${++valorInicial} itens)`;
    const $total = document.querySelector(".total");

    console.log($card.children);

    itensCart.push({name: cardName, price: cardPrice});

    const totalPrice = itensCart.map(item => parseInt(item.price)).reduce((accumulator, item) =>{

        accumulator += item;

        return accumulator;

    }, 0);

    const itens = itensCart.reduce((accumulator, item) =>{
        accumulator += `
        <li class="cartItem">
            <h4>${item.name}  (R$${item.price})</h4>
        </li>`;

        $resume.innerHTML = accumulator;
        $total.innerHTML = `TOTAL: R$${totalPrice}`;

        return accumulator;
    }, '');

}

setTimeout(() => {

    const $btnAddToCart = document.querySelectorAll(".addToCart");
    
    $btnAddToCart.forEach(btn => {
        btn.addEventListener("click", handleClick);
    })

}, 2000);

const FinishBuy = () =>{alert("Obrigado pela preferência, aproveite sua jornada Pokemon!!!")};

$btnFinishBuy.addEventListener("click", FinishBuy);