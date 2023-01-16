import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {
	if (!localStorage.getItem('username')) return <LoginForm />;
	return (
		<ChatEngine
			height='100vh'
			projectID='335bfb0a-73c9-46b1-841c-b98527648ebd'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}

export default App;
