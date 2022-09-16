export const convertMinutesToHourString = (minutesAmount: number) => {
  const hour = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  const formattedForTwoNumbers = (num: number) => String(num).padStart(2, "0");

  return `${formattedForTwoNumbers(hour)}:${formattedForTwoNumbers(minutes)}`;
};
