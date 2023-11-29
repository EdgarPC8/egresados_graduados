

export function reorderDate(dateText) {
  if(dateText){
    const arrayDate = dateText.split('-');
    return `${arrayDate[2]?arrayDate[2]:""}-${arrayDate[1]?arrayDate[1]:""}-${arrayDate[0]?arrayDate[0]:""}`
  }else{

    return null;
  }
}
