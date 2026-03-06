const db = require("../db");

const getCategories = (req,resp)=>{
    const sql = "select * from categories";

    db.query(sql,(err,result)=>{
        if (err) {
            throw err;
        } else {
            resp.render("categories",{categories : result});
        }
    })
}

const addCategory = (req,resp)=>{
    const {c_name} = req.body;
    const sql = "insert into categories (c_name) values (?)";

    db.query(sql,[c_name],(err,result)=>{
        if (err) {
            throw err;
        } else {
            resp.redirect("/categories");   
        }
    })
}

const fetchCategoryId = (req,resp)=>{
    const id = req.params.id;
    const sql = "select * from categories where c_id = ?";

    db.query(sql,[id],(err,result)=>{
        if (err) {
            throw err
        } else {
            resp.render("editCategory",{category : result[0]})            
        }
    })

}


const updateCategory = (req,resp)=>{
    const id = req.params.id;
    const {c_name} = req.body;
    const sql = "update categories set c_name = ? where c_id = ?";

    db.query(sql,[c_name, id],(err,result)=>{
        if (err) {
            throw err;
        } else {
            resp.redirect("/categories");
        }
    });
}

const deleteCategory = (req,resp)=>{
    const id = req.params.id;
    const sql = "delete from categories where c_id=?";
    db.query("delete from products where c_id = ?",[id],(err,result)=>{
        if (err) {
            throw err;
        } else {
            db.query(sql,[id],(err,result)=>{
                if(err){
                    throw err;
                }else {
                    resp.redirect("/categories");
        }
    })
        }
    });
    
}

module.exports = {getCategories, addCategory, fetchCategoryId, updateCategory, deleteCategory};
