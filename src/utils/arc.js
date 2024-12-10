export default function arc(d, cx, cy, r, from, to, i) {
    var n = to - from
    if (i < n) {
        var radians = (i - 90) * (Math.PI / 180)
        var x = cx + Math.cos(radians) * r
        var y = cy + Math.sin(radians) * r
        d = d ? d + ' L ' : 'M '
        d += x + ' ' + y
        return arc(d, cx, cy, r, from, to, i + 1)
    }
    return d
}
