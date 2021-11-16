const ContactList = ({ contacts, isAuthenticated }) => {

  return (
    <ul className="contact-list">
      <h2>Contacts</h2>
      {!isAuthenticated && <p style={{color: "darkred"}}>Please log in to see contacts.</p> }
      {isAuthenticated && contacts.map(contact => <li>{contact}</li>)}
    </ul>
  );
}

export default ContactList;