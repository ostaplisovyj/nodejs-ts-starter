# base image
FROM node:10.16.0

ENV NODE_ENV=development

ENV user node

COPY --chown=node:node ./package.json ./package-lock.json /src/app/

WORKDIR /src/app/

RUN echo "NODE_ENV=$NODE_ENV" && npm install

# add app
COPY . /src/app

# start app
CMD npm start
