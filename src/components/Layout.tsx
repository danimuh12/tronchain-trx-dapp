import Navbar from "./Navbar"
import Footer from "./Footer"


const Layout = ({ children }: any) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout