import styles from './slideMenu.module.scss'
import Image from 'next/image'
import Not1 from '../../../public/images/not1.webp'
import Not2 from '../../../public/images/not2.webp'
import Not3 from '../../../public/images/not3.webp'
import Not4 from '../../../public/images/p2.webp'
import { Smile } from "../svgs"

export default function SlideMenuNotf({clicked}) {
    const data=[
        {id:1,imag:Not1,name:"Tamara Romanoff",common:"Mutual Friend: Sarah Hetfield"},
        {id:2,imag:Not2,name:"Marie Claire Stevens",common:"4 Friends in Common"},
        {id:3,imag:Not3,name:"Tony Stevens",common:"New York, NY"},
        {id:4,imag:Not4,name:"Stagg Clothing",common:"9 Friends in Common"},
    ]
  return (
    <div className={`${ clicked?styles.notf:styles.not_visible}`}>
        <div className={styles.all_not}>
        <div className={styles.text}>
            <span>FRIEND REQUESTS</span>
            <div>
                <span>FIND FRIENDS</span>
                <span>SETTINGS</span>
            </div>
        </div>
        <div className={styles.contain}>
        {data.map(d=>{return(
        <div key={d.id} className={styles.search}>
            <div className={styles.img_text}>
              <Image src={d.imag} alt="friend/page" className={styles.img}/>
              <div>
                <h6>{d.name}</h6>
                <span>{d.common}</span>
              </div>
            </div>
            <div className={styles.con_icon}>
            <Smile className={styles.icon}/>
            </div>
            
          </div>)})}
        </div>
       
          <div className={styles.event}> 
            <span>Check all your Events</span>
          </div>
        </div>
     
       
        </div>
  )
}
