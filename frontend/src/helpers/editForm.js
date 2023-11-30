
  // const formId = clickedButton.getAttribute('data-form-id');
  // const form = document.getElementById(formId);
  export const putFormEditElementsInputs = (item,event) => {
    const form = event.currentTarget.closest("form");
    let IdEdit=null;
    if (form) {
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton?submitButton.innerText="Editar":null;
      
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    Object.keys(item).forEach((key) => {
      let element = form.elements[key];
  
      if(element){
       if (element.type === 'date' ||element.type === 'text') {
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
        if(!isNaN(item[key]) && parseInt(Number(item[key])) == item[key] && !isNaN(parseInt(item[key], 10))){
          IdEdit=item[key]
        }
      }
     
    });
    }
    return IdEdit;
  };
  
  
  
  