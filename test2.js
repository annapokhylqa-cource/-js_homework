1. Конкатинація 

let result = 'number' + 3 + 3;
console.log(result);
                  
number33

2. Приведення типів + арифметичне додавання

let result = null + 3;
console.log(result);

3

3. Логічний оператор "І" (AND)

let result = 5 && "qwerty";
console.log(result);

qwerty

4. Приведення типів + додавання + конкатенація

let result = +'40' + +'2' + "hillel";
console.log(result);

42hillel

5. Приведення типів + віднімання + строга рівність

let result = '10' - 5 === 6;
console.log(result);

false

6. Приведення типів + додавання

let result = true + false;
console.log(result);

1

7. Віднімання + приведення типів

let result = '4px' - 3;
console.log(result);

NaN

8. Приведення типів + арифметичне віднімання

let result = '4' - 3;
console.log(result);

1

9. Піднесення до степеня

let result = '6' + 3 ** 0;
console.log(result);

61

10. Ділення

let result = 12 / '6';
console.log(result);

2

11. Порівняння + конкатенація рядків

let result = '10' + (5 === 6);
console.log(result);

10false

12.Нестроге порівняння

let result = null == '';
console.log(result);

false

13. Ділення + піднесення до степеня

let result = 3 ** (9 / 3);
console.log(result);

27

14. Булеве приведення + нестроге порівняння

let result = !!'false' == !!'true';
console.log(result);

true

15. Логічні операції AND (&&) і OR (||) 

let result = 0 || '0' && 1;
console.log(result);

1

16. Приведення типів + нестроге порівняння + порівняння чисел

let result = (+null == false) < 1;
console.log(result);

false

17. Логічні операції AND (&&) і OR (||)

let result = false && true || true;
console.log(result);

true

18. Логічні операції AND (&&) і OR (||)

let result = false && (false || true);
console.log(result);

false

19.Приведення типів + нестроге порівняння + піднесення до степеня + порівняння чисел

let result = (+null == false) < 1 ** 5;
console.log(result);

false

