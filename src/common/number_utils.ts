export function randomRangeInt(min: number, max: number): number {
    let a = Math.floor(Math.random() * (max - min));
    return (a + min);
}