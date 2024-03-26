### Raccolta dati
- Chiedere il numero di km
- Chiedere l'età del passeggero

### Esecuzione logica
Se km è number AND età è number 
  - calcolo prezzo base: km * 0.21
  - Definizione dello sconto
    ```
    Se l'èta è minore di 18 anni
      lo sconto è 20
    Altrimenti se l'età è maggiore di 65 anni
      lo sconto è 40
    Altrimenti 
      lo sconto è 0
    ```
  - Calcolo del prezzo scontato
    ```
    prezzoScontato = prezzo base - (prezzo base * sconto / 100)
    ```

  ### Output
  - html con indicazione di prezzo base, dello sconto e di prezzo finale;
  - html in pagina

Altrimenti
  - I dati inseriti non sono validi