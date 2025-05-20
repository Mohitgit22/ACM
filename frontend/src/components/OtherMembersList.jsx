import React from 'react';
import '../App.css';

function OtherMembersList({ members }) {
  return (
    <div className="other-members">
      <h2>Other Members</h2>
      <div className="members-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <span className="member-name">{member}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherMembersList;