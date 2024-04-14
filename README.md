# RAFFLE APP BACKEND

## <i>FSW Wisdom Wright</i>

### <u>To Run This Locally:</u>
1. Fork this repo.
1. Clone your fork to your machine.<br/>
   a. Click on button that says <b>CODE</b>.<br/>
b. Copy https url.<br/>
c. Create a directory for the project.<br/>
d. Run `git clone 'https url' && cd $_ `.
1. Run `npm install` to install dependencies.
1. Start the server.<br/>
a. Run `code .` to open project in code editor.<br/>
b. Run `npm start` to start the server.

Your server is now running!
Visit `http://localhost:9000` to view the API. 

### <u>METHODS And ROUTES:</u>
<b>GET</b>- `/` : Health check route to ensure your server is up and running.

<b>GET</b>- `/api/raffles` : Get all raffles that have been created.

<b>POST</b>- `/api/raffles` : Create a new raffle.

<b>GET</b>- `/api/raffles/:id` : Get raffle for specified id.

<b>GET</b>- `/api/raffles/:id/participants` : Get all participants in raffle for specified id.

<b>POST</b>- `/api/raffles/:id/participants` : Sign up participant in raffle for specified id.

<b>PUT</b>- `/api/raffles/:id/winner` : Pick winner of raffle for specified id.

<b>GET</b>- `/api/raffles/:id/winner` : Get winner of raffle for specified id.
