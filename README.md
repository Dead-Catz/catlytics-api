
# catlytics-api
Dead Cats Analytics Soloution. This Project's Main Purpose is to check data against Firebase/Google Analytics/Game Analytics or other analytics soloutions
as a good in-house analytics soloution.

![alt text](https://media.giphy.com/media/603cLZVdYomSgIBhB0/giphy.gif "Logo Title Text 1")

## Installation Guide:
- Clone repo to target machine with docker installed.
- Edit docker-compose.yml file to match your needs.
- docker compose up -d

## Main Entities:
This project has 2 main entities.Events and projects.Each event belongs to a project.

    interface MyEvent{
      ID : number;
      createdAt : DateTime;
      projectToken: string;
      eventName: string;
      deviceID?: string;
      userID?: string;
      parameters?: any;
      happenedAt?: string;
    }
    interface Project{
      name : string;
      accessToken : string;
    } 