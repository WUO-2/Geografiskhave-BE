<img src="https://i.imgur.com/oAEtBup.png?maxwidth=1584&fidelity=grand"></img>

<h1 align="center"> Geografisk Have - Backend </h1>
<p align="justify">
  Dette er backend-delen af projektet, hvor klienten er Geografisk have i Kolding. Projektet er udarbejdet i forbindelse med 2. semester eksamensprojektet på UCL's PBA i webudvikling. Projektet er et sammenspil mellem uddannelser, hvor der er blevet udleveret et koncept samt design udarbejdet af digitale konceptudviklere, og derefter samarbejdet med en Økonomi og IT studerende, der agerer som "Product Owner".
<br>
<br>
Projektet er tiltænkt at være en standalone app for Geografisk Have. App'en skal blandt andet bruges til at se billetpriser på, og til at kunne tjekke kommende events. Hovedkonceptet er en skattejagt, som er udarbejdet for at få en mere interaktiv oplevelse ved besøget i Geografisk Have. Efter at have gennemført skattejagten, er gevinsten virtuelle mønter, som kan bruges på mad og drikke i caféen.
</p>

<h2 align="center">Teknologier brugt til projektet</h2>
<p align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" style="text-decoration: none">
    <img src="https://custom-icon-badges.demolab.com/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    </a>
  <a href="https://expressjs.com/" style="text-decoration: none">
    <img src="https://custom-icon-badges.demolab.com/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white"/>
    </a>
<a href="https://www.docker.com/" style="text-decoration: none">
    <img src="https://custom-icon-badges.demolab.com/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
    </a>
  <a href="https://www.postgresql.org/" style="text-decoration: none">
    <img src="https://custom-icon-badges.demolab.com/badge/-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white"/>
    </a>
  <a href="https://www.pgadmin.org/" style="text-decoration: none">
    <img src="https://custom-icon-badges.demolab.com/badge/-pgAdmin-34567C?style=for-the-badge&logo=adminer&logoColor=white"/>
    </a>
  <a href="https://www.prisma.io" style="text-decoration: none"> 
    <img src="https://custom-icon-badges.demolab.com/badge/-Prisma-2D3748?style=for-the-badge&logo=Prisma"/>
</a>
</p>
<h1 align="center">Forudsætninger og brug</h1>
<h3 align="center">Forudsætninger</h3>
<p class="justify">
  For at kunne starte dette projekt, skal følgene være installeret:
  <ul>
    <li>Node.js</li>
    <li>NPM</li>
    <li>Docker</li>
  </ul>
</p>

<h3 align="center">Brug</h3>
<p align="justify">
  Følg disse trin, for at køre projekt:
  <ol>
    <li>Clone projektet til din computer</li>
    <li>Åben terminalen og naviger til projektets rodmappe</li>
    <li>Skriv `npm install` for at installere alle nødvendige pakker</li>
  <li> Skriv `npm run compose:up` for at starte databse og pgadmin op</li>
  <li> Skriv `npm run prisma:dev` for at generere prisma client og migrate databasen</li>
    <li>Skriv `npm run dev` for at starte projektet</li>
</ol>
</p>

<h1 align="center">ENV Variabler</h1>
<p align="justify">
I projektet bruges visse ENV variabler. Disse er nødvendige da der er services der bruger dem. For at bruge dem, skal der oprettes en .env fil i rod mappen med følgende indhold:
</p>

```sh
DATABASE_URL="postgresql://root:yp76llfhd4@localhost:5432/geografisk?schema=public"
```
