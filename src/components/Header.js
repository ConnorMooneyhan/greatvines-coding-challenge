import { useEffect, useRef, useState } from "react";

const Header = ({
  isAuthenticated, 
  setIsAuthenticated, 
  setHash, 
  hash,
  setContacts,
  instanceUrl,
  setInstanceUrl,
  setAuthToken
}) => {
  const authenticationURL = 'https://login.salesforce.com/services/oauth2/authorize?client_id=3MVG9yZ.WNe6byQDn_tc_.9aCjm_xoITkY9Wk9TX1us_oY_8ImbWF6cUgmkrRWmL4xlitLBRQgGA9pupDi.76&redirect_uri=http%3A//localhost%3A3000&response_type=token&scopes=api%20id';

  let windowLocation = useRef(window.location);
  useEffect(() => {
    setHash(window.location.hash);
  }, [windowLocation])
  
  useEffect(() => (async () => {
    if (hash.includes('access_token')) {
      setIsAuthenticated(true);
      setAuthToken(hash
        .split('&')
        .find(e => e.startsWith('#access_token'))
        .split('=')[1]
      );
      setInstanceUrl(hash
        .split('&')
        .find(e => e.startsWith('instance_url'))
        .split('=')[1]
      );
      const contactsResponse = await fetch(instanceUrl);
      setContacts(contactsResponse.body);
    } else {
      setIsAuthenticated(false);
    }
  })(), [hash]);

  return (
    <header className="header">
      <h1>GreatVines Coding Challenge</h1>
      <a className="login-link" href={authenticationURL}>Login</a>
    </header>
  )
}

export default Header;