import bcrypt from 'bcrypt'
// const pwd = 'pass1234';
// const hashedpwd = await bcrypt.hash(pwd,10)
// console.log(hashedpwd)  


const check = await bcrypt.compare("pass1234","$2b$10$H4u6DFGPJ5x32qaYJsdw0eSUZR3ZBF/TRuP/5QGXqv9MwF/wJvrJq")
console.log(check)

