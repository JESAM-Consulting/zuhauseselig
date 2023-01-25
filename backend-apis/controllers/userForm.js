const joi = require("joi")
const enums = require("../json/enums.json")
const message = require("../json/message.json")
const userFormModel = require("../models/userMaster")
const jwt = require('jsonwebtoken')

const createForm = {
    // joi schema validation
    validation: joi.object({
        email: joi.string().email().required(),
    }),

    handler: async (req, res) => {
        try {

            const {
                salutation,
                firstname,
                surname,
                street,
                postcode,
                location,
                phone,
                email,
                powerconsuption,
                owner,
                isLiveInOwnProperty,
                interestfunding,
                reachability,
                typeofbuilding,
                roofshape,
                typeroofcovering,
                typeheating,
                remarks
            } = req.body

            if (postcode) {
                if (postcode.toString().length !== 5) {
                    return res.status(enums.HTTP_CODES.BAD_REQUEST).json({
                        status: false,
                        message: message.POSTCODEERR
                    })
                }
            } else {
                return res.status(enums.HTTP_CODES.BAD_REQUEST).json({
                    status: false,
                    message: message.POSTCODEREQ
                })
            }

            const body = {
                salutation: salutation,
                firstname: firstname,
                surname: surname,
                street: street,
                postcode: postcode,
                location: location,
                powerconsuption: powerconsuption,
                owner: owner,
                isLiveInOwnProperty: isLiveInOwnProperty,
                interestfunding: interestfunding,
                reachability: reachability,
                typeofbuilding: typeofbuilding,
                roofshape: roofshape,
                typeroofcovering: typeroofcovering,
                typeheating: typeheating,
                remarks: remarks,
                phone: phone,
                email: email,
            }

            let jsonResponse = JSON.stringify(body)



            const createUserForm = new userFormModel(body)
            await createUserForm.save()

            let datafortoken = {
                id: body._id,
                email: body.email,
            }

            const token = jwt.sign(
                datafortoken,
                process.env.JWT_SECRET_KEY,
            )

            return res
                .status(enums.HTTP_CODES.CREATED)
                .send({
                    data: { ...createUserForm._doc, "json-text": jsonResponse, toekn: token }
                })


        } catch (err) {
            return res
                .status(enums.HTTP_CODES.BAD_REQUEST)
                .send({ message: message.GENERAL, data: err.message })
        }
    }
}

const getUserForm = {
    handler: async (req, res) => {
        try {
            const { id } = req.query

            let criteria = {}
            if (id) {
                criteria = {
                    _id: id
                }
            }

            const page = parseInt(req.query.page) || 1
            const limit = parseInt(req.query.limit) || 10



            const countDoc = await userFormModel.find(criteria).countDocuments()
            const findUserForm = await userFormModel
                .find(criteria)
                .sort({ createdAt: -1 })
                .skip(limit * page - limit)
                .limit(limit)

            if (findUserForm) {
                return res
                    .status(enums.HTTP_CODES.OK)
                    .send({ message: message.FORM_FOUND, data: findUserForm, count: countDoc })
            }
        } catch (error) {
            return res
                .status(enums.HTTP_CODES.BAD_REQUEST)
                .send({ message: message.GENERAL, data: err.message })
        }
    }
}

const updateUserForm = {

    handler: async (req, res) => {
        try {
            const { id } = req.query
            if (id) {
                const updateUserForm =
                    await userFormModel.findByIdAndUpdate(id, req.body, { new: true })
                return res.status(enums.HTTP_CODES.OK).send({ message: message.FORM_UPDATED, data: updateUserForm })
            } else {
                return res.status(enums.HTTP_CODES.BAD_REQUEST).send({ message: message.FORM_NOT_FOUND })
            }
        } catch (error) {
            return res
                .status(enums.HTTP_CODES.BAD_REQUEST)
                .send({ message: message.GENERAL, data: err.message })
        }
    }
}

const deleteUserForm = {
    handler: async (req, res) => {
        try {
            const { id } = req.query
            if (id) {
                const deleteUserForm = await userFormModel.findByIdAndDelete(id)
                return res.status(enums.HTTP_CODES.OK).send({ message: message.FORM_DELETED, data: deleteUserForm })
            } else {
                return res.status(enums.HTTP_CODES.BAD_REQUEST).send({ message: message.FORM_NOT_FOUND })
            }
        } catch (error) {
            return res
                .status(enums.HTTP_CODES.BAD_REQUEST)
                .send({ message: message.GENERAL, data: err.message })
        }
    }
}

module.exports = {
    createForm,
    getUserForm,
    updateUserForm,
    deleteUserForm
}