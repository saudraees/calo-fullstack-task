# calo-fullstack-task
## Prerequisite
You should have a clone of this repository on your pc.

## Setup

 - Step 1
	 - Open two separate terminals. Let's call them Terminal 1 and Terminal 2
 - Step 2
	 - On terminal 1, navigate to the calo-server directory inside the cloned repository
	 - run `npm i` and all relevant packages should be installed successfully.
	 - make a copy of the *.env.default* file, rename it to *.env*, and paste your Unsplash access key inside that file.
	 - execute *npm run start* to spin up your server on port 8080.
-	Step 3
	-	On terminal 2, navigate to the calo-ui directory inside the cloned repository
	-	run `npm i` and all relevant packages should be installed successfully.
	-	execute *npm run start* to start up your client on localhost:3000.


## Time Report

- Understanding the requirements (time spent: ~1 hour)
 - Server (time spent: ~3 hours)
	 - Total time spent on the server side, including creating the REST APIs and setting up the unsplash-js SDK, was around 3 hours. I went through the unsplash documentation to understand the API flow as well.
 - UI (time spent: ~1 hour)
	 - Total time spent on the UI was around 1 hour and I used the Ant Design library as I had worked on it previously and it provided the easiest way to represent the required data.
