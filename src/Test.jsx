import React from 'react';
import { 
  Heart, 
  Users,
  Brain,
  HandshakeIcon,
  HelpingHand
} from 'lucide-react';

function AboutUsSection(){
  const values = [
    {
      icon: <Heart size={32} color="#e74c3c" />,
      title: "Compassionate Care",
      description: "We approach every individual with understanding and empathy"
    },
    {
      icon: <HandshakeIcon size={32} color="#27ae60" />,
      title: "Local Support",
      description: "Focused on addressing addiction recovery needs in Nigeria"
    },
    {
      icon: <Users size={32} color="#3498db" />,
      title: "Community Building",
      description: "Creating networks of support for sustainable recovery"
    },
    {
      icon: <Brain size={32} color="#9b59b6" />,
      title: "Holistic Approach",
      description: "Addressing both physical and emotional aspects of recovery"
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.header}>
          <h2 style={styles.title}>
            Helping Overcome Drug Addiction
          </h2>
          <div style={styles.divider}></div>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Left Side - Mission Statement */}
          <div style={styles.missionText}>
            <p style={styles.paragraph}>
              We understand the challenges that come with addiction recovery in Nigeria. We're dedicated to bridging the gap between individuals and the resources they need, from therapy and rehab to a compassionate network that supports each step of the journey.
            </p>
            <p style={styles.paragraph}>
              Our mission is to create a recovery path that's both accessible and empowering, providing a safe space for people to rebuild their lives with dignity and hope. We're here to redefine what recovery looks like one connection, one conversation, one step at a time.
            </p>
          </div>

          {/* Right Side - Image Placeholder */}
          <div style={styles.imagePlaceholder}>
            <div style={styles.iconContainer}>
              <HelpingHand size={128} color="#27ae60" />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div style={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} style={styles.valueCard}>
              <div style={styles.valueIcon}>
                {value.icon}
              </div>
              <h3 style={styles.valueTitle}>
                {value.title}
              </h3>
              <p style={styles.valueDescription}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles object
const styles = {
  section: {
    padding: '64px 0',
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: '24px',
  },
  divider: {
    width: '96px',
    height: '4px',
    backgroundColor: '#27ae60',
    margin: '0 auto',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '48px',
    marginBottom: '64px',
    alignItems: 'center',
  },
  missionText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555555',
  },
  imagePlaceholder: {
    height: '400px',
    backgroundColor: '#f0f9f4',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(39, 174, 96, 0.1)',
    padding: '32px',
    borderRadius: '50%',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
  },
  valueCard: {
    padding: '32px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
    },
  },
  valueIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  valueTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    marginBottom: '12px',
  },
  valueDescription: {
    fontSize: '16px',
    color: '#666666',
    textAlign: 'center',
    lineHeight: '1.5',
  },
};

export default AboutUsSection;