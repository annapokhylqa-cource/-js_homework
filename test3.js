function checkProbabilityTheory(count) {
  var evenCount = 0;
  var oddCount = 0;

  for (var i = 0; i < count; i++) {
    var randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  var evenPercent = (evenCount / count) * 100;
  var oddPercent = (oddCount / count) * 100;

  console.log("Кількість згенерованих чисел:", count);
  console.log("Парних чисел:", evenCount);
  console.log("Не парних чисел:", oddCount);
  console.log("Відсоток парних:", evenPercent + "%");
  console.log("Відсоток не парних:", oddPercent + "%");
}

checkProbabilityTheory(1000);