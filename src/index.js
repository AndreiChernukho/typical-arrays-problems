exports.min = function min(array) {
    if (array == undefined) return 0;
    if (array.length == 0) return 0;
    let answer = Math.min.apply(null, array)
    return answer;
}

exports.max = function max(array) {
    if (array == undefined) return 0;
    if (array.length == 0) return 0;
    let answer = Math.max.apply(null, array)
    return answer;
}

exports.avg = function avg(array) {
    if (array == undefined) return 0;
    if (array.length == 0) return 0;
    const sum = array.reduce((a, b) => a + b, 0);
    return sum/array.length;
}
