export default class Racer {
    private _name: string;
    private _racerNumber: string;
    private _speed: number;
    private _laps: number;
    private _fastestLap: number;
    private _finishTime: number;

    constructor() {
        this._speed = 0;
    }

    private averageSpeed(): number {
        return this._speed / this._laps;
    }

    public get name() {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get racerNumber() {
        return this._racerNumber;
    }

    public set racerNumber(number :string) {
        this._racerNumber = number;
    }

    public get speed() {
        return this.averageSpeed();
    }

    public set speed(speed: number) {
        this._speed += speed;
    }

    public get lap() {
        return this._laps;
    }

    public set lap(laps: number) {
        if (this._laps < laps || this._laps == undefined) {
            this._laps = laps;
        }
    }

    public get fastestLap() {
        return this._fastestLap;
    }

    public set fastestLap(lapTime :number) {
        if (lapTime < this._fastestLap || this._fastestLap == undefined) {
            this._fastestLap = lapTime;
        }
    }

    public get finishTime() {
        return this._finishTime;
    }

    public set finishTime(currentTime :number) {
        this._finishTime = currentTime;
    }
}