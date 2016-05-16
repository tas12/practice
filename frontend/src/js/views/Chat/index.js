import React from 'react'
import ChatWindow from './../../components/ChatWindow.js'
import ChatInput from './../../components/ChatInput.js'
import Contacts from './../..//components/Contacts.js'

class Chat extends React.Component {
  constructor () {
    super ()
    this.state = {contactDeets: [{name: 'hsgd', canChat: true}]}
    this.initialisePBX = this.initialisePBX.bind(this)
  }

  componentDidMount () {
    this.initialisePBX()
  }

  initialisePBX () {
    const deets = {
      username: '',
      password: ''
    }
    IPCortex.PBX.Auth.setHost('https://fac1.ipcortex.net');
    IPCortex.PBX.Auth.login(deets).then(
    	function() {
    		console.log('chat', 'Login successful');
    		/* Start API collecting data */
    		IPCortex.PBX.startFeed().then(
    			function() {
    				console.log('chat', 'Live data feed started');
    				runApp();
    			},
    			function() {
    				console.log('chat', 'Live data feed failed');
    			}
    		);
    	},
    	function() {
    		console.log('chat', 'Login failed');
    	}
    );
    const runApp = () => {
      const contactsAndStatus = IPCortex.PBX.contacts.map((contact) => {
        return {name: contact.name, canChat: contact.canChat}
      })
      this.setState({contactDeets: contactsAndStatus})
      console.log('runapp state', this.state)
      return
    	/* API is ready, loop through the list of contacts */
    	// IPCortex.PBX.contacts.forEach(
    	// 	function(contact) {
    	// 		/* Listen for updates in case the user changes state */
    	// 		contact.addListener('update', function() {
    	// 			processContact(contact);
    	// 		});
    	// 		processContact(contact);
    	// 	}
    	// );
    	// /*
    	//  * Enable chat subsystem. This call provides a shortcut for providing a new-room callback.
    	//  * Enabling chat automatically makes the current user 'online'
    	//  */
    	// console.log('runApp', 'Chat enable');
    	// IPCortex.PBX.enableChat(processRoom);
    }
  }

  render () {

    console.log('render', this.state.contactDeets)
    return (
      <div>
        <h1>Chat</h1>
        <ChatWindow />
        <ChatInput />
        <Contacts deets={this.state.contactDeets}/>
      </div>
    )
  }
}

export default Chat
