import React from "react";

function Contact() {
  return (
    <div id="contact">
      <div className="contain1">
        <form>
          <h1>Contact Us Form</h1>
          <input type="text" id="firstname" placeholder="first Name" required />
          <input type="text" id="lastname" placeholder="last Name" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="text" id="mobile" placeholder="Mobile" required />
          <h4>Type Your Message Here.......</h4>
          <textarea required />
          <input type="submit" value="Send" id="button" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
