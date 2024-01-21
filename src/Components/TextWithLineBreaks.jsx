import React, { useState, useEffect } from 'react';

function TextWithLineBreaks(props) {
  const [checkedItems, setCheckedItems] = useState(() => {
    // Retrieve checked items from local storage on component mount
    const storedCheckedItems = JSON.parse(localStorage.getItem('checkedItems')) || {};
    return storedCheckedItems;
  });

  const [selectedItems, setSelectedItems] = useState(() => {
    // Retrieve selected items from local storage on component mount
    const storedSelectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
    return storedSelectedItems;
  });

  useEffect(() => {
    // Save checked items to local storage whenever it changes
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [checkedItems]);

  useEffect(() => {
    // Save selected items to local storage whenever it changes
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const handleCheckboxChange = (index, text) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    // Optionally, save the text data as well
    localStorage.setItem(`textData_${index}`, text);

    // Add or remove the text from the selected items array
    setSelectedItems((prev) =>
      prev.includes(text) ? prev.filter((item) => item !== text) : [...prev, text]
    );
  };

  const textWithBreaks = (props.text || '').split('\n').map((text, index, array) => (
    <div key={index}>
      {text.trim() !== '' && (
        <>
          <input
            type="checkbox"
            checked={checkedItems[index] || false}
            onChange={() => handleCheckboxChange(index, text)}
          />
          {text}
        </>
      )}
      {index !== array.length - 1 && <div className="separator"></div>}
      <br />
    </div>
  ));

  return <div>{textWithBreaks}</div>;
}

export default TextWithLineBreaks;