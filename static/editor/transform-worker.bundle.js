!function(){try{self.importScripts("https://127.0.0.1:3000/static/assets/danfo.min.js"),self.importScripts("https://127.0.0.1:3000/static/assets/textEncoder.js"),console.log("backend"),dfd.tf.setBackend("cpu")}catch(s){self.importScripts("https://cdn.jsdelivr.net/npm/danfojs@0.2.7/lib/bundle.min.js"),dfd.tf.setBackend("webgl")}self.onmessage=function(s){s.data.datas;var t=new Function(s.data.code),e=s.data.processID;try{var c=t();c instanceof Promise?c.then((function(s){postMessage({result:s,processID:e})})):self.postMessage({result:c,processID:e})}catch(s){console.log("catchError: ",s),self.postMessage({result:s.toString(),processID:e})}}}();