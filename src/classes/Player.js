const { hydrate } = require('../funcs');

class Player {
    constructor(data = {}) {
        this.id = null;
        this.name = '';

        this.joinedAt = new Date();
        this.rejoinedAt = new Date();
        this.active = true;
        this.leftAt = null;

        this.websocketId = null;

        this.score = 0;

        hydrate(this, data);
    }
}

module.exports = Player;
