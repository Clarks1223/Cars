import { useEffect, useState } from 'react';

export function useError() {
  //estado de los campos del formulario
  const [car, setCar] = useState({
    brand: '',
    model: '',
    color: '',
    years: '',
    price: '',
    registerNumber: '',
  });
  // Estado para rastrear qué campos han sido tocados
  const [touched, setTouched] = useState({});
  //estado de los errores
  const [errors, setErrors] = useState({});
  // Función para validar campos individualmente
  const validateField = (field, value) => {
    let error = '';
    switch (field) {
      case 'brand':
        if (!value) error = 'Brand is required';
        break;
      case 'model':
        if (!value) error = 'Model is required';
        break;
      case 'color':
        if (!value) error = 'Color is required';
        break;
      case 'years':
        if (!value) {
          error = 'Years is required';
        } else if (isNaN(value)) {
          error = 'Years must be a number';
        } else if (value < 0) {
          error = 'Price must be a positive number';
        }
        break;
      case 'price':
        if (!value) {
          error = 'Price is required';
        } else if (isNaN(value)) {
          error = 'Years must be a number';
        } else if (value < 0) {
          error = 'Price must be a positive number';
        }
        break;
      case 'registerNumber':
        if (!value) error = 'Register number is required';
        break;
      default:
        break;
    }
    return error;
  };

  // Efecto para validar solo los campos tocados
  useEffect(() => {
    const newErrors = {};
    // Validar solo los campos que han sido tocados
    // Itera sobre cada propiedad (campo) en el objeto 'touched'
    for (let field in touched) {
      // Verifica si el campo ha sido tocado (es decir, el usuario ha interactuado con él)
      if (touched[field]) {
        // Llama a la función 'validateField' para validar el campo actual usando su nombre y valor.
        const error = validateField(field, car[field]);
        if (error) newErrors[field] = error; // Si hay un error, lo añade al objeto 'newErrors' usando el nombre del campo como clave.
      }
    }

    setErrors(newErrors);
  }, [car, touched]);

  // Función para verificar si hay errores
  const hasErrors = Object.keys(errors).length > 0;

  return { car, setCar, setTouched, errors, hasErrors };
}
