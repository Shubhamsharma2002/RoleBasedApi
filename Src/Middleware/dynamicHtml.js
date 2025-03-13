const generateHtmlContent = (toEmails, subject, messageHtml) => {
    return `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f9;
              margin: 0;
              padding: 0;
            }
            .email-container {
              background-color: #ffffff;
              border-radius: 8px;
              padding: 20px;
              max-width: 600px;
              margin: 20px auto;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .email-header {
              text-align: center;
              background-color: #4CAF50;
              color: white;
              padding: 10px 0;
              border-radius: 8px 8px 0 0;
            }
            .email-header h1 {
              margin: 0;
            }
            .email-body {
              padding: 20px;
              font-size: 16px;
              line-height: 1.6;
            }
            .email-footer {
              text-align: center;
              font-size: 14px;
              color: #888888;
              margin-top: 20px;
            }
            .button {
              background-color: #4CAF50;
              color: white;
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              display: inline-block;
              margin-top: 20px;
            }
            .button:hover {
              background-color: #45a049;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <h1>Welcome to Our Service</h1>
            </div>
            <div class="email-body">
              <p>Hi there,</p>
              <p>We are glad to have you with us! Thank you for signing up. Below is your confirmation:</p>
              <p><strong>Email:</strong> ${toEmails}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p>${messageHtml}</p>
              <a href="http://example.com/confirm" class="button">Confirm Your Account</a>
            </div>
            <div class="email-footer">
              <p>If you did not sign up, please ignore this email.</p>
              <p>&copy; 2025 Our Service. All Rights Reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  };
  
  export default generateHtmlContent;