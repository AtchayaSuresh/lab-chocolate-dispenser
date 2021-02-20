var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color

function addChocolates(chocolates,color, count)
{
    //check if given count is positive number
    if(count<=0)
    {
        return "Number cannot be zero/negative";
    }   
    
    //add the given number of chocolates at the top
    while(count>0){
        chocolates.unshift(color);
        count--;
    }
    
}
//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number)
{
    //check if given count is positive number
    if(number<=0){
        return "Number cannot be zero/negative";
    }

    //check if the number required is available in the dispenser
    if(number>chocolates.length)
        return "Insufficient chocolates in the dispenser";

    removedChocolates=[]
    while(number>0)
    {
        removedChocolates.push(chocolates.shift());
        number--;
    }
    return removedChocolates;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number)
{
    //check if given count is positive number
    if(number<=0)
        return "Number cannot be zero/negative";
        
    //check if the number required is available in the dispenser
    if(number>chocolates.length)
        return "Insufficient chocolates in the dispenser";

    dispensedChocolates=[]
    while(number>0)
    {
        dispensedChocolates.push(chocolates.pop());
        number--;
    }
    return dispensedChocolates;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color) {
     //check if given count is positive number
    if(number<=0)
        return "Number cannot be zero/negative";
        
    //check if the number required is available in the dispenser
    if(number>chocolates.length)
        return "Insufficient chocolates in the dispenser";

    dispensedChocolates=[];
    for(index=chocolates.length-1;index>=0 && number>0 ;index--)
    {
        if(chocolates[index]==color){
            dispensedChocolates.push(color);
            number--;
        }
       
    }
    if(number==0)
        return dispensedChocolates;
    else
        return "Insufficient chocolates in the dispenser";
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    
    countOfChocolates=[0,0,0,0,0,0,0];
    for(index=0;index<chocolates.length ;index++)
    {
        colorIndex=-0;
        //fill chocolate count based on [green, silver, blue, crimson, purple, red, pink]
        switch(chocolates[index])
        {
            case 'silver':
                colorIndex=1;
                break;
            case 'blue':
                colorIndex=2;
                break;
            case 'crimson':
                colorIndex=3;
                break;        
            case 'purple':
                colorIndex=4;
                break;
            case 'red':
                colorIndex=5;
                break;
            case 'pink':
                colorIndex=6;
                break;
        }
        countOfChocolates[colorIndex]++;
    }
    return countOfChocolates.filter(Number);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    var frequency = {}, value;

    // compute frequencies of each value
    for(var i = 0; i < chocolates.length; i++) {
        value = chocolates[i];
        if(value in frequency) {
            frequency[value]++;
        }
        else {
            frequency[value] = 1;
        }
    }

    // sort the uniques array in descending order by frequency
    function compareFrequency(chocolate1, chocolate2) {
        if(frequency[chocolate2]>frequency[chocolate1] || frequency[chocolate2]==frequency[chocolate1] && chocolate1>chocolate2)
        return 1;
        return -1;
    }

    return chocolates.sort(compareFrequency);
}
//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates,number, color, finalColor) {

    //if number of chocolates to be changed is positive
    if(number<=0)
        return "Number cannot be zero/negative";
    //same color to be changed
    else if (color==finalColor)
        return "Can't replace the same chocolates";
    else{
        //to change the chocolate color from color to finalColor
        for(chocolate=0;chocolate<chocolates.length && number>0;chocolate++)
        {
            if(chocolates[chocolate]==color)
            {
                chocolates[chocolate]=finalColor;
            }
        }
        return chocolates;
    }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor) {

    //same color to be changed
    if (color==finalColor)
        return "Can't replace the same chocolates";
    else{
        countOfChangedColor=0;
        //to change the chocolate color from color to finalColor
        for(chocolate=0;chocolate<chocolates.length;chocolate++)
        {
            if(chocolates[chocolate] == color || chocolates[chocolate] == finalColor)
            {
                chocolates[chocolate]=finalColor;
                countOfChangedColor++;
            }
        }
        return [countOfChangedColor,chocolates];
    }
    
}

//Challenge 1: Remove one chocolate of ____ color from the top

function  removeChocolateOfColor(chocolates,color) {
    for(index=0;index<chocolates.length;index++){
        //check if the chocolate is of given color
        if(chocolates[index]==color){
            chocolates.splice(index, 1);
            break;
        }
    }
    chocolates.pop();
    return chocolates;
}
//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
