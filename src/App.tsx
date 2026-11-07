
import { useState } from 'react';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { fetchAuthSession } from 'aws-amplify/auth';

const API_URL = 'https://lo6bk9yxr4.execute-api.us-east-2.amazonaws.com';

function App() {
  
const [issue, setIssue] = useState('');

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const session = await fetchAuthSession();
    const token = session.tokens?.idToken?.toString();

    const response = await fetch(`${API_URL}/maintenance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ issue }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit maintenance request');
    }

    alert('Maintenance request submitted successfully!');
    setIssue('');
  } catch (error) {
    console.error('Error submitting request:', error);
    alert('Failed to submit maintenance request.');
  }
};

  return (a`
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{ padding: '30px' }}>
          <h1>TP-01 Tenant Portal</h1>
          <p>Welcome, {user?.signInDetails?.loginId}</p>

          <h2>Tenant Dashboard</h2>
          <p>Welcome to your tenant home!</p>

          <h3>My Property</h3>
          <p>Property information coming soon.</p>

          <h3>Maintenance Requests</h3>
          <form onSubmit={handleSumbit}>
  <label htmlFor="issue">Describe the problem:</label>
  <br />
  <textarea
    id="issue"
    rows={4}
    placeholder="Example: Kitchen sink is leaking"
  
  
value={issue}
onChange={(e) => setIssue(e.target.value)}
/>
  <br />
  <button type="submit">Submit Request</button>
</form>


          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
