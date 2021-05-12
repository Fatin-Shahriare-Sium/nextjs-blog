import NavBar from "./navbar"

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout;
