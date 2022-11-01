class uber{
    constructor(distance,price,waiting,customerwaiting){
        this.distance = distance;
        this.price = price;
        this.waiting = waiting;
        this.customerwaiting = customerwaiting;
    }
    setDistance(distance1){
        this.distance = distance1;
    }
    getTripDetails(){
        return(`the distance of the trip is ${this.distance}km with price of ${this.price}Rs with a waiting time of ${this.waiting}mins with a customer waiting time of ${this.customerwaiting}mins`)
    }
    getRate(){
        let Rate = (this.distance*this.price)+(3*this.waiting)-(2*this.customerwaiting)
        return Rate;
    }
}
let uber1 = new uber(20,12,15,10);
console.log(uber1.getRate())
console.log(uber1.getTripDetails())