import React from 'react'

function LandingPage3() {
  return (
    <section class="flex flex-col justify-cente items-center">
        <h1 class="uppercase font-title text-WhiteText font-bold text-5xl mb-10">Acesso aos beats</h1>

        <svg width="1232" height="6" viewBox="0 0 1232 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1229 3L3 3" stroke="white" stroke-width="5" stroke-linecap="round"/>
        </svg>

        <div class="flex flex-col gap-y-10 justify-center mt-14 ">
            <p class="text-WhiteText font-subtitle text-3xl px-24 mb-16">Para ter acesso aos arquivos do beat, você precisa ter uma <strong>Licença</strong>.</p>
            <p class="text-WhiteText font-subtitle text-3xl px-24 mb-16">Adquirindo uma das licenças, você possui alguns critérios que precisam ser cumpridos, caso contrário será invalidado sua compra.</p>
            <p class="text-WhiteText font-subtitle text-3xl px-24">Cada licença possui um valor diferente baseado nos critérios definidos nele, tendo um valor base da primeira licença de <strong>R$50,00</strong> .</p>
        </div>
    </section>
  )
}

export default LandingPage3