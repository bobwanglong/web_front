import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import './index.css'
const SearchIcon = ({ srcPath }) => {
  const entry = (e) => {
    let keyCode = e.keyCode
    let keyValue = e.target.value
    if (keyCode === 13 && keyValue) {
      console.log(keyValue)
    }
  }
  let v = ''
  let display = false
  const searchClick = () => {
    // let v = document.getElementById('searchInput').value
    console.log(display)
    display = !display
    console.log(v)
  }
  const onChange = (e) => {
    v = e.target.value
  }

  return (
    <>
      <div className={display ? 'as' : ''}>
        <Input
          id="searchInput"
          placeholder="search everything"
          onChange={onChange}
        />
      </div>

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
