// // EmailTemplatePage.js

// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';

// const EmailTemplate = () => {
//     const [accusedName, setAccusedName] = useState('');
//     const [accusedEmail, setAccusedEmail] = useState('');

//     const generateEmailTemplate = () => {
//         // Customize the email template based on your needs
//         const emailTemplate = `
//             Subject: Content Takedown Request

//             Dear [Accused Name],

//             I am writing to inform you that explicit content featuring my public identity 
//             has been shared without my consent. This is a violation of my rights, and I 
//             want you to take down this material immediately.

//             Sincerely,
//             [Your Name]
//         `;

//         return emailTemplate;
//     };

//     const copyEmailTemplate = () => {
//         const emailTemplate = generateEmailTemplate();
//         navigator.clipboard.writeText(emailTemplate);
//         alert('Email template copied to clipboard!');
//     };

//     return (
//         <div>
//             <h2>Email Template Generator</h2>
            
//             <label style={{margin: '7px'}}>
//                 Accused Name:
//                 <input
//                     type="text"
//                     value={accusedName}
//                     onChange={(e) => setAccusedName(e.target.value)}
//                 />
//             </label>

//             <br />

//             <label style={{margin: '7px'}}>
//                 Accused Email:
//                 <input
//                     type="text"
//                     value={accusedEmail}
//                     onChange={(e) => setAccusedEmail(e.target.value)}
//                 />
//             </label>

//             <br />

//             <Button type="button" class="btn btn-light" onClick={() => alert(generateEmailTemplate())} style={{margin: '2px'}}>
//                 Generate Email Template
//             </Button>

//             <Button type="button" class="btn btn-light" onClick={copyEmailTemplate} style={{margin: '2px'}}>
//                 Copy Email Template
//             </Button>
//         </div>
//     );
// };

// export default EmailTemplate;


// EmailTemplatePage.js

import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const EmailTemplate = () => {
    const [accusedName, setAccusedName] = useState('');
    const [accusedEmail, setAccusedEmail] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        // Fetch selectedItems from localStorage
        const storedItems = localStorage.getItem('selectedItems');
        if (storedItems) {
            setSelectedItems(JSON.parse(storedItems));
        }
    }, []);

    const generateEmailTemplate = () => {
        // Replace placeholders with actual values
        const companyName = 'Company XYZ'; // Replace with the actual company name
        const placeholderName = 'John Doe'; // Replace with your name
        const websiteURL = 'https://example.com'; // Replace with the actual website URL
        const relevantLaws = '[Specify the relevant laws]'; // Replace with the relevant laws
    
        // Customize the email template based on your needs
        const emailTemplate = `
            Subject: Request for Content Removal from ${companyName} Domain
    
            Dear ${companyName},
    
            I hope this message finds you well. My name is ${placeholderName}, and I am writing to you in my capacity as the rightful owner of certain intellectual property displayed on your domain.
    
            I have recently become aware that [describe the content briefly, e.g., images, text, etc.] is being used without my consent on your website ${websiteURL}. This content is my intellectual property, and its unauthorized use constitutes a violation of my rights.
    
            I kindly request that you take immediate action to remove the mentioned content from your domain. The use of my intellectual property without proper authorization is a serious matter and is considered illegal under the relevant laws and regulations.
    
            I would like to draw your attention to the following legal aspects:
    
            1. ${relevantLaws}
            2. [Provide additional information or legal references as necessary.]
    
            I believe that resolving this matter amicably is in the best interest of both parties. I propose that we reach a mutual agreement to take down the contested resources within the next week to avoid any legal proceedings.
    
            Please be advised that failure to comply with this request within the specified timeframe will leave me with no choice but to pursue legal action to protect my rights.
    
            I trust that we can resolve this matter promptly and professionally. Thank you for your attention to this serious issue.
    
            Sincerely,
    
            ${placeholderName}
            [Your Contact Information]
        `;
    
        return emailTemplate;
    };

    const copyEmailTemplate = () => {
        const emailTemplate = generateEmailTemplate();
        navigator.clipboard.writeText(emailTemplate);
        alert('Email template copied to clipboard!');
    };

    return (
        <div>
            <h2>Email Template Generator</h2>
            
            <label style={{ margin: '7px' }}>
                Accused Name:
                <input
                    type="text"
                    value={accusedName}
                    onChange={(e) => setAccusedName(e.target.value)}
                />
            </label>

            <br />

            <label style={{ margin: '7px' }}>
                Accused Email:
                <input
                    type="text"
                    value={accusedEmail}
                    onChange={(e) => setAccusedEmail(e.target.value)}
                />
            </label>

            <br />

            <Button type="button" className="btn btn-light" onClick={() => alert(generateEmailTemplate())} style={{ margin: '2px' }}>
                Generate Email Template
            </Button>

            <Button type="button" className="btn btn-light" onClick={copyEmailTemplate} style={{ margin: '2px' }}>
                Copy Email Template
            </Button>
        </div>
    );
};

export default EmailTemplate;
