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

  function isValidCI(ci) {
    var isNumeric = true;
    var total = 0, 
      individual;	
  
    for (var position = 0 ; position < 10 ; position++) {
      // Obtiene cada posición del número de cédula
      // Se convierte a string en caso de que 'ci' sea un valor numérico
      individual = ci.toString().substring(position, position + 1)
  
      if(isNaN(individual)) {
        // console.log(ci, position,individual, isNaN(individual))
        isNumeric=false;				
        break;			
      } else {
        // Si la posición es menor a 9
        if(position < 9) {
          // Si la posición es par, osea 0, 2, 4, 6, 8.
          if(position % 2 == 0) {
            // Si el número individual de la cédula es mayor a 5
            if(parseInt(individual)*2 > 9) {
              // Se duplica el valor, se obtiene la parte decimal y se aumenta uno 
              // y se lo suma al total
              total += 1 + ((parseInt(individual)*2)%10);
            } else {
              // Si el número individual de la cédula es menor que 5 solo se lo duplica
              // y se lo suma al total
              total += parseInt(individual)*2;
            }
          // Si la posición es impar (1, 3, 5, 7)
          }else {
            // Se suma el número individual de la cédula al total
            total += parseInt(individual);		    		
          }
        } 
      }
    }
  
    if((total % 10) != 0) {
      total =  (total - (total%10) + 10) - total;		
    } else {
      total = 0 ; 	
    }
  
  
    if(isNumeric) {	
      // El total debe ser igual al último número de la cédula
      // console.log(ci, total, individual);
      // console.log(ci, typeof ci, ci.length)
      // La cédula debe contener al menos 10 dígitos
      if(ci.toString().length != 10) { 
        // alert("La c\u00E9dula debe ser de: 10 d\u00EDgitos.");
        return false; 
      }
  
      // El número de cédula no debe ser cero
      if (parseInt(ci, 10) == 0) { 
        // alert("La c\u00E9dula ingresada no puede ser cero.");
        return false;
      }
  
      // El total debe ser igual al último número de la cédula
      if(total != parseInt(individual)) { 
        // alert("La c\u00E9dula ingresada no es v\u00E1lida.");
        return false;
      } 
  
      // console.log('cédula válida', ci);
      return true;			
    }
  
    // Si no es un número  
    // alert("El dato solo puede contener numeros.");
    return false;
  }

 
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
      {/* {ci.length !== 0 && ci.length !== maxLength (
        <FormHelperText color="red" fontSize="sm">
          La cédula debe tener exactamente 10 caracteres
        </FormHelperText>
      ) } */}

      {!isValidCI(ci) && (
        <FormHelperText color="red" fontSize="sm">
          Ingrése una cedula válida
        </FormHelperText>
      )}

      {/* {ci.includes('.') || ci.includes(',') && (
        <FormHelperText color="red" fontSize="sm">
          Los puntos (.) y comas (,) no están permitidos
        </FormHelperText>
      )} */}
    </>
  );
};

export default InputCi;
