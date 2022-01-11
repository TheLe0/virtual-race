import { File, Time } from '../utils';
import { Grid } from '../repository';

export default class Race {

    private readonly list :string[][];
    private readonly repository: Grid;

    constructor(filePath: string) {
        this.list = File.read(filePath);
        this.repository = new Grid();
    }

    public start() {
        
        if (this.list != undefined) {
            this.run();
            this.outputResults();
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