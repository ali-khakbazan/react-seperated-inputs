export const onlyNumber = (event: any) => {
  if (/[0-9]/.test(event.key) || event.code === "Backspace") {
    return true;
  }
  event.preventDefault();
  return false;
};
