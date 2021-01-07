FROM node

ENV NODE_ENV="production"

WORKDIR /usr/src/app

COPY package*.json app.js ./
COPY bin/ bin/
COPY controllers/ controllers/
COPY models/ models/
COPY public/ public/
COPY routes/ routes/
COPY tests/ tests/
COPY views/ views/

RUN ls

RUN npm install --unsafe-perm

EXPOSE 3000

CMD [ "npm", "start" ]