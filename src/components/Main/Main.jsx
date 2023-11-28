import React from 'react'
import "./Main.css"
import { data } from '../../data'
import Card from '../Card/Card'

const Main = () => {
  return (
    <div className='main-div'>
      {data?.map((e)=>{  //props (slika, ime)
        return <Card slika={e.src} ime={e.name}/>
      })}
    </div>
  )
}

export default Main