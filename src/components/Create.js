import { useState } from 'react'
import { useHistory } from 'react-router-dom'
const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Hicham')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false)
      console.log('New blog Added', JSON.stringify(blog))
      history.push('/')
    })
  }
  return (
    <div className="create">
      <h2>Create new Blog</h2>
      <form onSubmit={handleSubmit}>
        <lable>Blog Title : </lable>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <lable>Blog Content : </lable>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value)
          }}
        ></textarea>
        <lable>Blog Author: : </lable>
        <select
          name=""
          id=""
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
        >
          <option value="Hicham"> Hicham</option>
          <option value="Adam"> Adam</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  )
}

export default Create
