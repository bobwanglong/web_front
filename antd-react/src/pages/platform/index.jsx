import React from 'react'
import PropTypes from 'prop-types' // 需要pnpm add
// 参考：https://juejin.cn/post/7161217143726407716
const PlatForm = (props) => {
  return (
    <div>
      <span>platName:{props.name}</span>
      <span>platAge:{props.age}</span>
    </div>
  )
}

PlatForm.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}

export default PlatForm
