import React, { Component } from 'react'
import Business from './Business';

export default class BusinessList extends Component {
    render() {
        return (
          <div className="BusinessList">
            {
              this.props.businesses.map(business => {
                return <Business business={business} key={business.id} />
              })
            }
          </div>
        );
      }
    }
