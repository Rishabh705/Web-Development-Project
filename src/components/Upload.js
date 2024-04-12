import * as React from 'react';
import { styled } from '@mui/material/styles';
import '../styles/Upload.css'

export default function Upload() {
  const [image, setImage] = React.useState('')
  const [status, setStatus] = React.useState(false)

  const handleChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append('uploaded-image', image)
      const response = await fetch('http://localhost:3500/post-image', {
        method: 'POST',
        body: formData
      })

      // Set the status based on the response from the API route

      if (response.status === 200) {
        //after successful upload, clear input form
        setImage((prev) => {
          prev = ''
        })

        setStatus(prev => prev = true);

      }
      else {

        setStatus(prev => prev = false);

      }

    } catch (e) {
      console.log(e)
    }

  }

  const handleResult = (e) =>{
    e.preventDefault()
  }

  return (
    <form className='upload'>
      <input type="file" name="uploaded-image" id="upld" accept='.jpg, .png, .jpeg' onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleResult}>Identify</button>
    </form>
  )
}
