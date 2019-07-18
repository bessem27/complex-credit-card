import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
class HelloUser extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: 'xxxxx xxx',
        number: '0000000000000000',
        month: 'xx',
        day: 'xx',

      }
    }
     
    //Name of Card Owner
    nameChange(n) {
      this.setState({
        name: n.target.value
      });
    }
    //Card Number
    numberChange(c) {
      this.setState({
        number: c.target.value
      });
    }
    //Expiration
    monthChange(m) {
      this.setState({
       month: m.target.value
      });
    }
    dayChange(d) {
      this.setState({
       day: d.target.value
      });
    }

    
    
    render() {
      return <div>
  <div className="row"style={{display:'flex'}}>
    <div className="small-5 small-offset-1 columns ">
      <div className="callout credit">
        <div className="row">
          <div className="small-6 columns"style={{display:'flex'}}>
            <h1 className="credit__bank">My Bank</h1>
          </div>
          <div className="small-6 columns">
            <img className="credit__mc" src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <p className="credit__card-number">{this.state.number}</p>
          </div>
          <div className="small-9 columns"style={{marginTop:'-25px',marginLeft: '11px'}}>
            <label>Card Holder
              <p className="credit__name">{this.state.name}</p>
            </label>
          </div>
          <div className="small-3 columns"style={{marginTop:'-75px',marginLeft: '322px'}}>
            <label>Expires
              <p className="credit__date">{this.state.month} / {this.state.day}</p>
            </label>
          </div>
        </div>
  
      </div>
    </div>
    <div className="small-5 columns end"style={{border:'1px solid',width:'242px',marginLeft:'20px'}}>
      <div className="callout margin-top50">
        <label>NAME
          <input type="text" onChange={this.nameChange.bind(this)} maxLength="20"/>
        </label>
        <label>NUMBER
          <input type="text" maxLength="16" onChange={this.numberChange.bind(this)}/>
        </label>
        <div className="row">
          <label className="column">EXPIRATION DATE</label>
          <div className="small-4 columns">
            <input type="text" maxLength="2" onChange={this.monthChange.bind(this)} />
          </div>
          <div className="small-4 columns end">
            <input type="text" maxLength="2" onChange={this.dayChange.bind(this)}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    }
  }
  
  ReactDOM.render(<HelloUser />,document.getElementById('root'));