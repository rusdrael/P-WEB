export default function Movies({data, error}){
    if (error) return (
        <div>Error</div>
    )
    if (data.Search) return (
        <div>
            <form>
                <label for="text">Title</label>
                <input id="text" name="text" type="text" />
                <input type="submit" value="Search" />
            </form>
            <div>
                { data.Search.map( (m) => <div>{m.Title} --- {m.Year} --- <img width="150px" src={m.Poster}/></div> )}               
            </div>
        </div>
    )
    return (<div>Sem resultados</div>)
}

export async function getServerSideProps(context){
    const { text } = context.query
    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=8c3ab9c9&s=${text}`)
        const data = await res.json()  
        return {
            props: {
                data
            }
        }
    } catch(err) {
        return {
            props: {
                error:`${err}`
            }
        }
    }
}