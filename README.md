Detta är en Node.js applikation som räknar hur ofta ord förekommer i en sträng. 

För att köra programmet behöver du efter kloning köra kommandot "npm install" i terminalen för att installera nödvändiga beroenden. 
För att starta servern används kommandom "npm run"

Det finns en http-fil som kan användas för att testa olika anrop. 

För testning i kommandotolken kan följande curl-anrop användas: 

"curl -X POST -H "Content-Type: application/json" -d "{\"data\":\"Banan Äpple Katt Hund Banan Hund Katt Hund\"}" http://localhost:3000/frequency"

curl -X POST -H "Content-Type: application/json" -d "{\"data\":\"Banan, Äpple, Katt. Hund- Banan: Hund! Katt? Hund\"}" http://localhost:3000/frequency

curl -X POST -H "Content-Type: application/json" -d "{\"data\":\"Inte ett moln Så långt ögat kan nå Inte en droppe regn På flera dar Med en glass i min mun å i sandaler av plast\"}" http://localhost:3000/frequency

För testning i Postman kan följande body användas: 

{
"data": "Banan Äpple Katt Hund Banan Hund Katt Hund"
}

{
"data": "Vi finner bättre sätt att utveckla programvara genom att utveckla själva och hjälpa andra att utveckla. Genom detta arbete har vi kommit att värdesätta: Individer och interaktioner framför processer och verktyg Fungerande programvara framför omfattande dokumentation Kundsamarbete framför kontraktsförhandling Anpassning till förändring framför att följa en plan Det vill säga, medan det finns värde i punkterna till höger,värdesätter vi punkterna till vänster mer."
}
