FROM node:10.16-alpine

COPY . /api/
WORKDIR /api

RUN npm i
RUN npm run build-js
CMD ["node", "src/api.js"]
