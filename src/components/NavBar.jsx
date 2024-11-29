import React from 'react'
import { NavLink } from "react-router-dom";

import ImgLogo from '/public/JO PE.svg'
import CheckoutCar from '/public/shopping-cart.svg'
import loginperson from '/public/user.svg'

function NavBar() {
  return (
    <nav class="flex items-center justify-between pt-6">
      <div>
        <a href=""><img class=" size-16 ml-16" src="JO PE.svg" alt="logotipo" /></a>
        
      </div>

      <ul class="flex gap-6 mr-16">
        <li class="font-subtitle text-WhiteText text-xl font-light"><a href="">Contato</a></li>
        <li class="font-subtitle text-WhiteText text-xl font-light"><a href="">Samples</a></li>
        <li class="font-subtitle text-WhiteText text-xl font-light"><a href="">Drumkit</a></li>
        <li class="font-subtitle text-WhiteText text-xl font-light"><a href="">Beats</a></li>

        <a href=""><img class="size-8 ml-10" src="shopping-cart.svg" alt="carrinho de compra" /></a>
        <a href=""><img class="size-8" src="user.svg" alt="personagem_login" /></a>
      </ul>
    </nav>
  )
}

export default NavBar