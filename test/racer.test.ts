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

    driver.name = "F.MASSA";
    driver.racerNumber = "038";
    driver.lap = 4;
    driver.speed = Speed.converSpeedToNumber("360,000");
    driver.fastestLap = Time.convertLapTimeToMilliseconds("1:02.852");
    driver.fastestLap = Time.convertLapTimeToMilliseconds("1:07.852");
    driver.finishTime = Time.convertHourToMilliseconds("23:49:08.277");
    driver.startTime = Time.convertHourToMilliseconds("23:49:08.277");

    expect(driver.name).toBe("F.MASSA");
    expect(driver.racerNumber).toBe("038");
    expect(driver.lap).toBe(4);
    expect(driver.speed).toBe(90);
    expect(driver.fastestLap).toBe(62852);
    expect(driver.finishTime).toBe(85748277);
    expect(driver.startTime).toBe(85748277);
});
