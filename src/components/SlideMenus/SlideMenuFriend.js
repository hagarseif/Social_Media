import styles from './slideMenu.module.scss'
import Image from 'next/image'
import Not1 from '../../../public/images/not1.webp'
import Not2 from '../../../public/images/not2.webp'
import Not3 from '../../../public/images/not3.webp'
import Not4 from '../../../public/images/p2.webp'
import { Smile } from "../svgs"
import { Message } from '../svgs'
export default function SlideMenuFriend({clicked}) {
    const data = [
        {
          id: 1,
          imag: Not1,
          name: "Mathilda Brinker ",
          textt:`commented on your new profile status.`,
          common: "4 hours ago",
          icon:Message
        },
        {
          id: 2,
          imag: Not2,
          name: "you and Nicholas Grissom",
          textt: " just became friends. Write on his wall.",
          common: "4 hours ago",
          icon:Smile

        },
        {
          id: 3,
          imag: Not3,
          name: "Sarah Hetfield",
          textt:" commented on your photo.",
          common: "Yesterday at 5:32am",
          icon:Message

        },
        {
          id: 4,
          imag: Not4,
          name: "Green Goo Rock",
          textt: ` invited you to attend to his event Goo in Gotham Bar.`,
          common: "March 5th at 6:43pm",
          icon:Smile
    
        },
      ];
      return (
        <div className={`${ clicked?styles.friend:styles.not_visible}`}>
          <div className={styles.all_not}>
            <div className={styles.text}>
              <span>CHAT / MESSAGES</span>
              <div>
                <span>SETTINGS</span>
                <span>MARK ALL AS READ</span>
              </div>
            </div>
            <div className={styles.contain}>
              {data.map((d) => {
                return (
                  <div key={d.id} className={styles.search}>
                    <div className={styles.img_text}>
                      <Image
                        src={d.imag}
                        alt="friend/page"
                        className={styles.img}
                      />
                      <div className={styles.name}>
                        <h6>{d.name}
                        <span>{ d.textt}</span>
                        </h6>
                        <span>{d.common}</span>
                      </div>
                    </div>
                    <d.icon className={styles.icon} />
                  </div>
                );
              })}
            </div>
    
            <div className={styles.event}>
              <span>View All Notification</span>
            </div>
          </div>
        </div>
      );
}
