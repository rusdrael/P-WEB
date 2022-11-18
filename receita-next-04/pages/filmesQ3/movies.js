export default function Movies({ data }){
    return (
        <div>
            { data.Search.map( (m) => <div><a key={m.imdbID} href={`/filmesQ3/${m.imdbID}`}>{m.Title} --- {m.Year}</a></div>  ) }
        </div>
    )    
}

export async function getServerSideProps(context){
    const res = await fetch(`http://www.omdbapi.com/?apikey=8c3ab9c9&s=bagdad`)
    const data = await res.json()  
    return {
        props: {
            data
        }
    }
}