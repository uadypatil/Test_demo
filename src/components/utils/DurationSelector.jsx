import React, { useState } from 'react';

const DurationSelector = () => {
    const [duration, setDuration] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');

    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };

    return (
        <div>
            <select
                className="form-select text-success mt-3"
                value={duration}
                onChange={handleDurationChange}
            >
                <option value="" disabled>Select Duration</option>
                <option value="Full Day">Full Day</option>
                <option value="Custom">Custom Time</option>
            </select>

            {duration === 'Custom' && (
                <div className="mt-3">
                    <input
                        type="time"
                        name="from_time"
                        className="form-control mb-2"
                        placeholder="From time"
                        value={fromTime}
                        onChange={(e) => setFromTime(e.target.value)}
                    />
                    <input
                        type="time"
                        name="to_time"
                        className="form-control"
                        placeholder="To time"
                        value={toTime}
                        onChange={(e) => setToTime(e.target.value)}
                    />
                </div>
            )}
        </div>
    );
};

export default DurationSelector;
