import React from 'react'
import styled from 'styled-components'

const Cello = styled.div`
  border-radius: 10%;
  background: ${({cellVal}) => {
    if (cellVal === 2) return 'green'
    else if (cellVal === 1) return 'orange'
    else return 'grey'
  }};
  width: 2.8%;
  height: 20px;
  margin: 0.3%;
`

const Cell = ({cellVal, index, onClick, onDragOver, mouseLeave, cellMouseDown}) => {
  return (
    <Cello
      onClick={()=>{onClick(index, cellVal)}}
      onMouseDown={()=>{cellMouseDown(index, cellVal)}}
      onMouseOver={()=>{onDragOver(index, cellVal)}}
      onMouseOut={()=>{mouseLeave(index, cellVal)}}
      cellVal={cellVal}
    />
  )
}

export default Cell;