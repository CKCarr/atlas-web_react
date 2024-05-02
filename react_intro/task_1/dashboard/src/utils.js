// task_1/dashboard/src/utils.js

// function gets full year
export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School"; // true
  } else {
    return "Holberton School main dashboard"; // false
  }
}
