FROM node:10.16-alpine

COPY . /api/
WORKDIR /api

ENV DB_USER toto
ENV DB_HOST toto.sigl-arla.fr
ENV DB_NAME toto
ENV DB_USER_PASSWORD tutu
ENV DB_PORT 5432

RUN npm i
RUN npm run build-js
CMD ["node", "src/api.js"]
