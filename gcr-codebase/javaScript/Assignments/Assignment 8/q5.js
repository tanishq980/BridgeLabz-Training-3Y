// Q5 Ride-Sharing Application
class User { constructor(name,rating) { this.name=name; this.rating=rating; } }
class Driver extends User {
  constructor(name,rating,vehicle,vehicleNumber) { super(name,rating); this.vehicle=vehicle; this.vehicleNumber=vehicleNumber; }
}
class Trip {
  constructor(fromLocation,toLocation,distance) { this.fromLocation=fromLocation; this.toLocation=toLocation; this.distance=distance; }
  calculateFare() {
    if(this.distance===undefined||this.distance===null||!Number.isFinite(this.distance)||this.distance<0)
      throw new Error("Distance must be a valid non-negative number.");
    return 50+this.distance*12; // Rs. 50 base fare + Rs. 12 per km
  }
}
const driver=new Driver("Rahul",4.8,"Sedan","UP-XX-1234");
console.log("Driver:",driver.name,"Rating:",driver.rating,"Vehicle:",driver.vehicle);
try { console.log("Fare: Rs.",new Trip("Station","Mall",8).calculateFare()); }
catch(e) { console.error(e.message); }
try { console.log(new Trip("A","B",-2).calculateFare()); }
catch(e) { console.error("Invalid trip:",e.message); }
