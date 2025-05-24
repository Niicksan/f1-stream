import React from 'react';
import './F1Stream.css';

const F1Stream = () => {
    return (
        <div className="f1-stream-container">
            <iframe
                className="video responsive"
                marginHeight="0"
                marginWidth="0"
                src="https://thedaddy.to/embed/stream-60.php"
                name="iframe_a"
                allowFullScreen={true}
                width="100%"
                height="100%"
                frameBorder="0"
                title="F1 Stream"
            >
                Your Browser Do not Support Iframe
            </iframe>
        </div>
    );
};

export default F1Stream; 