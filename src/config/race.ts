import * as dotenv from 'dotenv';

dotenv.config();

export const raceConfig = {
    RaceLaps: process.env.NUM_OF_LAPS
}