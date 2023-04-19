import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Board = () => <div>this is board</div>
const Article = () => <div>this is Article</div>
const Layout = () => {
  return (
    <div>
      <div>layout</div>
      <div>
        <Link to="/board">board</Link>
      </div>
      <Link to="/article">article</Link>
      <Outlet />
    </div>
  )
}
export default Layout
