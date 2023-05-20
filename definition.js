Blockly.Blocks["xbot_dht20_measure"] = {
  init: function() {
    this.jsonInit({
      message0: "cập nhật giá trị cảm biến nhiệt độ độ ẩm",
      args0: [
      ],
      previousStatement: null,
      nextStatement: null,
      colour: "#CC6600",
      tooltip: "",
      helpUrl: ""
    });
  },
  getDeveloperVars: function() {
    return ['xbot_dht20_measure'];
  }
};

Blockly.Python["xbot_dht20_measure"] = function(block) {
  // TODO: Assemble Python into code variable.
    var code = "xbotdht20.read_dht20()\n";
  return code;
};

Blockly.Blocks["xbot_dht20_read"] = {
  init: function() {
    this.jsonInit({
      message0: "đọc giá trị %1 cảm biến DHT20 cổng %2 ",
      args0: [
        {
          type: "field_dropdown",
          name: "DATA",
          options: [
            ["nhiệt độ", "TEMP"],
            ["độ ẩm", "HUMID"]
          ]
        },
        {
            type: "field_dropdown",
            name: "port",
            options: [
                ["2","2"],
                ["3","3"],
                ["4","4"],
                ["5","5"],
                ["6","6"]


            ]
        },
      ],
      output: null,
      colour: "#CC6600",
      tooltip: "",
      helpUrl: ""
    });
  }
};

Blockly.Python["xbot_dht20_read"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_dht20'] = 'from xbot_dht20 import DHT20';
  //Blockly.Python.definitions_['import_dht20_create'] = 'from lcd_1602 import LCD1602';
  var code = "";
  if (dropdown_data == "TEMP")
    code = "xbotdht20.dht20_temperature()";
  else 
    code = "xbotdht20.dht20_humidity()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
