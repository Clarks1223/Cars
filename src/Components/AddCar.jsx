import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Stack,
  Button,
} from '@mui/material';
import { useCars } from '../hooks/useCars';
import { useError } from '../hooks/useError';

export function AddCar({ add }) {
  const { dialog, setDialog } = useCars();
  //validacion del formulario
  const { car, setCar, errors, setTouched } = useError();

  const handleClickOpen = () => {
    setDialog(true);
  };
  const handleClose = () => {
    setDialog(false);
  };

  const handleSave = () => {
    add(car);
    handleClose();
    setCar({
      brand: '',
      model: '',
      color: '',
      years: '',
      price: '',
      registerNumber: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target; //recupera el nombre del campo
    //recupera el valor ingresado por los usuarios
    setCar((prevState) => ({ ...prevState, [name]: value }));
    // Marcar el campo como tocado
    setTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        New Car
      </Button>
      <Dialog open={dialog} onClose={handleClose}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            {errors.brand && <p>{errors.brand}</p>}
            <TextField
              label="Brand"
              name="brand"
              autoFocus
              variant="standard"
              value={car.brand}
              onChange={handleChange}
            />
            {errors.model && <p>{errors.model}</p>}
            <TextField
              label="Model"
              name="model"
              variant="standard"
              value={car.model}
              onChange={handleChange}
            />
            {errors.color && <p>{errors.color}</p>}
            <TextField
              label="Color"
              name="color"
              variant="standard"
              value={car.color}
              onChange={handleChange}
            />
            {errors.years && <p>{errors.years}</p>}
            <TextField
              label="Year"
              name="years"
              variant="standard"
              value={car.years}
              onChange={handleChange}
            />
            {errors.price && <p>{errors.price}</p>}
            <TextField
              label="Price"
              name="price"
              variant="standard"
              value={car.price}
              onChange={handleChange}
            />
            {errors.registerNumber && <p>{errors.registerNumber}</p>}
            <TextField
              label="Register Number"
              name="registerNumber"
              variant="standard"
              value={car.registerNumber}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
