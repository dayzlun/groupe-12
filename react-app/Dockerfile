FROM node:10.16.3 AS build 

COPY . /code/
WORKDIR /code

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=build /code/index.html /usr/share/nginx/html/index.html
COPY --from=build /code/css /usr/share/nginx/html/css
COPY --from=build /code/dist /usr/share/nginx/html/dist

EXPOSE 80
