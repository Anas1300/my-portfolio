import React from 'react'

const Home = () => {
    return (
        <div>
            <main>
                <img src="https://images.unsplash.com/photo-1600494448850-6013c64ba722?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" 
                    alt="interior design"
                    className="absolute object-cover w-full h-full"
                    />
                <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                    <h1 className="text-6xl text-green-100 font-bold cursive  leading-none lg:leading-snug home-name">Aliha. I ma Anaaas!!</h1>
                </section>
            </main>
        </div>
    )
}

export default Home
