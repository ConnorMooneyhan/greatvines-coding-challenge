import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewContactForm from './components/NewContactForm';
import ContactList from './components/ContactList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contacts, setContacts] = useState(['Stan', 'Joanne']);

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} />
      <main>
        <NewContactForm />
        <ContactList 
          isAuthenticated={isAuthenticated} 
          contacts={contacts}
        />
      </main>
    </div>
  );
}

export default App;
