import React from 'react'
import tiktok from '/public/tiktok.svg'
import youtube from '/public/youtube.svg'
import discord from '/public/Discord.svg'

function LandingPage1() {
  return (
    <section className='flex box-border flex-col items-center '>
        <div class="flex box-border">
            <h1 class="font-title text-WhiteText text-8xl text-center mt-20">JOPE <br/> SHOP</h1>
        </div>

        <div>
            <p class="font-subtitle text-WhiteText text-2xl text-center mt-5 font-light">Compre samples, drumkits & beats de funk e trap de ótima qualidade!</p>
        </div>

        <div class="flex box-border gap-20 justify-center mt-5">
            <div>
                <a href=""><img class="size-14" src="tiktok.svg" alt="" /></a>
            </div>

            <div>
                <a href=""><img class="size-14" src="youtube.svg" alt="" /></a>
            </div>

            <div>
                <a href=""><img class="size-14" src="Discord.svg" alt="" /></a>
            </div>
        </div>

        <div class=" mt-32 text-center">
            <p class="font-subtitle text-WhiteText text-xl mb-2">© By. Jope Beats</p>
        </div>

        <svg width="1097" height="6" viewBox="0 0 1097 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1094 3L3.00001 3" stroke="#F5F5F5" stroke-width="5" stroke-linecap="round"/>
        </svg>
    </section>
  )
}

export default LandingPage1