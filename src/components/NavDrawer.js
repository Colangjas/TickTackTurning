import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router'
import {NavToggleButton} from '../styled/NavDrawer'

class NavDrawer extends Component {
    state = {
        open: true,
        close: false
    }

    toggle = () => {
        this.setState((prevState, props) => {
            return{
                close: !prevState.close
            }

        })
    }
    render(){
        return(
            <div>
                <NavToggleButton
                toggle={this.toggle}
                width={this.state.width}
                close={this.state.close}
                />
                <Drawer
                open={this.state.close}
                width={this.state.width}
                >

                    <div
                    style={{
                        height: '200px',
                        width: '100%',
                        background: '#6dfcfc'
                    }}>
                    Login Area
                    </div>
                    <Divider />
                <Link to={'/'}>
                    <MenuItem 
                    onTouchTap={this.toggle}
                        primaryText={'Play'}
                        />
                </Link>
                <Link to={'/profile'}>
                    <MenuItem 
                    onTouchTap={this.toggle}
                        primaryText={'Profile'}
                        />
                </Link>
                </Drawer>
            </div>
        )
    }
}

export default NavDrawer