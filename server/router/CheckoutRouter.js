const router = require("express")();
const stripe = require("stripe")(process.env.SECRET_KEY)

router.post("/", async (req, res)=>{
    const session = await stripe.checkout.sessions.create({
        success_url : "http://localhost:5173/",
        line_items: [
            {
                price_data: {
                    currency: "USD",
                    unit_amount: 1000,
                    product_data: {
                        name: "Our product"
                    }
                },
                quantity: 2
            }
        ],
        mode: "payment"
    });

    res.json({url: session.url})
})

module.exports = router