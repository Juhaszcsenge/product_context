'use client'

import { useGlobalContext } from "./Component/FirstContext"

export default function Home() {
  const {name, setName, product, setProduct, type, setType} = useGlobalContext();

  return( 
    <div>

    </div>
  )
}
