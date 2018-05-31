FROM node:8

RUN npm install -g npm
RUN npm install -g create-react-app

ENTRYPOINT while true; do echo hello world; sleep 1; done
