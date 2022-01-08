import { Time } from '../src/utils';

test('convert laptime to milliseconds test', () => {

    expect(Time.convertLapTimeToMilliseconds("1:02.852")).toBe(62852);
});

test('convert milliseconds to laptime test', () => {

    expect(Time.convertMillisecondsToLapTime(62852)).toBe("1:02.852");
});

test('convert hour to milliseconds test', () => {

    expect(Time.convertHourToMilliseconds("23:49:08.277")).toBe(85748277);
});

test('convert milliseconds to hours test', () => {

    expect(Time.convertMillisecondsToHour(85748277)).toBe("23:49:08.277");
});

