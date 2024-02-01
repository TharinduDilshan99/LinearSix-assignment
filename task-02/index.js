const { google } = require('googleapis');
const { authenticate } = require('@google-cloud/local-auth');

async function getBusyIntervals(calendarId, startTime, endTime) {
  const auth = await authenticate({

    //Credentials file path
    keyfilePath: 'credentials.json',
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  const calendar = google.calendar({ version: 'v3', auth });
  // console.log(calendar);

  const events = await calendar.events.list({
    calendarId,
    timeMin: startTime.toISOString(),
    timeMax: endTime.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  });
console.log(events.data);

  const busyIntervals = events.data.items.map(event => {
    const start = new Date(event.start.dateTime || event.start.date);
    const end = new Date(event.end.dateTime || event.end.date);
    return { start, end };
  });

  return busyIntervals;
}

//Calender ID
const calendarId = 'tharindudilshan021@gmail.com';

//Calender start date and end date
const startTime = new Date('2024-01-01T00:00:00Z');

//Calender end date and end time
const endTime = new Date('2025-12-31T23:59:59Z');


getBusyIntervals(calendarId, startTime, endTime)
  .then(busyIntervals => {
    console.log('Events :', busyIntervals);
  })
  .catch(error => {
    console.error('Events not found');
  });