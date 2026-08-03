import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [enterToSend, setEnterToSend] = useState(true);
  const [spamProtection, setSpamProtection] = useState(true);

  return (
    <div className="settings-page">
      <h2 className="settings-header">Room Settings</h2>
      <div className="settings-option">
        <label htmlFor="enter-to-send">Enter is send</label>
        <input
          type="checkbox"
          id="enter-to-send"
          checked={enterToSend}
          onChange={() => setEnterToSend(!enterToSend)}
        />
      </div>
      <div className="settings-option">
        <label htmlFor="spam-protection">Spam protection</label>
        <input
          type="checkbox"
          id="spam-protection"
          checked={spamProtection}
          onChange={() => setSpamProtection(!spamProtection)}
        />
      </div>
    </div>
  );
};

export default Settings;
