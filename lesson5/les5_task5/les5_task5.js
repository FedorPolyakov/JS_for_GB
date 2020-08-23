let app = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },

    run() {
        //генерируем доску
        let board = this.generateBoard();
        //добавляем доску в body
        document.body.innerHTML = board;
        //добавляем колонку с номерами строк
        this.insertRowsNumbers();
        //добавляем строку с названиями колонок
        this.insertColsChars();
    },
    generateBoard() {
        // 3. создаем переменную board и присваиваем ей пустую строку, в ней будет храниться разметка игрового поля в виде строки
        let board = "";
        // 3.1 создаем переменную rowStartWithColor, в которой укажем, что линия на игровом поле будет начинаться с белого цвета
        // т.е. присваиваем строку "white"
        let rowStartWithColor = "white";
        // 3.2 в цикле перебираем все строки из конфига
        for (let i = 0; i < this.config.rows.length; i++) {
            // 3.3 здесь в переменной row в виде строки будет храниться разметка для линии на поле (тег tr),
            // сейчас туда присваиваем пустую строку
            let row = "";
            // 3.4 проверяем, начинаем ли мы линию (переменная rowStartWithColor) с белого цвета (строка "white")
            if (rowStartWithColor == 'white') {
                // 3.5 в переменную row записываем результат работы функции this.generateRow,
                // которой передали цвет, с которого начинается линия на поле, а также this.config.rows[i]
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                // 3.6 затем меняем rowStartWithColor на "black"
                rowStartWithColor = "black";
            } else {
                // 3.7 делаем то же что и в п. 1.5
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                // 3.8 меняем rowStartWithColor на "white"
                rowStartWithColor = "white";
            }
            // 3.9 в board дописываем с помощью +=, то что получилось в переменной row
            board += row;
        }
        return `<table>${board}</table>`;
    },

    /**
     * Метод генерирует тег tr (строку игровой доски) с закрашенными тегами
     * td (ячейкам).
     * @param {string} startWithColor с какого цвета строка начинается от левого края,
     * м.б. "white", "black".
     * @param {number} rowNum номер строки от 8 до 1, т.к. шахматная доска формируется
     * сверху вниз, поэтому номер начинается с 8.
     * @returns {string} html-разметка, тег tr с оформленными внутри тегами td.
     */
    generateRow(startWithColor, rowNum) {
        // 2. создаем переменную currentColorClass, в которую пишем startWithColor
        let currentColorClass = startWithColor;
        // 2.1 создаем переменную row и присваиваем ей пустую строку, в ней будет храниться набор тегов td в виде
        // строки, т.е. это будет одна линия игрового поля
        let row = "";
        // 2.2 в цикле перебираем массив cols из config
        for (let i = 0; i < this.config.cols.length; i++) {
            // 2.3 создаем переменную field, в которую записываем пустую строку, это будет тег td, ячейка игрового поля
            let field = "";
            // 2.4 проверяем, равняется ли currentColorClass строке "white"
            if (currentColorClass == 'white') {
                // 2.5 в переменную field пишем результат вызова функции this.generateField, которой передаем цвет ячейки игрового
                // поля в виде строки, затем номер строки игровой доски в виде числа, последним аргументом передаем this.config.cols[i]
                field = this.generateField(currentColorClass, this.config.rows[i], this.config.cols[i]);
                // 2.6 присваиваем в currentColorClass строку "black"
                currentColorClass = "black";
            } else {
                // 2.7 делаем то же что и в п. 2.5, только первым параметром передаем "black"
                field = this.generateField(currentColorClass, this.config.rows[i], this.config.cols[i]);
                // 2.8 переменной currentColorClass присваиваем строку "white"
                currentColorClass = "white";
            }
            // 2.9 в переменную row дописываем с помощью += то что получилось в field
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    /**
     * Метод генерирует ячейку (тег td) с нужным классом цвета
     * и координатами на поле.
     * @param {string} color класс цвета ячейки, м.б. "white", "black".
     * @param {number} rowNum номер строки игровой доски.
     * @param {string} colChar буква колонки игровой доски.
     * @returns {string} html-разметка с заполненными атрибутами координат и классом цвета.
     */
    generateField(color, rowNum, colChar) {
        // 1. вставьте нужные значения в атрибуты
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
    },

    /**
     * Метод вставляет на существующую доску колонку 
     * слева, с указанием номера строки.
     */
    insertRowsNumbers() {
        // 7. получаем все теги tr
        let trs = document.querySelectorAll('tr');
        // 7.1 перебираем эти теги в цикле
        for (let i = 0; i < trs.length; i++) {
            // 7.2 создаем тег td
            let td = document.createElement('td');
            // 7.3 в текущий тег td в innerText вставляем номер строки из this.config.rows
            td.innerText = this.config.rows[i];
            // 7.4 получившийся тег td вставляем в текущую строку (тег tr)
            trs[i].insertAdjacentElement("afterbegin", td);
        }
    },

    /**
     * Метод создает строку (tr) с названиями колонок в виде букв,
     * а также в начале вставляет пустую ячейку, которая идет под
     * цифрами.
     */
    insertColsChars() {
        // 8. создаем тег tr
        let tr = document.createElement('tr');
        // 8.1 затем в innerHTML тега tr дописываем пустой тег td
        tr.innerHTML += '<td></td>';
        // 8.2 в цикле перебираем колонки из this.config.cols
        for (let i = 0; i < this.config.cols.length; i++) {
            // 8.3 в innerHTML с помощью += дописываем тег td c буквой текущей колонки из this.config.cols
            tr.innerHTML += `<td>${this.config.cols[i]}</td>`;
        }
        // 8.4 получаем тег tbody
        let tbody = document.querySelector('tbody');
        // 8.5 и в него перед </tbody> вставляем значение из переменной tr
        tbody.insertAdjacentElement("beforeend", tr);
    },

}

app.run();