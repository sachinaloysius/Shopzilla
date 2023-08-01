const express = require("express");
const app = express();
const multer = require("multer");
const port = 4777;
const cors = require("cors");
const mysql = require("mysql2");
const bodyparser = require("body-parser");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.listen(port, () => {
  console.log("its running!");
});

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "db_onlineshopping",
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database Connected");
});

const PATH = "./public/images";
const upload = multer({
  storage: multer.diskStorage({
    destination: PATH,
    filename: function (req, file, cb) {
      let orginalname = file.originalname;
      let ext = orginalname.split(".").pop();
      let filename = orginalname.split(".").slice(0, -1).join(".");
      cb(null, filename + "." + ext);
    },
  }),
});

app.post("/District", (req, res) => {
  const district = req.body.districtinput;
  let qry = `insert into tbl_district(district_name)values('${district}')`;
  db.query(qry, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.get("/District", (req, res) => {
  let qry15 = "select * from tbl_district";
  db.query(qry15, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        district: result,
      });
    } else {
      res.send({
        district: [],
      });
    }
  });
});

app.delete("/District/:id", (req, res) => {
  let id = req.params.id;
  let qry = `delete from tbl_district where district_id='${id}' `;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        qry: qry,
        message: "District Data Deleted",
      });
    }
  });
});

app.post("/Category", (req, res) => {
  const category = req.body.category;
  let qry = `insert into tbl_category(category_name)values('${category}')`;
  db.query(qry, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.get("/Category", (req, res) => {
  let qry = "select * from tbl_category";
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        category: result,
      });
    } else {
      res.send({
        category: [],
      });
    }
  });
});
app.delete("/Category/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let qry = `delete from tbl_category where category_id='${id}'`;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        qry: qry,
        message: "Data Deleted",
      });
    }
  });
});

app.post("/Subcategory", (req, res) => {
  const subcategoryname = req.body.inputdata;
  const categoryid = req.body.categoryselect; //key name passed from react
  let qry = `insert into tbl_subcategory(subcategory_name,category_id)values('${subcategoryname}','${categoryid}')`;
  db.query(qry, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: "SubCategory Data Saved",
      });
    }
  });
});
app.get("/Subcategory", (req, res) => {
  let qry =
    "SELECT * FROM `tbl_subcategory` sc INNER JOIN tbl_category c ON c.category_id=sc.category_id";
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        subcategory: result,
      });
    } else {
      res.send({
        subcategory: [],
      });
    }
  });
});

app.get("/Subcategory/:id", (req, res) => {
  let id = req.params.id;
  let qry = `SELECT * FROM tbl_subcategory where category_id=${id}`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        subcategory: result,
      });
    } else {
      res.send({
        subcategory: [],
      });
    }
  });
});

app.delete("/Subcategory/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let qry = `delete from tbl_subcategory where subcategory_id='${id}'`;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        qry: qry,
        message: "Data Deleted",
      });
    }
  });
});

app.post("/Place", (req, res) => {
  const placename = req.body.inputdata;
  const districtid = req.body.districtselect;
  let qry = `insert into tbl_place(place_name,district_id)
  values('${placename}','${districtid}')`;
  db.query(qry, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: "Place Data Saved",
      });
    }
  });
});
app.get("/Place", (req, res) => {
  let qry =
    "SELECT * FROM `tbl_place` p INNER JOIN tbl_district d ON p.district_id=d.district_id";
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        place: result,
      });
    } else {
      res.send({
        place: [],
      });
    }
  });
});
app.get("/Place/:id", (req, res) => {
  const id = req.params.id;
  let qry = `SELECT * FROM tbl_place where district_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        place: result,
      });
    } else {
      res.send({
        place: [],
      });
    }
  });
});
app.delete("/Place/:id", (req, res) => {
  const id = req.params.id;
  let qry = `delete from tbl_place where place_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        qry: qry,
        message: "Place Data Deleted",
      });
    }
  });
});

