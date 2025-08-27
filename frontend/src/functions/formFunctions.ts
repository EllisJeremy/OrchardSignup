// border color if error
export const getBorderColorSimple = (
  firstEdit1: boolean,
  compare1: boolean,
  emailUsed: boolean,
) => {
  // error
  if (compare1 === false || emailUsed) {
    return "rgb(255, 53, 53)";
  }
  // correct
  if (!firstEdit1) {
    return "hsl(138, 100%, 40%)";
  }
  // normal
  return "";
};
