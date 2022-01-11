import { File, Time } from '../utils';
import { Grid } from '../repository';
import { makeLogger } from '../log';

const logger = makeLogger(); 

export default class Race {

    private readonly list :string[][];
    private readonly repository: Grid;

    constructor(filePath: string) {
        this.list = File.read(filePath);
        this.repository = new Grid();
    }

    public start() :boolean {
        
        if (this.list.length > 0) {
            this.run();
            this.outputResults();
            return true;
        } else {
            logger.error({
                type: 'LOG_TYPE_1',
                message: `The analysis could not be made, the list was empty!`
            });

            return false;
        }
    }

    private run() {
        this.list.forEach(element => {
            this.repository.upsertRacer(element);
        });
    }

    private outputResults() {
        console.log("\n-------------------------      RACE    RESULTS: ------------------------------------------------------\n")
        const fastestRacer = this.repository.fastestLap();
        console.log(`Fastest Lap: ${fastestRacer.racerNumber} - ${fastestRacer.name}: ${Time.convertMillisecondsToLapTime(fastestRacer.fastestLap)}\n`);

        console.log("Position   |   Racer   |   Completed Laps     |        Fastest Lap     |       Average Speed       |       Total Time on race  |   Difference")
        this.repository.listFinalGrid().forEach(racer => {
            console.log(`${racer.position}  ${racer.racerNumber} - ${racer.name}            ${racer.laps}   ${racer.fastestLap}     ${racer.averageSpeed}   ${racer.totalDrivingTime}       ${racer.difference} `);
        });
    }
}