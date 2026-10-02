function convertIndianDate(dateStr, targetCountry) {
  const [day, month, year] = dateStr.split('/');

  if (!day || !month || !year) return 'Invalid Date';

  switch (targetCountry.toLowerCase()) {
    case 'us':
      return `${month}/${day}/${year}`; // MM/DD/YYYY

    case 'japanese':
      return `${year}/${month}/${day}`; // YYYY/MM/DD

    case 'iso':
      return `${year}-${month}-${day}`; // YYYY-MM-DD

    case 'uk':
    case 'indian':
      return `${day}/${month}/${year}`; // DD/MM/YYYY

    default:
      return 'Unsupported Format';
  }
}


console.log(convertIndianDate('25/12/2023', 'us'));       // 12/25/2023
console.log(convertIndianDate('25/12/2023', 'japanese')); // 2023/12/25
console.log(convertIndianDate('25/12/2023', 'iso'));      // 2023-12-25
console.log(convertIndianDate('25/12/2023', 'indian'));   // 25/12/2023
console.log(convertIndianDate('25/12/2023', 'uk'));       // 25/12/2023

console.log(convertIndianDate('invalid-date', 'us'));     // Invalid Date
console.log(convertIndianDate('25/12/2023', 'china'));    // Unsupported Format
