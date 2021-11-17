const NewContactForm = ({ instanceUrl, setContacts, authToken }) => {

  const newContactSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(`${e.target[0].value} ${e.target[1].value}`);
    await fetch(instanceUrl, {
      method: "POST",
      body: JSON.stringify({
        firstName: e.target[0].value,
        lastName: e.target[1].value
      }),
      headers: {
        Authentication: 'Bearer Token',
        Accept: "application/json",
        "Content-Type": "application/json",
        Token: authToken
     },
    });
  }  
  
  return (
    <form 
      className="new-contact-form" 
      onSubmit={newContactSubmitHandler}
    >
      <h2>Add New Contact</h2>
      <input 
        type="text" 
        placeholder="First Name"
        name="first-name"
      />
      <input 
        type="text" 
        placeholder="Last Name"
        name="last-name"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default NewContactForm;