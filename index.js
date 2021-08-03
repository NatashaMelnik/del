import pg from 'pg';
const { Client } = pg;

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'qazpoi',
    database: 'birthdays'
});

await client.connect();

const name = 'Mamma Mia';
const date = '2002-09-15';

const res = await client.query('SELECT * FROM public.birthdays;');
// const update = await client.query(`INSERT INTO public.birthdays( employees, birthday_date) VALUES (${name}, ${date});`);
const update = await client.query("INSERT INTO public.birthdays( employees, birthday_date) VALUES ('Mamma Mia', '2002-09-15');");

console.log(res.rows);
update;

await client.end();