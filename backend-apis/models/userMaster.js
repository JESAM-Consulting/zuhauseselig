const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        salutation: { type: String },
        firstname: { type: String },
        surname: { type: String },
        street: { type: String },
        postcode: { type: Number, require: true },
        location: { type: String },
        phone: { type: Number },
        email: { type: String },
        powerconsuption: { type: Number },
        owner: { type: Boolean },
        interestfunding: { type: String, },
        reachability: { type: String },
        typeofbuilding: { type: String, },
        roofshape: { type: String },
        typeroofcovering: { type: String, },
        typeheating: { type: String, },
        remarks: { type: String },
        persons: {type: Number},
        configure: {
            "distance": { type: String },
            "mobility": { type: Boolean },
            "spei": { type: Boolean },
            "sauna": { type: Boolean },
            "pool": { type: Boolean },
            "ma": { type: Boolean },
            "fa": { type: String },
            "sau": { type: Boolean },
            "bike": { type: String },
            "kli": { type: Boolean },
            "home": { type: Boolean },
            "suma": { type: Number },
        }
    },
    {
        timestamps: true,
        versionKey: false,
        autoCreate: true
    }
)

module.exports = roleModel = mongoose.model("user", userSchema, "user")