export const getRandomColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}20`;
};
