const BASE_API =
  (window.location.protocol.startsWith("https") ? "wss://" : "ws://") +
  window.location.host;

export default class LiveModule {
  connectionStatus = {
    connected: false,
  };

  self = this;
  reconnectTimeout = 1000;
  reconnectTimerRef = null;
  opencb = null;
  constructor(messagecb) {
    this.messagecb = messagecb;
  }

  connect() {
    this.connection = new WebSocket(BASE_API + "/ws-endpoint");
    this.connection.onerror = (e) => {
      this.onError(e);
    };
    this.connection.onopen = () => {
      this.onOpen();
    };
    this.connection.onclose = () => {
      this.onClose();
    };
    this.connection.onmessage = (event) => {
      this.onMessage(event);
    };
  }

  reconnect() {
    this.connection.close();
    this.connect();
  }

  send(message) {
    this.connection.send(message);
  }

  sendObj(message) {
    this.send(JSON.stringify(message));
  }

  isOpen() {
    return this.connection === WebSocket.OPEN;
  }

  setMessageCb(cb) {
    this.messagecb = cb;
  }

  setOpenCb(cb) {
    this.opencb = cb;
  }

  onError(e) {
    console.log("Error", e);
    this.connectionStatus = {
      connected: false,
    };
  }

  onOpen() {
    this.connectionStatus = {
      connected: true,
    };
    this.reconnectTimeout = 1000;
    if (this.reconnectTimerRef !== null) {
      clearTimeout(this.reconnectTimerRef);
    }
    const req = { id: "--id--" };
    this.sendObj(req);
    this.opencb && this.opencb();
  }

  onMessage(event) {
    this.connectionStatus = {
      connected: true,
    };
    const message = event.data;
    // update connection status
    console.log({ message });
    this.messagecb(message);
  }

  onClose() {
    console.log("Close");
    this.connectionStatus = {
      connected: false,
    };
    // if (this.reconnectTimerRef !== null) {
    //   clearTimeout(this.reconnectTimerRef)
    // }
    // this.reconnectTimerRef = setTimeout(() => {
    //   this.reconnect()
    //   if (this.reconnectTimeout < 8000) {
    //     this.reconnectTimeout *= 2
    //   }
    // }, this.reconnectTimeout)
  }
}
