const quotes=["Dont watch the clock; do what it does. Keep going.", "The harder you work for something, the greater you will feel when you achieve it.",

"Push yourself, because no one else is going to do it for you." ,"Dream big. Work hard. Stay humble.",

"It always seems impossible until it is done." , "Success is not in what you have, but who you are.",

"Donot be afraid to give up the good to go for the great.","There is no substitute for hard work.",

"Success doesnot come from what you do occasionally; it comes from what you do consistently.",

"Winners are not those who never fail, but those who never quit.","Life is 10% what happens to us and 90% how we react to it.",

"Happiness is not something ready-made. It comes from your own actions.",

"Be a voice, not an echo.","Sometimes you win, sometimes you learn.","Every day may not be good, but there is something good in every day."]
{}
const Used=new Set()
const quoteElement=document.getElementById("quote")
function generate(){
    if(Used.size>=quotes.length){
        Used.clear()
    }
    while (true){
    const random=Math.floor(Math.random()*quotes.length)

    if(Used.has(random)) continue

    const quote=quotes[random]
    quoteElement.innerHTML=quote;
    Used.add(random)

    break
}
}

