Building Srikanth Narra Lantronix Cloud Engineer Test


## Requirements
* I used Node 15+ version, NPM, MongoDB, bcrypt, jsonwebtoken, morgan & swagger-ui-express

## Installation
* Clone this repo: ``` git clone https://github.com/srikanthgkp463/register_login__node_api.git ```
* Install dependecies: ``` npm install ```
* Install nodemon: ``` npm install nodemon -g ```
* Run the application: ``` node server.js  ```
## Documentation
* Open http://localhost:4001/api-docs/ in browser this will display swagger docs for this api's
* For registration POST: http://localhost:4001/user/register
    ```
                         {  username: "string",
                            firstname: "string",
                            lastname: "string",
                            email: "string", 
                            password: "string" 
                          }
    
    ```

* For login POST : http://localhost:4001/user/login
    ```
                         {  username: "string",
                            password: "string" 
                          }
    
    ```
