import { useState} from 'react'

function Chapters() {

    const [chapter, setChapter] = useState([])
    const [page, setPage] = useState(1)

    async function fetchData() {
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
        const data = await response.json()
        setChapter(data.results)
    }
    fetchData()
  return (
    <div className='container'>
        <h1 className='text-center display-1 py-4'>Episodios</h1>
        <h3 className='text-center'>Pagina: {page}</h3>
        <div className='d-flex justify-content-between align-items-center'>
            <button className='btn btn-primary my-3' onClick={() => setPage(page - 1)} disabled={page === 1}>Anterior</button>
            <button className='btn btn-primary my-3' onClick={() => setPage(page + 1)} disabled={page === 42}>Siguiente</button>
        </div>
        <div className='row d-flex justify-content-center'>
                {
                    chapter.map(chapter => {
                        return(
                            <div className='card-container chapter' key={chapter.id}>
                                <ul className='listChapter'>
                                    <li className='chapterTitle'><h3>{chapter.name}</h3></li>
                                    <li className='chapterEp'>{chapter.episode}</li>
                                    <li className='chapterEp'>{chapter.air_date}</li>
                                    <li className='chapterEp'>{chapter.id}</li>
                                </ul>
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

export default Chapters