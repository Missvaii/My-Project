import React from 'react'
import offer from "./images/offer2.png"

export default function Navbar() {
    return (
        <>
        <header>
        <nav className="navbar"> 
            <div className="left">
                <h1>VyLix</h1>
                <input className="search desktop-searchbar" placeholder="Search for products, brands and more" 
                    value="" data-reactid="800"/>

            </div>
            <div className="right">
                <ul className="ul">
                    <li className="item" href="/">Become a Seller</li>
                    <li className="item" href="/">Profile</li>
                    <li className="item" href="/">Cart</li>

                </ul>
            </div>


        </nav>

    </header>
    <section className="subheader">
        <div className="box">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/50379f65f7b59622.png?q=100" className="padl" alt=""/>
            <p>special offers</p>
        </div>
        <div className="box">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0a0243119f02f7a5.png?q=100" className="padl" alt=""/>
            <p>Mobile&tablets</p>
        </div>
        <div className="box">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/da4491af4ee551d6.png?q=100" className="padl"alt=""/>
            <p>Electronics</p>
        </div>
        <div className="box">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7a9da987f315df35.png?q=100" className="padl" alt=""/>
            <p>TV&Appliances</p>
        </div>
        <div className="box">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f7b2a4eeb35a8c9f.png?q=100" alt=""/>
            <p>Fashion</p>
        </div>
        <div className="box">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e83a5f27b01d9a7e.png?q=100" alt=""/>
            <p>Beauty</p>
        </div>
        <div className="box">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a8cfa33c7206ae57.png?q=100" className="padl" alt=""/>
            <p>Home&Kitchen</p>
        </div>
        <div className="box">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/4e0bdf8567ecb960.png?q=100" alt=""/>
            <p>Furniture</p>
        </div>
        <div className="box">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/aecfaba5969b96dd.png?q=100" alt=""/>
            <p>Grocery</p>
        </div>


    </section>

    <div className="offer">
        
        <img src={offer} alt="" />
    </div>
        </>

    )
}
