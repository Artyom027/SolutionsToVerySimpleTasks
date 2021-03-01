function circle(r)
{
    ob = {makeres:0,tramagic:0}
    ob.makeres = (3.14 * r * r);
    ob.tramagic = r + r;
    return ob;
}
console.log(circle(5));
