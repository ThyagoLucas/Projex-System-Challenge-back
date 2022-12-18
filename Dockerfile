FROM node

WORKDIR usr/src/challenge

COPY . .

EXPOSE 4000
 
RUN npm i


CMD [ "npm", "start" ]