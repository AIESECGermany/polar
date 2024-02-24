import mongoose from "mongoose"

const commentSchema = new mongoose.Schema(
    {
        changedAt: { type: Date, required: true, immutable: true, default: Date.now },
        entry: { type: String, required: true, immutable: true, default: "New Applicant Created" },
        userTyped: { type: Boolean, required: true, immutable: true, default: false }
    }
)
const applicantSchema = new mongoose.Schema({
    _id: { type: Number, required: true, immutable: true },
    createdAt: { type: Date, required: true, immutable: true, default: Date.now },
    lc: { type: String, required: true, immutable: true },
    firstName: { type: String, required: true, immutable: true, trim: true },
    familyName: { type: String, required: true, immutable: true, trim: true },
    email: { type: String, required: true, immutable: true, trim: true, lowercase: true },
    telephone: { type: Number, required: true, immutable: true },
    occupation: { type: String, required: true, immutable: true, trim: true, lowercase: true },
    german: { type: String, required: true, immutable: true },
    motivation: { type: Array, immutable: true },
    dataSecurity: { type: Boolean, immutable: true },
    contactAllowed: { type: Boolean, immutable: true},
    linkedin: { type: String, immutable: true, trim: true, lowercase: true },
    mktChannel: { type: String, required: true, immutable: true },
    stage: { type: String, required: true, default: "open" },
    comments: { type: [commentSchema], default: { changedAt: undefined, entry: undefined, userTyped: undefined } },
    files: { type: Buffer, immutable: true}
})

const Applicant =  mongoose.model('Applicant', applicantSchema)

export default Applicant