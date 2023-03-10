FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
  -g npm@9.6.1

COPY package.json .

RUN npm install 

COPY . .

CMD ["node", "index.js"]