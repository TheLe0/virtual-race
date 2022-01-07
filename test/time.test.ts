import { Time } from '../src/utils';

test('convert laptime to milliseconds test', () => {

    expect(Time.convertLapTimeToMilliseconds("1:02.852")).toBe(62852);
});

test('convert milliseconds to laptime test', () => {

    expect(Time.convertMillisecondsToLapTime(62852)).toBe("1:02.852");
});