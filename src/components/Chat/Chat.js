import styles from "./Chat.module.scss";
import Image from "next/image";
import F1 from '../../../public/images/f1.webp';
import F2 from '../../../public/images/f2.webp';
import F3 from '../../../public/images/f3.webp';
import F4 from '../../../public/images/f4.webp';
import F5 from '../../../public/images/f5.webp';
import F6 from '../../../public/images/f6.webp';
import { Close } from '../svgs'
import { Slider } from '../svgs'
import { Message } from "../svgs";
import { More } from "../svgs";
import { Menu } from '../svgs'
import { useState } from "react";
import { motion } from "framer-motion";


const friends=[
    {id:1,img:F1,name:"Carol Summers",state:"ONLINE"},
    {id:2,img:F2,name:"Mathilda Brinker",state:"AT WORK!"},
    {id:3,img:F3,name:"Michael Maximoff",state:"AWAY"},
    {id:4,img:F4,name:"Rachel Howlett",state:"ONLINE"},
    {id:5,img:F5,name:"Carol Summers",state:"OFFLINE"},
    {id:6,img:F6,name:"Michael Maximoff",state:"ONLINE"},
]
export default function Chat() {
    const [isOpen,setOpen]=useState(false);
    const toggle=()=>setOpen(!isOpen);
  return (
    <motion.div animate={{ width: isOpen ? "270px":"60px",
    transition: {
    duration: 0.5,
    type: "spring",
    damping: 10}}} className={styles.friends}>
        <div className={styles.con_menu} onClick={toggle}>
            {isOpen? <Close className={styles.menu_i}/> : <Menu className={styles.menu_i}/>}
        </div>  
        <div className={`${isOpen? styles.contain_chat:styles.hide_chat}`}>
        {isOpen && <div className={styles.c_friends}>
            <span className={styles.close}>CLOSE FRIENDS</span>
            <span className={styles.setting}>SETTINGS</span>
        </div>}
        {
            friends.map(f=>(
                <div key={f.id} className={styles.friend}>
                    <div className={styles.content}>
                        <Image src={f.img} alt="friend" className={styles.img}/>
                       {isOpen && <div className={styles.text}>
                            <p>{f.name}</p>
                            <span>{f.state}</span>
                        </div>}
                    </div>
                   {isOpen && <More className={styles.more}/>}
                </div>
            ))}
             {isOpen ?
             <div className={styles.search}>
                <input type="text" placeholder="Search Friends..."/>
                <div>
                    <Slider className={styles.icon}/>
                    <Close className={`${styles.icon} ${styles.close_i}`} onClick={toggle}/>
                </div>
            </div>:<Menu className={styles.menu} onClick={toggle}/>}
            <div className={styles.o_chat}>
                {isOpen && <h6>OLYMPUS CHAT</h6>}
                <Message className={styles.icon}/>
            </div>
    </div>    
      
    </motion.div>
  )
}
