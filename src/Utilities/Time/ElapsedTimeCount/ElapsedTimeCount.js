const date = new Date();

export const getElapsedYearCount = lastDate => {
  const lastDateObject = new Date(lastDate);
  return ((date-lastDateObject)/(24*60*60*1000*365)).toFixed(3);
};