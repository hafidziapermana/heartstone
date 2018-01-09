import React from 'react'

import Wrapper from '../template/Wrapper.js'
import LogoHeartstone from '../../assets/image/logo.png'

const NavBar = props => (
  <div className="navbar">
    <Wrapper className='flex-wrap-nav'>  
      <Logo />
      <Space />
      <SearchBar />
      <Button>Category</Button>
    </Wrapper>
  </div>
  )

const Logo = props => (
  <div className='logo'>
    <img src={LogoHeartstone} alt=""/>
  </div>
  )

const SearchBar = props => (
  <div className='searchbar'>
    <input type="text"/>
  </div>
  )
  
const Button = props => (
  <div className='btn-category'>
    <button>
      {props.children}
    </button>
  </div>
  )
  
const Space = props => (
  <div className='space'></div>
  )
  
export default NavBar