app.put("/SubcategoryUpdate", (req, res) => {
  const id = req.body.eid;
  const inputdata = req.body.inputdata;
  let qry = `update tbl_subcategory set subcategory_name='${inputdata}' where subcategory_id= '${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: "Data Updated",
      });
    }
  });
});

app.get("/SubcategoryUpdate/:id", (req, res) => {
  const id = req.params.id;
  let qry = `select * from tbl_subcategory where subcategory_id='${id}' `;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        update: result,
      });
    } else {
      res.send({
        update: [],
      });
    }
  });
});

app.post("/User", upload.single("profilepic"), (req, res) => {
  const fullname = req.body.fullname;
  const countrycode = req.body.countrycode;
  const contact = req.body.contact;
  const email = req.body.email;
  const password = req.body.password;
  const profilepic = `http://127.0.0.1:${port}/images/${req.file.filename}`;
  const placeid = req.body.placeid;
  const contactnumber = countrycode + contact;
  let qry = `insert into tbl_user (user_name,user_contact,user_email,user_password,user_photo,place_id)values('${fullname}','${contactnumber}',
'${email}','${password}','${profilepic}','${placeid}')`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});

app.post(
  "/Shop",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "proof", maxCount: 1 },
  ]),
  (req, res) => {
    const fileValue = JSON.parse(JSON.stringify(req.files));
    const shopname = req.body.shopname;
    const countrycode = req.body.countrycode;
    const contact = req.body.contact;
    const email = req.body.email;
    const password = req.body.password;
    const logo = `http://127.0.0.1:${port}/images/${fileValue.logo[0].filename}`;
    const proof = `http://127.0.0.1:${port}/images/${fileValue.proof[0].filename}`;
    const address = req.body.address;
    const placeid = req.body.placeid;
    const mobile = countrycode + contact;
    let qry = `insert into tbl_shop(shop_name,shop_contact,shop_email,shop_password,shop_logo,shop_proof,shop_address,place_id) values('${shopname}','${mobile}',
  '${email}','${password}','${logo}','${proof}','${address}','${placeid}')`;
    db.query(qry, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          message: "Data Saved",
        });
      }
    });
  }
);

app.post("/Login", (req, res) => {
  const email = req.body.useremail;
  const password = req.body.userpassword;
  let userlogin = `select * from tbl_user where user_email='${email}' and user_password='${password}'`;
  let adminlogin = `select * from tbl_admin where admin_email='${email}' and admin_password='${password}'`;
  let shoplogin = `select * from tbl_shop where shop_email='${email}' and shop_password='${password}'`;

  db.query(userlogin, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        message: "Login Successful",
        id: result[0].user_id,
        login: "user",
      });
    }
  });
  db.query(adminlogin, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        message: "Admin Login Successful",
        id: result[0].admin_id,
        login: "admin",
      });
    }
  });
  db.query(shoplogin, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        message: "Shop Login Successful",
        id: result[0].shop_id,
        login: "shop",
      });
    } else {
      res.end();
    }
  });
});

app.post(
  "/Product",
  upload.fields([{ name: "productimage", maxCount: 1 }]),
  (req, res) => {
    const fileValue = JSON.parse(JSON.stringify(req.files));
    const productname = req.body.productname;
    const productprice = req.body.productprice;
    const productdetails = req.body.productdetails;
    const productimage = `http://127.0.0.1:${port}/images/${fileValue.productimage[0].filename}`;
    const subcategoryid = req.body.subcategoryid;
    const shopid = req.body.shopid;
    let qry = `insert into tbl_product(product_name,product_price,product_details,product_image,subcategory_id,shop_id)values('${productname}',
 '${productprice}','${productdetails}','${productimage}','${subcategoryid}','${shopid}')`;
    db.query(qry, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          message: "Data Saved",
        });
      }
    });
  }
);
app.get("/Product/:id", (req, res) => {
  const id = req.params.id;
  let qry = `select * from tbl_product where shop_id=${id}`; // shop tey avide shop tey thanne products kaan ayittu shop tey id vech select cheyth erikunn
  // console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        product: result,
      });
    } else {
      res.send({
        product: [],
      });
    }
  });
});
app.delete("/ProductDelete/:id", (req, res) => {
  const id = req.params.id;
  let qry =
    `delete from tbl_product where product_id='${id}'`;
    db.query(qry, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          message: "Product Deleted",
        });
      }
    });
});
app.get("/Product_Mobile", (req, res) => {
  let qry = `select * from tbl_product`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        mobile: result,
      });
    } else {
      res.send({
        mobile: [],
      });
    }
  });
});

