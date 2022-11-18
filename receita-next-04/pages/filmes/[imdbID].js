import useSWR from 'swr'
import { useRouter } from 'next/router'

export default function Movies2(){
    const router = useRouter();
    const { imdbID } = router.query;
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=8c3ab9c9&i=${imdbID}`, fetcher)    
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
      <div>
        <div>
          {data.Title} --- {data.Year} <br/> <img width="190px" src={data.Poster}></img>
        </div>
      </div>
    )
  }
  
async function fetcher(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}