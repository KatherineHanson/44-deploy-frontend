'use strict';

const express = require('express');

express()
.use(require('morgan')('common'))
.use(express.static(`${__dirname}/build`))
.get('*', (req, res) => res.sendFile(`${__dirname}/build/index.html`))
.listen(process.env.PORT, () => {
  console.log('__SERVER_UP__', process.env.PORT);
});
