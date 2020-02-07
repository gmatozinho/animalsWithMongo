# animalsWithMongo
API with nodejs+express+mongo

Needs have docker and node installed:

## How to run

docker volume create --name=mongodata
docker run --name mongodb -v mongodata:/data/db -d -p 27017:27017 mongo

npm start



