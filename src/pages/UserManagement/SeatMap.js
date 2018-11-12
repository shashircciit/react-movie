import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../actions';

class SeatMap extends Component {
    
    constructor() {
      super();
        this.state = {
        seat: [
          '1','2','3',
          '4','5','6',
          '7','8','9'
        ],
        seatAvailable: [
          '1','2','3',
          '4','5','6',
          '7','8','9'
        ],
        seatReserved: []
      }
    }
    
    onClickData(seat) {
      if(this.state.seatReserved.indexOf(seat) > -1 ) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res != seat)
        })
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        })
      }
  
    }

    submitHandler(evt) {
      evt.preventDefault();
      console.log("came here")
      // pass the input field value to the event handler passed
      // as a prop by the parent (App)
      const data=this.state.seatReserved;
      this.props.saveseat(data);
    }
    
    render() {
      const style={
        display: "block",
         marginLeft: "auto",
         marginRight: "auto",
      }

      return (
        <div style={style}>
          <h1>Choose your Seat</h1>
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            reserved = { this.state.seatReserved }
            onClickData = { this.onClickData.bind(this) }
            />

            <button onClick={this.submitHandler.bind(this)} style={{width:"130px",textAlign:"center"}} className="btn-block btn-primary" type="submit">ADD TICKET</button>
        </div>
      )
    }
  }
  
  class DrawGrid extends Component {
    render() {
    

      return (
         <div className="container">
          <table className="grid" >
            <tbody >
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                      className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          
          <AvailableList available = { this.props.available } />
          <ReservedList reserved = { this.props.reserved } />
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
  
  class AvailableList extends Component {
    render() {
      const seatCount = this.props.available.length;
      return(
        <div className="left">
          <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
          <ul>
            {this.props.available.map( res => <li key={res} >{res}</li> )}

          </ul>
        </div>
      )
    }
  }
  
  class ReservedList extends Component { 
    render() {
      return(
        <div>
        <div className="right">
          <h4 style={{marginTop:"10px"}}>Reserved Seats: ({this.props.reserved.length})</h4>
          <ul>
            { this.props.reserved.map(res => <li key={res} >{res}</li>) }
          </ul>
        </div>
       
     
        </div>

      )
    }
  }
  
  
  export default withRouter(connect(null,actions)(SeatMap));