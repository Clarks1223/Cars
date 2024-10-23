import PropTypes from 'prop-types';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from '@mui/x-data-grid';
import { Snackbar, Stack, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddCar } from './AddCar';
import { EditCar } from './EditCar';
import { useCars } from '../hooks/useCars';
import { Fragment, useEffect, useState } from 'react';

export function CarList({ cars, token }) {
  useEffect(() => {
    console.log('cars: ', cars);
    setCarsList(cars);
  }, [cars]);
  
  const {
    carsList,
    setCarsList,
    snackbar,
    setSnackbar,
    addCar,
    updateCar,
    deleteCar,
  } = useCars(token);

  const columns = [
    { field: 'brand', headerName: 'Brand', width: 200 },
    { field: 'model', headerName: 'Model', width: 200 },
    { field: 'color', headerName: 'Color', width: 200 },
    { field: 'years', headerName: 'Years', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'registerNumber', headerName: 'Register Number', width: 150 },
    {
      field: '_links.car.href',
      headerName: '',
      sortable: false,
      filterable: false,
      renderCell: (row) => <EditCar data={row} updateCar={updateCar} />,
    },
    {
      field: '_links.self.href',
      headerName: '',
      sortable: false,
      filterable: false,
      renderCell: (row) => (
        <IconButton onClick={() => deleteCar(row.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      ),
    },
  ];

  return (
    <Fragment>
      <Stack mt={2} mb={2}>
        <AddCar add={addCar} />
      </Stack>
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={carsList}
          columns={columns}
          disableRowSelectionOnClick={true}
          getRowId={(row) => row._links.self.href}
          slots={{ toolbar: CustomToolbar }}
        />
        {/*Muestra el mensaje de eliminado*/}
        <Snackbar
          open={snackbar}
          autoHideDuration={2000}
          onClose={() => setSnackbar(false)}
          message="Car deleted"
        />
      </div>
    </Fragment>
  );
}

import { useAuth } from '../hooks/useAuth';
export function CarsExist() {
  const { isAuthenticated, token } = useAuth();
  const [cars, setCars] = useState([]);

  const getCars = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/cars`, {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then((response) => response.json())
      .then((data) => setCars(data._embedded.cars))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log('ejecutandose en carsExist');
      getCars();
    } else {
      console.log('No se autoriza la peticion');
      setCars([]);
    }
  }, [isAuthenticated, token]);

  const carsListExist = cars.length > 0;
  return carsListExist ? <CarList cars={cars} token={token} /> : <NoCars />;
}

function NoCars() {
  return <h2 style={{ color: 'black' }}>No se han encontrado elementos</h2>;
}

//para imprimir los datos en la tabla
function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
  token: PropTypes.string,
};

CarsExist.propTypes = {
  listCars: PropTypes.array,
};
