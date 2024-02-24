import Member from "../models/Member.js"

export const countMembers = async (req, res) => {
    
    try {
        if(req.query.lc === 'nsb') {
            const countMembers = await Member.countDocuments({});
            res.status(201).send([countMembers]);
        } else {
            const countMembers = await Member.countDocuments({lc: req.query.lc});
            res.status(201).send([countMembers]);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

export const previewCurrentMembers = async (req, res) => {
    try {
        if(req.query.lc === 'nsb') {
            const previewCurrentMembers = await Member.find({})
            .select('_id firstName familyName lc currentRole membershipVerified')
            .where('currentRole.stage').nin(['dropped', 'terminated', 'advanced', 'alumni']);
            res.status(201).send(previewCurrentMembers);
        } else {
            const previewCurrentMembers = await Member.find({})
            .select('_id firstName familyName lc currentRole membershipVerified')
            .where('lc').equals(req.query.lc).where('currentRole.stage').nin(['dropped', 'terminated', 'advanced', 'alumni']);
            res.status(201).send(previewCurrentMembers);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

export const previewAllMembers = async (req, res) => {
    try {
        if(req.query.lc === 'nsb') {
            const previewAllMembers = await Member.find({}).select('_id firstName familyName lc currentRole membershipVerified');
            res.status(201).send(previewAllMembers);
        } else {
            const previewAllMembers = await Member.find({}).select('_id firstName familyName lc currentRole membershipVerified').where('lc').equals(req.query.lc);
            res.status(201).send(previewAllMembers);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

export const getMemberDetails = async (req, res) => {
    try {
        if(req.query.lc === 'nsb') {
            const memberDetails = await Member.findById(req.params.id);
            res.status(201).send(memberDetails);
        } else {
            const memberDetails = await Member.findById(req.params.id).where('lc').equals(req.query.lc);
            res.status(201).send(memberDetails);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

export const newMember = async (req, res) => {
    try{
        const { 
            lc,
            firstName,
            familyName,
            email,
            telephone,
        } = req.body

        if(req.query.lc !== 'nsb' && lc !== req.query.lc) {
            res.status(500).send({ message: 'Not allowed to create new member' });
            return;
        }
        const alreadyMember = await Member.findOne({ lc: lc, firstName: firstName, familyName: familyName });
        if(alreadyMember) return res.status(200).send({ message: 'Member already exists' });

        let _id = await Member.countDocuments({});
        _id++;
        const member = new Member({
            _id,
            lc,
            firstName,
            familyName,
            email,
            telephone
        })
        await member.save()
        res.status(201).send({ message: 'New member created successfully' });

    }catch(err){
        res.status(500).send(err)
    }
}

export const updateMember = async (req, res) => {
    try {
        const {
            _id,
            currentRole,
            comments,
            pastRole,
            lc
        } = req.body;
        if(req.query.lc !== 'nsb' && lc !== req.query.lc) {
            res.status(500).send({ message: 'Not allowed to update this member' });
            return;
        }
        let updatedMember = await Member.findById(_id);
        updatedMember.currentRole.stage = currentRole.stage;
        updatedMember.currentRole.role = currentRole.role;
        updatedMember.currentRole.function = currentRole.function;
        updatedMember.currentRole.dateOfRealized = currentRole.dateOfRealized;
        updatedMember.currentRole.lastDateInRole = currentRole.lastDateInRole;
        updatedMember.comments = comments;
        updatedMember.pastRole = pastRole;
        await updatedMember.save();
        res.status(201).send(updatedMember);
    }catch(err){
        res.status(500).send(err);
    }
}

export const addNewMemberRole = async (req, res) => {
    try {
        const {
            _id,
            currentRole,
            comments,
            lc
        } = req.body;
        if(req.query.lc !== 'nsb' && lc !== req.query.lc) {
            res.status(500).send({ message: 'Not allowed to update this member' });
            return;
        }
        let updatedMember = await Member.findById(_id);
        updatedMember.currentRole.role = currentRole.role;
        updatedMember.currentRole.function = currentRole.function;
        updatedMember.currentRole.jobDescription = currentRole.jobDescription;
        updatedMember.currentRole.stage = 'accepted';
        updatedMember.currentRole.endOfTerm = currentRole.endOfTerm;
        updatedMember.comments = comments;
        await updatedMember.save();
        res.status(201).send(updatedMember);
    }catch(err){
        res.status(500).send(err);
    }
}
