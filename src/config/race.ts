import * as dotenv from 'dotenv';

dotenv.config();

export const raceConfig : {
    readonly RaceLaps: number
}= {
    RaceLaps: parseInt(process.env.NUM_OF_LAPS)
}