// ImageUploader.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState('');

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    // Create FormData object to send the file to the ImgBB API
    const formData = new FormData();
    formData.append('image', file);

    // ImgBB API endpoint and API key
    const apiUrl = 'https://api.imgbb.com/1/upload';
    const apiKey = '11159593e3a7c9fd175b23fb79b39809';

    try {
      // Make API request using fetch
      const response = await fetch(`${apiUrl}?key=${apiKey}`, {
        method: 'POST',
        body: formData,
      });

      // Parse the API response
      const result = await response.json();

      // Check if the API request was successful
      if (result.success) {
        // Extract the image URL from the API response
        const imageUrl = result.data.url;
        setImageUrl(imageUrl);
      } else {
        console.error('Error uploading image:', result);
      }
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </div>
      {imageUrl && (
        <div>
          <p>Image URL:</p>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            {imageUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
