import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewContactForm from './components/NewContactForm';
import ContactList from './components/ContactList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const [hash, setHash] = useState('');
  const [contacts, setContacts] = useState(['Stan', 'Joanne']);
  const [instanceUrl, setInstanceUrl] = useState('');

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  
  return (
    <div className="App">
      <Header 
        isAuthenticated={isAuthenticated} 
        setIsAuthenticated={setIsAuthenticated} 
        hash={hash}
        setHash={setHash}
        setContacts={setContacts}
        instanceUrl={instanceUrl}
        setInstanceUrl={setInstanceUrl}
        setAuthToken={setAuthToken}
      />
      <main>
        <NewContactForm 
          instanceUrl={instanceUrl}
          setContacts={setContacts}
          authToken={authToken}
        />
        <ContactList 
          isAuthenticated={isAuthenticated} 
          contacts={contacts}
        />
      </main>
    </div>
  );
}

export default App;
