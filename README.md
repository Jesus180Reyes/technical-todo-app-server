# Tecnical Test App Server

### To run this server you will need to make the followings steps:

* **Step 1:** Install Dependencies using command ```npm install```
* **Step 2:** Install Docker on your PC: [Offical Docker Web Page ](https://www.docker.com/)
* **Step 3:** Copy the ```example.env``` and rename it to ```.env```
* **Step 4:** Add the credentials on ```.env``` file
* **Step 5:** On your command terminal (CMD) run this command: ```docker compose up -d```  this will install the Postgres DB on your PC 
* **Step 6:** Run the Server on Local: ```npm start```
* **Step 7:** Go to ```localhost:8080``` on Browser example: ```Google Chrome```
* **Step 8:** Go to ```localhost:80``` on Browser to manage the ```Postgres``` Database
* **Step 9:** Open the ```routes.md``` file to see all the endpoints of this Server

## Notes:
When you wanna to run ```TODOS Endpoints``` you will need to add JWT to **Headers** ```x-token: JWT```
### Stop Docker Container
If You wanna stop the **Docker container** you can run this command: ```docker compose down -v```
