const mongoose = require("mongoose")
const { INTEREST_FUNDING, REACHABILITY, TYPE_OF_BUILDING, ROOF_SHAPE, TYPE_ROOF_COVERING, TYPE_HEATING } = require('../json/enums.json')

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
        isLiveInOwnProperty: { type: Boolean },
        interestfunding: { type: String },
        reachability: { type: String },
        typeofbuilding: { type: String, },
        roofshape: { type: String },
        typeroofcovering: { type: String, },
        typeheating: {type: String,},
        remarks: {type: String}
    },
    {
        timestamps: true,
        versionKey: false,
        autoCreate: true
    }
)

module.exports = roleModel = mongoose.model("user", userSchema, "user")