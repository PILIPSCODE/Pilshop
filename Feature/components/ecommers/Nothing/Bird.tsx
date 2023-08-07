import React from 'react'

type Bird = {
    change: React.RefObject<HTMLHeadingElement>,
    wings:Boolean,
    showpasss:Boolean
}

const Bird = (proops:Bird) => {
  return (
    <div className="rounded-t-full relative flex ">
    <div
      className="absolute flex w-full justify-around translate-y-24  max-[1083px]:translate-y-16 max-[345px]:translate-y-12  "
      ref={proops.change}
    >
      <div className={` bg-black eye rounded-full ${proops.wings ? "w-3 h-3" : "w-16 h-16 max-[1134px]:w-12 max-[1134px]:h-12 max-[409px]:h-7 max-[409px]:w-7 max-[325px]:w-5 max-[325px]:h-5"}  flex justify-center items-center text-4xl ${proops.showpasss? "text-transparent" :""}`}></div>
      <div className={` bg-black eye rounded-full  ${proops.wings ? "w-3 h-3" : "w-16 h-16 max-[1134px]:w-12 max-[1134px]:h-12 max-[409px]:h-7 max-[409px]:w-7 max-[325px]:w-5 max-[325px]:h-5"}  flex justify-center items-center text-4xl ${proops.showpasss? "text-transparent" :""}`}></div>
    </div>
    <img
      src="/sayap2.png"
      className={`absolute  w-64  max-lg:w-48 -translate-y-9 max-[361px]:-translate-y-5 max-[361px]:translate-x-8  max-[282px]:translate-x-5 max-[282px]:-translate-y-0  ${proops.showpasss? "opacity-0" :""} ${
        proops.wings
          ? "-scale-x-100 right-0 translate-x-12   "
          : "  wings opacity-0"
      } duration-300 `}
    />
    <img src="/burung.png" className="w-80 pt-10 max-lg:w-56 " />
    <img
      src="/sayap2.png"
      className={`absolute  w-64 max-lg:w-48 duration-300 max-[361px]:-translate-y-5 max-[361px]:-translate-x-8 max-[282px]:-translate-x-5 max-[282px]:-translate-y-0  ${
        proops.wings ? "-translate-x-12" : "wings2 opacity-0"
      } -translate-y-5`}
    />
  </div>
  )
}

export default Bird