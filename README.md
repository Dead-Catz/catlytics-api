# catlytics-api
Dead Cats Analytics Soloution. This Project's Main Purpose is to check data against Firebase/Google Analytics/Game Analytics or other analytics soloutions
as a good in-house analytics soloution.

## Setup Guide
- Clone this repo on one of your servers.
- npm install (Tested with node 16)
- Create a database in postgresql
- Create a config.js file in src folder ( template available @ src/config.default.txt)
## How to run the api
**If you're using pm2:**

`sudo chmod u+x restart-pm2.sh`

`sudo ./restart-pm2.sh`

**If you dont want to use pm2:**

`npm run build`

`node dist/index.js or npm run serve`
## Visualizing Data and getting reports
I personally recommend using metabase.

https://www.metabase.com/
