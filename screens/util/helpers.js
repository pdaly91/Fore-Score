export const getSum = (arr) => {
  let sum = 0;
  for (let each of arr) {
    if (each) {
      sum += each;
    }
  }
  return sum;
};

export const getOverUnder = (scores, pars) => {
  let diff = getSum(scores) - getSum(pars);
  if (diff < 0) {
    return `${diff}`;
  } else if (diff > 0) {
    return `+${diff}`;
  } else {
    return 'E'
  }
};