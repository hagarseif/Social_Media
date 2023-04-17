import styles from './Friends.module.scss'
import { More } from "../svgs";
import { Smile } from '../svgs';
import { Star } from '../svgs';
import Image from 'next/image';
import Fs1 from '../../../public/images/fs1.webp'
import Fs2 from '../../../public/images/fs2.webp'
import Fs3 from '../../../public/images/fs3.webp'
import P1 from "../../../public/images/p1.webp"
import P2 from "../../../public/images/p2.webp"
import P3 from "../../../public/images/p3.webp"
import P4 from "../../../public/images/p4.webp"
import P5 from "../../../public/images/p5.webp"
import P6 from "../../../public/images/p6.webp"


export default function Friends(){
    const friends=[
        {id:1,img:Fs1,name:"Francine Smith",f_num:"8 Friends in Common"},
        {id:2,img:Fs2,name:"Hugh Wilson",f_num:"6 Friends in Common"},
        {id:3,img:Fs3,name:"Karen Masters",f_num:"9 Friends in Common"},
      ]
      const Pages=[
        {id:1,img:P1,name:"The Marina Bar",f_num:"Restaurant / Bar"},
        {id:2,img:P2,name:"Tapronus Rock",f_num:"Rock Band"},
        {id:3,img:P3,name:"Pixel Digital Design",f_num:"Company"},
        {id:4,img:P4,name:"Thompson’s Custom Clothing Boutique",f_num:"Clothing Store"},
        {id:5,img:P5,name:"Crimson Agency",f_num:"Company"},
        {id:6,img:P6,name:"Mannequin Angel",f_num:"Clothing Store"},

      ]
    return(
       
            <div className={styles.friend_page}>
                <div className={styles.friend}>
                    <div className={styles.suggestion}>
                        <h6>Friend Suggestions</h6>
                        <More className={styles.icon}/>
                    </div>

                    {friends.map(f=>(<div key={f.id} className={styles.f_common}>
                        <Image src={f.img} alt='friend' className={styles.img}/>
                        <div className={styles.text}>
                            <h6>{f.name}</h6>
                            <span>{f.f_num}</span>
                        </div>
                        <Smile className={styles.icon}/>
                    </div>))}
                </div>
                <div className={styles.friend}>
                    <div className={styles.suggestion}>
                        <h6>Pages You May Like</h6>
                        <More className={styles.icon}/>
                    </div>
                    {Pages.map(f=>(<div key={f.id} className={styles.f_common}>
                        <Image src={f.img} alt='friend' className={styles.img}/>
                        <div className={styles.text}>
                            <h6>{f.name}</h6>
                            <span>{f.f_num}</span>
                        </div>
                        <Star className={styles.star}/>
                    </div>))}
                </div>
            </div>
      
    )
}