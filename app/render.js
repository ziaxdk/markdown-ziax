var m = require('mithril');
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();

//   var input = document.querySelector('#input');
//   var output = document.querySelector('#output');
//   var result = md.render(input.value);
//   output.innerHTML = result;


// console.log(m)

var Demo = {
  //controller
  controller: function() {
    let output = m.prop();
    return {
      input2: function(val) {
        output(md.render(val));
      },
      output: output
    }
  },

  //view
  view: function(ctrl) {
    return [
      m("textarea", { oninput: m.withAttr("value", ctrl.input2) }),
      m("div", m.trust(ctrl.output()) )
    ]
  }
};


//initialize
m.mount(document.body, Demo);