// const Home = () => <div>this is home</div>
import { useNavigate } from 'react-router-dom'
const Home = () => {
  // 执行函数
  const navigate = useNavigate()
  return (
    <div>
      Home
      <button onClick={() => navigate('/about', { replace: true })}>
        跳转关于页
      </button>
    </div>
  )
}
export default Home
