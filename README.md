Detta är en Node.js applikation som räknar hur ofta ord förekommer i en sträng. 

För att köra programmet behöver du efter kloning köra kommandot "npm install" i terminalen för att installera nödvändiga beroenden. 
För att starta servern används kommandom "npm start"

Det finns en http-fil som kan användas för att testa olika anrop. 

För testning i kommandotolken kan följande curl-anrop användas:

**OBS: Code-formatet måste användas**

curl -X POST -H "Content-Type: text/plain" -d "Banan, Äpple, Katt. Hund- Banan: Hund! Katt? Hund" http://localhost:3000/frequency

curl -X POST -H "Content-Type: text/plain" -d "Banan, banan, Katt, katt, katt" http://localhost:3000/frequency

För testning i Postman kan någon av följande skickas in i bodyn: 

Banan Äpple Katt Hund Banan Hund Katt Hund

Vi finner bättre sätt att utveckla programvara genom att utveckla själva och hjälpa andra att utveckla. Genom detta arbete har vi kommit att värdesätta: Individer och interaktioner framför processer och verktyg Fungerande programvara framför omfattande dokumentation Kundsamarbete framför kontraktsförhandling Anpassning till förändring framför att följa en plan Det vill säga, medan det finns värde i punkterna till höger,värdesätter vi punkterna till vänster mer.

För att köra enhetstester används kommandot "npm test". 
Om det mot förmodan inte installerats rätt beroenden vid start kan kommandot "npm install --save -dev jest" köras. Testa sedan kommandot "npm test" igen. 

Det är endast två testfall implementerade och båda ska bli godkända. 
