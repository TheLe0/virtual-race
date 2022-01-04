import { RaceEnvVars } from '../src/config';

test('read log file test', () => {
    expect(RaceEnvVars.RaceLaps).toBeDefined();
});