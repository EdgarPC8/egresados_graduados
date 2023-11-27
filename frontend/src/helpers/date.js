

export function reorderDate(dateText) {
  const arrayDate = dateText.split('-');
  return `${arrayDate[2]}-${arrayDate[1]}-${arrayDate[0]}`
}
