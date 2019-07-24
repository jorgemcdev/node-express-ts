import express from 'express';
const app = express();
const getYear = (date: Date): string => {
  return `${date.getFullYear()}`;
};
app.get('/', (req, res) => {
  const year = getYear(new Date());
  res.send(`Hello World ! ${year}`);
});
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});