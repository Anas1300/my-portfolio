import React, { useState, useEffect } from 'react'
import sanityClient from "../client"
import ImageUrlBuilder from '@sanity/image-url'
import BlockContent from "@sanity/block-content-to-react"
const builder = ImageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}

const About = () => {
  const [author, setAuthor] = useState(null)

  useEffect(()=> {
    sanityClient.fetch(`*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`).then((data) => setAuthor(data[0]))
      .catch(console.error)
  },[])
  if (!author) return <div>Loading...</div>
    return (
      <main className="relative">
        <img src ="https://cdna.artstation.com/p/assets/images/images/035/881/412/large/kirill-demidenko-front-close.jpg?1616145233"
        className="absolute w-full"
        alt="armor"
        />
        <div className="p-10 lg:-t-48 container mx-auto relative">
          <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
            <img src={urlFor(author.authorImage).url()} 
            alt={author.name}
            className="rounded w-32 h-32 lg:2-64 lg:h-64 mr-8"/>
            <div className="text-lg flex flex-col justify-center">
              <h1 className="cursive text-6xl text-green-300 mb-4">
                Hey there, I'm {" "}
                <span className="text-green-100">{author.name}</span>
              </h1>
              <div className="porse lg:prose-xl text-white">
                <BlockContent 
                blocks={author.bio} 
                projectId="llrlc6od"
                dataset="a2" />
              </div>
            </div>
          </section>
        </div>
      </main>
    )
}

export default About
