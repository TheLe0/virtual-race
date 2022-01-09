import { File } from '../utils';
import { Grid } from '../repository';

export default class Race {

    private readonly list :string[][];
    private readonly repository: Grid;

    constructor(filePath: string) {
        this.list = File.read(filePath);
        this.repository = new Grid();
    }

    public start() {
        
    }
}