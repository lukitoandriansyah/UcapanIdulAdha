const nickName = prompt("Siapa nama panggilanmu?");
const religion = prompt("Apakah anda beragama islam?\n-> Ketik Y jika Anda beragama islam\n-> Ketik N jika beragama selain islam");
const pieces = prompt("Apakah anda mendapat daging di hari ini atau kemarin?\n-> Ketik Y jika salah satu pilihan benar\n-> Ketik N jika tidak mendapat daging");

const user = {
    name: nickName,
    religion: religion,
    pieces: pieces
};

const history = {
    nickName: user.name,
    religion: user.religion,
    pieces: user.pieces
}
putHistory(history);
renderHistory();