function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  let filteredUsers = users.filter((user) => user.gender === gender);

  if (filteredUsers.length === 0) {
    return 0;
  }

  return filteredUsers
    .map((user) => user.age)
    .reduce((sum, age) => sum + age, 0) / filteredUsers.length;
}