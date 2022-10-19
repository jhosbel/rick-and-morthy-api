import {useEffect, useState} from 'react'

const Characters = () => {

    const [character, setCharacter] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json()
            setCharacter(data.results)
        }
        fetchData()
    }, [page])

  return (
    <div className='container'>
        <h1 className='text-center display-1 py-4'>Personajes</h1>
        <h3 className='text-center'>Pagina: {page}</h3>
        <div className='d-flex justify-content-between align-items-center'>
            <button className='btn btn-primary my-3' onClick={() => setPage(page - 1)} disabled={page === 1}>Anterior</button>
            <button className='btn btn-primary my-3' onClick={() => setPage(page + 1)} disabled={page === 42}>Siguiente</button>
        </div>
        <div className='row row-cols-4 d-flex justify-content-center'>
                {
                    character.map(character => {
                        return(
                            <div className='card-container ' key={character.id}>
                                <div className='overflow'>
                                    <img className='card-img-top' src={character.image} alt={character.name} />
                                </div>
                                <div className='card-body'>
                                    <h3>{character.name}</h3>
                                    <p>{character.species}</p>
                                    <p>{character.origin.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <button className='btn btn-primary my-3' onClick={() => setPage(page -1)} disabled={page === 1}>Anterior</button>
                <button className='btn btn-primary my-3' onClick={() => setPage(page +1)} disabled={page === 42}>Siguiente</button>
            </div>
        
    </div>
  )
}


export default Characters