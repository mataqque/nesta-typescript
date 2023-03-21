import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Promotion extends Component<any, any> {
	render() {
		return <Link to={'promociones/' + this.props.slug} className='promo fadeIn animated' title={this.props.slug} style={{ backgroundImage: `url(${this.props.img})` }} />;
	}
}
