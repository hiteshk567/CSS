class TV_class {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    increaseVolume() {
        if(this.volume < 100) {
            this.volume += 1;
        } else {
            console.log("Maximum volume is 50");
        }
    }
    decreaseVolume() {
        if(this.volume > 0) {
            this.volume -= 1;
        } else {
            console.log("Minimum volume is 0");
        }
    }
    setChannel(channelNumber) {
        if(channelNumber > 0 && channelNumber <= 50) {
            this.channel = channelNumber;
        } else {
            console.log("Please select a channel between 0 and 50");
        }
    }
    resetTv() {
        this.channel = 1;
        this.volume = 50;
    }
    getStatus() {
        console.log(this.brand + " at channel " + this.channel + " , volume " + this.volume);
    }
}

let obj = new TV_class("Panasonic");
obj.getStatus();
obj.increaseVolume();
obj.getStatus();
obj.decreaseVolume();
obj.decreaseVolume();
obj.decreaseVolume();
obj.decreaseVolume();
obj.getStatus();
obj.resetTv();
obj.getStatus();

class LED_TV extends TV_class {
    constructor(name) {
        super(name);
        this.thickness = "40inches";
        this.energyUsage = "100W";
        this.refreshRate = 1000;
        this.backLight = "ON";
    }
    getAdditionalFeature() {
        console.log("Thickness: " + this.thickness);
        console.log("Energy Usage: " + this.energyUsage);
        console.log("Refresh rate: " + this.refreshRate);
        console.log("Back Light: " + this.backLight);
    }
}

class PLASMA_TV extends TV_class {
    constructor() {
        super();
        this.thickness = "60inches";
        this.energyUsage = "200W";
        this.refreshRate = 2000;
        this.backLight = "ON";
    }
    getAdditionalFeature() {
        console.log("Thickness: " + this.thickness);
        console.log("Thickness: " + this.energyUsage);
        console.log("Thickness: " + this.refreshRate);
        console.log("Thickness: " + this.backLight);
    }
}
let obj1 = new LED_TV("BPL");
obj1.getStatus();
obj1.getAdditionalFeature();