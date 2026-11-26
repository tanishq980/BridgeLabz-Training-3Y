// Q8 Movie Ticket Booking and Prototype Chain
class MovieTicket {
  constructor(movieName,seatNo,price) { this.movieName=movieName; this.seatNo=seatNo; this.price=price; }
}
class OnlineTicket extends MovieTicket {
  constructor(movieName,seatNo,price,convenienceFee) { super(movieName,seatNo,price); this.convenienceFee=convenienceFee; }
  getTotalAmount() { return this.price+this.convenienceFee; }
}
MovieTicket.prototype.printTicket=function() {
  console.log("----- MOVIE TICKET -----");
  console.log("Movie:",this.movieName,"Seat:",this.seatNo,"Price: Rs.",this.price);
  if("convenienceFee" in this) console.log("Fee: Rs.",this.convenienceFee,"Total: Rs.",this.getTotalAmount());
};
const ticket1=new OnlineTicket("The Space Journey","A10",250,30);
const ticket2=new OnlineTicket("Mystery Night","B05",300,35);
ticket1.printTicket(); ticket2.printTicket();
console.log("Prototype inherited:",MovieTicket.prototype.isPrototypeOf(ticket1));
