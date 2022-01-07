export default class Racer {
    public name: string;
    public laps: number;
    public speed: number;
    public fastestLap: number;
    public position: number;
    public finishTime: number;

    public averageSpeed(): number {
        return this.speed / this.laps;
    }

    public isFastestLap(lapTime: number) {

        if (lapTime < this.fastestLap || this.fastestLap == undefined) {
            this.fastestLap = lapTime;
        }
    }
}