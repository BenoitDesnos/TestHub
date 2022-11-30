export const saveResults = (key, results) => {
  const stringifiedResults = JSON.stringify(results);

  if (localStorage.getItem(key)) {
    if (localStorage.getItem(key) >= stringifiedResults) {
      return false;
    } else {
      localStorage.setItem(key, stringifiedResults);
      return true;
    }
  } else {
    localStorage.setItem(key, stringifiedResults);
    return true;
  }
};
