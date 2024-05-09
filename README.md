# Case for Frontend-utvikler: Design & Implementering av landingsside
### Oppgave (2-4 timer):

Lag en landingsside i React og beskriv de valgene du tar. Siden må bestå av
følgende seksjoner:
1. Above the fold content
2. Bestillingsskjema


## Funksjoner & spesifikasjoner:

#### Above the fold content:

- En bakbrunn som passer.
- En fengende overskrift.
- En undertekst med en kort beskrivelse.
- En CTA (Call to Action) knapp som navigerer brukeren til bestillingsskjemaet.


#### Bestillingsskjema:

  Felter:
- Fullt navn
- E-postadresse
- Postadresse (Gate, By, Postnummer, Land)


  Validering:
- Fullt navn: Påkrevd og bør være alfanumerisk.
- E-post: Påkrevd og må følge riktig e-postformat.
- Postadresse: Alle felt er obligatoriske


- Merk: Skjemaet trenger ikke å sendes inn, men bør vise en alert/melding når dataene er
  validert til å være gyldig/ugyldig. Med andre ord bør en feilmelding vises om ikke dataen er
  fylt inn korrekt.


## Tekniske krav:
- Bruk React.js.
- Bruk hvilken som helst stylingmetode (CSS-i-JS, SCSS, CSS-moduler osv.)
- Du kan bruke blioteker for skjemavalidering, men unngå store UI-rammeverk.
- Siden må være responsiv.


  Innsending:
- Last opp koden din til et offentlig GitHub-repo.
- Distribuer landingssiden din til en hosting-plattform etter eget valg (f.eks. Vercel, Netlify).
- Sammen med link til ditt repo, lever et dokument som beskriver:

1. Hvorfor du plasserte elementer der du gjorde det.
2. Eventuelle CRO-konsepter du brukte.
3. Tekniske valg du gjorde og hvorfor.

Evalueringskriterier:
- Cleanliness and structure i koden.
- Responsivitet og design av landingssiden.
- Effektiv implementering av skjemavalidering.
- Gjennomtenkthet i hensyn til CRO og forklaringer.
- Bonus: Eventuelle ekstra kreative eller tekniske elementer som forbedrer
  brukeropplevelsen. 
