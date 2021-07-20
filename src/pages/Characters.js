import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../components/Card'
import Search from '../components/Search'

const Characters = () => {
    const peticion=async()=>{
        const peti=await fetch('https://rickandmortyapi.com/api/character')
        const res=await peti.json()
        setData(res.results)
    }
    const [search, setSearch] = useState('')
    const [data, setData] = useState(null)
    useEffect(() => {
        peticion()
    }, [])
    const searchPersonaje=()=>{
        search.toLocaleLowerCase()
        const datos=data.filter(d=>d.name.toLocaleLowerCase()===search)
        if(datos.length>0){
            setSearch('')
            setData(datos)
        }else{
            peticion()
        }
        
    }
    return (
        <main>
            <div className="container">
            <h1 className="text-dark mt-4 text-center">Personajes Ricky and Morty</h1>
            <Search
            searchPersonaje={searchPersonaje}
            setSearch={setSearch}
            search={search}
            />
            <Card data={data}/>
            </div>
        </main>
    )
}

export default Characters