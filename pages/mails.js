import useSWR from 'swr'
import React from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Mails({mails}) {
    const { data, error } = useSWR('/api/mails', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
    <ul>
      {data.map((p, i) => (
        <div key={i}>{JSON.stringify(p)}</div>
      ))}
    </ul>
    )
}

export default Mails