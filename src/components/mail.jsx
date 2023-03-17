import { useState, useEffect } from "react";
import mailchimp from '@mailchimp/mailchimp_marketing';

const mail = mailchimp.setConfig({
  apiKey: 'a748700c2ecfd71911b96073d70812fc-us13',
  server: 'us13'
});

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await mailchimp.lists.addListMember('5d707caa7e', {
        email_address: email,
        status: 'subscribed'
      });
      console.log("hey")

      setEmail('');
      setSuccessMessage('Thank you for subscribing!');
      setErrorMessage('');
    } catch (error) {
      console.log(error);
      setErrorMessage('There was an error subscribing you. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
}

export default NewsletterForm;