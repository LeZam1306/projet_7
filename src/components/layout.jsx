import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"

const Layout = ({children}) => {
    return <>
        <NavBar />
            {children}
        <Footer />
    </>
}
export default Layout