import React, { useState } from 'react';
import { Input, FormHelperText } from '@chakra-ui/react';

const InputCi = ({ setFormValid }) => {
  const [ci, setCI] = useState('');
  const maxLength = 10;

  const handleCIChange = (e) => {
    const inputCI = e.target.value.replace(/[^0-9]/g, ''); // Permitir solo números
    if (inputCI.length <= maxLength) {
      setCI(inputCI);
      if (inputCI.length === maxLength) {
        setFormValid(true); // Establecer como válido cuando se cumplen las condiciones
      } else {
        setFormValid(false);
      }
    } else {
      setFormValid(false);
    }
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Cédula"
        name="ci"
        value={ci}
        onChange={handleCIChange}
        isRequired
      />
      {ci.length !== 0 && ci.length !== maxLength && (
        <FormHelperText color="red" fontSize="sm">
          La cédula debe tener exactamente 10 caracteres
        </FormHelperText>
      )}
      {ci.includes('.') || ci.includes(',') && (
        <FormHelperText color="red" fontSize="sm">
          Los puntos (.) y comas (,) no están permitidos
        </FormHelperText>
      )}
    </>
  );
};

export default InputCi;
