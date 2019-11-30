FROM node:12.13.1 AS build 

COPY . /code/
WORKDIR /code

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=build /code/index.html /usr/share/nginx/html/index.html
COPY --from=build /code/dist /usr/share/nginx/html/dist

EXPOSE 80
