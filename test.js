const ageArr = [21, 58, 8, 16, 106, 83, 42, 2, 0];

const over21Arr = ageArr.filter(age => {
  if (age >= 21) {
    console.log(age);
    return true;
  } else {
    return false;
  }
});
