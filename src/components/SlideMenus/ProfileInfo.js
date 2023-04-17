import styles from './slideMenu.module.scss'
import { Star } from '../svgs'
import { Log } from '../svgs'
import { Menu } from '../svgs'
export default function ProfileInfo({clicked}) {
    const profile_info=[
        {id:1,icon:Menu,text:"Profile Settings"},
        {id:2,icon:Star,text:"Create Fav Page"},
        {id:3,icon:Log,text:"Log Out"},
    ]
  return (
    <div className={`${ clicked?styles.profile_info:styles.not_visible}`}>
        <div className={styles.account}>
            <span>YOUR ACCOUNT</span>
        </div>
        {profile_info.map(p=>{return(
             <div key={p.id} className={styles.acc_info}>
                <p.icon className={styles.icon}/>
                <span>{p.text}</span>
             </div>
        )})}

    </div>
  )
}
