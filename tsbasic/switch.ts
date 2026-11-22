/*let day: string = "Tuesday";

switch(day){

    case"Monday":
    console.log("Todays's special is dosa");
    break;
    
    case"Tuesday":
    console.log("Todays's special is idli");
    break;
    
    case"Wednesday":
    console.log("Todays's special is vada");
    break;
    
    case"Thursday":
    console.log("Todays's special is pongal");
    break;

    case"Friday":
    console.log("Todays's special is sambar");
    break;
    case"Saturday":
    console.log("Todays's special is upma");
    break;
    default:
    console.log("Todays's special is chef's choice");
}*/

let statusCode : number = 401;

switch(statusCode)
{
    case 200:
    console.log("Login successful");
    break;

    case 201:
    console.log("User created");
    break;

    case 400:
    console.log("Bad request");
    break;

    case 401:
    console.log("Unauthorized");
    break;

    default:
    console.log("Unknown status code");
}