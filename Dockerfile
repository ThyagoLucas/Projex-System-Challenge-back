FROM node

WORKDIR usr/src/challenge

COPY . .

EXPOSE 4000
 
RUN npm install && build

CMD [ "node", "dist/index.js" ]