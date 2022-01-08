import { RaceEnvVars } from '../config';

export default class Lap {
    public static isFinalLap(currentLap: number) :boolean {

        if (RaceEnvVars.RaceLaps == currentLap) {
            return true;
        }

        return false;
    }
}