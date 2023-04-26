import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import './search.css'
const SearchIcon = ({ srcPath }) => {
  const entry = (e) => {
    let keyCode = e.keyCode
    let keyValue = e.target.value
    if (keyCode === 13 && keyValue) {
      console.log(keyValue)
    }
  }
  let v = ''
  // let display = false

  const [display, setDisplay] = useState(false)

  const searchClick = () => {
    // let v = document.getElementById('searchInput').value
    setDisplay(!display)
    // display = !display
  }
  const onChange = (e) => {
    v = e.target.value
  }

  // return (
  //   <>
  //     <div className={display ? '' : 'as'}>
  //       <Input
  //         id="searchInput"
  //         placeholder="search everything"
  //         onChange={onChange}
  //         onKeyUp={entry}
  //       />
  //     </div>

  //     <Icon src={srcPath} onClick={searchClick} />
  //   </>
  // )
  return (
    <>
      {display ? (
        <Input
          id="searchInput"
          placeholder="search everything"
          onChange={onChange}
          onKeyUp={entry}
        />
      ) : (
        ''
      )}

      <Icon src={srcPath} onClick={searchClick} />
    </>
  )
}

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`

SearchIcon.propTypes = {
  srcPath: PropTypes.string,
}

export default SearchIcon
