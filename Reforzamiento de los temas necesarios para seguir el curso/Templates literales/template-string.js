
const nombre = 'Deadpool';
const real = 'Wade Winston';

const normal = nombre + ' ' + real;
// const template = `José Manuel López Ortiz`;
// const template = `${ 1 + 1} López Ortiz`;
const template = `${ nombre } ${ real }`;

console.log(normal);
console.log(template);

// console.log(normal === template);

const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;

console.log(html);