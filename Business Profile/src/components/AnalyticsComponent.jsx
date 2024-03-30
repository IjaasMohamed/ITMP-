import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Topbar from './common/Topbar';

const AnalyticsComponent = () => {
  // Dummy statistics data
  const dummyStats = [
    { label: 'Total Visits', value: '8,235' },
    { label: 'Bounce Rate', value: '57%' },
    { label: 'Average Time on Page', value: '3m 45s' },
    { label: 'Active Users', value: '1,234' },
  ];

  // Dummy recent activity data
  const dummyRecentActivity = [
    { user: 'AB Foods', action: 'Signed up', date: '2024-03-30' },
    { user: 'Business Corp Pvt Ltd', action: 'Purchased a subscription', date: '2024-03-29' },
    { user: 'Artigraph', action: 'Posted a comment', date: '2024-03-28' },
  ];

  // Dummy data for the line chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Number of Visits',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1
      },
    ],
  };

  // Options for the line chart
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio: false
  };

  // Inline styles
  const styles = {
    container: {
      fontFamily: 'sans-serif',
      padding: '20px',
      color: '#473501',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '30px',
    },
    stat: {
      textAlign: 'center',
    },
    statValue: {
      fontSize: '2em',
      fontWeight: 'bold',
    },
    statLabel: {
      fontSize: '1em',
      fontWeight: 'normal',
      color: '#555',
    },
    recentActivity: {
      marginBottom: '30px',
    },
    chartContainer: {
      position: 'relative',
      height: '400px',
      marginBottom: '30px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      background: '#F57C00',
      color: '#fff',
      padding: '10px',
      textAlign: 'left',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
  };

  return (
    
    <div style={styles.container}>
      <h1>Analytics Dashboard</h1>
      
      <div style={styles.statsContainer}>
        {dummyStats.map((stat, index) => (
          <div key={index} style={styles.stat}>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={styles.recentActivity}>
        <h2>Recent Activity</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>User</th>
              <th style={styles.th}>Action</th>
              <th style={styles.th}>Date</th>
            </tr>
          </thead>
          <tbody>
            {dummyRecentActivity.map((activity, index) => (
              <tr key={index}>
                <td style={styles.td}>{activity.user}</td>
                <td style={styles.td}>{activity.action}</td>
                <td style={styles.td}>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={styles.chartContainer}>
        <h2>Visits Over Time</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AnalyticsComponent;
