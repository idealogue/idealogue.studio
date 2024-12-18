export function arc(
    d: string,
    cx: number,
    cy: number,
    r: number,
    from: number,
    to: number,
    i: number
): string {
    const n = to - from

    if (i < n) {
        const radians = (i - 90) * (Math.PI / 180)

        const x = cx + Math.cos(radians) * r

        const y = cy + Math.sin(radians) * r

        const newD = `${d ? `${d} L` : 'M'} ${x} ${y}`

        return arc(newD, cx, cy, r, from, to, i + 1)
    }

    return d
}
