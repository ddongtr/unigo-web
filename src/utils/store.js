const SESSION = "@SESSION";
const USERNAME = "@USERNAME";

// -----------Set token to localStorage--------------
export const setSession = (token) => {
  localStorage.setItem(SESSION, token);
};

// -----------Get token from LocalStorage----------
export const getSession = () => {
  return localStorage.getItem(SESSION);
};

//------------Delete token from localstorage---------
export const deleteSession = () => {
  localStorage.removeItem(SESSION);
};

//-----------set username to localstorage-------------
export const setUsername = (user) => {
  localStorage.setItem(USERNAME, user);
};

//-------------get username from localstorage------------
export const getUsername = () => {
  return localStorage.getItem(USERNAME);
};

//------------delete username from localstorage-----------
export const deleteUsername = () => {
  localStorage.removeItem(USERNAME);
};
