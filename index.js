import _ from 'lodash';

export default function solution(content) {
  // BEGIN
  console.log(content)

  const collection = content.split('\n').slice(2).map(a => a.split('|').slice(1,-1).map(elem => elem.trim()));
  console.log(collection);

  console.log('Кол-во растений:', collection.length);

  // const sortCollection = collection.map(elem => elem[0].toUpperCase());
  // console.log(sortCollection);

  const sortCollection = collection.map((elem) => {
   const buf = elem[0][0].toUpperCase();
   elem[0] = buf + elem[0].slice(1);
   return elem;
  }).sort();
  console.log('Сортированный список:', sortCollection);


  const goodPlants = collection.reduce((acc, elem) => {
    if (elem[4] === 'Нет') return acc + 1;
    return acc;
  }, 0);

  const badPlants = collection.reduce((acc, elem) => {
    if (elem[4] === 'Да') return acc + 1;
    return acc;
  }, 0);
  // console.log('Безвредные растения:', goodPlants);
  // console.log('Вредные растения:', badPlants);

  const percentGoodPlants = goodPlants / (goodPlants + badPlants) * 100;
  const percentBadPlants = badPlants / (goodPlants + badPlants) * 100;
  console.log('Безвредные растения:', percentGoodPlants, '%');
  console.log('Вредные растения:', percentBadPlants, '%');

  const averageAge = collection.filter((elem) => elem[1].toLowerCase().includes('леса'))
    .reduce((acc, elem) => {
      const averNumbers = elem[3].split(' ').slice(0,1)//.split('-');
      return [...acc, averNumbers];
    }, [])
    //.map(elem => elem.split('-'));
  ;


  console.log(averageAge);

  const averageAge1 = averageAge.flat().map(elem => elem.split('-'))
  .map(elem => _.mean(elem.map(Number)));



  console.log(averageAge1);


}
  // END
