import dbConnect from '../../../util/mongodb';
import Emailtemp from '../../../models/email';
dbConnect()

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const note = await Emailtemp.findById('6094e8403a3a8d07eccc214e');

                if (!note) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: note });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
          
            try {
                const note = await Emailtemp.findByIdAndUpdate('6094e8403a3a8d07eccc214e', req.body, {
                    new: true,
                    runValidators: true
                });

                if (!note) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: note });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        
        default:
            res.status(400).json({ success: false })
            break;
    }
}