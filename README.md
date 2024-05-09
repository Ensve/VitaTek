# PureVita Landingsside

Denne landingssiden er designet som en løsning på en case gitt ved intervju. Det fiktive selskapet **PureVita** spesialiserer seg på å selge kosttilskudd som er naturlig fusjonert med vitenskapelig forskning. Målet med denne siden er å introdusere potensielle kunder for VitaTeks verdi og oppmuntre dem til å gå videre til bestillingsskjemaet.

**[Live Løsning](https://vita-tek-endres-projects-8ddc022f.vercel.app/)**

## Teknologier brukt

- **[Next.js](https://nextjs.org/)** og **[React](https://react.dev/)**: For en skalerbar og effektiv utviklingsopplevelse.
- **[TailwindCSS](https://tailwindcss.com/)**: For rask og effektiv styling av komponenter. Egendefinerte klasser som `flexEnd`, `flexCenter`, `flexBetween`, og `flexStart` ble brukt for å håndtere flex-egenskaper effektivt.
- **[Framer Motion](https://www.framer.com/motion/)**: For å legge til animasjoner som øker sidens visuelle appell og styrker profesjonaliteten.
- **[Vercel](https://vercel.com/home)**: For hosting av den ferdige landingssiden.

## API-integrasjon

Jeg brukte **[freetestapi.com](https://freetestapi.com/apis/users)** for å hente ut brukere til reviews.

## Funksjoner og spesifikasjoner

### Above the Fold Content

- **En bakgrunn som passer.**  

- **En Fengende overskrift.**  

- **En undertekst med en kort beskrivelse.**  

- **En CTA (Call to Action) knapp som navigerer brukeren til bestillingsskjemaet.**  

### Bestillingsskjema

- **Felter:**  
  Skjemaet inkluderer feltene fullt navn, e-postadresse og postadresse (gate, by, postnummer, land). Alle felter valideres på klientsiden for å gi umiddelbar tilbakemelding om feil eller mangler.

- **Validering:**
  - **Fullt navn:** Påkrevd og bør være alfanumerisk.
  - **E-post:** Påkrevd og må følge riktig e-postformat.
  - **Postadresse:** Alle felt er obligatoriske.

### Evaluering
- **Cleanliness and structure i koden.**
- **Responsivitet og design**
- **Effektiv skjemavalidering**
- **Gjennomtenkt CRO** (konverteringsoptimalisering)
- **Bonus:** Eventuelle ekstra kreative eller tekniske elementer som forbedrer
  brukeropplevelsen.
