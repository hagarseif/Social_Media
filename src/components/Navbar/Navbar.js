import React from 'react'
import styles from "./Navbar.module.scss";
import Image from 'next/image'
import { useState } from 'react';
import profile from "../../../public/images/profile.webp"
import {Close, Smile} from '../svgs/index'
import {Zap} from '../svgs/index'
import {Message} from '../svgs/index'
import { Search } from '../svgs/index';
import {Down} from '../svgs/index'
import SlideMenuSearch from '../SlideMenus/SlideMenuSearch';
import SlideMenuNotf from '../SlideMenus/SlideMenuNotf';
import SlideMenuMsg from '../SlideMenus/SlideMenuMsg';
import SlideMenuFriend from '../SlideMenus/SlideMenuFriend';
import ProfileInfo from '../SlideMenus/ProfileInfo';

function Navbar() {
   const [isClicked,setClick]=useState(false);
   const [clicked,setClickSearch]=useState(false);
   const [isClickedNotfic,setClickNotfic]=useState(false);
   const [isClickedMsg,setClickMsg]=useState(false);
   const [isClickedFriend,setClickFriend]=useState(false);
   const [isClickedInfo,setClickInfo]=useState(false);
   
   const handelNotfic=()=>{
       setClick(false)
       setClickMsg(false)
       setClickNotfic(!isClickedNotfic)
       setClickFriend(false)
       setClickInfo(false)
   }
   const handelSearch=()=>{
      setClick(!isClicked)
      setClickNotfic(false)
      setClickMsg(false)
      setClickFriend(false)
      setClickInfo(false)


  }
  const handelMsg=()=>{
   setClick(false)
   setClickNotfic(false)
   setClickMsg(!isClickedMsg)
   setClickFriend(false)
   setClickInfo(false)

}
const handelFriend=()=>{
   setClick(false)
   setClickNotfic(false)
   setClickMsg(false)
   setClickFriend(!isClickedFriend)
   setClickInfo(false)
}
const handelInfo=()=>{
   setClick(false)
   setClickNotfic(false)
   setClickMsg(false)
   setClickFriend(false)
   setClickInfo(!isClickedInfo)

}
  return (
   <div>
       <div className={styles.nav}>
         <div className={styles.fav}>
            <h5>FAV PAGES FEED</h5>   
         </div>
         <div className={`${clicked? styles.input_nav:styles.input}`} onClick={handelSearch}>
            <input type="text" placeholder='Search here people or pages' onClick={handelSearch}/>
            <Search className={styles.search}/>
         </div>
         <a href="#" className={styles.link}>Find Friends</a>
         <div className={styles.icons}>
            <div className={`${isClickedNotfic?styles.icon_num_c : styles.icon_num}`} onClick={handelNotfic}>
               <Smile className={`${styles.icon}`}/>
               <p className={styles.profile}>6</p>
            </div>
            <div className={`${isClickedMsg?styles.icon_num_c : styles.icon_num}`} onClick={handelMsg}>
               <Message className={`${styles.icon}`}/>
               <p className={styles.message}>2</p>
            </div>
            <div className={`${isClickedFriend?styles.icon_num_c : styles.icon_num}`} onClick={handelFriend}>
               <Zap className={`${styles.icon}`}/>
               <p className={styles.notification}>8</p>
            </div>
            {clicked?<Close className={styles.search_i} onClick={()=>setClickSearch(!clicked)}/> : <Search className={styles.search_i} onClick={()=>setClickSearch(!clicked)}/>}

         </div>
         <div className={styles.profile_info}>
            <Image src={profile} alt='profile pic' className={styles.img} onClick={handelInfo}/>
            <div className={styles.text}>
               <p>James Spiegel</p>
               <span>SPACE COWBOY</span>
            </div>
            <Down className={styles.icon}/>
         </div>
    </div>
    <SlideMenuSearch clicked={isClicked}/>
    <SlideMenuNotf clicked={isClickedNotfic}/>
    <SlideMenuMsg clicked={isClickedMsg}/>
    <SlideMenuFriend clicked={isClickedFriend}/>
    <ProfileInfo clicked={isClickedInfo}/>
   </div>
   
  )
}

export default Navbar