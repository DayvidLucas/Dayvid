import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/Header.jsx'
import NewAcordion from '../components/Acordion/newacordion'


export default function Home() {


  return(

    <div className ='containerApp'>
      <Header id='Header'/>
      <div className='container'>
        <NewAcordion />
      </div>
      

    </div>
  )

}

