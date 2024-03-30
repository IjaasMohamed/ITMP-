import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineBell } from 'react-icons/ai'; // Importing icons

// Updated dummy notifications data with categories
const initialNotifications = [
  { id: 1, title: 'New Message', description: 'You have received a new message from John Doe.', time: '2 mins ago', category: 'Messages' },
  { id: 2, title: 'Meeting Reminder', description: 'You have a meeting with the team in 30 minutes.', time: '10 mins ago', category: 'Reminders' },
  { id: 3, title: 'Subscription Renewal', description: 'Your subscription will be renewed in 3 days.', time: '1 hour ago', category: 'Subscriptions' }
];

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  // Function to remove a notification by id
  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div style={styles.notificationsContainer}>
      <h2 style={styles.headerTitle}>
        Notifications <AiOutlineBell style={{ verticalAlign: 'middle' }} />
      </h2>
      {notifications.map((notification) => (
        <div key={notification.id} style={styles.notificationCard}>
          <div style={styles.header}>
            <h4 style={styles.notificationTitle}>{notification.title}</h4>
            <AiOutlineClose style={styles.closeButton} onClick={() => removeNotification(notification.id)} />
          </div>
          <p style={styles.notificationDescription}>{notification.description}</p>
          <div style={styles.footer}>
            <span style={styles.notificationTime}>{notification.time}</span>
            <span style={styles.notificationCategory}>{notification.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Enhanced inline styles
const styles = {
  notificationsContainer: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    width: '350px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,.2)',
    borderRadius: '8px',
    padding: '20px',
    zIndex: 1000, // Ensure it's above other elements
  },
  headerTitle: {
    textAlign: 'center',
    color: '#FFA500', // Orange color
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  notificationCard: {
    backgroundColor: '#FFFAF0', // Lighter orange
    borderRadius: '8px',
    padding: '15px',
    margin: '0 0 20px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    color: '#333',
    transition: 'transform 0.3s ease', // Smooth transition for hover effect
    ':hover': {
      transform: 'translateY(-2px)', // Slight raise effect on hover
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    cursor: 'pointer',
    color: '#FF4500', // Deep orange for the close icon
    fontSize: '20px',
  },
  notificationTitle: {
    margin: '0',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#000',
  },
  notificationDescription: {
    margin: '10px 0 5px',
    fontSize: '14px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  notificationTime: {
    fontSize: '12px',
    color: '#666',
  },
  notificationCategory: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#FF8C00', // Darker orange for category
    textTransform: 'uppercase',
  }
};

export default NotificationComponent;
