import React, {Component} from 'react'
import {Stage} from 'react-konva'

class TicTacToe extends Component {

  state = {

  }
  
  componentWillMount() {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows

    this.setState({
      size,
      rows,
      unit
    })

  }

  move = () => {
    //pleaceholder  
  }

  makeAiMove = () => {
    //pleaceholder
  }

  turningTest = () => {
    //pleaceholder
  }

  recordGame = () => {
    //pleaceholder
  }

  render() {
    return (
      <div>
        <Stage
        width={}
        height={}
        >
          {/* <Board /> */}
          {/* <Squares /> */}
        </Stage>
      </div>
    )
  }
}

export default TicTacToe