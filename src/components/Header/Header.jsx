import { BsFacebook ,BsWhatsapp,BsLinkedin,BsGithub } from "react-icons/bs";
import styles from './Header.module.scss'

export default function Header() {
     return(

            <>
            <div className={styles.header}> 
                <div className={styles.profile}> 
                    <div className={styles.profileInfo}>                  
                        <div className={styles.imgProfile} />

                        <div className={styles.profileName}>
                            <h1 className={styles.h1}>Dayvid Nunes   </h1>
                            <h2 className={styles.h2}><i>Web Developer</i></h2>
                            <div className={styles.socialMedia}>
                             <a href="https://www.facebook.com/dayvidlucas/" target="_blank" rel="noreferrer"> <BsFacebook color= "#fff"size="2em" /> </a>
                             <a href="https://wa.me/5524998421993" target="_blank" rel="noreferrer">  <BsWhatsapp color= "#fff"size="2em" /> </a>
                             <a href="https://www.linkedin.com/in/dayvid-nunes-6aa4a0114/" target="_blank" rel="noreferrer"> <BsLinkedin color= "#fff"size="2em" /> </a>
                             <a href="https://www.linkedin.com/in/dayvid-nunes-6aa4a0114/" target="_blank" rel="noreferrer"> <BsGithub color= "#fff"size="2em" /> </a>
                            </div>
                            
                        </div>
                    </div>
                </div>             
            </div>               
       
            </>
             
    )

}


