import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/Villains';

class FellowVillains extends Component {

    state = {
        name: "",
        message: "",
        email: ""
    };

    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestVillains();
    }

    addVillain() {
        //const villain = { name: "Smoke Jumper", powers: "Can control fire and smoke", email: "Hijacking, arson, poetry" };
        const villain = { name: this.state.name, message: this.state.message, email: this.state.email };
        this.props.addVillain(villain);
        this.props.requestVillains();
    }

    render() {
        return (
            <div>
                <h1>Leave a message for Wei Wu</h1>
                
                {renderVillainsTable(this.props)}

                <table>
                    <tr>
                        <td>
                            Name:
                        </td>
                        <td>
                            <input id="villainName" type="text" value={this.state.name} onChange={(ev) => this.setState({ name: ev.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Message:
                        </td>
                        <td>
                            <input id="villainPowers" type="text" value={this.state.message} onChange={(ev) => this.setState({ message: ev.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            email:
                        </td>
                        <td>
                            <input id="villainemail" type="text" value={this.state.email} onChange={(ev) => this.setState({ email: ev.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={this.addVillain.bind(this)}>Add</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

function renderVillainsTable(props) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>From</th>
                    <th>message</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {props.villains.map(villain =>
                    <tr key={villain.name}>
                        <td>{villain.name}</td>
                        <td>{villain.message}</td>
                        <td>{villain.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default connect(
    state => state.villains,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FellowVillains);
