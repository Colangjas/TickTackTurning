import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class Template extends Component {

  render() {
    return (
<MuiThemeProvider>
      <div>
        <header>
          <h1>TicTacTuring</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
</MuiThemeProvider>
    )
  }
}

export default Template