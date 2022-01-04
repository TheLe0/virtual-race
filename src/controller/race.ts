import { File } from '../utils';

export default class Race {

    private readonly list :string[][];

    constructor() {
        this.list = File.read("data/log.txt");
    }

    public start() {
        
    }
}