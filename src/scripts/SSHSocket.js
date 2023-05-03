function initSSHWebSocket(moduleId, port) {
  const webSocket = new WebSocket("wss://<ws-server-endpoint>");

  webSocket.onerror = function (event) {
    console.log("ssh websocket => Error", event);
  };

  webSocket.onopen = function (event) {
    console.log("ssh websocket => Open", event);
    const msg = '{"moduleid":' + moduleId + ',"sshport":' + port + "}";
    webSocket.send(msg);
    console.log("ssh websocket => Requested");
  };
  webSocket.onclose = function (event) {
    console.log("ssh websocket => Closed", event);
  };

  webSocket.onmessage = function (event) {
    console.log("ssh websocket => Message", event.data);
  };
}
function initSSH(port, moduleId) {
  initSSHWebSocket(moduleId, port);
}
window.initSSH = initSSH;
