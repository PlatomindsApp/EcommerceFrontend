import "../styles/ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <h2>Contact Customer Support</h2>

      <div className="contact-content">
        <form className="contact-form">
          <label>
            Name:
            <input type="text" placeholder="Your Name" required />
          </label>
          <label>
            Email:
            <input type="email" placeholder="your@email.com" required />
          </label>
          <label>
            Message:
            <textarea placeholder="Write your message..." rows={5} required />
          </label>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Need help? Get in touch!</h3>
          <p><strong>📞 Phone:</strong> +91-1234567891</p>
          <p><strong>📧 Email:</strong> sayali.pawar@platominds.com</p>
          <p><strong>📍 Address:</strong> 123 Rajarampuri, kolhapur, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
