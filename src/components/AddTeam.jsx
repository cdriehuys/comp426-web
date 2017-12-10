import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { TeamForm } from '../components';

class AddTeam extends React.Component {
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
		          Add Team
		        </Button>
				<Modal show={this.state.modalOpen} onHide={this.closeModal}>
		          <Modal.Header closeButton>
		            <Modal.Title>New Team</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
                    <TeamForm />
		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={this.closeModal}>Close</Button>
		          </Modal.Footer>
	        	</Modal>
	        </div>
		);
	}

}

export default AddTeam
