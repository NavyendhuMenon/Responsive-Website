function doPost(e) {
    var formId = "gform"; 
  
    
    if (e.parameters["form-id"] !== formId) {
      return ContentService.createTextOutput("Invalid form submission");
    }
  
    // Extract form data
    var data = {
      name: e.parameters.name,
      email: e.parameters.email,
      query: e.parameters.query
    };
  
    // Email configuration
    var recipientEmail = "your-email@example.com"; 
    var subject = "New Form Submission";
    var message = "Name: " + data.name + "\nEmail: " + data.email + "\nQuery: " + data.query;
  
    // Send email
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: message
    });
  
    // Return success response
    return ContentService.createTextOutput("Form submitted successfully");
  }
  