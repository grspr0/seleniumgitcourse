FROM node:16-bullseye-slim

RUN apt-get update && \
    apt-get install -y \
        libnss3-dev \
        libatk-bridge2.0-dev \
        libx11-xcb-dev \
        libgtk-3-dev \
        libgbm-dev \
        xvfb

WORKDIR /app
COPY package*.json ./
RUN npm install -g chromedriver --unsafe-perm=true --allow-root

COPY . .

CMD ["npm", "test"]