import Stamp from './Stamp'

var stampCollection = []

function initDataManager(){
    var stamp1 = new Stamp(
        "testStamp1",
        ,//vuosi tähän
        //boolean tähän, true/false
    );

    var stamp2 = new Stamp(
        "testStamp2",
        ,//vuosi tähän
        //boolean tähän, true/false
    );

    var stamp3 = new Stamp(
        "testStamp3",
        ,//vuosi tähän
        //boolean tähän, true/false
    );

    stampCollection.push(stamp1,stamp2,stamp3);
}

export default {stampCollection,initDataManager}