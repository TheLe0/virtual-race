export default class Speed {

    public static converSpeedToNumber(speed: string) :number {

        speed = speed.replace(",", ".");

        return parseFloat(speed);
    }

    public static convertSpeedToString(speed: number) :string {

        const speedFormated = String(speed).replace(".", ",");

        return speedFormated;
    }
}