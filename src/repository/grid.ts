import { Racer } from '../model';
import { makeLogger } from '../log';
import { Time, Speed } from '../utils';
import { RaceEnvVars } from '../config';
import { IRacer } from '../contract';

const logger = makeLogger(); 

export default class Grid {

    private list :Array<Racer>;

    constructor() {
        this.list = new Array<Racer>();
    }

    private findRacerByNumber(number: string) :Racer {

        var pilot = undefined;

        this.list.forEach(racer => {

            if (racer.racerNumber == number) {

                pilot = racer;
                return;

            }
        }); 

        return pilot;
    }

    public fastestLap() :Racer {

        let fastestRacer = undefined;

        this.list.forEach(racer => {
            if (fastestRacer == undefined) {
                fastestRacer = racer;
            } else {
                if (racer.fastestLap < fastestRacer.fastestLap) {
                    fastestRacer = racer;
                }
            }
        });

        return fastestRacer;

    }

    public listFinalGrid() :Array<IRacer> {

        const gridList = Array<IRacer>();
        let counterPosition = 1;
        let difference = 0;

        this.list = this.list.sort((n1, n2) => {

            if (n1.finishTime > n2.finishTime && n1.finishTime != undefined) {
                return 1;
            } else if (n2.finishTime > n1.finishTime && n2.finishTime != undefined) {
                return -1;
            }

            return 0;
        });

        this.list.forEach(racer => {
     
            if (counterPosition > 1 && racer.finishTime != undefined) {
                difference += (racer.finishTime - racer.startTime);
            }

            gridList.push({
                position: counterPosition,
                name: racer.name,
                racerNumber: racer.racerNumber,
                laps: racer.lap,
                totalDrivingTime: (racer.finishTime == undefined) ? "Not completed" : Time.convertMillisecondsToHour(racer.finishTime - racer.startTime),
                fastestLap: Time.convertMillisecondsToLapTime(racer.fastestLap),
                averageSpeed: Speed.convertSpeedToString(racer.speed),
                difference: (racer.finishTime == undefined) ? "Not completed" :  Time.convertMillisecondsToHour(difference)
            });

            counterPosition++;
        });

        return gridList;
    }

    private updateRacer(pilot: Racer) :boolean {

        let registerUpdated = false;

        this.list.forEach(racer => {

            if (racer.racerNumber == pilot.racerNumber) {
                pilot = racer;
                registerUpdated = true;
                return;
            }
        }); 

        return registerUpdated;
    }

    public upsertRacer(line :string[]) :boolean {

        if (line.length == 6) {

            const cuurentTime = line[0];
            const pilotNumber = line[1];
            const pilotName = line[2];
            const lap = parseInt(line[3]);
            const lapTime = line[4];
            const currentSpeed = line[5];

            const racer = this.findRacerByNumber(pilotNumber);

            if (racer == undefined && lap == 1) {

                const newRacer = new Racer();

                newRacer.name = pilotName;
                newRacer.racerNumber = pilotNumber;
                newRacer.lap = lap;
                newRacer.speed = Speed.converSpeedToNumber(currentSpeed);
                newRacer.fastestLap = Time.convertLapTimeToMilliseconds(lapTime);
                newRacer.startTime = Time.convertHourToMilliseconds(cuurentTime) - Time.convertLapTimeToMilliseconds(lapTime);

                this.list.push(newRacer);

                return true;
            } else {

                racer.lap = lap;
                racer.speed = Speed.converSpeedToNumber(currentSpeed);
                racer.fastestLap = Time.convertLapTimeToMilliseconds(lapTime);

                if (lap == RaceEnvVars.RaceLaps) {
                    racer.finishTime = Time.convertHourToMilliseconds(cuurentTime);
                }

                this.updateRacer(racer);

                return true;
            }
        }
        else {
            console.log(line);
            logger.error({
                type: 'LOG_TYPE_1',
                message: `The line is not in the correct format: ${line}`
            });
        }

        return false;
    }

}