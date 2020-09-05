class Game {

    init(status, board) {
        this.status = status;
        this.board = board;
    }

    cellClickHandler(event) {
        if (!this.isCorrectClick(event)) {
            return;
        }

        this.board.fillCell(event);

        if (this.hasWon()) {
            this.status.setStatusStopped();
            this.sayWonPhrase();
        } 
        /**
         * если все клетки заполнены и никто не выиграл - сообщение о том, что ничья
         */
        else if (this.isMapFull()) {
            this.status.setStatusStopped();
            this.sayEvenScore();
        }
        this.status.togglePhase();  
    }

    isCorrectClick(event) {
        return this.status.isStatusPlaying() && this.board.isClickByCell(event) && this.board.isCellEmpty(event);
    }

    hasWon() {
        return this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
               this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
               this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||

               this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
               this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
               this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) ||

               this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
               this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 });
    }

    isLineWon(a, b, c) {
        let value = this.status.mapValues[a.y][a.x] + this.status.mapValues[b.y][b.x] + this.status.mapValues[c.y][c.x];
        return value === 'XXX' || value === '000';
    }

    sayWonPhrase() {
        let figure = this.status.phase === 'X' ? 'Крестики' : 'Нолики';
        alert(`${figure} выиграли!`);
    }
/**
 * Функция просматривает ячейки таблицы, и возвращает true если все ячейки не пустая строка
 */
    isMapFull() {
        let fullMap = '';
        let tdElements = document.querySelectorAll('td');
        tdElements.forEach( element => {
            if (element.innerText != '') {
                fullMap += element.innerText;
            }
        })
        return fullMap.length == 9;
    }

    sayEvenScore() {
        alert('Ничья!');
    }
}