import moment from 'moment'

export const timeago = (date) => {
  const duration = moment.duration(moment().diff(moment(date)));
  const seconds = duration.asSeconds();
  const minutes = duration.asMinutes();
  const hours = duration.asHours();
  const days = duration.asDays();
  const weeks = duration.asWeeks();
  const months =duration.asMonths();

  if (seconds <= 60) return `${Math.floor(seconds)} seconds ago`;
  if (minutes <= 60) return `${Math.floor(minutes)} minutes ago`;
  if (hours <= 24) return `${Math.floor(hours)} hours ago`;
  if (weeks < 2) return `${Math.floor(days)} days ago`;
  if (months >= 1) return `${Math.floor(months)} months ago`;
  return `${Math.floor(weeks)} weeks ago`;
}
