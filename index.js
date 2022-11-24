const getNextBirthday = (birthdayOfMyRelatives) => {
    
    const birthdayArray = birthdayOfMyRelatives.map((people, index) => {
        const peopleDate = people.date.split('.');
        const peopleDay = +peopleDate[0];
        const peopleMonth = +peopleDate[1];
        const peopleYear = new Date().getFullYear();
        let fullBithday = new Date(peopleYear, peopleMonth - 1, peopleDay);
        if(Date.now() > fullBithday.getTime()){
            fullBithday = new Date(peopleYear +1, peopleMonth - 1, peopleDay);
        }
        return fullBithday;
    });
    // console.log(birthdayArray);

    let indexOfNearestBirthday = 0;
    let nearestBirthday = birthdayArray[indexOfNearestBirthday];
    let minTimeToNextBirthday = nearestBirthday.getTime() - Date.now();
   
    birthdayArray.forEach((birthday, index) => {
        let currentTimeToNextBirthday = birthday.getTime() - Date.now()
        if(currentTimeToNextBirthday < minTimeToNextBirthday){
            nearestBirthday = birthday;
            minTimeToNextBirthday = currentTimeToNextBirthday;
            indexOfNearestBirthday = index;
        }
    });
    const daysToNextBirthday = Math.round(minTimeToNextBirthday/1000/60/60/24);
    if (daysToNextBirthday){
        alert(`Осталось ${daysToNextBirthday} дней до следующего дня рождения` );
    } else{
        alert('Cледующий день рождения уже завтра!');
    }
    return birthdayOfMyRelatives[indexOfNearestBirthday];
}

const birthdayOfMyRelatives = [
    {
    name: 'Димки',
    date: '28.03',
    },
    {
    name: 'Полины',
    date: '07.02',
    },
    {
    name: 'Сашки и Николашки',
    date: '20.02',
    },
    {
    name: 'Людки и Даши Орловой',
    date: '25.08',
    },
    {
    name: 'Маши',
    date: '21.01',
    },
    {
    name: 'Жени',
    date: '08.04',
    },
    {
    name: 'Мамы',
    date: '03.04',
    },
    {
    name: 'Димки Амруллаева',
    date: '09.11',
    },
    {
    name: 'Насти Амруллаевой',
    date: '23.11',
    },
    {
    name: 'Вани Орлова',
    date: '15.01',
    },
    {
    name: 'Инны Орловой',
    date: '21.01',
    },
    {
    name: 'Вовы Прозорова',
    date: '25.01',
    },
    {
    name: 'Сени Прозорова',
    date: '01.02',
    },
    {
    name: 'Тани Орловой',
    date: '12.02',
    },
    {
    name: 'Даника Орлова',
    date: '22.02',
    },
    {
    name: 'Миры и Юры Орловых',
    date: '15.03',
    },
    {
    name: 'Паши Орлова',
    date: '20.03',
    },
    {
    name: 'Даши Прозоровой',
    date: '05.04',
    },
    {
    name: 'Светланы Юрьевны Орловой',
    date: '16.04',
    },
    {
    name: 'Николая Орлова ',
    date: '10.05',
    },
    {
    name: 'Саша Бугаева',
    date: '22.05',
    },
    {
    name: 'Настюши Орловой',
    date: '28.05',
    },
    {
    name: 'Сони Орловой и Ильи Бугаева',
    date: '03.06',
    },
    {
    name: 'Рады Орловой и Матвея Ротаева',
    date: '05.06',
    },
    {
    name: 'Анечки Орловой',
    date: '08.06',
    },
    {
    name: 'Ульяны Интюк',
    date: '14.06',
    },
    {
    name: 'Саши Орлова',
    date: '19.06',
    },
    {
    name: 'Насти Интюк',
    date: '20.06',
    },
    {
    name: 'Кати Бугаевой',
    date: '24.06',
    },
    {
    name: 'Ванюши Орлова',
    date: '01.07',
    },
    {
    name: 'Леночки Орловой',
    date: '11.07',
    },
    {
    name: 'Яши Прозорова',
    date: '15.07',
    },
    {
    name: 'Ани и Артема Орловых',
    date: '24.07',
    },
    {
    name: 'Светочки Орловой',
    date: '05.08',
    },
    {
    name: 'Лили Орловой',
    date: '10.08',
    },
    {
    name: 'Миши Прозорова',
    date: '17.08',
    },
    {
    name: 'Марины Орловой',
    date: '10.10',
    },
    {
    name: 'Тимоши Орлова',
    date: '23.10',
    },
    {
    name: 'Жанны Орловой',
    date: '07.11',
    },
    {
    name: 'Маши Орловой',
    date: '08.11',
    },
    {
    name: 'мамы',
    date: '17.11',
    },
    {
    name: 'Миланы Орловой',
    date: '20.11',
    },
    {
    name: 'Варвары Орловой',
    date: '22.11',
    },
    {
    name: 'Адели Орловой',
    date: '13.12',
    },
    {
    name: 'Андрюши Бугаева',
    date: '19.12',
    },
    {
    name: 'Саши Карниза',
    date: '12.09',
    },
    {
    name: 'Иры Карниз',
    date: '01.08',
    },
    {
    name: 'Жеки Ротаева',
    date: '03.09',
    },
    {
    name: 'Насти Ротаевой',
    date: '28.07',
    },
    {
    name: 'Даника Ротаева',
    date: '02.01',
    },
    {
    name: 'Танюши Мухиной',
    date: '06.07',
    },
    {
    name: 'Димки Мухиного',
    date: '30.09',
    },
    {
    name: 'Женьки Мухиной',
    date: '01.10',
    },
    {
    name: 'Надюши Ковальчук',
    date: '05.03',
    },
    {
    name: 'Лены Орловой',
    date: '13.11',
    },
    
    
];
// console.log(birthdayOfMyRelatives);
const result = getNextBirthday(birthdayOfMyRelatives);
alert(`Следующий день рождения у ${result.name} ${result.date}`)


