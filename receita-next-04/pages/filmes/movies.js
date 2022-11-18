import useSWR from 'swr'

export default function Movies2(){
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=8c3ab9c9&s=bagdad`, fetcher)    
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            { data.Search.map( (m) => <div><a key={m.imdbID} href={`/filmes/${m.imdbID}`}>{m.Title} --- {m.Year}</a></div>  ) }
        </div>
    )    
}

async function fetcher(url) {
    const res = await fetch(url)
    const json = await res.json()
    return json
}