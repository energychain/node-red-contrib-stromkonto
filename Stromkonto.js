module.exports = function(RED) {
    const axios = require('axios');

    function StromkontoNode(config) {
        RED.nodes.createNode(this,config);

        var node = this;
        node.on('input', async function(msg) {
          let responds = await axios.get("https://api.corrently.io/v2.0/stromkonto/balances?account="+config.account);
          msg.payload = responds.data;
          node.send(msg);
        });
    }

    RED.nodes.registerType("Stromkonto",StromkontoNode);
};
