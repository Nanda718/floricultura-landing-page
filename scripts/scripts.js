

/*AOS SCRIPT ------------------------------------------------------*/

AOS.init({
    duration: 1200,
    once: true
});

const swiper = new Swiper(".mySwiper", {

    loop: true,

    centeredSlides: true,

    slidesPerView: 1,

    speed: 1500,



    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

/*MOBILE BTN SCRIPT----------------------------------------------------*/

const mobileBtn = document.querySelector(".mobile-btn");
const mobileMenu = document.querySelector(".mobile-menu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


/* SLIDER CATALOGO SCRIPT ----------------------------------------------------*/

const cardsCatalogo = document.getElementById("cards-catalogo");
        fetch("data/produtos.json")
    .then(response => response.json())
    .then(produtos => {

        produtos.forEach(produto => {

            cardsCatalogo.innerHTML += `
                <div class="shop-card">

                    <div class="card-img">

                        <img src="${produto.imagem}" alt="${produto.nome}">

                        <div class="card-information">

                            <div class="card-information-texts">

                                <h2>${produto.nome}</h2>

                                <span>R$ ${produto.preco.toFixed(2)}</span>

                            </div>

                            <button>

                                <i class="fa-solid fa-plus"></i>

                            </button>

                        </div>

                    </div>

                </div>
            `;

        });

    });