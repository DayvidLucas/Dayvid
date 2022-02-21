
import { FaUserGraduate } from "react-icons/fa";
import styles from '../Acordion/Acordion.module.scss'


  export default function NewAcordion(props){
    return (

      <div className={styles.container}> 

        <div className={styles.row}>
         <FaUserGraduate color= "#fff"size="2em" />       <h1>Graduação</h1> 
     
        </div>
        <hr />


      </div>

    )

  }

  