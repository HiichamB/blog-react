import { useState, useEffect } from 'react'
const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error('Could not fetch data for that ressources')
          }
          return response.json()
        })
        .then((data) => {
          console.log(data)
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch((error) => {
          if (error.name === 'AbortError') {
            console.log('Fetch aborted')
          } else {
            setIsPending(false)
            setError(error.message)
          }
        })
    }, 1000)
    return () => abortCont.abort()
  }, [url])

  return { data, isPending, error }
}
export default useFetch
