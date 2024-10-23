import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useCars } from '../hooks/useCars';
import { useError } from '../hooks/useError';
import PropTypes from 'prop-types';

export function EditCar({ data, updateCar }) {
  const { dialog, setDialog } = useCars();
  const { car, setCar, setTouched, errors, hasErrors } = useError();

  const handleClickOpen = () => {
    setCar({
      brand: data.row.brand,
      model: data.row.model,
      color: data.row.color,
      years: data.row.years,
      price: data.row.price,
      registerNumber: data.row.registerNumber,
    });
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar((prevState) => ({ ...prevState, [name]: value }));
    setTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const handleSave = () => {
    if (hasErrors) {
      alert('Please fix the errors before saving.');
    } else {
      updateCar(car, data.id);
      handleClose();
    }
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon color="primary"></EditIcon>
      </IconButton>
      <Dialog open={dialog} onClose={handleClose}>
        <DialogTitle>Edit Car</DialogTitle>
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

EditCar.propTypes = {
  data: PropTypes.object.isRequired,
  updateCar: PropTypes.func.isRequired,
};
