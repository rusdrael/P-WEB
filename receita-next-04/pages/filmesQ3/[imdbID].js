export default function Movies({ data }){
  return (
    <div>
      <div>
        {data.Title} --- {data.Year} <br/> <img width="190px" src={data.Poster}></img>        
      </div>
    </div>
  )
}
  
export async function getServerSideProps(context){
  const { imdbID } = context.query
  const res = await fetch(`http://www.omdbapi.com/?apikey=8c3ab9c9&i=${imdbID}`)
  const data = await res.json()  
  return {
    props: {
      data
    }
  }
} 