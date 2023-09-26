let board = ''
let size = 8

for (let i = 0; i < size; i++) {
    let line = ''

    if (i % 2 === 0)
        line += ' # # # #\n'
    else
        line += '# # # # \n'

    board += line
}

console.log(board)