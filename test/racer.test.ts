import { Racer } from '../src/model';
import { Time, Speed } from '../src/utils';

let driver :Racer;

beforeEach(() => {
    driver = new Racer();
})

test('average speed test', () => {

    driver.lap = 4;
    driver.speed = Speed.converSpeedToNumber("360,000");

    expect(driver.speed).toBe(90);
});

test('fastest lap defined test', () => {

    driver.fastestLap = 120;

    driver.fastestLap = 109;

    expect(driver.fastestLap).toBe(109);
});

test('fastest lap undefined test', () => {

    driver.fastestLap = 109;

    expect(driver.fastestLap).toBe(109);
});

test('Object set and get complete test', () => {

    driver.name = "038 – F.MASSA";
    driver.lap = 4;
    driver.speed = Speed.converSpeedToNumber("360,000");
    driver.fastestLap = Time.convertLapTimeToMilliseconds("1:02.852");
    driver.fastestLap = Time.convertLapTimeToMilliseconds("1:07.852");
    driver.finishTime = Time.convertHourToMilliseconds("23:49:08.277");

    expect(driver.name).toBe("038 – F.MASSA");
    expect(driver.lap).toBe(4);
    expect(driver.speed).toBe(90);
    expect(driver.fastestLap).toBe(62852);
    expect(driver.finishTime).toBe(85748277);
});
