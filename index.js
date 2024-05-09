import * as Gluon from '@gluon-framework/gluon';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

console.log("Opening ActivityWatch")
const ActivityWatch = await Gluon.open('http://localhost:5600/#/timeline', {allowHTTP: true, onLoad: function() {
	console.log("Placing ActivityWatch")
	ActivityWatch.controls.show({left: -1902, top: -740, width: 2576, height: 700})
}})
console.log("Opening Clockify")
const Clockify = await Gluon.open('https://app.clockify.me/tracker', {onLoad: function() {
	console.log("Placing Clockify")
	Clockify.controls.show({left: -1902, top: -1440, width: 2576, height: 700})
}});
console.log("Done")