app.get("/Product_Phone/:pid", (req, res) => {
  const id = req.params.pid;
  let qry = `select * from tbl_product where product_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        phone: result,
      });
    } else {
      res.send({
        phone: [],
      });
    }
  });
});

app.post(
  "/Gallery",
  upload.fields([{ name: "shopgallery", maxCount: 1 }]),
  (req, res) => {
    const fileValue = JSON.parse(JSON.stringify(req.files));
    const productID = req.body.productid;
    const shopgallery = `http://127.0.0.1:${port}/images/${fileValue.shopgallery[0].filename}`;
    let qry = `insert into tbl_gallery(product_id,gallery_image)values('${productID}',
 '${shopgallery}')`;
    db.query(qry, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          message: "Data Saved",
        });
      }
    });
  }
);
app.get("/Gallery/:id", (req, res) => {
  const id = req.params.id;
  let qry = `select * from tbl_gallery where product_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        gallery: result,
      });
    } else {
      res.send({
        gallery: [],
      });
    }
  });
});
app.delete("/Gallery/:id", (req, res) => {
  const id = req.params.id;
  let qry = `delete from tbl_gallery where gallery_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: "Product Deleted",
      });
    }
  });
});
app.post("/Addtocart", (req, res) => {
  const uid = req.body.userid;
  const pid = req.body.productid;
  let SelectBookingQuery = `select * from tbl_booking where user_id=${uid} and booking_status=0 `;
  // payment adakatha booking avide undo enn nokunn aganey illenkil else ilakku pokum
  db.query(SelectBookingQuery, (err, Bookingresult) => {
    if (err) {
      console.log(err, "Failed to Retrieve booking information");
      return;
    } else if (Bookingresult.length > 0) {
      var bookingid = Bookingresult[0].booking_id;
      //aganey payement cheyyatha product undekil bookingid ilakku eduth vekunn (existing)
      const SelectCartQuery = `select * from tbl_cart where booking_id='${bookingid}' AND product_id='${pid}'`;
      db.query(SelectCartQuery, (err, CartResult) => {
        if (err) {
          console.log(err, "Failed to  check cart information");
          return;
        } else if (CartResult.length > 0) {
          res.send({
            message: "Already Added to Cart",
          });
        } else {
          const InsertCartQuery = `insert into tbl_cart (booking_id, product_id) values (${bookingid}, ${pid})`;
          db.query(InsertCartQuery, (err, result) => {
            if (err) {
              console.log(err, "Failed to add to cart");
              return;
            } else {
              res.send({
                message: "Added to Cart",
              });
            }
          });
        }
      });
    } else {
      //(Not Existing)
      const InsertBookingQuery = `insert into tbl_booking(user_id,booking_date) values(${uid},curdate()) `;
      //evide user tey id um booking date um insert cheyyunn
      db.query(InsertBookingQuery, (err, result) => {
        if (err) {
          console.log(err, "Failed to create booking");
          return;
        } else {
          const SelectmaxBookingIDQuery = `select MAX(booking_id) as id from tbl_booking`;
          // evide latest booking id eduth vekunn
          db.query(SelectmaxBookingIDQuery, (err, MaxBookingResult) => {
            if (err) {
              console.log(err, "Failed to retrieve booking information");
              return;
            } else {
              const bookingID = MaxBookingResult[0].id;
              const InsertCartQuery = `insert into tbl_cart(booking_id,product_id) values('${bookingID}','${pid}')`;
              db.query(InsertCartQuery, (err, result) => {
                if (err) {
                  console.log(err, "Failed to add to cart");
                  return;
                } else {
                  res.send({
                    message: "Added to Cart",
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});

app.get("/Cart/:id", (req, res) => {
  const userid = req.params.id;

  let qry = `SELECT * FROM tbl_cart c INNER JOIN tbl_product p ON c.product_id=p.product_id INNER JOIN tbl_booking b ON c.booking_id=b.booking_id where user_id='${userid}'and cart_status=0 `;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      res.send({
        cart: result,
      });
    } else {
      res.send({
        cart: [],
      });
    }
  });
});
app.delete("/Cart/:id", (req, res) => {
  const id = req.params.id;
  let qry = `delete from tbl_cart where cart_id='${id}'`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: "Deleted",
      });
    }
  });
});

app.post("/CartUpdate", (req, res) => {
  const id = req.body.id;
  const qty = req.body.qty;
  let qry = `update tbl_cart set cart_quantity=${qty} where cart_id=${id}`;
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: "Qty Update",
      });
    }
  });
});

app.post("/Cart_Checkout",(req,res)=>{
  const id=req.body.bookingid
  const totalamt=req.body.grandTotal
  let cartqry=`update tbl_cart set cart_status=1 where booking_id='${id}'`
  let bookingqry=`update tbl_booking set booking_status=1,booking_amount='${totalamt}'  where booking_id='${id}'`
  db.query(cartqry,(err,result)=>{
   if(err){
    console.log(err);
   }
   else{
    db.query(bookingqry,(err,result)=>{
      if(err){
       console.log(err);
      }
      else{
       res.send({
         message:"True"
       })
      }
     })
   }
  })
  
})

app.post("/ClickToPay",(req,res)=>{
  const id=req.body.id
  let qry=`update tbl_booking set booking_status=2 where booking_id='${id}'`
  db.query(qry,(err,result)=>{
   if(err){
    console.log(err);
    res.send({
      message: "error"
    })
   }
   else{
    res.send({
      message:"Your Order Has Been Placed"
    })
   }
  })
})

app.get("/Order",(req,res)=>{
  let qry=`select * from tbl_booking where booking_status=2`
  db.query(qry,(err,results)=>{
   if(err){
    console.log(err);
   }
   else if(results.length>0){
    res.send({
      orderdetailsread:results
    })
   }
   else{
    res.send({
      orderdetailsread:[]
    })
   }
  })
})

app.get("/OrderDetails/:id",(req,res)=>{
  const id=req.params.id
  let qry="select * from tbl_cart c inner join tbl_product p on c.product_id=p.product_id where booking_id=" + id;
  db.query(qry,(err,result)=>{
    if(err){
      console.log(err);
    }
    else if(result.length>0){
      res.send({
         OrderProductDetails:result
      })
    }
    else{
     res.send({
      OrderProductDetails:[]
     })
    }
  })
  
})
app.get("/ShopOrder/:id",(req,res)=>{
  const id=req.params.id
  let qry="SELECT * FROM `tbl_booking` b INNER JOIN tbl_cart c ON b.booking_id=c.booking_id INNER JOIN tbl_user u ON u.user_id=b.user_id INNER JOIN tbl_product p ON p.product_id=c.product_id WHERE shop_id="+id
  db.query(qry,(err,results)=>{
    if(err){
    console.log(err);
    }
    else if(results.length>0){
      res.send({
        shoporderread:results
      })
    }
    else{
      res.send({
        shoporderread:[]
      })
    }
  })
})

app.post("/CancelOrder",(req,res)=>{
  const productid=req.body.pid
  const bookingid=req.body.bid
  let qry=`delete from tbl_cart where booking_id='${bookingid}' and product_id='${productid}' `
  db.query(qry,(err,results)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send({
        message:"True"
      })
    }
  })
})