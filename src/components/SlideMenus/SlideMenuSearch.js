import styles from "./slideMenu.module.scss"
import Avatar1 from '../../../public/images/avatar1.webp'
import Avatar2 from '../../../public/images/avatar2.jpg'
import Avatar3 from '../../../public/images/avatar3.jpg'
import Avatar4 from '../../../public/images/avatar4.jpg'
import Avatar5 from '../../../public/images/avatar5.jpg'
import { Smile } from "../svgs"
import Image from "next/image"
export default function SlideMenuSearch({clicked}) {
    const data=[
        {id:1,imag:Avatar1,name:"Marie Davidson",common:"4 Friends in Common"},
        {id:2,imag:Avatar2,name:"Marie Claire Stevens",common:"12 Friends in Common"},
        {id:3,imag:Avatar3,name:"Ann Marie Gibson",common:"New York, NY"},
        {id:4,imag:Avatar4,name:"The Marina Bar",common:"Restaurant / Bar"},
        {id:5,imag:Avatar5,name:"Dave Marinara",common:"8 Friends in Common"},
    ]
  return (
    <div className={styles.main_search}>
        {data.map(d=>{return(
          <div key={d.id} className={`${ clicked?styles.search:styles.not_visible}`}>
            <div className={styles.img_text}>
              <Image src={d.imag} alt="friend/page" className={styles.img}/>
              <div>
                <h6>{d.name}</h6>
                <span>{d.common}</span>
              </div>
            </div>
            <Smile className={styles.icon}/>
          </div>)})}
    </div>
  )
}
