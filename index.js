function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`;
} else {
  return `There is nobody waiting to be served!`
}
}

function currentLine(katzDeliLine) {
  let newArray = []
  let i = 0
while (katzDeliLine.length > i) {
  newArray.push(` ${i+1}. ${katzDeliLine[i]}`);
  i++;
} if (newArray.length > 0) {
  return `The line is currently:${newArray}`
} else {
  return `The line is currently empty.`
}
}
