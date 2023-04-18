import { useWindowScroll } from './hooksScroll'
const CusApp = () => {
  const [y] = useWindowScroll()

  return (
    <div style={{ height: '1000px', width: '100px' }}>滑动的距离是:{y}</div>
  )
}
export default CusApp