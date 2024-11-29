import React from 'react'
import { NavLink } from "react-router-dom";

import ImgLogo from '/public/JO PE.svg'
import CheckoutCar from '/public/shopping-cart.svg'
import loginperson from '/public/user.svg'

function NavBar() {
  return (
    <nav class="flex items-center justify-between pt-6">
      <div>
        <NavLink to="/"><img class=" size-16 ml-16" src="JO PE.svg" alt="logotipo" /></NavLink>
      </div>

      <ul class="flex items-center gap-6 mr-16">
        <li class="font-subtitle text-WhiteText text-xl font-light"><NavLink to="">Contato</NavLink></li>
        <li class="font-subtitle text-WhiteText text-xl font-light"><NavLink to="">Samples</NavLink></li>
        <li class="font-subtitle text-WhiteText text-xl font-light"><NavLink to="">Drumkit</NavLink></li>
        <li class="font-subtitle text-WhiteText text-xl font-light"><NavLink to="">Beats</NavLink></li>
        <div class="flex gap-10 items-center">
          <a href="">
            <img class="size-8 ml-10" src="shopping-cart.svg" alt="carrinho de compra" />
          </a>

          <NavLink to="login">
            <img class="size-8" src="user.svg" alt="personagem_login" />
          </NavLink>
        </div>
        
      </ul>
    </nav>
  )
}

export default NavBar