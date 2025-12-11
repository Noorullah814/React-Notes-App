import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (

    <div className='h-screen lg:flex gap-1'>
      <div className='flex flex-col lg:w-1/2 m-5'>
        <h1 className='text-center text-3xl font-bold my-5'>Add Notes</h1>

      <div className='shadow-lg rounded-2xl p-6 border-2'>
        <form onSubmit={submitHandler}
          className='flex flex-col m-5'
        >
          <input type="text"
            placeholder='Enter Notes Heading'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            className='border-2 px-5 py-2 m-3 text-xs font-bold  '
          />
          <textarea type="text"
            placeholder='Write details here'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value)
            }}
            className='border-2 p-5 m-3 text-xs font-bold '
          />
          <button className='border-2 px-5 py-3 m-3 text-xl active:scale-95 bg-black text-white'
          >Add Notes</button>
        </form>
        </div>
      </div>
      <div className='flex flex-col gap-5 lg:border-l-2 lg:w-1/2 m-5 p-6'>
        <h1 className='flex text-4xl justify-center font-bold'>Racent Notes</h1>
        <div className='flex flex-wrap h-full overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className='w-70 h-80 bg-[url(https://media.istockphoto.com/id/185245773/photo/a-blank-black-noted-book-on-a-white-background.jpg?s=612x612&w=0&k=20&c=saLTbbLpwy6f11xF858ab1Uchrk4BJfUg9vPqhauRg0=)] bg-cover  p-10 flex flex-col justify-between hover:scale-105 transition duration-300'>
              <div className='flex flex-col gap-3'>
                <h1 className='leading-tight text-2xl font-bold text-white'>{elem.title}</h1>
                <p className='leading-tight text-sm text-gray-400'>{elem.details}</p></div>
              <button onClick={() => deleteNote(idx)}

                className='bg-red-700 w-full text-white font-bold rounded cursor-pointer active:scale-95'>Delete</button>
            </div>

          })}

        </div>

      </div>
    </div>
  )
}

export default App
