import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Jumbotron from '../komponen/jumbotron'
import Login from '../pages/login'
import Cart from '../komponen/cart'


export default function Home() {
  return (
    <div>
      <Jumbotron/>
      <Cart/>
      <Login/>  
</div>
  )
}