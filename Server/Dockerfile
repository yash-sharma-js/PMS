FROM node:latest  
WORKDIR /home/PMS
COPY . /home/PMS/
RUN npm install
RUN npm run build
EXPOSE 8080
RUN apt-get update && apt-get install -y iputils-ping
CMD ["npm", "start"]



