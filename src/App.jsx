import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'

function App() {

  const actors = ['sakib', 'raj', 'deb', 'jasim','riyaj']

  const singers = [
    {name: 'Dr Mahfuzur Rahman'}
  ]
  return (
    <>
      <h3>Vite + React</h3>
      <Actor name={'Bapparaj'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Device name="laptop" price ='90k' ></Device>
      <Device name="mobile" price ='30k'></Device>
      <Device name="watch" price ='8k'></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <DeveloperInline></DeveloperInline> */}
      {/* <Todo
        task="Learn React"
        isDOne={true}></Todo>
      <Todo
        task="Learn Core Concept"
        isDOne={false}></Todo>
      <Todo
        task="Try JSX"
        isDOne={true}></Todo> */}
    </>
  )
}


function Device({ name, price }) {
  console.log(name, price)
  return <h2>This device: {name} and Price: {price}</h2>
}
function Person() {
  const age = 23;
  const money = 20;
  const person = { name: 'Asa', proffession: 'student' }
  return <h3>I am a {person.name} with age: {age + money}</h3>
}

function Student() {
  return (
    <div className='student'>
      <h1>I am student</h1>
      <p>I am from bangladesh</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    color: 'purple',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h2>Hey!</h2>
      <p>Welcome Here!</p>
    </div>
  )
}

function DeveloperInline() {
  return (
    <div style={{
      color: 'red',
      margin: '20px',
      padding: '20px',
      borderRadius: '20px'
    }}>
      <h2>Hey!</h2>
      <p>Welcome Here!</p>
    </div>
  )
}

export default App
