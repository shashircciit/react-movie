import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../actions';



class Cart extends Component {



  render() {

    console.log("cart list", this.props.itemsList)

    const { itemsList,time } = this.props;
    let subTotals = [];
    if(itemsList && itemsList.length!==0){
      subTotals.push(itemsList.length * 100);
    }
    console.log("cart11", this.props)

    return (
      <div className="cart">
        {itemsList && itemsList.length !== 0 ? (
          <div className="contains-items">
            <h3>Your Cart Summary</h3>
            <h3>Ticket Price 100rs</h3>
            <h3>{time.value}</h3>
          


            <div className="cart-overview">
              <div className="item-count">
                <span>Ticket(s) in cart</span>
                <span className="count-meter">{itemsList.length}</span>
              </div>

              <div className="grand-total">
                <span>Grand Total (INR)</span>
                <span className="total-amount">{subTotals.reduce((accumulator, currentValue) => accumulator + currentValue)}</span>
              </div>
            </div>
            <hr />
          </div>
        ) : <div></div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  itemsList: state.admin.saveseat,

});


export default withRouter(connect(mapStateToProps, actions)(Cart));