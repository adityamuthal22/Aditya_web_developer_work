import React from 'react'

const Navbar = () => {
  return (
    <section class="navbar">
    <div class="container">
        <img class="logo" src="assets/logo.svg" />
        <div class="location">
            <span class="city"> Pune</span>
            <span class="state">Maharashtra, India</span>
        </div>
        <div class="navbar-options">
            <div class="navbar-option">
                <span class="material-icons"> person_outline</span> Sign In
            </div>
            <div class="navbar-option">
                <span class="material-icons">
                    shopping_bag
                    </span> Cart
            </div>
            <div class="navbar-option">
                <span class="material-icons">support</span> Help
            </div>
            <div class="navbar-option">
                <span class="material-icons">search</span> Search
            </div>
        </div>
    </div>
   
</section>
  )
}

export default Navbar