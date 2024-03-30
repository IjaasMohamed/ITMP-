import React, { useState } from 'react';

// Initial dummy messages with expanded content
const initialMessages = [
  {
    id: 1,
    text: "Hello, how are you?",
    sender: "User1",
    time: "10:00 AM",
    avatar: "https://placeimg.com/50/50/people"
  },
  {
    id: 2,
    text: "I'm good, thanks! How about you?",
    sender: "User2",
    time: "10:01 AM",
    avatar: "https://placeimg.com/50/50/people?t=2"
  },
  {
    id: 3,
    text: "Great to hear! I'm doing well, too.",
    sender: "User1",
    time: "10:02 AM",
    avatar: "https://placeimg.com/50/50/people"
  },
  {
    id: 4,
    text: "Here's a cool link to check out: https://example.com",
    sender: "User2",
    time: "10:05 AM",
    avatar: "https://placeimg.com/50/50/people?t=2"
  }
];

const ChatComponent = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (!newMessage.trim()) return;

    const messageToAdd = {
      id: messages.length + 1,
      text: newMessage,
      sender: "User1",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "https://placeimg.com/50/50/people"
    };

    setMessages([...messages, messageToAdd]);
    setNewMessage('');
  };

  return (
    
    <div style={styles.chatContainer}>
        
      <div style={styles.messagesList}>
        {messages.map((message) => (
          <div key={message.id} style={styles.messageContainer}>
            <img src={message.avatar} alt="avatar" style={styles.avatar} />
            <div style={message.sender === "User1" ? styles.myMessage : styles.theirMessage}>
              <div style={styles.messageText}>{message.text}</div>
              <div style={styles.messageTime}>{message.time}</div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} style={styles.messageForm}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
          style={styles.messageInput}
        />
        <button type="submit" style={styles.sendMessageButton}>Send</button>
      </form>
      
    </div>
  );
};

// Updated styles for full-page display and orange theme
const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh', // Full viewport height
    overflow: 'hidden',
    backgroundColor: '#White', // Light orange background
    color: 'white', // Slightly dark text for contrast
    alignItems: 'center',
    textAlign : 'center'
  },
  messagesList: {
    overflowY: 'auto',
    flexGrow: 1,
    padding: '20px',
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '15px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  myMessage: {
    background: ' rgb(35, 47, 43)', // Deeper orange for the sender
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '70%',
  },
  theirMessage: {
    background: 'indigo', // Lighter orange for the receiver
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '70%',
  },
  messageText: {
    wordWrap: 'break-word',
  },
  messageTime: {
    fontSize: '12px',
    marginTop: '8px',
    color: 'white', // Complementary color for the time
    textAlign: 'right',
  },
  messageForm: {
    display: 'flex',
    padding: '20px',
    borderTop: '1px solid black', // Border to match the theme
  },
  messageInput: {
    flexGrow: 1,
    marginRight: '10px',
    padding: '10px',
    border: '1px solid black', // Orange border
    borderRadius: '20px',
  },
  sendMessageButton: {
    background: 'black', // Vibrant orange for the button
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
 
};


export default ChatComponent;