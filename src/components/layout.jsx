import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return <>
        <NavBar />
            <main>
                <Outlet />
            </main>
        <Footer />
    </>
}
export default Layout