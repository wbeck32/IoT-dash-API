const DashButton = require('dash-button');
const req = require('superagent');

const DASH_BUTTON_MAC_ADDRESS = 'a0:3b:e3:00:e3:6d';

let button = new DashButton(DASH_BUTTON_MAC_ADDRESS);



let subscription = button.addListener(async () => {
  const call = await req.post('https://maker.ifttt.com/trigger/buttonPress/with/key/rtQz14Pu2DyK8XicDY300')
  console.log(111, call)
});

// Later, if you want to remove the listener do so with the subscription:
subscription.remove();