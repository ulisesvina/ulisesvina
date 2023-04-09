import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2,
    oAuth2Client = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const fitness = google.fitness({ version: "v1", auth: oAuth2Client });

export const getFitnessData = async () => {
    let endTimeMillis = Date.now(),
        startTimeMillis = new Date();

    startTimeMillis.setHours(0, 0, 0, 0)

    const request = {
        auth: oAuth2Client,
        userId: 'me',
        resource: {
            aggregateBy: [{ dataTypeName: "com.google.step_count.delta" }, { dataTypeName: "com.google.calories.expended" }],
            bucketByTime: { durationMillis: 86400000 },
            startTimeMillis: startTimeMillis.getTime(),
            endTimeMillis: endTimeMillis
        }
    };

    try {
        const response = await fitness.users.dataset.aggregate(request);

        return {
            calories: response.data.bucket[0].dataset[1].point[0].value[0].fpVal,
            steps: response.data.bucket[0].dataset[0].point[0].value[0].intVal
        }
    } catch (e) {
        return {
            calories: 0,
            steps: 0
        }
    }
}
