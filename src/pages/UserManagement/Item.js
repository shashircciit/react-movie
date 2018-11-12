import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import * as actions from '../../actions';
import Button from './Button';

 class Item extends Component {

  constructor(props) {
    super(props);
    this.state={
        quantity:1
    }
  }
  
  bookingPage = (brandName,days,times,productImage,genre) => {
    const ticketDetails = {
      genre: genre,
      brandName: brandName,
      productImage:productImage,
      days:days,
      times:times
    }

    this.setState({
      quantity: 1
    })
    var self=this;
    self.props.history.push("/bookpage")

    this.props.addToCart(ticketDetails);
    // this.props.dispatch(syncQuantity(syncCatalog));
  };

  render() {
      console.log("11",this.props)
    const { productImage, brandName, genre, days, times } = this.props;

    return (
      <div>
        <div style={{marginBottom:"50px"}}>
          <div style={{width:"300px"}}>
            <img src={productImage} alt={brandName} style={{width:"100px"}} />
          </div>
          <div className="product-details">
            <div className="brand-name">
              {brandName}
            </div>
            <div className="product-name">
              {genre}
            </div>
            <Button  value="BOOK THE MOVIE"onClick={() => { this.bookingPage(brandName,days,times,productImage,genre) }} />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(Item));