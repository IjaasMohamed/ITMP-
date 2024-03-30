import React from 'react';

// Sample advertisement data
const adData = {
  title: "Boost Your Business with Digital Marketing Solutions!",
  description: "Drive growth and increase revenue with our tailored digital marketing strategies. From SEO and social media marketing to PPC advertising and email campaigns, we've got you covered. Get started today and take your business to new heights!",
  imageUrl: "https://via.placeholder.com/300x200", // Placeholder image URL
  targetUrl: "https://example.com/digital-marketing-solutions" // Example target URL
};
const adData1 = {
    title: "Maximize Your Online Presence with SEO Optimization!",
    description: "Gain visibility and attract more customers with our advanced SEO optimization techniques. Our team of experts will optimize your website and content to rank higher on search engines. Elevate your online presence and drive organic traffic to your business!",
    imageUrl: "https://via.placeholder.com/300x200", // Placeholder image URL
    targetUrl: "https://example.com/seo-optimization" // Example target URL
  };
  
  const adData2 = {
    title: "Revolutionize Your Branding with Creative Design Solutions!",
    description: "Stand out from the competition and leave a lasting impression with our innovative design solutions. Whether you need a stunning logo, captivating graphics, or eye-catching marketing materials, our team of creatives will bring your vision to life. Elevate your brand and captivate your audience with our design expertise!",
    imageUrl: "https://via.placeholder.com/300x200", // Placeholder image URL
    targetUrl: "https://example.com/creative-design-solutions" // Example target URL
  };

  const adData3 = {
    title: "Expand Your Reach with Social Media Marketing!",
    description: "Harness the power of social media to connect with your audience, build brand awareness, and drive engagement. Our expert social media marketers will create compelling content, run targeted campaigns, and analyze metrics to optimize your social media presence. Reach new heights and grow your business with effective social media strategies!",
    imageUrl: "https://via.placeholder.com/300x200", // Placeholder image URL
    targetUrl: "https://example.com/social-media-marketing" // Example target URL
  };
  
  const adData4 = {
    title: "Drive Conversions with Email Marketing Campaigns!",
    description: "Unlock the potential of email marketing to nurture leads, drive conversions, and boost revenue. Our team will craft personalized email campaigns, segment your audience, and analyze results to optimize performance. Start building lasting relationships with your customers and drive business growth through effective email marketing!",
    imageUrl: "https://via.placeholder.com/300x200", // Placeholder image URL
    targetUrl: "https://example.com/email-marketing-campaigns" // Example target URL
  };
  
  const adData5 = {
    title: "Enhance Customer Engagement with Interactive Content!",
    description: "Capture your audience's attention and increase engagement with interactive content experiences. From quizzes and polls to interactive videos and games, we'll help you create memorable experiences that drive customer interaction and loyalty. Elevate your content strategy and stand out in today's crowded digital landscape!",
    imageUrl: "https://via.placeholder.com/300x200", // Placeholder image URL
    targetUrl: "https://example.com/interactive-content" // Example target URL
  };
  
  const adData6 = {
    title: "Optimize Your Website for Mobile Users!",
    description: "Deliver seamless experiences to mobile users and improve user satisfaction with a mobile-optimized website. Our team will ensure your website is responsive, fast-loading, and user-friendly on all devices. Stay ahead of the curve and capitalize on the growing number of mobile users with a mobile-optimized web presence!",
    imageUrl: "https://via.placeholder.com/300x200", // Placeholder image URL
    targetUrl: "https://example.com/mobile-optimization" // Example target URL
  };
  
  

const AdvertisementComponent = () => {
  return (
    <div>
      {/* First Advertisement */}
      <div style={styles.adContainer}>
        <a href={adData.targetUrl} style={styles.adLink} target="_blank" rel="noopener noreferrer">
          <img src={adData.imageUrl} alt="Advertisement" style={styles.adImage} />
          <div>
            <h2 style={styles.adTitle}>{adData.title}</h2>
            <p style={styles.adDescription}>{adData.description}</p>
          </div>
        </a>
      </div>

      {/* Second Advertisement */}
      <div style={styles.adContainer}>
        <a href={adData1.targetUrl} style={styles.adLink} target="_blank" rel="noopener noreferrer">
          <img src={adData1.imageUrl} alt="Advertisement" style={styles.adImage} />
          <div>
            <h2 style={styles.adTitle}>{adData1.title}</h2>
            <p style={styles.adDescription}>{adData1.description}</p>
          </div>
        </a>
      </div>

      <div style={styles.adContainer}>
        <a href={adData2.targetUrl} style={styles.adLink} target="_blank" rel="noopener noreferrer">
          <img src={adData2.imageUrl} alt="Advertisement" style={styles.adImage} />
          <div>
            <h2 style={styles.adTitle}>{adData2.title}</h2>
            <p style={styles.adDescription}>{adData2.description}</p>
          </div>
        </a>
      </div>

      <div style={styles.adContainer}>
        <a href={adData2.targetUrl} style={styles.adLink} target="_blank" rel="noopener noreferrer">
          <img src={adData2.imageUrl} alt="Advertisement" style={styles.adImage} />
          <div>
            <h2 style={styles.adTitle}>{adData2.title}</h2>
            <p style={styles.adDescription}>{adData2.description}</p>
          </div>
        </a>
      </div>

      <div style={styles.adContainer}>
        <a href={adData3.targetUrl} style={styles.adLink} target="_blank" rel="noopener noreferrer">
          <img src={adData3.imageUrl} alt="Advertisement" style={styles.adImage} />
          <div>
            <h2 style={styles.adTitle}>{adData3.title}</h2>
            <p style={styles.adDescription}>{adData3.description}</p>
          </div>
        </a>
      </div>

      <div style={styles.adContainer}>
        <a href={adData4.targetUrl} style={styles.adLink} target="_blank" rel="noopener noreferrer">
          <img src={adData4.imageUrl} alt="Advertisement" style={styles.adImage} />
          <div>
            <h2 style={styles.adTitle}>{adData4.title}</h2>
            <p style={styles.adDescription}>{adData4.description}</p>
          </div>
        </a>
      </div>


      <div style={styles.adContainer}>
        <a href={adData5.targetUrl} style={styles.adLink} target="_blank" rel="noopener noreferrer">
          <img src={adData5.imageUrl} alt="Advertisement" style={styles.adImage} />
          <div>
            <h2 style={styles.adTitle}>{adData5.title}</h2>
            <p style={styles.adDescription}>{adData5.description}</p>
          </div>
        </a>
      </div>

      <div style={styles.adContainer}>
        <a href={adData6.targetUrl} style={styles.adLink} target="_blank" rel="noopener noreferrer">
          <img src={adData6.imageUrl} alt="Advertisement" style={styles.adImage} />
          <div>
            <h2 style={styles.adTitle}>{adData6.title}</h2>
            <p style={styles.adDescription}>{adData6.description}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

// Styles for the advertisement component
const styles = {
  adContainer: {
    border: '1px solid #ddd',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(#886401)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    flexDirection: 'column', // Vertical arrangement
  },
  adLink: {
    textDecoration: 'none',
    color: '#886401',
    display: 'flex',
    alignItems: 'center',
  },
  adImage: {
    width: '120px',
    marginRight: '20px',
    borderRadius: '4px',
  },
  adTitle: {
    margin: '0 0 10px 0',
    color: '#4e3a03',
    fontSize: '18px',
  },
  adDescription: {
    margin: 0,
    color: '#8a6605',
  }
};

export default AdvertisementComponent;
