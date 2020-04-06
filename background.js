// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

chrome.commands.onCommand.addListener(function(command) {
  //console.log(command);
  //var event = {};
  //if (command === "ctrl-p") {
  //  event = {
  //    key: "p",
  //    ctrlKey: true,
  //    shiftKey: false,
  //    altKey: false,
  //    metaKey: false,
  //    repeat: false,
  //    isComposing: false,
  //    charCode: 0,
  //    keyCode: 80
  //  };
  //} else if (command === "ctrl-n") {
  //  event = {
  //    key: "n",
  //    ctrlKey: true,
  //    shiftKey: false,
  //    altKey: false,
  //    metaKey: false,
  //    repeat: false,
  //    isComposing: false,
  //    charCode: 0,
  //    keyCode: 78
  //  };
  //} else if (command === "ctrl-t") {
  //  event = {
  //    key: "t",
  //    ctrlKey: true,
  //    shiftKey: false,
  //    altKey: false,
  //    metaKey: false,
  //    repeat: false,
  //    isComposing: false,
  //    charCode: 0,
  //    keyCode: 84
  //  };
  //}
// https://stackoverflow.com/questions/17567624/pass-a-parameter-to-a-content-script-injected-using-chrome-tabs-executescript 
 chrome.tabs.executeScript(null, {
   code: `var command = "${command}"`
 }, function(){
   chrome.tabs.executeScript(
     null,
     {file: "content.js"}
     //function(results){
     //  console.log(result)
     //}
   );
 });
  //chrome.tabs.executeScript(
  //  null,
  //  {code: "var x = " + JSON.stringify(document.) + "; x"}, 
  //  function(result){
  //     var event = {
  //       key: "n",
  //       ctrlKey: true,
  //       shiftKey: false,
  //       altKey: false,
  //       metaKey: false,
  //       repeat: false,
  //       isComposing: false,
  //       charCode: 0,
  //       keyCode: 78
  //     };
  //    console.log(result);
  //    var keyEvent = new KeyboardEvent('keydown', event); 
  //    //document.dispatchEvent(keyEvent);
  //    //alert(result[0])
  //  });
});
