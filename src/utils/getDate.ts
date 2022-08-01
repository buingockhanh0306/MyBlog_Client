export function GetDate (value: string) {
  if (value !== 'undefined') {
    const d = new Date(value);
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  } else return '';
}
