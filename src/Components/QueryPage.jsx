import React, { useState } from 'react';
import axios from 'axios';
import TextWithLineBreaks from './TextWithLineBreaks';
import EmailTemplate from './email';
import Button from 'react-bootstrap/Button';


const Bare_act_dict = {
    "./docs/Criminai_Law_Ammendment_Act.pdf": "Criminal Law Amendment Act, 2013",
    "./docs/Indian_Contract_Act.pdf": "Indian Contract Act, 1872",
    "./docs/IPC-Act.pdf": "Indian Penal Code, 1860",
    "./docs/The_Code_Of_Criminal_Procedure.pdf": "The Code Of Criminal Procedure, 1973",
    "./docs/The_Commissions_of_Inquiry_Act.pdf": "The Commissions of Inquiry Act, 1952",
    "./docs/The_constitution_of_India.pdf": "The constitution of India"
};

const DocumentCard = ({ document }) => (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3>Source: {document.metadata.source}</h3> 
      <h3>Page: {document.metadata.page}</h3>
      <p>Source: {document.page_content}</p>
    </div>
  );
  
  const DocumentCardList = ({ documents }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {documents && documents.map((document, index) => (
        <DocumentCard key={index} document={document} />
      ))}
    </div>
  );

const QueryPage = () => {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [source, setSource] = useState('');
  const [docs, setDocs] = useState([]);
  const [maindata, setMaindata] = useState([]);
  

  const makePostRequest = async () => {

        try {
          const response = await fetch('http://192.168.105.27:8000/search/summary', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
          });
          // if (!response.ok) {
          //   throw new Error(HTTP error! Status: ${response.status});
          // }
      
          const responseData = await response.json();
          setMaindata(responseData);
          console.log(responseData.result)
      
          // Check if the expected properties are present in the response data
          if ('result' in responseData && 'source' in responseData && 'docs' in responseData) {
            const { result, source, docs } = responseData;
            setResult(responseData.result);
            setSource(responseData.source);
            
          } else {
            throw new Error('Unexpected response structure');
          }
        } catch (error) {
          console.error('Error making POST request:', error);
        }
      };
      
//   };
const { source_documents } = maindata;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Vector Search</h1>
      <div style={{ display: 'flex', border: '1px solid black', padding: 20 }}>
        <div style={{ marginRight: 20 }}>
          <label>
            Enter Query
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              style={{ width: 200, height: 100, margin: 10 }}
            />
          </label>
          <br />
          <Button type="button" class="btn btn-light" onClick={makePostRequest}>Submit</Button> {/* Button to trigger API call */}
        </div>
        <div>
      
          <h3>Result:</h3>
          <div><TextWithLineBreaks text={maindata.result} /></div>
          
          <h3>Source:</h3>
          <DocumentCardList documents={source_documents} />
          
          
        </div>
      </div> 

      <EmailTemplate/>
    </div>
  );
};

export default QueryPage;