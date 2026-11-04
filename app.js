const express = require('express');

const app = express();

app.use(express.json());

const db = {
    users: [],
};

/* Conventii pentru toate exercitiile:
 * - Raspunsurile de eroare au forma { error: String } (ex: { error: 'Email is required' }).
 * - 400 = date invalide trimise de client, 404 = user-ul cu id-ul cerut nu exista.
 * - id-ul unui user este un numar unic, generat automat la creare. Nu refolositi id-urile
 *   userilor stersi.
 */

/* E1 - Create Users
 * Definiti o ruta care sa primeasca un request de tip POST la adresa /users.
 * Ruta va primi un obiect de forma { name: String, email: String }.
 * Daca obiectul nu are ambele proprietati, se va returna status 400 si un mesaj de eroare.
 * Daca exista deja un user cu acelasi email, se va returna status 400 si un mesaj de eroare.
 * Altfel, user-ul se va adauga in array-ul users din memorie.
 * Ruta va returna status 201 si obiectul adaugat, impreuna cu id-ul generat automat.
 */


/* E2 - Update Users
 * Definiti o ruta care sa primeasca un request de tip PUT la adresa /users/:id.
 * Ruta va primi un obiect de forma { name: String, email: String }.
 * Daca obiectul nu are ambele proprietati, se va returna status 400 si un mesaj de eroare.
 * Se va cauta in array-ul users din memorie user-ul cu id-ul primit in ruta.
 * Daca user-ul nu exista, se va returna status 404 si un mesaj de eroare.
 * Daca user-ul exista, i se vor actualiza proprietatile cu valorile din obiect
 * si se va returna status 200 si obiectul actualizat.
 */


/* E3 - List Users
 * Definiti o ruta care sa primeasca un request de tip GET la adresa /users.
 * Ruta poate accepta doua query params optionale: page si limit.
 * Daca nu sunt trimise, page si limit vor avea valorile implicite 0 si 10.
 * Daca sunt trimise, page trebuie sa fie un numar intreg >= 0, iar limit un numar intreg >= 1.
 * Altfel, se va returna status 400 si un mesaj de eroare.
 * page incepe de la 0: page=0 inseamna primii `limit` useri, page=1 urmatorii `limit` useri etc.
 * Ruta va returna status 200 si un array cu userii din pagina ceruta.
 * Daca nu exista useri in pagina ceruta, se va returna un array gol.
 */


/* E4 - Delete Users
 * Definiti o ruta care sa primeasca un request de tip DELETE la adresa /users/:id.
 * Ruta va cauta in array-ul users din memorie user-ul cu id-ul primit in ruta.
 * Daca user-ul nu exista, se va returna status 404 si un mesaj de eroare.
 * Daca user-ul exista, se va sterge din array si se va returna status 200.
 */

module.exports = app;
