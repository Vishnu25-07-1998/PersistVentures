import { useState } from 'react';
import './content.css';
import SelectComponent from './SelectComponent';
import workers from '../../data/workers.json';

const Content = () => {
    const serviceOptions = ["Plumber", "Electrician", "Carpenter", "Painter"];
    const locationOptions = ["New York", "Los Angeles", "Chicago"];
    
    const [selectedService, setselectedService] = useState();
    const [selectedLocation, setselectedLocation] = useState();
    const [filteredWorkers, setFilteredWorkers] = useState([]);
    
    const handleServiceChange = (e) => {
        setselectedService(e.target.value);
    };

    const handleLocationChange = (e) => {
        setselectedLocation(e.target.value);
    };

    const handleSearchClick = () => {
        const workersToShow = workers.filter(
            (worker) =>
                worker.service === selectedService && worker.location === selectedLocation
        );
        setFilteredWorkers(workersToShow); 
    };

    return (
        <div className="persist-content">
            <div className="title">
                <h3>One platform, endless potential</h3>
                <p>Alliance Connect strives to provide one platform with the mission to make xxxx businesses a transparent and seamless flow for B to B and B to C.</p>
            </div>
            <div className="wrapper-content">
                <div className="left">
                    <p>What are you looking for?</p>
                    <SelectComponent
                        label="Select Service"
                        value={selectedService}
                        onChange={handleServiceChange}
                        options={serviceOptions}
                    />
                    <SelectComponent
                        label="Select Location"
                        value={selectedLocation}
                        onChange={handleLocationChange}
                        options={locationOptions}
                    />
                    <button onClick={handleSearchClick}>Search</button>
                </div>
                <div className="right">
                    {filteredWorkers.length > 0 ? (
                        filteredWorkers.map((worker) => (
                            <div key={worker.id} className="worker-card">
                                <img
                                    src={`/${worker.photo}`}
                                    alt={worker.name}
                                    className="worker-photo"
                                />
                                <div className="worker-details">
                                    <h4>{worker.name}</h4>
                                    <p>
                                        <strong>Service:</strong> {worker.service}
                                    </p>
                                    <p>
                                        <strong>Location:</strong> {worker.location}
                                    </p>
                                    <p>
                                        <strong>Experience:</strong> {worker.experience} years
                                    </p>
                                    <p>
                                        <strong>Rating:</strong> {worker.rating} ⭐
                                    </p>
                                    <p>
                                        <strong>Contact:</strong> {worker.contact}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        // eslint-disable-next-line react/no-unescaped-entities
                        <p>Please select a service and a location, then click "Search" to see workers.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Content;