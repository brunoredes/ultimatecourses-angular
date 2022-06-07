import { writeFile } from 'fs/promises';
import { faker } from '@faker-js/faker';

async function createFile(data) {
  try {
    return writeFile('db.json', data);
  } catch (error) {
    console.log(error.stack);
  }
}

function createData() {
  const userData = [];
  for (let i = 1; i <= 50; i++) {
    const data = dataObject({
      id: i,
      fullname: faker.name.findName(),
      checkedIn: randomBoolean(),
    });
    userData.push(data);
  }

  return userData;
}

function dataObject({ id, fullname, checkedIn }) {
  return JSON.stringify({
    id,
    fullname,
    checkedIn,
    checkInDate: Date.now(),
    children: null,
  });
}

function randomBoolean() {
  const random = [true, false];
  return random[Math.floor(Math.random() * random.length)];
}

await createFile(createData());
