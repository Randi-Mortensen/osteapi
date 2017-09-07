# osteAPI Dokumentation

## Resurser

### GET /cheeses

Resursen representerer alle oste i kartoteket.
Resursen er formateret på følgende måde:

```JSON
[{
    "varenr": 10001,
    "navn": "St clemens",
    "pris": 42.5,
    "type": "Blåskimmel",
    "producent": "St clemens",
    "antal": 15,
    "beskrivelse": {
        "tekst": "Den ost er bare super smagfuld og dejlig indeni...",
        "smag": "mild",
        "vægt": 300,
        "billede": "stclemensblaaskimmel.jpg"
    }
},]
```

### GET /cheeses/\<varenummer>

Resursen repræsenterer en enkelt ost i kartoteket.
Resursen er formateret på følgende måde:

```JSON
{
    "varenr": 10002,
    "navn": "Fritos",
    "pris": 15,
    "type": "Cheddar",
    "producent": "Fritos",
    "antal": 76,
    "beskrivelse": {
        "tekst": "Mums... Dejlig ost",
        "smag": "mild",
        "vægt": 255,
        "billede": "cheddarmester.jpg"
    }
},
```
