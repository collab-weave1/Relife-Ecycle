// Corrected TypeScript ChatWidget using @botpress/webchat

import * as React from 'react';
import { useState, } from 'react';
import {
  Fab,
  Webchat,
} from '@botpress/webchat';

const ChatWidget = () => {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);
  const toggleWebchat = () => setIsWebchatOpen((prev) => !prev);

  return (
    <>
      {isWebchatOpen && (
        <div
          style={{
            width: '350px',
            height: '400px',
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'white',
          }}
        >
          <Webchat
            clientId="87d2decc-c580-4976-9aa9-82a83908bfb6"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '12px',
            }}
            config={{
              style: {
                width: '100%',
                height: '100%',
              },
            }}
          />
        </div>
      )}

      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1001,
          width: '56px',
          height: '56px',
        }}
      >
        <Fab
          onClick={toggleWebchat}
        //   imgUrl={icon}
          style={{
            width: '56px',
            height: '56px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
    </>
  );
};

export default ChatWidget;

