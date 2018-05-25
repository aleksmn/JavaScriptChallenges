const Cell = require('./cell');

class Grid {
  constructor(size, randomize = false) {
    this.size = size;

    this.init(randomize);
  }

  init(randomize) {
    this.cells = new Array(this.size);

    for (let r = 0; r < this.size; r++) {
      this.cells[r] = new Array(this.size);

      for (let c = 0; c < this.size; c++) {
        if (randomize) {
          let isAlive = Math.random() < .5;

          this.cells[r][c] = new Cell(r, c, isAlive);
        } else {
          // all cells dead by default
          this.cells[r][c] = new Cell(r, c);
        }
      }
    }
  }

  isNeighborAlive(row, col) {
    if (!this.cells[row] || !this.cells[col]) return false;

    let cell = this.cells[row][col];

    return cell && cell.isAlive;
  }

  countNeighbors(cell) {
    let count = 0;
    let { row, col } = cell;

    if (this.isNeighborAlive(row - 1, col - 1)) count += 1;
    if (this.isNeighborAlive(row - 1, col)) count += 1;
    if (this.isNeighborAlive(row - 1, col + 1)) count += 1;
    if (this.isNeighborAlive(row, col + 1)) count += 1;
    if (this.isNeighborAlive(row + 1, col + 1)) count += 1;
    if (this.isNeighborAlive(row + 1, col)) count += 1;
    if (this.isNeighborAlive(row + 1, col - 1)) count += 1;
    if (this.isNeighborAlive(row, col - 1)) count += 1;

    return count;
  }

  compute() {
    let nextGrid = new Grid(this.size);

    for (let r = 0; r < nextGrid.size; r++) {
      for (let c = 0; c < nextGrid.size; c++) {
        let cell = this.cells[r][c];
        let nextCell = nextGrid.cells[r][c];
        let numNeighbors = this.countNeighbors(cell);

        if (cell.isAlive) {
          if (numNeighbors < 2) { // cell dies
            nextCell.die();
          } else if (numNeighbors === 2 || numNeighbors === 3) { // cell lives
            nextCell.live();
          } else if (numNeighbors > 3) { // cell dies
            nextCell.die(); 
          }
        } else {
          if (numNeighbors === 3) {
            nextCell.live(); // cell becomes alive
          }
        }
      }
    }

    this.cells = nextGrid.cells;

    return this;
  }

  render() {
    let output = '';

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        let cell = this.cells[i][j];

        if (cell.isAlive) {
          output += ' ⚪ ';
        } else {
          output += '   ';
        }

        if (cell.col === this.size - 1) {
          output += '\r\n';
        }
      }
    }

    return output;
  }

} // END of class Grid

module.exports = Grid;

console.log('Hi Grid');