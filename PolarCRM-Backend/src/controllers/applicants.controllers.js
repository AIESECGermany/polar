import Applicant from "../models/Applicant.js"

export const openCount = async (req, res) => {
    try {
        if(req.query.lc === 'nsb') {
            const openCount = await Applicant.countDocuments({stage: "open"});
            res.status(201).send([openCount]);
        } else {
            const openCount = await Applicant.countDocuments({stage: "open", lc: req.query.lc});
            res.status(201).send([openCount]);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

export const previewCurrentApplicants = async (req, res) => {
    const LAST_SIXTY_DAYS = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);
    try {
        if(req.query.lc === 'nsb') {
            const previewCurrentApplicants = await Applicant.find({}).select('_id firstName familyName lc stage createdAt')
            .where('createdAt').gt(LAST_SIXTY_DAYS);
            res.status(201).send(previewCurrentApplicants);
        } else {
            const previewCurrentApplicants = await Applicant.find({}).select('_id firstName familyName lc stage createdAt')
            .where('lc').equals(req.query.lc).where('createdAt').gt(LAST_SIXTY_DAYS);
            res.status(201).send(previewCurrentApplicants);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

export const previewAllApplicants = async (req, res) => {
    try {
        if(req.query.lc === 'nsb') {
            const previewAllApplicants = await Applicant.find({}).select('_id firstName familyName lc stage createdAt');
            res.status(201).send(previewAllApplicants);
        } else {
            const previewAllApplicants = await Applicant.find({}).select('_id firstName familyName lc stage createdAt').where('lc').equals(req.query.lc);
            res.status(201).send(previewAllApplicants);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

export const getApplicantDetails = async (req, res) => {
    try {
        const applicantDetails = await Applicant.findById(req.params.id);
        res.status(201).send(applicantDetails);
    }catch(err){
        res.status(500).send(err);
    }
}

export const newApplicant = async (req, res) => {
    try{
        const { 
            lc,
            firstName,
            familyName,
            email,
            telephone,
            occupation,
            german,
            motivation,
            dataSecurity,
            contactAllowed,
            linkedin,
            files,
            mktChannel
        } = req.body
        let _id = await Applicant.countDocuments({});
        _id++;
        const applicant = new Applicant({
            _id,
            lc,
            firstName,
            familyName,
            email,
            telephone,
            occupation,
            german,
            motivation,
            dataSecurity,
            contactAllowed,
            linkedin,
            files,
            mktChannel
        })
        await applicant.save()
        console.log("Applicant has been saved to database")
        res.status(201).send({ message: applicant })

    }catch(err){
        console.log(err)
        res.status(500).send("Error saving new applicant data to database")
    }
}

export const updateApplicant = async (req, res) => {
    try {
        const {
            _id,
            stage,
            comments,
            lc
        } = req.body;
        if(req.query.lc !== 'nsb' && lc !== req.query.lc) {
            res.status(500).send({ message: 'Not allowed to update this applicant' });
            return;
        }
        let updatedApplicant = await Applicant.findById(_id);
        updatedApplicant.stage = stage;
        updatedApplicant.comments = comments;
        await updatedApplicant.save();
        res.status(201).send(updatedApplicant);
    }catch(err){
        res.status(500).send(err);
    }
}
