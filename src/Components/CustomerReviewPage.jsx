import { useState } from 'react';
import { Star, User, ThumbsUp, MessageSquare } from 'lucide-react';
import '../Css/CustomerReviewPage.css';

// Sample review data
const sampleReviews = [
    {
        id: 1,
        name: "Mahesh",
        rating: 5,
        date: "March 15, 2025",
        title: "Absolutely love this product!",
        content: "This exceeded all my expectations. The quality is outstanding and customer service was excellent. Would definitely recommend to friends and family!",
        verified: true
    },
    {
        id: 2,
        name: "Badgujar",
        rating: 4,
        date: "April 2, 2025",
        title: "Great value for money",
        content: "Very satisfied with my purchase. The product works as described and was delivered quickly. Only giving 4 stars because the instruction manual could be clearer.",
        helpful: 18,
        replies: 1,
        verified: true
    },
    {
        id: 3,
        name: "Mah",
        rating: 3,
        date: "March 28, 2025",
        title: "Good but room for improvement",
        content: "The product does what it says, but I found a few minor issues. Customer support was responsive when I reached out with questions.",
        helpful: 7,
        replies: 0,
        verified: false
    }
];

// Star Rating Component
const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={18}
                    fill={i < rating ? "#FF0000" : "none"}
                    color={i < rating ? "#FF0000" : "#CBD5E1"}
                />
            ))}
        </div>
    );
};

// Single Review Card Component
const ReviewCard = ({ review }) => {
    const [isHelpful, setIsHelpful] = useState(false);
    const [helpfulCount, setHelpfulCount] = useState(review.helpful);

    const handleHelpfulClick = () => {
        if (!isHelpful) {
            setHelpfulCount(helpfulCount + 1);
            setIsHelpful(true);
        } else {
            setHelpfulCount(helpfulCount - 1);
            setIsHelpful(false);
        }
    };

    return (
        <div className="review-card">
            <div className="review-header">
                <div className="user-info">
                    <div className="user-avatar">
                        <User size={24} className="user-icon" />
                    </div>
                    <div>
                        <h3 className="user-name">{review.name}</h3>
                        <div className="rating-date">
                            <StarRating rating={review.rating} />
                            <span className="review-date">{review.date}</span>
                        </div>
                    </div>
                </div>
                {review.verified && (
                    <span className="verified-badge">
                        Verified Purchase
                    </span>
                )}
            </div>

            <h4 className="review-title">{review.title}</h4>
            <p className="review-content">{review.content}</p>

            <div className="review-actions">
                <button
                    onClick={handleHelpfulClick}
                    className={`helpful-button ${isHelpful ? "helpful-active" : ""}`}
                >
                    <ThumbsUp size={16} />
                    <span>{helpfulCount} helpful</span>
                </button>

                <button className="reply-button">
                    <MessageSquare size={16} />
                    <span>{review.replies} {review.replies === 1 ? "reply" : "replies"}</span>
                </button>
            </div>
        </div>
    );
};

// Main Reviews Component
export default function CustomerReviews() {
    const [filter, setFilter] = useState("all");

    // Filter reviews based on rating
    const filteredReviews = filter === "all"
        ? sampleReviews
        : sampleReviews.filter(review => {
            if (filter === "positive") return review.rating >= 4;
            if (filter === "neutral") return review.rating === 3;
            if (filter === "negative") return review.rating < 3;
            return true;
        });

    // Calculate average rating
    const averageRating = sampleReviews.reduce((acc, review) => acc + review.rating, 0) / sampleReviews.length;

    return (
        <div className="reviews-container">
            <div className="reviews-header">
                <h2 className="reviews-title">Customer Reviews</h2>

                <div className="reviews-summary">
                    <div className="summary-stats">
                        <div className="average-rating">
                            <span className="rating-number">{averageRating.toFixed(1)}</span>
                            <div className="average-stars">
                                <StarRating rating={Math.round(averageRating)} />
                            </div>
                            <p className="total-reviews">{sampleReviews.length} reviews</p>
                        </div>

                        <div className="divider"></div>

                        <div className="rating-bars">
                            {[5, 4, 3, 2, 1].map(rating => {
                                const count = sampleReviews.filter(r => r.rating === rating).length;
                                const percentage = (count / sampleReviews.length) * 100;

                                return (
                                    <div key={rating} className="rating-bar-row">
                                        <span className="rating-label">{rating}</span>
                                        <Star size={14} className="rating-star" fill="#FF0000" />
                                        <div className="rating-bar-container">
                                            <div
                                                className="rating-bar-fill"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                        <span className="rating-count">{count}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="filter-container">
                        <label htmlFor="filter" className="filter-label">
                            Filter Reviews
                        </label>
                        <select
                            id="filter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="filter-select"
                        >
                            <option value="all">All Ratings</option>
                            <option value="positive">Positive (4-5)</option>
                            <option value="neutral">Neutral (3)</option>
                            <option value="negative">Negative (1-2)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="reviews-list">
                {filteredReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))}

                {filteredReviews.length === 0 && (
                    <div className="no-reviews">
                        <p>No reviews match your filter criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}