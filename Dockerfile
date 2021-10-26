FROM quay.io/csantanapr/node:16.12.0-alpine

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

ENV PORT=8080
EXPOSE $PORT
ARG ENV=production
ENV NODE_ENV $ENV
CMD npm run $NODE_ENV

COPY --chown=node:node package* ./
# examples don't use package-lock.json to minimize updates
RUN npm install --no-package-lock
COPY --chown=node:node . .
