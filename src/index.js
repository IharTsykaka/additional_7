module.exports = function solveSudoku(matrix) {
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][j] = [0];
            }
        }
    }
    return matrix;
}
