import useSWR from 'swr'

export default function Location(){
    const {data, error} = useSWR(`https://extreme-ip-lookup.com/json/?key=wkAcwhJK49usEYmQQGMj`, fetcher)
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>
    return (
        <div>
            {Object.keys(data).map(dados => (
                <div>
                    <p>
                        <b>{dados}: </b>
                        {data[dados]}
                    </p>
                </div>    
            ))}
        </div>
    )    
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}