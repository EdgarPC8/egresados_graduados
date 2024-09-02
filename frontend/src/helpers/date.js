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

  // Verificar si es una fecha válida en formato yyyy-mm-dd o yyyy-mm-ddThh:mm:ss.000Z
  const isDateTimeValid = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}\.000Z)?$/.test(contentAsString);

  if (isDateTimeValid) {
    // Reformatear la fecha a dd-mm-yyyy hh:mm:ss AM/PM
    const [datePart, timePart] = contentAsString.split('T');
    const [year, month, day] = datePart.split('-');
    const formattedDate = `${day}-${month}-${year}`;
    
    if (timePart) {
      const [hours, minutes, seconds] = timePart.slice(0, -5).split(':');
      let formattedTime = '';

      // Convertir horas a formato AM/PM
      const hour = parseInt(hours, 10);
      const amPm = hour >= 12 ? 'PM' : 'AM';
      formattedTime = hour > 12 ? `${hour}:${minutes}:${seconds} ${amPm}` : `${hour}:${minutes}:${seconds} ${amPm}`;

      return `${formattedDate} ${formattedTime}`;
    } else {
      return formattedDate;
    }
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

export function getCurrentDateTime() {
  const now = new Date();
  
  // Obtener el año, mes, día, horas y minutos
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Meses comienzan en 0
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  // Formatear la fecha y hora
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  
  return formattedDateTime;
}









