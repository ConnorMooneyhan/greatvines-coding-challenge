const NewContactForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form className="new-contact-form" onSubmit={submitHandler}>
      <h2>Add New Contact</h2>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <button type="submit">Add</button>
    </form>
  )
}

export default NewContactForm;