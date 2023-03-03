import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div>{children}</div>
        <h2>hello</h2>
    </div>
  )
}

export default Layout