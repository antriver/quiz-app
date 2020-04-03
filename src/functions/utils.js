/**
 * @return {number}
 */
const generateId = () => {
    return Date.now() + Math.round((Math.random() * 10000));
};

/**
 * @param {object} obj
 * @param {object} data
 */
const hydrate = (obj, data) => {
    Object.keys(data)
        .forEach((key) => {
            if (obj.hasOwnProperty(key)) {
                obj[key] = data[key];
            }
        });
};

module.exports = {
    generateId,
    hydrate
};
