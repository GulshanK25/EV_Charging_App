// controllers/adscontroler.js
import Ad from './adsmodel.js';

export async function createAds(req, res) {
  try {
    console.log('Request body:', req.body);
    console.log('Uploaded file:', req.file);

    const newAd = new Ad({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      image: req.file.filename,
      postedBy: req.body.postedBy
    });

    await newAd.save();
    res.status(201).json({ status: true, ad: newAd });
  } catch (error) {
    console.error('Error creating ad:', error);
    res.status(500).json({ status: false, error: 'Failed to create ad' });
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

export async function getAdById(req, res) {
  try {
    const ad = await Ad.findById(req.params.id).populate('postedBy', 'name');
    if (!ad) {
      return res.status(404).json({ error: 'Ad not found' });
    }
    res.status(200).json(ad);
  } catch (error) {
    console.error('Error fetching ad:', error);
    res.status(500).json({ error: 'Failed to fetch ad' });
  }
}
