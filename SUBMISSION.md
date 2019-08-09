## Prerequisite 
npm and node installed

## Running the project using node
### install dependencies
```npm install```
### run using node
```npm start```

## Running using docker
### build image
```
docker build -t salam0smy/guestlogix .
```
### Run the image
```
docker run -p 49160:8080 -d salam0smy/guestlogix
```
The server is running on port 49160