FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .

CMD ["yarn", "start:dev"]