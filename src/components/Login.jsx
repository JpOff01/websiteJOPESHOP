import React from 'react'

function Login() {
  return (
    <section class="flex text-center items-center justify-center flex-col mt-28">
        <div class="flex gap-y-5 flex-col border-4 border-WhiteText px-12 py-10 rounded-xl">
            <h1 class="font-title font-bold uppercase text-WhiteText text-5xl">Login</h1>
        
            <p class="font-subtitle text-WhiteText text-xl">Digite seu email para ativar a sua conta!</p>

            <div>
                <form action="">
                    <label htmlFor="email">
                        <input class="text-base focus:outline-none text-left font-subtitle pl-5 pr-32 py-2 rounded-xl" type="email" placeholder='Digite seu email'/>
                    </label>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login