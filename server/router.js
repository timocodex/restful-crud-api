
router.post('/transaksi',trans.create)
router.put('/checkout',trans.checkout)
router.get('/items',item.show)
router.get('/showcart/:cus',trans.show)
