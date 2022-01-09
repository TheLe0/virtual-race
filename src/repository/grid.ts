import { Racer } from '../model';
import { makeLogger } from '../log';
import { Time, Speed } from '../utils';
import { RaceEnvVars } from '../config';

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
            logger.error({
                type: 'LOG_TYPE_1',
                message: `The line is not in the correct format: ${line}`
            });
        }

        return false;
    }

}