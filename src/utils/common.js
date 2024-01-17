/**
 *
 * @param {*} weatherData
 * This returns the day of the week and the formatted date in the format day/month/year
 */

export function getDayAndDate(weatherData) {
  const timezoneOffsetInSeconds = weatherData.timezone;
  const currentTimeInMilliseconds = weatherData.dt * 1000;
  const targetTimeInMilliseconds =
    currentTimeInMilliseconds + timezoneOffsetInSeconds * 1000;

  const targetDate = new Date(targetTimeInMilliseconds);
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(targetDate);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(targetDate);

  return `${dayOfWeek}, ${formattedDate}`;
}

/**
 *
 * @param {*} string
 * Returns a string where only the first letter of the string is capitalized
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
