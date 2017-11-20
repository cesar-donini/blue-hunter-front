FROM node

MAINTAINER César Donini

RUN mkdir -p /usr/blue-hunter-front

WORKDIR /usr/blue-hunter-front

COPY package.json /usr/blue-hunter-front

RUN npm install

COPY . /usr/blue-hunter-front

EXPOSE 4200

CMD ["npm", "start"]