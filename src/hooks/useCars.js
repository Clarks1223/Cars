import { useState } from 'react';

export function useCars(token) {
  const [carsList, setCarsList] = useState([]);
  //remove - muestra el mensaje de eliminar
  const [snackbar, setSnackbar] = useState(false);
  //add - activa el formulario para agregar/editar
  const [dialog, setDialog] = useState(false);

  const getCars = () => {
    console.log('ejecutandose en get cars');
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cars`, {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then((response) => response.json())
      .then((data) => setCarsList(data._embedded.cars))
      .catch((err) => console.error(err));
  };

  const deleteCar = (URL) => {
    if (window.confirm('Are u sure to delete this element?'))
      fetch(URL, { method: 'DELETE', headers: { Authorization: token } })
        .then((response) => {
          if (response.ok) {
            getCars();
            setSnackbar(true);
          } else {
            alert('Error deleting a car:', +response.statusText);
          }
        })
        .catch((error) => console.error(error));
  };

  const addCar = (newObject) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cars`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(newObject),
    })
      .then((response) => {
        if (response.ok) {
          getCars();
        } else {
          alert('Error adding car: ' + response.statusText);
        }
      })
      .catch((err) => console.error(err));
  };

  const updateCar = (newObject, URL) => {
    fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: token,
      },
      body: JSON.stringify(newObject),
    })
      .then((response) => {
        if (response.ok) {
          getCars();
        } else {
          alert('Error updating the item: ', response.statusText);
        }
      })
      .catch((err) => console.error(err));
  };

  return {
    carsList,
    setCarsList,
    snackbar,
    setSnackbar,
    dialog,
    setDialog,
    getCars,
    deleteCar,
    addCar,
    updateCar,
  };
}
