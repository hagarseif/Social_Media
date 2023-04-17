import styles from "./Posts.module.scss";
import Image from "next/image";
import Img1 from "../../../public/images/profile.webp";
import Pic1 from "../../../public/images/pic1.webp"
import { Star } from "../svgs";
import { More } from "../svgs";
import { Like } from "../svgs";
import { Comment } from "../svgs";
import { Share } from "../svgs";
import ReactPlayer from "react-player/lazy";
import { useState,useEffect } from "react";
// import Gif from "../../../public/images/post.mp4"


export default function Posts() {

    const [all_posts,setPost]=useState([]);

    const fetchPosts=async ()=>{
        const response=await fetch("/api/posts")
        const data= await response.json();
        setPost(data)
    }
    useEffect(()=>{
        fetchPosts()
    })
   
  return (
    <div className={styles.posts}>
      <div className={styles.share}>
        <div className={styles.icon}>
          <Star className={styles.star} />
        </div>
        <p>Here you’ll see the recent updates of your Fav Pages</p>
      </div>
      {/* posts */}
      
      { 
        
        all_posts.map(p=>{
            return(
            <div key={p.id} className={styles.post}>
            <div className={styles.p_name}>
              <div className={styles.info}>
                <Image src={p.p_img} alt="post" className={styles.img}/>
                <div className={styles.text}>
                    <h6> {p.name}</h6>
                    <span>{p.time}</span>
                </div>
                
              </div>
              <div className={styles.more_menu}>
                 <More className={styles.more} />
                 <div className={styles.menu}>
                    <ul>
                        <li>Edit Post</li>
                        <li>Delete Post</li>
                        <li>Turn Off Notifications</li>
                        <li>Select as Featured</li>
                    </ul>
                 </div>
              </div>
              
            </div>
            <p>{p.text}</p>
                {/* <div className={styles.imgs}> */}
                {p.content==="" ? null : p.content.map((i,index)=>{
                    return(<Image key={index} src={i} alt="pic" 
                    className={`${p.content.length >1? styles.content : styles.m_content}`}/>
                    )})}
                     {p.video==="" ? null : 
                        <video  controls  className={`${p.content.length >1? styles.content : styles.m_content}`}>
                          <source src={p.video} type="video/mp4" />
                        </video>
                    }
                   
                {/* </div> */}
          
            <div className={styles.reacts}>
                <div className={styles.likes}>
                    <Like className={styles.icon}/>
                    <span>{p.likes}</span>
                </div>
                <div className={styles.comm_share}>
                    <div className={styles.comment}>
                        <Comment className={styles.icon}/>
                        <span>{p.Comments}</span>
                    </div>
                    <div className={styles.share_icon}>
                        <Share className={styles.icon} />
                        <span>{p.share}</span>
                    </div>
                </div>
            </div>
           
          </div>
        )})
    }
    </div>
  );
}