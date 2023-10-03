let num = +prompt('Введите количество пользователей');
users = {};
for (let i = 1; i <= num; i++) {
    let imya = prompt('Введите имя');
    let year = +prompt('Введите возрост');
    users[`name${i}`] = imya;
    users[`age${i}`] = year;
    }
     for (let n = 1 ; n <= num; n++) {
        console.log(`Пользователь ${n}:`);
        console.log(`Ваше имя - ${users[`name` + n]}`);
        console.log(`Ваш возрост - ${users[`age` + n]} лет`);
    }