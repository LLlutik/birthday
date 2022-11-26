const birthdayOfMyRelatives = [
    {
    name: 'Димы Орлова',
    date: '28.03',
    },
    {
    name: 'Полины Орловой',
    date: '07.02',
    },
    {
    name: 'Сашки Орлова',
    date: '20.02',
    },
    {
    name: 'Люды и Даши Орловой',
    date: '25.08',
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
    name: 'Мамы',
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
    name: 'Лены Орловой',
    date: '13.11',
    },
];
// Добавляем id каждому дню рождения
const birthdays = birthdayOfMyRelatives.map((birthday, index) => {
    birthday.id = index;
    return birthday;
});

// Функция по созданию html карточки
const createHtmlCard = (dataCelebrantsId, celebrantsName, celebrantsDate) => {
    const celebrantsItem = document.createElement('div');
    celebrantsItem.className = 'celebrants-item';
    celebrantsItem.dataset.celebrantsId = dataCelebrantsId;

    const celebrantsItemName = document.createElement('div');
    celebrantsItemName.className ='celebrants-item__name celebrants-item__string';
    celebrantsItemName.textContent = celebrantsName;
    
    const celebrantsItemDate = document.createElement('div');
    celebrantsItemDate.className ='celebrants-item__date celebrants-item__string';
    celebrantsItemDate.textContent = celebrantsDate;

    const celebrantsItemDeleteButton = document.createElement('button');
    celebrantsItemDeleteButton.className ='celebrants-item__delete';
    celebrantsItemDeleteButton.dataset.deleteCelebrantsId = dataCelebrantsId;
    celebrantsItemDeleteButton.title = "Удалить данную карточку";

    
    celebrantsItem.append(celebrantsItemName, celebrantsItemDate, celebrantsItemDeleteButton);

    return celebrantsItem;
}

//создаем задачи на основе birthdays
const celebrantsList = document.querySelector('.celebrants-list');
birthdays.forEach(birthday => {
    const newBirthdayCard = createHtmlCard(birthday.id, birthday.name, birthday.date);
    celebrantsList.append(newBirthdayCard);
});

const addCelebrantBoxForm = document.querySelector('.add-celebrant-box__form');

//создаем задачу из данных формы
addCelebrantBoxForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const {target} = event;
    console.log(target);
    const inputName = target.celebrantName.value.trim();
    const inputDate = target.celebrantDate.value.trim();
    
    const newId = String(Date.now()); 
    const newHtmlCard = createHtmlCard(newId, inputName, inputDate);
    birthdays.push({id: newId, name: inputName, date: inputDate});
    celebrantsList.append(newHtmlCard); 
    addCelebrantBoxForm.reset();
});

//Вешаем обработчик событий на родителя tasksList, чтобы отслеживать нажатия кнопок Удалить
let deleteCelebrantsId;
celebrantsList.addEventListener('click', (event) => {
    const isDeleteButton = event.target.closest('.celebrants-item__delete');
    deleteCelebrantsId = event.target.dataset.deleteCelebrantsId;
    console.log(deleteCelebrantsId);
    if(isDeleteButton){
        const celebrantsItemToDelete = document.querySelector(`[data-celebrants-id = '${deleteCelebrantsId}']`);  
        celebrantsItemToDelete.remove();
        
        const indexOfDeleteCelebrantsItem = birthdays.findIndex((birthday, index) => {
            return birthdays[index].id === deleteCelebrantsId;
        });
        birthdays.splice(indexOfDeleteCelebrantsItem, 1);
    };
});

//Функция подсчета ближайшего дня рождения
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
    const celebrant = birthdayOfMyRelatives[indexOfNearestBirthday];
    if (daysToNextBirthday){
        alert(`Осталось ${daysToNextBirthday} дней до дня рождения\n${celebrant.name} (дата ${celebrant.date}) ` );
    } else{
        alert(`Cледующий день рождения уже завтра! У ${celebrant.name}`);
    }
    //return birthdayOfMyRelatives[indexOfNearestBirthday];
}


//console.log(birthdayOfMyRelatives);
const checkButton = document.querySelector('.check-button');
checkButton.addEventListener('click', () => {
    const result = getNextBirthday(birthdays);
    //alert(`Следующий день рождения у ${result.name} ${result.date}`)
})


//Цели:
// Добавить свое модальное окно на вывод результата, когда ближайший день рождения
// Добавить модальное окно на удаление
// Сделать проверку, есть ли такая дата уже записанная, если есть, попросить найти удалить, создать новую объединенную
// Изменить инпут в формате даты
// Добавить кнопки сортировки по датам, по алфавиту