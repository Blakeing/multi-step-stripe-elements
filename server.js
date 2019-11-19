const app = require("express")();
const stripe = require("stripe")("sk_test_P0xud5ghRscoj2TOPFjGNEPK00rGcCNrnu");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
    try {
        let { status } = await stripe.charges.create({
            amount: 696969,
            currency: "usd",
            description: "An example charge",
            source: req.body
        });

        res.json({ status });
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
});

app.listen(5000, () => console.log("Listening on port 5000"));