// ImageSearch.js
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CardComponents from './CardComponents'; // Import the SearchResultCard component
import GoogleReverseSearchResultCard from './GoogleReverseSearchResultCard';
import GoogleImagesSearchResultCard from './GoogleImagesSearchResultCard';

const ImageSearch = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [deleteUrl, setDeleteUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [googleSearchResults, setGoogleSearchResults] = useState(null);
  const [googleReverseSearchResults, setGoogleReverseSearchResults] = useState(null);
  const [yandexSearchResults, setYandexSearchResults] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUploadImage = async () => {
    if (uploadedFiles.length === 0) {
      return;
    }

    const formData = new FormData();
    formData.append('image', uploadedFiles[0]);

    try {
      const response = await fetch('http://192.168.105.229:3001/api/v1/uploadImage', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      setImageData(responseData.data);
      setImageUrl(responseData.data.url);
      setDeleteUrl(responseData.data.delete_url);

      // Store delete URL in local storage
      localStorage.setItem('deleteUrl', responseData.data.delete_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSearchImage = async () => {
    // API Calls
    const apiUrlGoogle = 'http://192.168.105.229:3000/api/v1/googleImagesSearch';
    const apiUrlGoogleReverse = 'http://192.168.105.229:3000/api/v1/googleReverseImageSearch';
    const apiUrlYandex = 'http://192.168.105.229:3000/api/v1/yandexImageSearch';

    try {
      // Google Image Search
      const responseGoogle = await fetch(apiUrlGoogle, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchQuery }),
      });

      if (responseGoogle.ok) {
        const responseDataGoogle = await responseGoogle.json();
        setGoogleSearchResults(responseDataGoogle);
      }

      // Google Reverse Image Search
      const responseGoogleReverse = await fetch(apiUrlGoogleReverse, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchQuery, imageUrl }),
      });
      setTimeout(1500)

      if (responseGoogleReverse.ok) {
        const responseDataGoogleReverse = await responseGoogleReverse.json();
        setGoogleReverseSearchResults(responseDataGoogleReverse);
      }

      // Yandex Image Search
      const responseYandex = await fetch(apiUrlYandex, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchQuery, imageUrl }),
      });

      if (responseYandex.ok) {
        const responseDataYandex = await responseYandex.json();
        setYandexSearchResults(responseDataYandex);
      }
    } catch (error) {
      console.error('Error searching image:', error);
    }
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
  };


  return (
    <div className="image-search-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Image Search</h1>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>{isDragActive ? 'Drop the files here' : 'Drag and drop images here, or click to select files'}</p>
      </div>
      {uploadedFiles.length > 0 && (
        <div className="uploaded-files">
          <h2>Uploaded Files:</h2>
          <ul>
            {uploadedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
          <button onClick={handleUploadImage} style={buttonStyle}>
            Upload Image
          </button>
        </div>
      )}
      {imageData && (
        <div className="image-data">
          <h2>Image Data:</h2>
          <p>Image URL: {imageUrl}</p>
          <p>Delete URL: {deleteUrl}</p>
          <label htmlFor="searchQuery">Search Query:</label>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="styled-input"
          />
          <button onClick={handleSearchImage} style={buttonStyle}>
            Search Image
          </button>
          conole.log()
        </div>
      )}
      {/* Display or use the results as needed in your application */}
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        {googleSearchResults && (
          <GoogleImagesSearchResultCard title="Google Image Search Results" data={googleSearchResults.googleImagesSearchResults} />
        )}
        {googleReverseSearchResults && (
          <GoogleReverseSearchResultCard title="Google Reverse Image Search Results" data={googleReverseSearchResults.googleReverseImageSearchResults} />
        )}
        {yandexSearchResults && (
          <CardComponents title="Yandex Image Search Results" data={yandexSearchResults.yandexImageSearchResults} />
        )}
      </div>
    </div>
  );
};

export default ImageSearch;