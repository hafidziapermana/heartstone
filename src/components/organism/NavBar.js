import React from 'react'

import Wrapper from '../template/Wrapper.js'
import LogoHeartstone from '../../assets/image/logo.png'
import { FormControl, FormGroup, Button } from 'react-bootstrap'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isHidden: true
    }
  }

  toggleHidden = (e) => {
    e.preventDefault();
    this.setState({ isHidden: !this.state.isHidden })
  }

  render() {
    return(
      <div className="nav-bar">
        <Wrapper>
          <div className="flex-nav">
            <Logo />
            <Space />
            <SearchBar />
            <DropDownButton toggleHidden={this.toggleHidden} isHidden={this.state.isHidden}/>
          </div>
        </Wrapper>
      </div>
      )
  }
}

const Logo = props => 
  <div className='logo'>
    <img src={LogoHeartstone} alt=""/>
  </div>

const SearchBar = props => 
  <div className='searchbar'>
    <form>
      <FormGroup bsSize="small">
        <FormControl className='formcontrol' type="text" placeholder="Search.." />
      </FormGroup>
    </form>
  </div>

const DropDownButton = props => 
  <div className="dropdown-btn" >
    <button onClick={props.toggleHidden}>Category</button>
    {!props.isHidden && <DropDownMenu />}
  </div>

const DropDownMenu = props =>
  <div className="dropdownmenu" >
    <ul>
      <li>Card Sets<span>-</span></li>
      <li>Guides</li>
      <li>Adventure</li>
      <li>Forum</li>
      <li>Newss</li>
      <li>Heroes </li>
    </ul>
  </div>
  
const Space = props => 
  <div className='space'></div>
  
export default NavBar