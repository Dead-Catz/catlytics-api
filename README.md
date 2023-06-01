
# catlytics-api
Dead Cats Analytics Soloution. This Project's Main Purpose is to check data against Firebase/Google Analytics/Game Analytics or other analytics soloutions
as a good in-house analytics soloution.

![alt text](https://media.giphy.com/media/603cLZVdYomSgIBhB0/giphy.gif "Logo Title Text 1")



## Setup Guide
- Clone this repo on one of your servers.
- npm install (Tested with node 16)
- Create a database in postgresql
- Create a folder called storage inside that folder create a file project-tokens.json this file is an array of strings ex : ["project1",project2"]
## How to run the api

**If you're using Docker:**

Use Dockerfile-main to create an image then run the container

You can check `docker-restart-sample.sh`

**If you're using pm2:**

`sudo chmod u+x restart-pm2.sh`

`sudo ./restart-pm2.sh`

**If you dont want to use pm2:**

`npm run build`

`node dist/index.js or npm run serve`
## Visualizing Data and getting reports
I personally recommend using metabase.

https://www.metabase.com/

## Postman Collection:
There are 2 most important routes in this project and postman collection for them is available [catlytics.postman_collection.json](https://github.com/Dead-Catz/catlytics-api/blob/main/catlytics.postman_collection.json).
Read source code If you need to use CRUD api routes.

## Data Structure
There are 2 main entities in this system: Events And Users. Using Users is totally optional. If u're developing a game/app/site that has no Authentication System you can Use this system's Users as a way of identefying your users. (or you can just send deviceId or ip as userId field to Events)
### Events:

	  projectToken : string // If you're using one api instance for multiple projects.
	  userId : string
	  deviceId : string //you can also send ip for websites.
	  eventName : string //recommended naming convention =>page:part:part:action_name ex: main_menu:settings_dialog:mute_sounds
	  parameters : JSON Object //can be used to store parameters of user action or event . ex:  in_game:mage:use_ability { "spell_name" : "freeze" } 
	  happenedAt : string //date-time format is whatever u want.
 

**createdAt vs happenedAt:**
Some Games or apps may need to work offline so they save events locally then send them to server later. createdAt is when the event was submitted to server while happenedAt is set by clients.
