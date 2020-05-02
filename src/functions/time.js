const pad = (num, length) => {
    const s = '000000000' + num;
    return s.substr(s.length - length);
};

const millisecondsToString = (ms) => {
    let remainder;
    const milli = ms % 1000;
    remainder = ms / 1000;
    const seconds = Math.floor(remainder % 60);
    remainder /= 60;
    const minutes = Math.floor(remainder);

    return pad(minutes, 2) + ':' + pad(seconds, 2) + ':' + pad(milli, 3);
};

const millisecondsToSecondsString = (ms) => {
    const seconds = Math.ceil(ms / 1000);

    return seconds + ' second' + (seconds > 1 ? 's' : '');
};

module.exports = {
    millisecondsToString,
    millisecondsToSecondsString
};
