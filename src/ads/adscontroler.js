import Ad from "./adsmodel.js";

export async function createads(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const newAd = new Ad({
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            image: req.file.filename, // Store filename or URL of the uploaded image
            postedBy: req.body.postedBy // Assuming postedBy is user ID
        });
        await newAd.save();
        res.status(201).json(newAd);
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Failed to upload image' });
    }
}

export async function getAds(req, res) {
    try {
        const ads = await Ad.find().populate('postedBy', 'name');
        res.status(200).json(ads);
    } catch (error) {
        console.error('Error fetching ads:', error);
        res.status(500).json({ error: 'Failed to fetch ads' });
    }
}
