import React from 'react'

function LandingPageCard1() {
  return (
    <div class="mt-40 flex justify-center gap-x-10">
        <section class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-BlackBackground inline-flex flex-col min-width-fit text-center p-10 rounded-xl gap-y-10 drop-shadow-md">
            <h1 class="text-WhiteText font-title font-bold text-3xl uppercase">Basic</h1>
            <p class="text-WhiteText font-subtitle text-xl">Arquivo MP3</p>
            <p class="text-WhiteText font-subtitle text-xl">Downloads ilimitados</p>
            <p class="text-WhiteText font-subtitle text-xl">100.000 streams <br/> de vídeo</p>
            <p class="text-WhiteText font-subtitle text-xl">100.000 streams <br/> de áudio</p>
            <h2 class="text-WhiteText font-title font-bold text-3xl mt-10">R$50,00</h2>
        </section>

        <section class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-BlackBackground inline-flex flex-col min-width-fit text-center p-10 rounded-xl gap-y-10 drop-shadow-md">
            <h1 class="text-WhiteText font-title font-bold text-3xl uppercase">Studio</h1>
            <p class="text-WhiteText font-subtitle text-xl">Arquivo WAV</p>
            <p class="text-WhiteText font-subtitle text-xl">Downloads ilimitados</p>
            <p class="text-WhiteText font-subtitle text-xl">300.000 streams <br/> de vídeo</p>
            <p class="text-WhiteText font-subtitle text-xl">300.000 streams <br/> de áudio</p>
            <h2 class="text-WhiteText font-title font-bold text-3xl mt-10">R$100,00</h2>
        </section>

        <section class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-GoldCardBackground inline-flex flex-col min-width-fit text-center p-10 rounded-xl gap-y-10 drop-shadow-md">
            <h1 class="text-GrayText font-title font-bold text-3xl uppercase">Mix</h1>
            <p class="text-GrayText font-subtitle text-xl">Arquivo MP3, WAV <br/> e pistas separadas</p>
            <p class="text-GrayText font-subtitle text-xl">Downloads ilimitados</p>
            <p class="text-GrayText font-subtitle text-xl">500.000 streams <br/> de vídeo</p>
            <p class="text-GrayText font-subtitle text-xl">500.000 streams <br/> de áudio</p>
            <h2 class="text-GrayText font-title font-bold text-3xl mt-3">R$150,00</h2>
        </section>

        <section class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-DiamondCardBackground inline-flex flex-col min-width-fit text-center p-10 rounded-xl gap-y-10 drop-shadow-md">
            <h1 class="text-GrayText font-title font-bold text-3xl uppercase">Master</h1>
            <p class="text-GrayText font-subtitle text-xl">Arquivo MP3, WAV <br/> e pistas separadas</p>
            <p class="text-GrayText font-subtitle text-xl">Downloads ilimitados</p>
            <p class="text-GrayText font-subtitle text-xl">Streams de vídeo <br/> ilimitados</p>
            <p class="text-GrayText font-subtitle text-xl">Streams de áudio <br/> ilimitados</p>
            <h2 class="text-GrayText font-title font-bold text-3xl mt-3">R$200,00</h2>
        </section>
    </div>
  )
}

export default LandingPageCard1