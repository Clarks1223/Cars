// Note: This file is used to handle the login service
export const logIn = async (login) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const jwtToken = response.headers.get('Authorization');

    if (jwtToken) {
      sessionStorage.setItem('jwt', jwtToken);
    } else {
      throw new Error('Authorization token not found');
    }
  } catch (error) {
    console.error('Login error:', error); // Log the error for debugging
    throw new Error('Error logging in: ' + error.message); // Make error message clearer
  }
};
