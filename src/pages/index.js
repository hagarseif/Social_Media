import Head from "next/head"
import Navbar from "@/components/Navbar/Navbarb"
import Chat from "@/components/Chat/Chatb"
import Posts from "@/components/Posts/Postsb"
import Sidebar from "@/components/Sidebar/Sidebarb"
import Friends from "@/components/Friends/Friendsb"
import FavPage from "@/components/FavPage/FavPageb"
import SlideMenuSearch from "@/components/SlideMenus/SlideMenuSearchb"
export default function index() {
  return (
    <div>
        <Head>
            <title>Favorite Page</title>
        </Head>
        <Navbar/>
        <div className="b-container">
            <Sidebar/>
            <div className="main-posts">
                <Friends/>
                <Posts/>
                <FavPage/>
            </div>
            <Chat/>
        </div>

    </div>
  )
}
