
import Rating from '../model/Rating.model.js';
import { protect } from '../Midelwear/authmeadeleware.js';

export const submitRating = async (req, res) => {
    const { rating, review, roomId } = req.body;
    const userId = req.user.userId; // Middleware se set hua userId

    if (!userId || !roomId || !rating) {
        return res.status(400).json({
            message: 'userId, roomId, and rating are required'
        });
    }

    try {
        const newRating = await Rating.create({ userId, roomId, rating, review });
        res.status(201).json({
            message: 'Rating submitted successfully',
            rating: newRating
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error submitting rating',
            error: error.message
        });
    }
};
