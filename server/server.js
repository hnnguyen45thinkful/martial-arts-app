const express = require('express');
const http = require('http');
const axios = require('axios');

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', (req, res) => {
	const { term, longitude, latitude } = req.query;
	const baseURL = 'https://api.yelp.com/v3/businesses/search';
	axios.get(`${baseURL}?term=${term}&latitude=${latitude}&longitude=${longitude}`,
		{
			headers: { 'Authorization': 'Bearer td6fURfK5MsnOIaY3AiX8sLcLnUOCfQ4Elppd2LZs5a0xU8bxY5U46zsWZiSVWlk1OMessIuhZfpPo5pta8MowVeXUK4nkQ1rpxiSyurH_hF2k03z4B4e3Poj1XXWnYx'}
		}
	)
	.then(response => res.json(response.data))
	.catch(resp => res.status(400).send(resp.message));
});

app.listen(process.env.PORT || 9000);

module.exports = app;
