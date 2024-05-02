const CREDENTIALS_KEY = 'credentials';

export const getCredentialsFromStorage = () => {
  const credentialsJson = localStorage.getItem(CREDENTIALS_KEY);
  return credentialsJson ? JSON.parse(credentialsJson) : null;
};

export const setCredentialsInStorage = (credentials) => {
  localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));
};

export const clearCredentialsFromStorage = () => {
  localStorage.removeItem(CREDENTIALS_KEY);
};
