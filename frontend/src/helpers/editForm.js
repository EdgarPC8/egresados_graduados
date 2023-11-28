export const handleEditClick = (item,event) => {
  const clickedButton = event.currentTarget;
  const formId = clickedButton.getAttribute('data-form-id');
  const form = document.getElementById(formId);
  const submitButton = form.querySelector('button[type="submit"]');
  
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (submitButton) {
      submitButton.innerHTML = "Editar";
    }
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
    }else{
      if (submitButton) {
        submitButton.value = item[key];
      }

    }
  });

};


