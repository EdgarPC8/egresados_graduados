export const handleEditClick = (item,event) => {
  const clickedButton = event.currentTarget;
  const formId = clickedButton.getAttribute('data-form-id');
  const form = document.getElementById(formId);
  const submitButton = form.querySelector('button[type="submit"]');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
  }
  
  Object.keys(item).forEach((key) => {
    const elements = document.getElementsByName(key);
    
    if (elements.length > 0) {
      const element = elements[0];
      // console.log(`Elemento encontrado para ${key}:`, element);

      if (element.type === 'text' || element.type === 'date') {
        element.value = item[key];
      } 
      if (element.tagName.toLowerCase() === 'select') {
        // Buscar la opción con el valor correspondiente y marcarla como seleccionada
        for (let i = 0; i < element.options.length; i++) {
          if (element.options[i].value === item[key]) {
            element.options[i].selected = true;
          }
        }
      }
    }
      else {
        // aqui el valor que sobra siempre deber ser el id del item 
        if (submitButton) {
          submitButton.innerHTML="Editar"
          submitButton.value=item[key]
        }
      // console.log(`No se encontró ningún elemento para ${key}`);
    }
  });
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};


