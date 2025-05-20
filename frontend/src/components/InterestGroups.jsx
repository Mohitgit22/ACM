import React from 'react';
import '../App.css';

// Import icons (replace with actual imports)
import { BrainCircuit, Computer, ChartPie, Users } from 'lucide-react';

function InterestGroups() {
  const groups = [
    {
      title: 'MACHINE INTELLIGENCE',
      description: 'Machine Intelligence Group focuses on research and applications in areas like Computer Vision, Natural Language Processing and Data Mining.',
      icon: <BrainCircuit size={48} className="group-icon" />
    },
    {
      title: 'SYSTEMS & NETWORKS',
      description: 'Systems and Networks group focuses on research and applications in areas like OS, DBMS and Computer Networks.',
      icon: <Computer size={48} className="group-icon" />
    },
    {
      title: 'THEORETICAL COMPUTER SCIENCE',
      description: 'Theoretical CS focuses on research and applications in areas like DSA, Computational Complexity Theory and Cryptography.',
      icon: <ChartPie size={48} className="group-icon" />
    },
    {
      title: 'WOMEN IN COMPUTER SCIENCE',
      description: 'Women in Computer Science group works towards promoting and supporting the growing community of women in Technology.',
      icon: <Users size={48} className="group-icon" />
    }
  ];

  return (
    <section className="interest-groups-section">
      <div className="interest-groups-header">
        <h2>INTERSET GROUPS</h2>
      </div>
      
      <div className="interest-groups-container">
        {groups.map((group, index) => (
          <div key={index} className="interest-group-card">
            <div className="group-icon-container">
              {group.icon}
            </div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InterestGroups;