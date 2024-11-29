import React from 'react'
import mcig from '/public/mc ig 1.png'

function LandingPage2() {
  return (
    <section class="flex py-10 px-1 justify-center mt-8 m-width-fit">
        <div class="flex">
            <img class="ml-5" src="mc ig 1.png" alt="imagem mc ig" />
        </div>

        <div class="flex flex-col">
            <div class="px-20 mb-20">
                <h1 class="font-title text-WhiteText font-bold text-5xl uppercase drop-shadow-md">Propósitos <br/> e objetivos</h1>
            </div>

            <div class="px-20">
                <p class=" mb-16 font-subtitle text-WhiteText content-around font-light text-2xl">Aqui o objetivo é oferecer os melhores samples, drumkits e até mesmo beats de trap e funk prontos para as suas produções!</p>
                <p class=" mb-16 font-subtitle text-WhiteText content-around font-light text-2xl">Isso tudo no melhor preço! De forma acessível e de ótima  qualidade!</p>
                <p class="font-subtitle text-WhiteText content-around font-light text-2xl">Não perca oportunidade, veja o  nosso estoque e aproveite!</p>
            </div>
        </div>
    </section>
  )
}

export default LandingPage2