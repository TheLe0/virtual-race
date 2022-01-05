import { File } from '../utils';

export default class Race {

    private readonly list :string[][];

    constructor(filePath: string) {
        this.list = File.read(filePath);
    }

    public start() {
        
    }
}