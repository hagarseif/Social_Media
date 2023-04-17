import styles from "./slideMenu.module.scss";
import Image from "next/image";
import Not1 from "../../../public/images/m1.webp";
import Not2 from "../../../public/images/m2.webp";
import Not3 from "../../../public/images/m3.webp";
import Not4 from "../../../public/images/m4.webp";
import { Message } from "../svgs";

export default function SlideMenuMsg({clicked}) {
  const data = [
    {
      id: 1,
      imag: Not1,
      name: "Diana Jameson",
      textt:`Hi James! It’s Diana,
       I just wanted to let you
       know that we have to reschedule...`,
      common: "4 hours ago",
    },
    {
      id: 2,
      imag: Not2,
      name: "Jake Parker",
      textt: "Great, I’ll see you tomorrow!.",
      common: "4 hours ago",
    },
    {
      id: 3,
      imag: Not3,
      name: "Elaine Dreyfuss",
      textt:"We’ll have to check that at the office and see if the client is on board with...Yesterday at 9:56pm",
      common: "4 hours ago",
    },
    {
      id: 4,
      imag: Not4,
      name: "You, Faye, Ed & Jet +3",
      textt: `Ed: Yeah! Seems fine by 
        me!March 16th at 10:23am",common:"4 hours ago`,
      common: "4 hours ago",

    },
  ];
  return (
    <div className={`${ clicked?styles.msg:styles.not_visible}`}>
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
                    <h6>{d.name}</h6>
                    <span>{d.textt}</span>
                    <span>{d.common}</span>
                  </div>
                </div>
                <Message className={styles.icon} />
              </div>
            );
          })}
        </div>

        <div className={styles.event}>
          <span>View All Messages</span>
        </div>
      </div>
    </div>
  );
}
