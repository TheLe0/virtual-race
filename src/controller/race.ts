import { File } from '../utils';
import { Grid } from '../repository';
import { makeLogger } from '../log';
import { ConsoleOutputPrint } from '../view';

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
        console.log(ConsoleOutputPrint.printHeader());

        const fastestRacer = this.repository.fastestLap();
        console.log(ConsoleOutputPrint.fastestLap(fastestRacer));
        console.log(ConsoleOutputPrint.printFinalGrid(this.repository.listFinalGrid()));
    }
}