"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import "./Reviews.css";

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [anonymous, setAnonymous] = useState(false);
  const [reviews, setReviews] = useState([
    { name: "John Doe", text: "Excellent service and fast installation. Highly recommend Protect 360!", stars: 5 },
    { name: "Sarah Keller", text: "Professional team, great communication, and reliable systems.", stars: 4 },
    { name: "Michael Thompson", text: "Quick response and solid workmanship.", stars: 5 },
    { name: "John Doe", text: "Excellent service and fast installation. Highly recommend Protect 360!", stars: 5 },
    { name: "Sarah Keller", text: "Professional team, great communication, and reliable systems.", stars: 4 },
    { name: "Michael Thompson", text: "Quick response and solid workmanship.", stars: 5 },
    { name: "John Doe", text: "Excellent service and fast installation. Highly recommend Protect 360!", stars: 5 },
    { name: "Sarah Keller", text: "Professional team, great communication, and reliable systems.", stars: 4 },
    { name: "Michael Thompson", text: "Quick response and solid workmanship.", stars: 5 },
    { name: "John Doe", text: "Excellent service and fast installation. Highly recommend Protect 360!", stars: 5 },
    { name: "Sarah Keller", text: "Professional team, great communication, and reliable systems.", stars: 4 },
    { name: "Michael Thompson", text: "Quick response and solid workmanship.", stars: 5 },
  ]);

  const averageRating =
    reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length;

  // ✅ Dynamic color logic for average rating
  const getRatingColor = (rating: number) => {
    if (rating < 2) return "#FF3B30"; // red
    if (rating < 3.5) return "#FFA500"; // orange
    return "#FFD700"; // gold
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const surnameInput = form.elements.namedItem("surname") as HTMLInputElement;
    const townInput = form.elements.namedItem("town") as HTMLInputElement;
    const textInput = form.elements.namedItem("text") as HTMLTextAreaElement;

    const name = anonymous
      ? "Anonymous"
      : `${nameInput.value.trim()} ${surnameInput.value.trim()}`.trim();
    const text = textInput.value.trim();
    const town = townInput.value.trim();

    if (!anonymous && (!nameInput.value || !surnameInput.value)) return;
    if (!text || rating === 0) return;

    const displayName = town ? `${name} (${town})` : name;
    setReviews([{ name: displayName, text, stars: rating }, ...reviews]);
    form.reset();
    setRating(0);
    setAnonymous(false);
  };

  return (
    <main className="reviews-wrapper">
      <Navbar />

      <section className="reviews-container">
        {/* ✅ Left side — scrollable reviews */}
        <div className="reviews-left">
          <h1>Customer Reviews</h1>
          <div className="reviews-scroll">
            {reviews.map((r, i) => (
              <div key={i} className="review-box">
                <div className="review-stars">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={j < r.stars ? "star filled" : "star"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="review-text">“{r.text}”</p>
                <p className="review-author">– {r.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Right side — unified section */}
        <div className="reviews-right">
          <div className="logo-rating-section">
            <h2 className="leave-review-heading">Leave a Review</h2>
            <Image
              src="/logo.png"
              alt="Protect 360 Logo"
              width={340}
              height={120}
              className="stats-logo"
            />
            <div className="stars-display">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.round(averageRating) ? "star filled" : "star"}>
                  ★
                </span>
              ))}
            </div>
            <p
              className="avg-rating"
              style={{ color: getRatingColor(averageRating) }}
            >
              Average Rating: <span>{averageRating.toFixed(1)}</span> / 5
            </p>
          </div>

          <div className="review-form-box">
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={() => setAnonymous(!anonymous)}
                  />{" "}
                  Post as Anonymous
                </label>
              </div>

              {!anonymous && (
                <div className="name-surname-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-input"
                    required
                  />
                  <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    className="form-input"
                    required
                  />
                </div>
              )}

              <div className="form-group town-field">
                <input
                  type="text"
                  name="town"
                  placeholder="Town/City (Optional)"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="text"
                  placeholder="Comment"
                  className="form-textarea"
                  required
                />
              </div>

              <div className="form-group rating-select">
                <label className="rating-label">Select your rating:</label>
                <div className="stars-input">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < (hover || rating) ? "star filled" : "star"}
                      onClick={() => setRating(i + 1)}
                      onMouseEnter={() => setHover(i + 1)}
                      onMouseLeave={() => setHover(0)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <button type="submit" className="form-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
