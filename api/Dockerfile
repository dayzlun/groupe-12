FROM node:10.16-alpine

COPY . /api/
WORKDIR /api

ENV DB_USER
ENV DB_HOST
ENV DB_NAME
ENV DB_USER_PASSWORD
ENV DB_PORT

RUN npm i
RUN npm run build-js
CMD ["node", "src/api.js"]
