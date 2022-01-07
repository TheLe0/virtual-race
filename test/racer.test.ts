import { Racer } from '../src/model';

let driver :Racer;

beforeEach(() => {
    driver = new Racer();
})

test('average speed test', () => {

    driver.laps = 4;
    driver.speed = 360;

    expect(driver.averageSpeed()).toBe(90);
});

test('fastest lap defined test', () => {

    driver.fastestLap = 120;

    driver.isFastestLap(109);

    expect(driver.fastestLap).toBe(109);
});

test('fastest lap undefined test', () => {

    driver.isFastestLap(109);

    expect(driver.fastestLap).toBe(109);
});

