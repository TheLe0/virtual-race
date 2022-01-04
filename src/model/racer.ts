export default class Racer {
    public name: string;
    public laps: number;
    private speed: number;
    public fastestLap: number;
    public position: number;
    public finishTime: number;

    public averageSpeed(): number {
        return this.speed / this.laps;
    }
}