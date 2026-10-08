import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
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
          <p>Submit and track requests here soon.</p>

          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
