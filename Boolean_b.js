function isLeapYear(year) {
  var kiemtra = null;
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        kiemtra = true;
      }
    } else kiemtra = true;
  } else kiemtra = false;
  console.log(kiemtra);
}
