import './style.css'

function Contact() {
    return (
        <body>
        
 
 <div className="info-container"> 
 <h1>Contact us.</h1>
     <h2>General enquiries</h2>
         <p>Contact Service NSW in the way that suits you and we'll take care of the rest. 
         <br/>
         Fill out our enquiry form below and we will aim to respond within 5-7 business days.
         <br/>
         We also welcome your feedback, questions, comments and complaints. 
         <br/>
         We keep customers at the heart of what we do, and use your feedback to improve what we do and how we do it.</p>
</div>

<div className="form-container">
        <h1>Enquiry Form</h1>
        <form action="action_page.php">
              
            <label for="fullName">Full name:</label>
            <input type="text" id="fullName" name="fname" placeholder=""/>
              
            <label for="contactNumber">Contact number</label>
            <input type="number" id="contactNumber" name="cNumber" placeholder=""/>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder=""/>
              
            <label for="enquiry">What is your enquiry about?</label>
                <select id="enquiry" name="enquiry">
                    <option value="submitting">Applying</option>
                    <option value="voting">Voting</option>
                    <option value="general">General enquiry</option>
                    <option value="voting">Feedback and Complaints</option>
                </select>
              
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="How can we help?" ></textarea>
              
            <input type="submit" value="Submit"/>
              
        </form>
    </div>

    <div className="w3-container"> 
        <h1>Phone</h1>
            <h3>For COVID-19 and floods assistance you can call us on <strong>13 77 88</strong>.</h3>
                <p>For other enquiries, call us on <strong>13 77 88</strong> Monday to Friday between 7am and 7pm AEST.
                    <br/><br/>
                    For translation and interpreter services, please call <strong>13 14 50</strong> and ask the interpreter to phone <strong>13 77 88</strong>.
                    <br/><br/>
                    If you are deaf, hard of hearing and/or have a speech impariment, contact us through the National Relay Service on <strong>1800 555 660</strong></p>

            <h1>Mail</h1>
                <p>Write to us at:</p>

            <h3>Service NSW 
                <br/>GPO Box 7057
                <br/>Sydney NSW 2000
            </h3>

            <h1>Complaints and Feedback</h1>
                <p>You can make a complaint using the online form to the left. For more information about our complaints handling process, please see our <u>Customer Complaints</u> page.</p>
    </div>
    
</body>
    );
  }
  
  export default Contact;
