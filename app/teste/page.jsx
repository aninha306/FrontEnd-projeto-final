'use client'
import axios from 'axios'
import { useState } from 'react'

function editar() {
    const [nomeObra, setNomeObra] = useState('')
    const [tipo, setTipo] = useState('')
    const [artista, setArtista] = useState('')
    const [idadeArtista, setIdadeArtista] = useState('')
    const [dataProducao, setDataProducao] = useState('')

    return (
        <>
            <input type="text"value={"oi"} onChange={"oi"} />
            <input type="text"value={"oi"} onChange={"oi"} />
            <input type="text"value={"oi"} onChange={"oi"} />
            <input type="text"value={"oi"} onChange={"oi"} />
            <input type="text"value={"oi"} onChange={"oi"} />
            <input type="text"value={"oi"} onChange={"oi"} />
        </>
    )
}

export default editar