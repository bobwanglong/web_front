import { useRef } from 'react'

const refCounter = () => {
  let ref = useRef(0)
  function handleClick() {
    ref.current = ref.current + 1
    alert('你点击了' + ref.current + '次')
  }
  return (
    <div className="flex">
      <button
        className=" hover:text-white  bg-gray-400
      "
        onClick={handleClick}>
        点击我
      </button>
    </div>
  )
}

export default refCounter
