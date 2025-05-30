import React, { useState, useEffect, useRef } from 'react';

const TooltipOnOverflow = () => {
  const divRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = () => {
    if (divRef.current) {
      const isOverflow = divRef.current.scrollWidth > divRef.current.clientWidth;
      setIsOverflowing(isOverflow);  // Set state based on overflow condition
    }
  };

  useEffect(() => {
    checkOverflow();  // Check overflow when the component mounts

    // Optional: Add resize listener to check when the window resizes
    window.addEventListener('resize', checkOverflow);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);  // Empty dependency array ensures it runs only once after mount

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: '200px',  // Set a fixed width to demonstrate the overflow
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          border: '1px solid black',
          padding: '10px',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.
      </div>

      {isOverflowing && (
        <div style={{ marginTop: '10px', color: 'red' }}>
          <span className="tooltip">Text is overflowing, hover to see more</span>
        </div>
      )}
    </div>
  );
};

export default TooltipOnOverflow;
