const connection = require("../config.js");

const userController = {
    // User 전체 조회
    getUsers : async  (req, res) => {
        connection.query("select * from mydb.user", (error, rows) => {
            if(error) throw error;
            console.log(rows);
            res.send(rows);
        })
    },

    // User 생성
    insertUser : async (req, res) => {
        // javascript 구조분해할당
        const {nickname, password, email} = req.body;
        const sql = `insert into mydb.user(nickname, password, email) values ('${nickname}', '${password}', '${email}');`
        
        connection.query(sql, (error, rows) => {
            if(error) throw error;
            res.send(rows);
        })
    },

    // User 삭제
    deleteUser : async (req, res) => {
        const id = req.params.userIdx;
        connection.query("delete from mydb.user where id = ?", [id], (error, rows) => {
            if(error) throw error;
            else if(rows.affectedRows > 0) {
                res.send("User deleted successfully.");
            } else {
                res.status(404).send('User not found.');
            }

        })
    },

    // User 수정
    modifyUser : async (req, res) => {
        const id = req.params.userIdx;
        const {nickname, password, email} = req.body;

        // 현재 시간 생성
        const now = new Date();
        
        const sql = "update mydb.user set nickname = ?, password = ?, email = ?, updated_at = ? where id = ?";
        const params = [nickname, password, email, now, id];
        connection.query(sql, params, (error, rows) => {
            if(error) throw error;
            else if (rows.affectedRows > 0) {
                res.send("User modified successfully.");
            } else {
                res.status(404).send('User not found.');
            }
        })
    }
}

module.exports = userController;