import React, { Component } from 'react';
import $ from 'jquery';
import { bindAll } from 'lodash';
import { Redirect, NavLink} from 'react-router-dom';
import firebase from 'firebase/app';
import Toggle from 'react-toggle';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// Component view that allows the user to create a channel
export default class CreateChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createdChannel: false,
            activeChannel: "general",
            publicChannel: true,
            value: []
        };
        bindAll(this, [
            'handleCreateButton',
            'createNewChannel',
            'checkToggle',
            'handleSelectChange'
        ])
    }

    componentDidMount() {
        $('#channel-create').prop('disabled', true);
        this.setState({
            activeChannel: this.props.activeChannel
        });

    }

    createNewChannel(event) {
        let user = firebase.auth().currentUser;
        let userDisplayName = user.displayName;
        let userId = user.uid;

        let channelName = $('#channelName').val();
        let channelPurpose = $('#purposeText').val();

        let channelsRef = firebase.database().ref('channels/');
        let channelType = this.state.publicChannel ? "public" : "private";

        let insertChannel = {
            createdBy: {
                displayName: userDisplayName,
                userId: userId
            },
            description: channelPurpose,
            name: channelName,
            timeStamp: Date.now(),
            type: channelType
        };

        let newChannelKey = channelsRef.push(insertChannel).key;
        let membersRef = firebase.database().ref('channels/' + newChannelKey + '/invited/');

        firebase.database().ref('channels/' + newChannelKey + '/').update({
            id: newChannelKey
        });

        if (this.state.value.length !== 0) {
            this.state.value.forEach((member) => {
                membersRef.push({
                    displayName: member.label,
                    userId: member.value,
                    userEmail: member.email
                });
            });
        }



        // Add self to channel members
        firebase.database().ref('channels/' + newChannelKey + '/members').push({
            displayName: this.props.displayName,
            userId: this.props.userId,
            userEmail: this.props.userEmail
        });

        let messagesRef = firebase.database().ref('channels/' + newChannelKey + "/messages");
        messagesRef.push({
            createdBy: {
                name: this.props.displayName,
                id: this.props.userId,
                email: this.props.userEmail
            },
            timeStamp: Date.now(),
            text: "welcome"
        });

        this.setState({
            createdChannel: true,
            activeChannel: channelName,
        });

        // let redirectUrl = 'channels/' + channelName;
        // return <Redirect to={'/' + redirectUrl} exact/>
    }

    handleCreateButton(event) {
        let channelName = event.target.value;
        if (channelName.length > 1) {
            $('.channel-create-button').prop('disabled', false);
        } else {
            $('.channel-create-button').prop('disabled', true);
        }
    }

    checkToggle(event) {
        this.setState({
            publicChannel: event.target.checked
        });
    }

    handleSelectChange (value) {
        this.setState({ value });
    }

    render() {

        const {
            activeSession,
            allUsers,
        } = this.props;

        if (!activeSession) {
            return <Redirect to='/' exact/>
        }

        if (this.state.createdChannel) {
            return <Redirect to={'/channels/' + this.state.activeChannel} exact/>
        }

        return (
            <div>
                <div className="row input-section">
                    <div className="col-8 offset-2 col-md-6 offset-md-3 label-container ">
                        <div className="create-channel-labels">
                            <p className="create-channel-title">Create a channel</p>
                            <p className="create-channel-text">Channels are where you can communicate.
                                They're best when organized around a topic - #leads, for example
                            </p>
                        </div>
                        <div className="form-container">
                            <div className="form-group">
                                <div className="toggle-button-container">
                                    <label>
                                        <Toggle
                                            defaultChecked={true}
                                            icons={{
                                                checked: "Public",
                                                unchecked: "Private",
                                            }}
                                            value="public"
                                            onChange={this.checkToggle} />
                                            <div className="toggle-label-container">
                                                <p className="toggle-label">
                                                    {this.state.publicChannel ? "Anyone using the application can view and join this channel."
                                                        : "This channel can only be joined or viewed by invites"
                                                    }
                                                </p>
                                            </div>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                    <label
                                        className="form-labels"
                                        htmlFor="channelName">
                                        Name <span className="faded-text"> (Name must be without periods or spaces, and shorter than 22 characters)</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="channelName"
                                        aria-describedby="displayNameHelp"
                                        placeholder="Enter channel name"
                                        onChange={this.handleCreateButton}
                                    />
                                </div>

                                <div className="form-group form-group-spacing">
                                    <label className="form-labels"
                                           htmlFor="purposeText">
                                        Purpose <span className="faded-text"> (What's this channel about?)</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="purposeText"
                                        aria-describedby="displayNameHelp"
                                        placeholder="Enter purpose"
                                    />
                                </div>
                                <div className="form-group form-group-spacing">
                                    <label className="form-labels"
                                           htmlFor="purposeText">
                                        Send invites to: <span className="faded-text"> (Invite your friends!)</span>
                                    </label>
                                    <Select
                                        name="form-invite-user"
                                        value={this.state.value}
                                        multi={true}
                                        disabled={false}
                                        onChange={this.handleSelectChange}
                                        removeSelected={true}
                                        closeOnSelect={false}
                                        searchable={true}
                                        placeholder={"Search by name"}
                                        options={allUsers}
                                    />
                                </div>
                            <div className="create-channel-button-container offset-6">
                                <NavLink to='/' exact>
                                    <button
                                        id="channel-cancel"
                                        form="create-channel"
                                        className="btn channel-cancel-button"
                                        value="channel-cancel"
                                        >
                                        Cancel
                                    </button>
                                </NavLink>
                                <button
                                    id="channel-create"
                                    form="create-channel"
                                    className="btn channel-create-button"
                                    value="channel-create"
                                    onClick={this.createNewChannel}>
                                    Create Channel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )


    }


}