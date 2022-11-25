
function distanceFromHqInBlocks(someValue) {
    distanceFromHqInBlocks = Math.abs(42 - someValue);
    return distanceFromHqInBlocks;
}
function distanceFromHqInFeet(FeetDistance){
    distanceFromHqInBlocks();
    if (FeetDistance === 43){
        return 264
    }else if (FeetDistance === 50){
        return 2112
    }else if (FeetDistance === 34){
        return 2112
    }
    
}

function distanceTravelledInFeet(start, destination) {
    distanceTravelledInFeet = Math.abs((start - destination) * 264)
    return distanceTravelledInFeet;
}

function calculatesFarePrice(start, destination) {
    let distanceFromBlock = Math.abs(start - destination) * 264;
    let fare = 0;
    let distancepast400 = distanceFromBlock - 400;
    if (distanceFromBlock <= 4000){
        fare = 0;
    }else if (distanceFromBlock > 400 && distanceFromBlock < 2000){
        fare = 0.02 * distancepast400;
    }else if (distanceFromBlock > 2000 && distanceFromBlock < 2500){
        fare = 25;
    }else {
        fare = "cannot travel that far";
        return fare;
    }
}       