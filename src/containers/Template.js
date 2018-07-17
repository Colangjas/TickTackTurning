import React, {Component} from 'react'

class template extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1>TicTacTurning</h1>
                </header>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default template