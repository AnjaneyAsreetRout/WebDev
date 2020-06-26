function createCircle(radius) {
    return {
    radius,
    draw = function() {
        console.log('draw');
    }
    };
}
const circle = createCircle(2);

function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(2);