let gapi = window.gapi;
let CLIENT_ID = "498119837713-4j2katavjoaenf53aq64cinj642pnvv3.apps.googleusercontent.com";
let API_KEY = "sbG-TJbw1La6gPZAnU7t1Mgp";
let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
let SCOPES = "https://www.googleapis.com/auth/calendar.events";
let events = [];

export const getCalendarEvents = async() => {

    gapi.load('client:auth2', () => {        

        gapi.client.init({
            apikey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
        });

        gapi.client.load('calendar', 'v3');
        gapi.auth2.getAuthInstance().signIn()
            .then(() => {

                gapi.client.calendar.events.list({
                    'calendarId': 'primary',
                    'timeMin': (new Date()).toISOString(),
                    'showDeleted': false,
                    'singleEvents':true,
                    'maxResults': 10,
                    'orderBy': 'startTime'
                }).then(response => {
                    const data = response.result.items;                    
                    events = data.map( event => {
                        return {
                            id: event.id,
                            link: event.htmlLink,
                            title: event.summary,
                            locaion: event.location,
                            date: event.start.dateTime,
                            status: event.status
                        };
                    })   

                }).catch((e) => {
                    console.log(e);
                });
                
            }).catch((e) => {
                console.log(e);
            });
    })

    return events;
}
