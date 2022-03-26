function getDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  return `${year}-${month + 1}-${day}`;
}

function getTime() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hour = currentDate.getHours();
  return `${hour}:${minutes}:${seconds}`;
}

module.exports = { getDate, getTime };
