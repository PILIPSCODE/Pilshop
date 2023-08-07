import React from "react"



type nav={
  navigate:React.RefObject<HTMLDivElement>
}


const SosialHero = (props:nav) => {
  return(
    <h1 onClick={() => {props.navigate.current?.scrollIntoView({behavior:"smooth",block:"start"})}}>akwokowkowko</h1>
  )
}

export default SosialHero