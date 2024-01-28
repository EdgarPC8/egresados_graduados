import {
  flexRender,
} from "@tanstack/react-table";

export function reorderDate(dateText) {
  if(dateText){
    const arrayDate = dateText.split('-');
    return `${arrayDate[2]?arrayDate[2]:""}-${arrayDate[1]?arrayDate[1]:""}-${arrayDate[0]?arrayDate[0]:""}`
  }else{

    return null;
  }
}
export function renderCellContent(cellContent, context) {
  // Obtener el valor real de cellContent, especialmente si es una función
  const contentValue = typeof cellContent === 'function' ? cellContent(context) : cellContent;

  // Convertir contentValue a cadena y eliminar espacios en blanco al inicio y al final
  const contentAsString = String(contentValue).trim();

  // Verificar si es una fecha válida en formato yyyy-mm-dd
  const isDateValid = /^\d{4}-\d{2}-\d{2}$/.test(contentAsString);


  if (isDateValid) {
    // Reformatear la fecha a dd-mm-yyyy
    const [year, month, day] = contentAsString.split('-');
    return `${day}-${month}-${year}`;
  } else {
    // Si no es una fecha válida, mostrar el texto tal cual
    return flexRender(cellContent, context);
  }
}
export function reorderDateString(dateString) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (dateRegex.test(dateString)) {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  } else {
    // La cadena no es una fecha válida en el formato esperado
    return dateString;
  }
}







