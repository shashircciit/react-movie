import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Home from '../Home';
import SeatMap from './SeatMap';
import Cart from './Cart';
import CreatableSelect from 'react-select/lib/Creatable';
import * as actions from '../../actions';


class BookingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      selectedOption: null,
      showtime:"",
      totalseat:[],
      bookingdata:[]
    }
  
  }

  handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({showtime:newValue})
    
  };
  handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  }


  _addToCart = (showtime,brandName, productImage) => {
    console.log("showtime",showtime)
    this.props.cartpage(this.state.bookingdata);
    this.props.syncQuantity(this.state.bookingdat);

  };


  render() {
    console.log("11booking", this.props)
    console.log("totalseat", this.state.totalseat)
    const { productImage, brandName, genre, days, times,seatTotal } = this.props;
    this.state.bookingdata=[productImage, brandName, genre, days, times,seatTotal]
    const buttonstyle = {
      center: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "500px",
        height: "200px"
      }
    }


    return (
      <Home>
        <div>
          <div >
            <div style={{ width: "300px" }}>
              <img src={productImage} alt={brandName} style={{ width: "100px" }} />
            </div>
            <div className="product-details">
              <div className="brand-name">
                {brandName}
              </div>
              <div className="product-name">
                {genre}
              </div>
              <br /> <br />
              <div className="product-price">
                <CreatableSelect
                  label="times"
                  isClearable
                  onChange={this.handleChange}
                  onInputChange={this.handleInputChange}
                  options={times}
                />
              </div>
            </div>
            <h1 style={{ fontSize: "30px", marginRight: "50px" }}>screen</h1>
            <img src="assets/images/maxresdefault.jpg" alt="screen" style={buttonstyle.center} />
            <SeatMap />
          </div>
          <Cart time={this.state.showtime}/>
        </div>
      </Home>
    )
  }
}


const mapStateToProps = state => ({
  productImage: state.admin.cartdata.productImage,
  brandName: state.admin.cartdata.brandName,
  genre: state.admin.cartdata.genre,
  days: state.admin.cartdata.days,
  times: state.admin.cartdata.times,
  seatTotal:state.admin.saveseat
});


export default withRouter(connect(mapStateToProps,actions)(BookingPage));


