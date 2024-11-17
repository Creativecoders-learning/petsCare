const express = require('express');
const { ObjectId } = require('mongodb');
const SSLCommerzPayment = require('sslcommerz-lts');

function SSLCommerzAPI(ordersCollection) {
      const SSLCommerzRouter = express.Router();

      const store_id = process.env.STORE_ID;
      const store_passwd = process.env.STORE_PASSWORD;
      const is_live = false //true for live, false for sandbox

      SSLCommerzRouter.post('/order', async (req, res) => {
            const order = req.body;
            const { name, email, address, country, phone, city, post_code, currency, price, plan } = order || {};

            const tran_ID = new ObjectId().toString()

            const data = {
                  total_amount: price,
                  currency: currency,
                  tran_id: tran_ID, // use unique tran_id for each api call
                  success_url: `http://localhost:8000/payment/success/${tran_ID}`,
                  fail_url: `http://localhost:8000/payment/fail/${tran_ID}`,
                  cancel_url: 'http://localhost:3030/cancel',
                  ipn_url: 'http://localhost:3030/ipn',
                  shipping_method: 'Courier',
                  product_name: plan,
                  product_category: 'Electronic',
                  product_profile: 'general',
                  cus_name: name,
                  cus_email: email,
                  cus_add1: address,
                  cus_add2: 'Dhaka',
                  cus_city: city,
                  cus_state: 'Dhaka',
                  cus_postcode: post_code,
                  cus_country: country,
                  cus_phone: phone,
                  cus_fax: '01711111111',
                  ship_name: 'Customer Name',
                  ship_add1: 'Dhaka',
                  ship_add2: 'Dhaka',
                  ship_city: 'Dhaka',
                  ship_state: 'Dhaka',
                  ship_postcode: 1000,
                  ship_country: 'Bangladesh',
            };

            const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
            sslcz.init(data).then(async (apiResponse) => {
                  // Redirect the user to payment gateway
                  let GatewayPageURL = apiResponse.GatewayPageURL;
                  res.send({ url: GatewayPageURL })

                  const finalOrder = {
                        order,
                        transactionId: tran_ID,
                        paidStatus: false
                  }
                  await ordersCollection.insertOne(finalOrder);
            });
      });

      SSLCommerzRouter.post('/payment/success/:transId', async (req, res) => {
            const tran_ID = req.params.transId;
            const query = { transactionId: tran_ID };
            const updateStatus = {
                  $set: {
                        paidStatus: true
                  }
            }
            const result = await ordersCollection.updateOne(query, updateStatus)
            if (result.modifiedCount > 0) {
                  res.redirect(`http://localhost:5173/payment/success/${tran_ID}`)
            }
      })

      SSLCommerzRouter.post('/payment/fail/:transId', async (req, res) => {
            const tran_ID = req.params.transId;
            const query = { transactionId: tran_ID };
            const result = await ordersCollection.deleteOne(query)
            if (result.deletedCount === 1) {
                  res.redirect(`http://localhost:5173/payment/fail/${tran_ID}`)
            }
      })

      SSLCommerzRouter.get('/orders', async (req, res) => {
            const result = await ordersCollection.find().toArray();
            res.send(result);
      })

      return SSLCommerzRouter;
}

module.exports = SSLCommerzAPI;