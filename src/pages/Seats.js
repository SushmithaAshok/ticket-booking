import { useState } from "react";

function Seats() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 25 }, (_, i) => i + 1);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div className="container">
      <h2>🎟️ Select Your Seats</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 60px)",
        justifyContent: "center",
        marginTop: "20px"
      }}>
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            style={{
              margin: "8px",
              background: selectedSeats.includes(seat)
                ? "#28a745"
                : "#ccc",
              color: "black"
            }}
          >
            {seat}
          </button>
        ))}
      </div>

      <h3>Selected: {selectedSeats.join(", ")}</h3>
    </div>
  );
}

export default Seats;