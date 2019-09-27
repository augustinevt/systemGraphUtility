import React from 'react';
import Cell from './Cell';

import styled from 'styled-components'

const Wrapper = styled.div`
  border: solid;
  margin: 10px;
  display: flex;
  width: 60%;
`

class PatternManager extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mouseDown: false,
      isDrag: false,
      id: 'vow',
      val: '',
      cells: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    };

    this.onClick = this.onClick.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.cellMouseDown = this.cellMouseDown.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  onDragOver(i, val) {
    if(this.state.isDrag && this.mouseDown) {

      const newCells = [...this.state.cells];
      newCells[i] = (val === 1 || val === 0) ? 2 : 0;
      this.setState({...this.state, cells: newCells});
    }
  }

  cellMouseDown(i, val) {
    console.log('cellMouseDown')
    this.setState({...this.state, mouseDown: true, val, id: i});
  }

  mouseDown(i, val) {
    console.log('MouseDown')
  }

  mouseUp() {
    if (!this.state.isDrag) {

      const newCells = [...this.state.cells];
      newCells[this.state.id] = (this.state.val === 2 || this.state.val === 0) ? 1 : 0;
      this.setState({cells: newCells, mouseDown: false})

    } else {

      this.setState({...this.state, mouseDown: false, isDrag: false})
    }

    this.props.handler(this.state.cells)
  }

  mouseLeave(i, val) {
    if (!this.state.isDrag && this.state.mouseDown) {
      const newCells = [...this.state.cells];
      newCells[this.state.id] = (this.state.val === 0 || this.state.val === 1) ? 2 : 0;
      this.setState({cells: newCells, isDrag: true});
    }
  }

  onClick(i) {

  }

  render() {

    const jsx3 = this.state.mouseDown ? <div> mY </div> : <div> mN </div>
    const jsx4 = this.state.isDrag ? <div> dY </div> : <div> dN </div>

    return (
      <Wrapper
        onMouseUp={this.mouseUp}
        >
        {
          this.state.cells.map((cellVal, i) => {
            return (
              <Cell
                cellVal={cellVal}
                index={i}
                onClick={this.onClick}
                onDragOver={this.onDragOver}
                // mouseDown={this.state.mouseDown}
                mouseLeave={this.mouseLeave}
                cellMouseDown={this.cellMouseDown}
              />
            )
          })
        }
      </Wrapper>
    )
  }
}

export default PatternManager;