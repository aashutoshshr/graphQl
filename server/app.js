const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
// import { BookType } from './schema/schema';
// import express from 'express';
// import graphqlHTTP from 'express-graphql';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});