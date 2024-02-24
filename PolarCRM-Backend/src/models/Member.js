import mongoose from "mongoose"

const commentSchema = new mongoose.Schema(
    {
        changedAt: { type: Date, required: true, immutable: true, default: Date.now },
        entry: { type: String, required: true, immutable: true, default: "New Member Selected" },
        userTyped: { type: Boolean, required: true, immutable: true, default: false }
    }
)

const memberRoleSchema = new mongoose.Schema({
    role: { type: String, required: true, default: "none" },
    function: { type: String, required: true, default: "none" },
    stage: { type: String, required: true, default: "none" },
    jobDescription: { type: String },
    firstDateInRole: { type: Date, required: true, default: Date.now },
    lastDateInRole: { type: Date },
    dateOfRealized: { type: Date },
    endOfTerm: { type: Date }
})

const memberSchema = new mongoose.Schema({
    _id: { type: Number, required: true, immutable: true },
    createdAt: { type: Date, required: true, immutable: true, default: Date.now },
    lc: { type: String, required: true, immutable: true },
    firstName: { type: String, required: true, immutable: true, trim: true },
    familyName: { type: String, required: true, immutable: true, trim: true },
    email: { type: String, required: true, immutable: true, trim: true, lowercase: true },
    telephone: { type: Number, required: true, immutable: true },
    expaId: { type: Number, default: 0 },
    aiesecEmail: { type: String, trim: true, lowercase: true, default: "" },
    membershipVerified: { type: Boolean, required: true, default: false },
    files: { type: Buffer, immutable: true },
    currentRole: { type: memberRoleSchema, default: { role: undefined, function: undefined, firstDateInRole: undefined, stage: undefined } },
    pastRole: { type: [memberRoleSchema], default: [] },
    comments: { type: [commentSchema], default: { changedAt: undefined, entry: undefined, userTyped: undefined } }
})

// memberSchema.pre('save', async function(next) {
//     const query = Member.where({
//         firstName: this.firstName,
//         familyName: this.familyName,
//         lc: this.lc
//     });
//     const duplicate = await query.findOne();
//     if(duplicate != null) {
//         throw new Error("Member already exists!");
//     }else{
//         next();
//     }
// });

// memberSchema.virtual('domain').get(function() {
//     return this.email.slice(this.email.indexOf('@') + 1);
// });

const Member =  mongoose.model('Member', memberSchema)

export default Member
