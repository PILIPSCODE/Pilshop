import Image from 'next/image'
import React from 'react'

const Content = () => {
  return (
          <section id="Content" className="w-11/12 mt-2">
          <div className="grid-cols-3 grid  sm:grid-cols-3 min-[1415px]:grid-cols-5 min-[1155px]:grid-cols-4 gap-2" >
          
            <div className="flex justify-center items-center relative " data-theme="wireframe">
            <Image
                  alt={`product`}
                 
                  width={400}
                  height={400}
                  style={{objectFit:"contain"}}
                  src='https://i.ibb.co/WP2YS48/kobo1.png'
                />
            </div>
            <div className=" flex justify-center items-center  relative " data-theme="wireframe">
            <Image
                  width={400}
                  height={400}
                  alt={`product`}
                  style={{objectFit:"contain"}}
                  src='https://signalinc.com/wp-content/uploads/2014/09/Screen-Shot-2021-01-02-at-6.48.37-AM-1414x1536.png'
                />
            </div>
            <div className=" flex justify-center items-center relative" data-theme="wireframe">
            <Image 
                  width={400}
                  height={400}
                  alt={`product`}
                  style={{objectFit:"contain"}}
                  src='https://jetposting.com/wp-content/uploads/2021/08/pexels-photo-4492189-780x470.jpeg'
                />
            </div>
           
           
          </div>
        </section>
  )
}

export default Content