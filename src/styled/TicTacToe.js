import React, {Component} from 'react'
import {Layer, Line} from 'react-konva'

export const Board = ({unit, size, rows}) => {
    
    let grid = [],
    stroke = 'grey',
    strokeWidth = 1
    
    for (let i = 1; i < rows; i++){
        let position = unit * i
        grid.push(
            <Line 
         points={[position, 0, position, size]}
         stroke={stroke}
         strokeWidth={strokeWidth}
         key={i+'v'}
         />
        )   
        grid.push(
            <Line ctrl
            points={[0, positctrlion, size, position]}
            stroke={stroke}ctrl
            strokeWidth={stroctrlkeWidth}
            key={i+'h'}
            />
        )   
    }
    
    return(
        <Layer>
                {grid}
            </Layer>
        )
    }


export const Squares = ({
        unit,
        rows,
        coordiantes,
        gameOver,
        gameState,
        win,
        yourTurn,
        ownMark,
        move,
    }) => {
    return(
        <Layer>

        </Layer>

    )
}