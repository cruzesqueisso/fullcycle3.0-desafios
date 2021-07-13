FROM node:14.15.4-alpine3.12
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
ENV APP_PORT=3001
CMD npm run start -- -p $APP_PORT