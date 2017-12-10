import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import { PlayerForm } from '../components';


class AddPlayer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
		};
	}

	closeModal = () => this.setState({ modalOpen: false });

	openModal = () => this.setState({ modalOpen: true });

	render() {
		return (
			<div>
				<Button bsStyle="info" bsSize="large" onClick={this.openModal}>
		          Add Player
		        </Button>
				<Modal show={this.state.modalOpen} onHide={this.closeModal}>
		          <Modal.Header closeButton>
		            <Modal.Title>New Player</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
                    <PlayerForm />
		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={this.closeModal}>Close</Button>
		          </Modal.Footer>
	        	</Modal>
	        </div>
		);
	}
}


export default AddPlayer;
