import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'


const NavBar = () => {
    const NavBarStyle = "inlince-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-300"
    return (
        <div>
            <header className="bg-red-600">
                <div className="container mx-auto flex justify-between">
                    <nav className="flex">
                        <NavLink 
                            to="/" 
                            exact
                            activeClassName="text-white" 
                            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-300 text-4xl font-bold cursive tracking-widest">
                            HoneyBee
                        </NavLink>
                        <NavLink 
                            to="/post"
                            activeClassName="text-red-100 bg-red-700"
                            className={NavBarStyle}>
                            Blog posts
                        </NavLink>
                        <NavLink to="/project"
                            activeClassName="text-red-100 bg-red-700"
                            className={NavBarStyle}>
                            Porjects
                        </NavLink>
                        <NavLink
                            activeClassName="text-red-100 bg-red-700" 
                            to="/about"
                            className={NavBarStyle}>
                            About Me!
                        </NavLink>
                    </nav>
                    <div className="inline-flex py-3 px-3 my-6">
                        <SocialIcon url="https://twitter.com/waxibar" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                        <SocialIcon url="https://www.youtube.com/channel/UCuoj9ByhBJwtL78WBpfa1Qg" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                        <SocialIcon url="https://www.linkedin.com/in/anas-ahmed-874248173/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar
