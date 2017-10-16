import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';

const styles = {
  navCon: {
      backgroundColor: '#343434',
  },

}

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if(user.id) {
      return(
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            style={{color:'white'}}
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    } else {
      return(
        <Menu.Menu position='right'>
          <Link to='/register'>
            <Menu.Item name='Register'
            style={{color:'white'}}
             />
          </Link>
          <Link to='/login'>
            <Menu.Item name='Login'
            style={{color:'white'}}
             />
          </Link>
        </Menu.Menu>
      );
    }
  }

  render() {
    return (
      <div style = {styles.navCon}>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home'
            style={{color:'white'}}
             />
          </Link>
          <Link to='/services'>
            <Menu.Item name='Services'
            style={{color:'white'}}
             />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
