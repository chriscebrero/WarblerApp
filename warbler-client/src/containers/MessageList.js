import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchMessages} from "../store/actions/messages";

class MessageList extends Component {

}

function mapStateToProps(state) {
	return {
		messages: state.messages
	};
}

export default connect(mapStateToProps, {fetchMessages})(MessageList);