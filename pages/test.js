import React from 'react'

const Test = () => {

    async function getUsers(){
const response = await fetch("https://waste-want.herokuapp.com/users")
const data =  await response.json()
console.log(data)
return data[0]
    }
  return (
    <div>
    <p>{getUsers()[0]}</p>
    </div>
  )
}

export default Test