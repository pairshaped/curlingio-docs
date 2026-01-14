import React from 'react';

/**
 * Component for displaying dynamic year examples in age calculation documentation
 *
 * Usage examples:
 * <Year/> - displays current year
 * <Year offset={2}/> - displays current year + 2
 * <BirthYear age={17}/> - calculates birth year for someone who is 17 this year
 * <BirthYear age={17} offset={2}/> - calculates birth year for someone who will be 17 in 2 years
 */

// Simple year component
export function Year({ offset = 0 }) {
  const currentYear = new globalThis.Date().getFullYear();
  return <>{currentYear + offset}</>;
}

// Birth year calculator component
export function BirthYear({ age, offset = 0 }) {
  const currentYear = new globalThis.Date().getFullYear();
  const targetYear = currentYear + offset;
  const birthYear = targetYear - age;
  return <>{birthYear}</>;
}

// Compact date component for dates like "June 30, 2026"
export function CompactDate({ month, day, offset = 0 }) {
  const currentYear = new globalThis.Date().getFullYear();
  const year = currentYear + offset;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthName = months[month - 1];
  return <>{monthName} {day}, {year}</>;
}

// Export default for backwards compatibility
export default Year;
