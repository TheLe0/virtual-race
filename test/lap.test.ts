import { Lap } from '../src/utils';
import { RaceEnvVars } from '../src/config';

test('read log file test', () => {
    expect(Lap.isFinalLap(RaceEnvVars.RaceLaps)).toBe(true);
});

test('file not exists prevent exception test', () => {
    expect(Lap.isFinalLap(RaceEnvVars.RaceLaps - 1)).toBe(false);
});