import React from "react";
import "./homepage.css"
function Homepage(){



return(
    <>
    <div className="main_div">
        {/* ----------------------------------------------------- */}
        <svg className="logo" width="67" height="86" viewBox="0 0 67 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.6226e-05V0H66.9467L66.9468 2.6226e-05V85.5H63.1963V71.902H59.8208H56.0703H3.75052V85.5H0V71.902V68.1765V49.1765V45.451V26.451V22.7255V3.72549V2.6226e-05ZM63.1963 68.1765V49.1765H33.5669H29.8164H27.1914H23.4409H21.1905H17.4399H14.0645H10.314H3.75052V68.1765H6.93848V58.4902V57.1863V54.7647H26.2536V58.4902H26.2534V68.1765H29.6289V58.4902H33.3794L59.8205 58.4902V59.0491H59.8208V68.1765H63.1963ZM63.1963 45.451V26.451H3.75052V45.451H10.314V39.8628V36.3235V36.1373H21.1905V39.8628L21.1905 45.451H23.4409V39.8628V36.3235V36.1373H33.3798V36.3235H33.5669V45.451L36.7549 45.451V32.5981H36.9424V32.4118H59.8205V33.3431H59.8208V45.451H63.1963ZM63.1963 22.7255V3.72549H3.75052V22.7255H56.0703V13.5981H43.8809V22.7255H40.1304V9.87255H43.8809V9.87258H59.8205V11.7353H59.8208V22.7255H63.1963ZM22.5029 68.1765H10.689V58.4902H22.5029V68.1765ZM56.0703 68.1765H33.3794V62.2157H56.0703V68.1765ZM14.0645 45.451H17.4399V39.8628H14.0645V45.451ZM27.1914 45.451H29.8164V39.8628H27.1914V45.451ZM56.0703 45.451V36.1373H40.5054V45.451L56.0703 45.451ZM6.93848 9.87255V6.14709H36.7551V9.87258H36.7549V22.7255H33.0044V9.87258H10.689V22.7255H6.93848V9.87258V9.87255Z" fill="url(#paint0_linear_180_4106)"/>
        <defs>
        <linearGradient id="paint0_linear_180_4106" x1="1.05329e-07" y1="2.51471" x2="66.3719" y2="92.073" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E7286C"/>
        <stop offset="0.469356" stop-color="#F40ED3"/>
        <stop offset="1" stop-color="#3515ED"/>
        </linearGradient>
        </defs>
        </svg>
        {/* ----------------------------------------------------- */}
        <span className="dailyshelf">Daily Shelf</span>
        <button className="Text">Solution</button>
        <button className="Text">Tutorial</button>
        <button className="Text">Price</button>
        <button className="Text">FAQ</button>
        <button onClick={()=>this.store.logout()} className="Text1">Log out</button>
        </div>
    </>
)
}

export default Homepage