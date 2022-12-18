FROM node

WORKDIR usr/src/challenge

COPY . .

EXPOSE 4000
 
RUN npm i && npm run build

CMD [ "node", "dist/index.js" ]