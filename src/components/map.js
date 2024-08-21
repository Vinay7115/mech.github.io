import React from 'react';

function Map() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      {/* eslint-disable-next-line */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.9090960980025!2d87.31014097451855!3d22.319277442208865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d441b3e6b9c1d%3A0xdd95dd8114115675!2sDepartment%20of%20Mechanical%20Engineering!5e0!3m2!1sen!2sin!4v1724246677465!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
