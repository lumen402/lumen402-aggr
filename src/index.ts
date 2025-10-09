import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`lumen402 aggregator running on port ${PORT}`);
});
