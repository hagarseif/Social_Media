import styles from './FavPage.module.scss';
import Image from 'next/image';
import fav1 from "../../../public/images/p1.webp"
import fav2 from "../../../public/images/p2.webp"
import fav3 from "../../../public/images/p3.webp"
import fav4 from "../../../public/images/p4.webp"
import fav5 from "../../../public/images/p5.webp"
import fav6 from "../../../public/images/p6.webp"
import fav7 from "../../../public/images/p7.webp"
import fav8 from "../../../public/images/p8.webp"
import fav9 from "../../../public/images/p9.webp"
import { Star } from "../svgs";
import { More } from "../svgs";

export default function FavPage() {
    const imgs=[
        fav1,
        fav2,
        fav9,
        fav3,
        fav4,
        fav9,
        fav5,
        fav9,
        fav2,
        fav6,
        fav7,
        fav4,
        fav8,
        fav9
    ]
  return (
    <div className={styles.fav_page}>
        <div className={styles.fav}>
            <div className={styles.icons}>
                <Star className={styles.icon}/>
                <More className={styles.icon}/>
            </div>
            <div className={styles.text}>
                <span>Be like them and</span>
                <h3>Create your own Favourite Page!</h3>
                <button>Start Now!</button>
            </div>
        </div>
        <div className={styles.pages}>
            <div className={styles.f_page}>
                <h6>Your Fav Pages ({imgs.length + 15})</h6>
                <More className={styles.more}/>
            </div>
            <div className={styles.page_fav}>
                {imgs.map(i=> {return(<Image src={i} alt="fav page" className={styles.img}/>)})}
                <div className={styles.plus}>+15</div>
            </div>
        </div>
    </div>
  )
}
