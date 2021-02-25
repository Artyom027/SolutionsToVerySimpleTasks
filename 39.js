function getDays(seconds)
{
    let minuts;
    let hours;
    let days;
    minuts = seconds / 60;
    hours = minuts / 60;
    days = hours / 24;
    console.log(days);
}
getDays();
