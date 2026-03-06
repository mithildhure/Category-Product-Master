const db = require('../db');

const getProducts = (req,resp)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;
    const sql = `select products.p_id, products.p_name, categories.c_id, categories.c_name 
    from products join categories
    on products.c_id = categories.c_id
    limit ? offset ?  `;
    const countSql = "select count(*) as total from products";
    db.query(countSql,(err,result)=>{
        if (err) {
            throw err;
        } else {
            const totalRecords = result[0].total;
            const totalPages = Math.ceil(totalRecords / limit);

            db.query(sql,[limit, offset],(err,products) => {
                if (err) {
                    throw err;
                } else {
                    const catSql = "select * from categories";
                    db.query(catSql,(err,categories)=>{
                        if (err) {
                            throw err;
                        } else {
                            resp.render("products",{
                                prod : products,
                                categ : categories,
                                currentPage : page,
                                totalP : totalPages
                            });                            
                        }
                    });                    
                }
            })

        }
    })
}

const fetchProductId = (req,resp)=>{
    const id = req.params.id;
    const sql = "select * from products where p_id = ?";
    db.query(sql,[id],(err,result)=>{
        if (err) {
            throw err
        } else {
            const catSql = "select * from categories";
            db.query(catSql,(err,categories)=>{
                resp.render("editProduct",{product : result[0], categ : categories});          
            })
        }
    });
}

const addProduct = (req,resp)=>{
    const {p_name, c_id} = req.body;
    const sql = "Insert into products (p_name, c_id) values (?,?)";
    db.query(sql,[p_name, c_id],(err,result)=>{
        if (err) {
            throw err;
        } else {
            resp.redirect("/products");
        }
    });
}

const updateProduct = (req,resp)=>{
    const id = req.params.id;
    const {p_name, c_id} = req.body;
    const sql = "update products set p_name = ?, c_id = ? where p_id = ?";

    db.query(sql,[p_name,c_id,id],(err,result)=>{
        if (err) {
            throw err;
        }else if(result.affectedRows === 0){
            return resp.send("Product not found");
        } 
        else {
            resp.redirect("/products");
        }
    })
}

const deleteProduct = (req,resp)=>{
    const id = req.params.id;
    const sql = "delete from products where p_id=?";
    db.query(sql,[id],(err,result)=>{
        if (err) {
            throw err;
        } else {
            resp.redirect("/products");
        }
    })
}

module.exports = {getProducts, addProduct, fetchProductId, updateProduct, deleteProduct};