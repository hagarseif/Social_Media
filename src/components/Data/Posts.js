import Img1 from '../../../public/images/profile.webp'
import Img2 from '../../../public/images/p2.webp'
import Img3 from '../../../public/images/f2.webp'
import Img4 from '../../../public/images/blue.webp'
import Img5 from '../../../public/images/green.webp'
import Content1 from '../../../public/images/pic1.webp'
import Content2 from '../../../public/images/pic2.webp'
import Content3 from '../../../public/images/pic3.webp'
import Content4 from '../../../public/images/pic4.webp'
import Content5 from '../../../public/images/pic5.webp'
import Content6 from '../../../public/images/thumb1.webp'

export const posts=[
   {id:1 ,
    p_img:Img1,
    name:" James Spiegel",
    time:"7 hours ago",
    text:"Check out the video of our photoshoot from the other day:",
    content:"",
    video:'./post.mp4',
    likes:15,
    Comments:5,
    share:3
    },
    {id:2 ,
    p_img:Img2,
    name:" Tapronus Rock",
    time:"54 mins ago",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.",
    content:"",
    video:"",
    likes:24,
    Comments:17,
    share:6
    },
    {id:3,
    p_img:Img4,
    name:"Blue Whale Pizzas",
    time:"5 hours ago",
    text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia erunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    content:[Content2,Content3,Content4,Content5],
    video:"",
    likes:16,
    Comments:7,
    share:4
    },
    {id:4,
        p_img:Img5,
        name:"Green Goo Rock",
        time:"March 8 at 6:42pm",
        text:"Hey guys! We are gona be playing this Saturday of The Marina Bar for their new Mystic Deer Party. If you wanna hang out and have a really good time, come and join us. We’l be waiting for you!",
        content:[Content6],
        video:"",
        likes:30,
        Comments:7,
        share:14
        },
]