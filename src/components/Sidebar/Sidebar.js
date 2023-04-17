import React from 'react'
import styles from "./Sidebar.module.scss"
import { Menu } from '../svgs'
import { File } from '../svgs'
import { Star } from '../svgs'
import { Smile } from '../svgs'
import { Award } from '../svgs'
import { HeadPhone } from '../svgs'
import { Cloud } from '../svgs'
import { Calender } from '../svgs'
import { Gift } from '../svgs'
import { Activity } from '../svgs'
import Image from 'next/image'
import logo from "../../../public/images/logo.webp"
import Link from 'next/link'
import { Close } from '../svgs'
import {useState} from 'react'
import {motion } from 'framer-motion'

function Sidebar() {

    const [isOpen,setOpen]=useState(false);
    const toggle=()=>setOpen(!isOpen);

    const iconData=[
        {id:2,icon:File,link:"Newsfeed"},
        {id:3,icon:Star,link:"Fav Pages Feed"},
        {id:4,icon:Smile,link:"Friend Groups"},
        {id:5,icon:HeadPhone,link:"Music & Playlists"},
        {id:6,icon:Cloud,link:"Weather App"},
        {id:7,icon:Calender,link:"Calendar and Events"},
        {id:8,icon:Award,link:"Community Badges"},
        {id:9,icon:Gift,link:"Friends Birthdays"},
        {id:10,icon:Activity,link:"Account Stats"},
    ]
  return (
        <motion.div className={styles.Sidebar} animate={{width: isOpen? "270px": "65px",
        transition: {
        duration: 0.5,
        type: "spring",
        damping: 10}}}>
            <div className={styles.img} onClick={toggle}>
                <Image src={logo} alt="logo"/>
                {isOpen && <h6>OLYMPUS</h6>}
            </div>
        <div className={`${isOpen? styles.all_icon:styles.hide_icon}`}>
        <Link href="/" className={styles.container} onClick={toggle}>
                       {isOpen? <Close className={styles.icon} />:<Menu className={styles.icon}/>} 
                        {isOpen && <span>Collapse Menu</span>}
            </Link>
            {
                iconData.map(i=>(
                    <Link href="/" className={styles.container} key={i.id}>
                        <i.icon className={styles.icon}/>
                        {isOpen && <span >{i.link}</span>}
                        
                   </Link>
                ))
            }
        </div>    
            
        </motion.div>
  )
}

export default Sidebar