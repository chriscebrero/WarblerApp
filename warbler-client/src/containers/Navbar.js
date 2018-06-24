import React, { Component } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";


class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src="" alt="warbler" />
					</Link>
				</div>

			</nav>
		);
	}
}